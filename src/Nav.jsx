import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './nav.css';
import { gsap } from 'gsap';
import hamburger from "../assets/hamburger.png";
import { motion } from 'framer-motion';
import './closeX.css';
import closeNav from "../assets/close-nav.png"

const DURATION = 0.1;

// Animations for X button (hamburger menu)

// Function to open the mobile nav (move to 0 from 100vw)
function navOpen() {
  gsap.to('.mobile-nav', {
    x: '100vw', // Slide in from right (100vw to 0)
    duration: 0.5,
    ease: 'power3.out',
  });
}

// Function to close the mobile nav (move to -100vw)
function navClose() {
  gsap.to('.mobile-nav', {
    x: '0vw', // Slide out to right (0 to 100vw)
    duration: 0.5,
    ease: 'power3.in',
  });
}

function Nav() {
  return (
    <div>
      <div className="nav margin-norm justify-between flex flex-row">
        <div className="hamburger" onClick={navOpen}>
          <img src={hamburger} alt="Open navigation" />
        </div>
        <div className="p-firm logo-home">
          <Link to="/home" className="a">Reese Latimer</Link>
        </div>
        <div className="links flex flex-row no-underline">
          <Link to="/about" className="a p link-hover no-underline relative">about</Link>
          <Link to="/work" className="a p link-hover no-underline">work</Link>
          <Link to="/contact" className="a p link-hover no-underline">contact</Link>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className="mobile-nav">
        <img src={closeNav} onClick={navClose} className='hamburger-light' />
        
        <div className="links-mobile-nav">
          <Link to="/about" className="a h2 link-hover no-underline" onClick={navClose}>about</Link>
          <Link to="/work" className="a h2 link-hover no-underline" onClick={navClose}>work</Link>
          <Link to="/contact" className="a h2 link-hover no-underline" onClick={navClose}>contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;