import { StrictMode } from 'react'
import "./Footer.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin




function Footer() {

gsap.registerPlugin(ScrollTrigger);



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
const scroll = gsap.fromTo(
  ".one",
  {
    y: 130, // Initial position
  },
  {
    y: 0, // End position, moving up
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer", // Trigger the animation when the footer is in view
      start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
      end: "top 60%", // End the animation when the top of the footer reaches the middle of the viewport
      scrub: true, // Smooth animation linked to scroll
    },
  }
);

gsap.fromTo(
  ".two",
  {
    y: 115, // Initial position
  },
  {
    y: 0, // End position, moving up
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer", // Trigger the animation when the footer is in view
      start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
      end: "top 60%", // End the animation when the top of the footer reaches the middle of the viewport
      scrub: true, // Smooth animation linked to scroll
    },
  }
);

gsap.fromTo(
  ".three",
  {
    y: 100, // Initial position
  },
  {
    y: 0, // End position, moving up
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer", // Trigger the animation when the footer is in view
      start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
      end: "top 60%", // End the animation when the top of the footer reaches the middle of the viewport
      scrub: true, // Smooth animation linked to scroll
    },
  }
);

gsap.fromTo(
  ".four",
  {
    y: 85, // Initial position
  },
  {
    y: 0, // End position, moving up
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer", // Trigger the animation when the footer is in view
      start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
      end: "top 60%", // End the animation when the top of the footer reaches the middle of the viewport
      scrub: true, // Smooth animation linked to scroll
    },
  }
);

gsap.fromTo(
  ".five",
  {
    y: 70, // Initial position
  },
  {
    y: 0, // End position, moving up
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer", // Trigger the animation when the footer is in view
      start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
      end: "top 60%", // End the animation when the top of the footer reaches the middle of the viewport
      scrub: true, // Smooth animation linked to scroll
    },
  }
);

gsap.fromTo(
  ".six",
  {
    y: 55, // Initial position
  },
  {
    y: 0, // End position, moving up
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer", // Trigger the animation when the footer is in view
      start: "top bottom", // Start animation when the top of the footer reaches the bottom of the viewport
      end: "top 60%", // End the animation when the top of the footer reaches the middle of the viewport
      scrub: true, // Smooth animation linked to scroll
    },
  }
);
ScrollTrigger.refresh();

export default Footer