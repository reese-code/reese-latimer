import { useState, useEffect } from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import world from "../assets/wwworld.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function scrollFold() {
    const items = gsap.utils.toArray(".item");
  
    items.forEach((item, i) => {
      const header = item.querySelector(".h1");
      const sectionWhole = item.querySelector(".content-exp");
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top top",  // Pin when the top of the card hits the top of the viewport
          end: "bottom",  // Pin until the card's height has been scrolled past
          pin: true,  // Pin the card
          pinSpacing: false,  // Prevent extra space during pinning
          scrub: 1,  // Smooth scrubbing
          markers: true,  // Show markers for debugging
          onEnter: () => {
            gsap.to(item, { zIndex: items.length - i });  // Bring the current card in front
          },
          onLeaveBack: () => {
            gsap.to(item, { zIndex: 1 });  // Reset z-index when scrolling back
          }
        }
      });
    });
  }

function Experience() {
  useEffect(() => {
    scrollFold();
  }, []);

  return (
    <>
      <div className="container-exp texture p-norm flex flex-col gap-4">
        <div className="title-bar">
          <div className="section-title">what I do</div>
          <img className="world" src={world} alt="world" />
        </div>
        <div className="content-exp">
          <div className="item">
            <div className="card-1 card">
              <div className="h1">creative direction</div>
              <div className="p">Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus.</div>
              <div className="bottom-number">001</div>
            </div>
          </div>
          <div className="item">
            <div className="card-2 card">
              <div className="h1">web design</div>
              <div className="p">Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus.</div>
              <div className="bottom-number">002</div>
            </div>
          </div>
          <div className="item">
            <div className="card-3 card">
              <div className="h1">front end</div>
              <div className="p">Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus.</div>
              <div className="bottom-number">003</div>
            </div>
          </div>
          <div className="item">
            <div className="card-4 card">
              <div className="h1">3d design</div>
              <div className="p">Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus.</div>
              <div className="bottom-number">004</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;