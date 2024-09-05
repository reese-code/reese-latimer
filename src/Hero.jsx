import { useState } from 'react'
import "./hero.css"

import { VFX } from "https://esm.sh/@vfx-js/core@0.5.1";

const shader = `
precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform vec2 mouse;
uniform float time;
uniform float enterTime;
uniform float leaveTime;
uniform sampler2D src;
#define PI 3.141593

vec4 readTex(vec2 uv) {
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) {
    discard;
  }
  return texture2D(src, uv);
}

float rand(vec3 p) {
    return fract(sin(dot(p, vec3(892., 982, 48.))) * 4928.);
}

float noise(vec3 p) {
    vec3 pi = floor(p);
    vec3 pf = fract(p);    
    vec2 d = vec2(1, 0);
    
    float r1 = mix(
        mix(rand(pi), rand(pi + d.xyy), pf.x),
        mix(rand(pi + d.yxy), rand(pi + d.xxy), pf.x),
        pf.y
    );    
    float r2 = mix(
        mix(rand(pi + d.yyx), rand(pi + d.xyx), pf.x),
        mix(rand(pi + d.yxx), rand(pi + d.xxx), pf.x),
        pf.y
    );        
    return mix(r1, r2, pf.z);
}

void main() {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution.xy;    
    vec2 p = uv * 2. - 1.;
    p.x *= resolution.x / resolution.y;

    // Get mouse pos
    vec2 m = (mouse.xy - offset) / resolution.xy;
    m = m * 2. - 1.;
    m.x *= resolution.x / resolution.y;

    // Get transition time
    float t = clamp(enterTime, 0., 1.5);
    float enter = mix(exp(t * -2.) * 3., 0., t / 1.5);
    float level = smoothstep(0., 0.2, t) ;
    
    if (t == 0.0) { discard; return; }

    vec2 uvr, uvg, uvb;
    uvr = uv, uvg = uv, uvb = uv;

    vec2 block = vec2(0.3, 0.7);
    vec2 move = vec2(0);

    for (int i = 0; i < 3; i++) {
        float fi = float(i);

        // Block UV
        vec2 off = vec2(sin(fi * 94.), sin(fi * 42.)) * 0.5 + fi;
        vec2 p2 = floor((p - off) * block) / block + off;

        float n = noise(vec3(p2 * 3., fi * 7. + time * .3));
        if (n > 0.5) { 
            // Get distance between block to mouse
            float ml = length(m - p2);
            float md = smoothstep(.7, .3, ml) * 0.9;

            // Distortion
            float dist = max(md, enter);  
            float a = floor(n * 30. + fi * 9.) * 0.5 * PI;
            move = vec2(sin(a),cos(a) * 0.1) * dist * 0.07;
        }            

        block = block.yx * 3.5;
    }    

    vec4 c = vec4(0);
    vec4 cr = readTex(uvr + move).rrra;
    vec4 cg = readTex(uvg + move * 1.2).rrra;
    vec4 cb = readTex(uvb + move * 1.4).rrra;
    c = vec4(cr.r, cg.g, cb.b, (cr.a + cg.a + cb.a) / 1.);
    
    gl_FragColor = vec4(c) * level;
    gl_FragColor *= 1. + length(move) * 3.;
    
    if (leaveTime > 0.) {
      gl_FragColor.a *= clamp(1. - leaveTime, 0., 1.);
    }
}
`;

const rootMargin = [-window.innerHeight * 0.1, 0, -window.innerHeight * 0.1, 0];

const vfx = new VFX();
for (const e of document.querySelectorAll('.glitch')) {
  vfx.add(e, { shader, overflow: 100, intersection: { rootMargin, threshold: 1 } });  
}
for (const e of document.querySelectorAll('.peace')) {
  vfx.add(e, { shader, overflow: 100, intersection: { rootMargin, threshold: 1 } });  
}






function Hero() {

    return(
        <>
            <section className="hero">
                <img className='logo-main' src="/assets/latimer-logo.png" />
                <div className="content">
                    <img className='peace' src="/assets/peace-sign.png" />
                    <div class="p">turning your web dreams into <span className='bold-italic'>reality</span></div>
                </div>
            </section>
        </>
    )
}

export default Hero