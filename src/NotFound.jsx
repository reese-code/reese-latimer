import React, { useEffect, useRef } from 'react';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as TWEEN from "three/examples/jsm/libs/tween.module";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";
import Btn from "./button.jsx";

function returnHome() {
  return(
    <div className="return-home z-20">
      <div className="h1">Lost in the matrix?</div>
      <Btn
        color="btn-white"
        text="Return home"

      />
    </div>
  )
}

const NotFound = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let simplex = new SimplexNoise();

    class TextTerrain extends THREE.Object3D {
      constructor(anisotropy) {
        super();
        // atlas
        let alphabet = [..."404"];
        let textTexture = (() => {
          let c = document.createElement("canvas");
          let ctx = c.getContext("2d");
          let texSize = 2048;
          c.width = texSize;
          c.height = texSize;
          ctx.clearRect(0, 0, texSize, texSize);
          let dim = 8;
          let dimStep = texSize / dim;
          for (let i = 0; i < alphabet.length; i++) {
            let tileX = i % 8;
            let tileY = Math.floor(i / 8);
            let x = (tileX + 0.5) * dimStep;
            let y = texSize - (tileY + 0.5) * dimStep;
            ctx.fillStyle = `#f5f4ec`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `bold ${dimStep * 0.9}px Arial`;
            ctx.fillText(alphabet[i], x, y);
          }
          let tex = new THREE.CanvasTexture(c);
          tex.colorSpace = "srgb";
          tex.anisotropy = anisotropy;
          return tex;
        })(); // atlas

        let tileDim = 400;

        let g = new THREE.PlaneGeometry();
        g.setAttribute("letterIdx", new THREE.InstancedBufferAttribute(new Float32Array(Array.from({
          length: tileDim * tileDim
        }, () => {
          return THREE.MathUtils.randInt(0, alphabet.length - 1)
        })), 1));
        
        let m = new THREE.MeshBasicMaterial({
          map: textTexture,
          transparent: true,
          alphaTest: 0.01,
          side: THREE.DoubleSide,
          onBeforeCompile: shader => {
            shader.vertexShader = `
              attribute float letterIdx;
              varying float vLetterIdx;
              ${shader.vertexShader}
            `.replace(
              `#include <uv_vertex>`,
              `#include <uv_vertex>
              vLetterIdx = letterIdx;
              `
            );

            shader.fragmentShader = `
              varying float vLetterIdx;
              ${shader.fragmentShader}
            `.replace(
              `#include <map_fragment>`,
              `
              float letterIdx = floor(vLetterIdx + 0.1);
              float tileStep = 1. / 8.;
              float u = mod(letterIdx, 8.);
              float v = floor(letterIdx / 8.);
              vec2 iUv = (vec2(u, v) + vMapUv) * tileStep;
              vec4 sampledDiffuseColor = texture2D( map, iUv );
              diffuseColor *= sampledDiffuseColor;
              `
            );
          }
        });
        let io = new THREE.InstancedMesh(g, m, tileDim * tileDim);
        this.instancedMesh = io;

        this.dummy = new THREE.Object3D();

        this.finals = [];

        let tri = new THREE.Triangle();
        let n = new THREE.Vector3();
        let la = new THREE.Vector3();

        function getY(x, z) {
          return simplex.noise(x * 0.01, z * 0.01) * 7.5;
        }

        let setFinals = () => {
          let y0 = getY(this.dummy.position.x, this.dummy.position.z);
          let y1 = getY(this.dummy.position.x, this.dummy.position.z - 1);
          let y2 = getY(this.dummy.position.x + 1, this.dummy.position.z);
          this.dummy.position.y = y0;

          tri.a.set(this.dummy.position.x, y1, this.dummy.position.z - 1);
          tri.b.set(this.dummy.position.x, y0, this.dummy.position.z);
          tri.c.set(this.dummy.position.x + 1, y2, this.dummy.position.z);
          tri.getNormal(n);

          la.copy(this.dummy.position).add(n);
          this.dummy.lookAt(la);
          this.dummy.rotation.z = 0; // align along Z-axis of the terrain
          this.dummy.updateMatrix();

          this.finals.push({
            y: y0,
            pos: this.dummy.position.clone(),
            rot: this.dummy.rotation.clone(),
            dummy: new THREE.Object3D(),
            inAction: false,
            mediators: {
              v: new THREE.Vector3(),
              v2: new THREE.Vector3()
            }
          })
        }
        
        // make it grid
        for (let z = 0; z < tileDim; z++) {
          for (let x = 0; x < tileDim; x++) {
            this.dummy.position.x = -(tileDim - 1) * 0.5 + x;
            this.dummy.position.z = -(tileDim - 1) * 0.5 + z;
            setFinals(this.dummy.position);
            this.instancedMesh.setMatrixAt(z * tileDim + x, this.dummy.matrix);
          }
        } // make it grid

        this.add(io);
        
        // actions section
        this.actions = Array.from({
          length: 5000
        }, () => {
          let action = (delay) => {
            let getFreeLetterIndex = () => {
              let letterIndex = Math.floor(Math.random() * this.finals.length);;
              if (!this.finals[letterIndex].inAction) {
                return letterIndex;
              } else {
                return getFreeLetterIndex();
              }
            }

            let freeLetterIndex = getFreeLetterIndex();
            let freeLetter = this.finals[freeLetterIndex];
            let height = 30;
            let m = freeLetter.mediators;
            let v = m.v;
            let v2 = m.v2;

            v2.random().multiplyScalar(0.5).addScalar(0.5).multiplyScalar(Math.PI * 3 * Math.sign(Math.random() - 0.5));

            let tween = new TWEEN.Tween({
                val: 0
              }).to({
                val: 1
              }, 10000)
              .delay(delay)
              .onStart(() => {freeLetter.inAction = true;})
              .onUpdate(val => {
                v.lerpVectors(v2, freeLetter.rot, val.val);
                freeLetter.dummy.rotation.set(v.x, v.y, v.z);
                freeLetter.dummy.position.copy(freeLetter.pos);
                freeLetter.dummy.position.y = THREE.MathUtils.lerp(height, freeLetter.y, val.val);
                freeLetter.dummy.updateMatrix();
                io.setMatrixAt(freeLetterIndex, freeLetter.dummy.matrix);
              })
              .onComplete(() => {
                freeLetter.inAction = false;
                action(Math.random() * 10000);
              });
              tween.start();
          }
          return action;
        }) // actions section
      }
    }

    let scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#1f1f1f", 100, 150);
    scene.background = new THREE.Color("#1f1f1f");
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 3, 8).setLength(50);
    let renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    let textTerrain = new TextTerrain(renderer.capabilities.getMaxAnisotropy());
    scene.add(textTerrain);
    textTerrain.actions.forEach(action => {
      action((Math.random() * 0.9 + 0.1) * 10000);
    }); // start the actions

    let clock = new THREE.Clock();
    let t = 0;

    function animate() {
      let dt = clock.getDelta();
      t += dt;
      TWEEN.update();
      controls.update();
      textTerrain.instancedMesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
  <div ref={mountRef} className='absolute top-0 z-10' style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
  </div>
  <returnHome/>
  </>
  )
};

export default NotFound;
