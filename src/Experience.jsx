import { useState, useEffect } from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import world from "../assets/wwworld.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function scrollFold() {
  const items = gsap.utils.toArray(".item");
  const headerHeight = document.querySelector;
  const final = document.querySelector('.final'); 
  const lastItem = items[items.length - 1];
  
  items.forEach((item, i) => {
    const nextItem = items[i + 1]; // Reference to the next card

    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top top",
        endTrigger: nextItem || lastItem.offsetHeight,  // If nextItem exists, use its position. If it's the last card, use the final marker.
        end: nextItem
          ? `top top`   // End when the next card reaches the top of the viewport
          : `+=${lastItem.offsetHeight}`, // For the last item, end at the top of the last card.
        pin: true,
        pinSpacing: false,
        scrub: 1,
        markers: false,
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

function Card({ title, description, number, item }) {
  return (
    <div className={item}>
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
            item="item"
            title="Creative Direction" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="001" 
          />
          <Card 
            item="item"
            title="Web Design" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="002" 
          />
          <Card 
            item="item"
            title="Front End" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="003" 
          />
          <Card 
            item="last-card"
            title="3D Design" 
            description="Lorem ipsum dolor sit amet consectetur. Sed elementum dictum aliquet eget suscipit. Arcu fermentum at amet augue magna non faucibus." 
            number="004" 
          />
        </div>
        <div className="final"></div>
      </div>
    </>
  );
}

export default Experience;