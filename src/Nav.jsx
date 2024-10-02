// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './nav.css';
import { gsap } from 'gsap';
import { useGSAP } from '../@gsap/react';
import hamburger from "../assets/hamburger.png"
import './closeX.css'
import {motion} from 'framer-motion';

const DURATION = 0.1;

gsap.registerPlugin(useGSAP);

const barLeft = {
    initial: { rotate: -45 },
    animate: { rotate: 45 },
}

const barRight = {
    initial: { rotate: 45 },
    animate: { rotate: -45 },
}

function navOpen() {
    gsap.to('.mobile-nav', {
        x: 305,
    });
}

function navClose() {
    gsap.to('.mobile-nav', {
        x: -305,
        timeScale: 1,
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
                <div className="links flex flex-row no-underline" >
                    <Link to="/about" className="a p link-hover no-underline relative">about</Link>
                    <Link to="/work" className="a p link-hover no-underline">work</Link>
                    <Link to="/contact" className="a p link-hover no-underline">contact</Link>
                </div>
            </div>
            <div className="mobile-nav">
                <motion.div
                initial="initial"
                animate="initial"
                whileHover="animate"
                className="x-container"
                onClick={navClose}
                >
                <motion.div 
                    variants={barLeft}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                    }}
                    className="bar-x left-bar"
                />
                <motion.div 
                    variants={barRight}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                    }}
                    className="bar-x right-bar"
                />
                </motion.div>
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