import { StrictMode } from 'react'
import "./Footer.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin




function Footer() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".one",
        {
          y: 100, // Initial position
        },
        {
          y: 0, // End position, moving up
          duration: 1,
          scrollTrigger: {
            trigger: ".footer", // Trigger the animation when the footer is in view
            start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
            end: "top 70%", // End the animation when the top of the footer reaches the middle of the viewport
            scrub: true, // Smooth animation linked to scroll
          },
        }
      );
    
      gsap.fromTo(
        ".two",
        {
          y: 90, // Initial position
        },
        {
          y: 0, // End position, moving up
          duration: 1,
          scrollTrigger: {
            trigger: ".footer", // Trigger the animation when the footer is in view
            start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
            end: "top 70%", // End the animation when the top of the footer reaches the middle of the viewport
            scrub: true, // Smooth animation linked to scroll
          },
        }
      );
    
      gsap.fromTo(
        ".three",
        {
          y: 80, // Initial position
        },
        {
          y: 0, // End position, moving up
          duration: 1,
          scrollTrigger: {
            trigger: ".footer", // Trigger the animation when the footer is in view
            start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
            end: "top 70%", // End the animation when the top of the footer reaches the middle of the viewport
            scrub: true, // Smooth animation linked to scroll
          },
        }
      );
    
      gsap.fromTo(
        ".four",
        {
          y: 70, // Initial position
        },
        {
          y: 0, // End position, moving up
          duration: 1,
          scrollTrigger: {
            trigger: ".footer", // Trigger the animation when the footer is in view
            start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
            end: "top 70%", // End the animation when the top of the footer reaches the middle of the viewport
            scrub: true, // Smooth animation linked to scroll
          },
        }
      );
    
      gsap.fromTo(
        ".five",
        {
          y: 60, // Initial position
        },
        {
          y: 0, // End position, moving up
          duration: 1,
          scrollTrigger: {
            trigger: ".footer", // Trigger the animation when the footer is in view
            start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
            end: "top 70%", // End the animation when the top of the footer reaches the middle of the viewport
            scrub: true, // Smooth animation linked to scroll
          },
        }
      );
    
      gsap.fromTo(
        ".six",
        {
          y: 50, // Initial position
        },
        {
          y: 0, // End position, moving up
          duration: 1,
          scrollTrigger: {
            trigger: ".footer", // Trigger the animation when the footer is in view
            start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
            end: "top 70%", // End the animation when the top of the footer reaches the middle of the viewport
            scrub: true, // Smooth animation linked to scroll
          },
        }
      );

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
            <h2>lets create</h2>
            <div className="btn-white">Get in touch</div>
            <div className="links-footer">
                <a href="" className="p">about</a>
                <a href="" className="p">work</a>
                <a href="" className="p">contant</a>
            </div>
            <div className="copy-right">
                <div className="p-firm">Reese Latimer</div>
                <div className="p-firm">2024©</div>
            </div>
        </div>
        </>
    )
}

export default Footer