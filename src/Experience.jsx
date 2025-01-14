import { useEffect } from 'react';
import './experience.css';
import world from "../assets/wwworld.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function scrollFold() {
  const items = gsap.utils.toArray(".item");
  const lastCard = document.querySelector('.last-card');
  const contentExp = document.querySelector('.content-exp');
  
  // Animate all cards
  [...items, lastCard].forEach((item) => {
    const desc = item.querySelector('.p');
    const number = item.querySelector('.bottom-number');
    
    // Set initial state
    gsap.set([desc, number], { opacity: 0, y: 30 });
    
    // Fade in animation
    ScrollTrigger.create({
      trigger: item,
      start: "bottom bottom",
      end: "bottom center",
      markers: false,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(desc, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }).to(number, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }, ">-0.2");
      },
      onLeaveBack: () => {
        gsap.to([desc, number], {
          opacity: 0,
          y: 30,
          duration: 0.3
        });
      }
    });
  });

  // Handle pinning for each card
  items.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top top",
      // For all cards except the last one, use the last card as the end trigger
      endTrigger: lastCard,
      // For all cards except the last one, end when the last card hits the top
      end: "top top",
      pin: true,
      pinSpacing: false,
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
    <div className="container-exp texture p-norm flex flex-col">
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
    </div>
  );
}

export default Experience;
