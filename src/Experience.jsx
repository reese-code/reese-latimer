import { useState, useEffect } from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import world from "../assets/wwworld.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function scrollFold() {
  const items = gsap.utils.toArray(".item");
  const containerExp = document.querySelector('.container-exp');
  const containerHeight = containerExp.offsetHeight;
  const lastItem = items[items.length - 1];
  const lastH1 = lastItem.querySelector('.h1');
  
  items.forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top top",
        endTrigger: ".final",
        end: i === items.length - 1 
          ? `+=${lastH1.offsetHeight}`
          : `+=${containerHeight - item.offsetTop}`,  // Restrict scroll to container height
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: true,
        onEnter: () => {
          gsap.to(item, { 
            zIndex: items.length - i,
            immediate: true
          });
        },
        onLeaveBack: () => {
          gsap.to(item, { 
            zIndex: 1,
            immediate: true
          });
        }
      }
    });
  });
}

function Card({ title, description, number }) {
  return (
    <div className="item">
      <div className="card">
        <div className="h1">{title}</div>
        <div className="p">{description}</div>
        <div className="bottom-number">{number}</div>
      </div>
    </div>
  );
}

function Experience() {
  useEffect(() => {
    scrollFold();
    
    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="container-exp texture p-norm flex flex-col gap-4">
        <div className="title-bar">
          <div className="section-title">what I do</div>
          <img className="world" src={world} alt="world" />
        </div>
        <div className="content-exp">
          <Card 
            title="Creative Direction" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="001" 
          />
          <Card 
            title="Web Design" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="002" 
          />
          <Card 
            title="Front End" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="003" 
          />
          <Card 
            title="3D Design" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="004" 
          />
        </div>
      </div>
      <div className="final"></div>
    </>
  );
}

export default Experience;