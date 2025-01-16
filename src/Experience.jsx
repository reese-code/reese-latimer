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
    const title = item.querySelector('.h1');
    
    // Set initial states
    gsap.set([desc, number], { opacity: 0, y: 30 });
    
    // Create reveal animation for card title
    const mask = document.createElement('div');
    mask.style.position = 'absolute';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100%';
    mask.style.height = '100%';
    mask.style.background = '#1f1f1f';
    mask.style.transformOrigin = 'bottom';
    title.style.position = 'relative';
    title.appendChild(mask);
    
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      once: true,
      markers: false,
      onEnter: () => {
        gsap.to(mask, {
          scaleY: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
      }
    });
    
    // Fade in animation for description and number
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      once: true,
      markers: false,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(desc, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.3
        }).to(number, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }, ">-0.2");
      }
    });
  });

  // Handle pinning for each card
  items.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top top",
      endTrigger: lastCard,
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
    // Kill any existing scroll triggers first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Wait for route transition to complete
    const timeout = setTimeout(() => {
      // Reset initial states
      const items = gsap.utils.toArray(".item");
      const lastCard = document.querySelector('.last-card');
      const sectionTitle = document.querySelector('.section-title');
      
      // Create mask for section title
      const mask = document.createElement('div');
      mask.style.position = 'absolute';
      mask.style.top = '0';
      mask.style.left = '0';
      mask.style.width = '100%';
      mask.style.height = '100%';
      mask.style.background = '#1f1f1f';
      mask.style.transformOrigin = 'bottom';
      sectionTitle.style.position = 'relative';
      sectionTitle.appendChild(mask);
      
      // Create reveal animation for section title
      ScrollTrigger.create({
        trigger: sectionTitle,
        start: "top 80%",
        once: true,
        markers: false,
        onEnter: () => {
          gsap.to(mask, {
            scaleY: 0,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      });
      
      [...items, lastCard].forEach((item) => {
        const desc = item.querySelector('.p');
        const number = item.querySelector('.bottom-number');
        gsap.set([desc, number], { opacity: 0, y: 30 });
      });

      // Initialize scroll animations
      scrollFold();
    }, 800);

    // Clean up function
    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]);

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
