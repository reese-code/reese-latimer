import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Btn from "./button.jsx";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const location = useLocation();

  useEffect(() => {
    const lines = document.querySelectorAll('.line');

    // Reset lines to initial position
    const resetLines = () => {
      lines.forEach((line, index) => {
        const initialY = 130 - index * 15;
        gsap.set(line, { y: initialY });
      });
    };

    if (lines.length > 0) {
      // Initial setup
      resetLines();

      // Create scroll triggers
      lines.forEach((line, index) => {
        const initialY = 130 - index * 15;
        
        ScrollTrigger.create({
          trigger: ".footer",
          start: "top 80%",
          end: "top 20%",
          onEnter: () => {
            gsap.to(line, {
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              overwrite: true
            });
          },
          onLeaveBack: () => {
            gsap.to(line, {
              y: initialY,
              duration: 0.5,
              overwrite: true
            });
          }
        });
      });

      // Reset on route change
      resetLines();
    }

    return () => {
      // Kill all scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Reset lines before unmounting
      if (lines.length > 0) {
        resetLines();
      }
    };
  }, [location.pathname]);

  return (
    <>
    <div className="footer-complete">
      <section className='lines'>
        <div className="line one texture"></div>
        <div className="line two texture"></div>
        <div className="line three texture"></div>
        <div className="line four texture"></div>
        <div className="line five texture"></div>
        <div className="line six texture"></div>
      </section>

      <div className="footer texture">
        <h2 className='h2'>lets create</h2>
        <Btn
          color="btn-white"
          text="Get in touch"
          direction="/contact"
        />
        <div className="links-footer">
          <Link to="/about" className="a p link-hover">about</Link>
          <Link to="/work" className="a p link-hover">work</Link>
          <Link to="/contact" className="a p link-hover">contact</Link>
        </div>
        <div className="copy-right">
          <div className="p-firm">Reese Latimer</div>
          <div className="p-firm">2024©</div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
