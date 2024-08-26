import { useState } from 'react'
import './index.css'
import './nav.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const fullNav = document.querySelector(".mobile-nav");

function navOpen() {
    gsap.to('.mobile-nav', {
        x: 305,
    });

    
}

function navClose() {
    gsap.to('.mobile-nav', {
        x: -305,
        timeScale: 1
    });
}



function Nav() {

    return (
        <>
            <div className="nav margin-norm justify-between flex flex-row ">
                <div className="hamburger" onClick={navOpen}><img src="./assets/hamburger.png" /></div>
                <div className="p-firm logo-home"><a href="">Reese Latimer</a></div>
                <div className="links flex flex-col">
                    <a href="" className="p">about</a>
                    <a href="" className="p">work</a>
                    <a href="" className="p">contact</a>
                </div>
            </div>
            <div className="mobile-nav">
                <div  className="hamburger-light"><img onClick={navClose} src="./assets/close-nav.png" /></div>
                <div className="links-mobile-nav">
                    <a href="" className="h2">about</a>
                    <a href="" className="h2">work</a>
                    <a href="" className="h2">contact</a>
                </div>
            </div>
        </>
    )
}

export default Nav