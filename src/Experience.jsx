import { useEffect } from 'react';
import './experience.css';
import world from "../assets/wwworld.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function scrollFold() {
  const items = gsap.utils.toArray(".item");
  const contentExp = document.querySelector('.content-exp');
  const finalCard = document.querySelector('.last-card');
  
  // Set the height of the content to accommodate all items


  items.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top top",
      endTrigger: 'bottom' - contentExp,
      end: "bottom top",
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
