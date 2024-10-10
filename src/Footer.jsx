import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import './Footer.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Btn from "./button.jsx";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const location = useLocation(); // Hook to detect the current route

  useEffect(() => {
    // Adding a small delay to ensure that the DOM elements are ready
    setTimeout(() => {
      const endFooter = "top 70%";
      const lines = document.querySelectorAll('.line');

      // Check if lines exist before animating
      if (lines.length > 0) {
        lines.forEach((line, index) => {
          const initialY = 130 - index * 15; // Adjust initial y position for each line

          gsap.fromTo(
            line,
            {
              y: initialY, // Set initial position based on the index
            },
            {
              y: 0, // End position, all lines move to y=0
              duration: 1,
              delay: 0.5,
              scrollTrigger: {
                trigger: ".footer", // Trigger the animation when the footer is in view
                start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
                end: endFooter, // End the animation when the top of the footer reaches 70% of the viewport
                scrub: true, // Smooth animation linked to scroll
              },
            }
          );
        });
      }
    }, 100); // Failsafe delay of 100ms

    // Clean up GSAP triggers on component unmount or route change
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]); // Re-run effect whenever the route changes

  return (
    <>
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
    </>
  );
}

export default Footer;