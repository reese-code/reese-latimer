// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './nav.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

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
                    <img src="./assets/hamburger.png" alt="Open navigation" />
                </div>
                <div className="p-firm logo-home">
                    <Link to="/home" className="a">Reese Latimer</Link>
                </div>
                <div className="links flex flex-col">
                    <Link to="/about" className="a p">about</Link>
                    <Link to="/work" className="a p">work</Link>
                    <Link to="/contact" className="a p">contact</Link>
                </div>
            </div>
            <div className="mobile-nav">
                <div className="hamburger-light">
                    <img onClick={navClose} src="./assets/close-nav.png" alt="Close navigation" />
                </div>
                <div className="links-mobile-nav">
                    <Link to="/about" className="a h2" onClick={navClose}>about</Link>
                    <Link to="/work" className="a h2" onClick={navClose}>work</Link>
                    <Link to="/contact" className="a h2" onClick={navClose}>contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;