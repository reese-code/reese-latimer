import { useState } from 'react';
import './about.css';
import face from "../assets/pixel-face.png";
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';


function About() {
    return(
        <>
            <div className="about-page">
                <div className="about-title">
                    about me
                </div>
                <div className="description h3">&lt;&gt;<span className='color-black'>Colorado-based Designer & Developer with focus on Art direction and Front end.</span>&lt;/&gt;</div>
                <div className="experience-about flex">
                    <img src={face} className='face-pixel' />
                    <div className="experience-content-about flex flex-col">
                        <div className="relative border-padding"><div className="square-style rotated-square"></div><div className="square-style top-square rotated-square"></div><Fliptext>e-commerce</Fliptext></div>
                        <div className="relative border-padding"><div className="square-style rotated-square"></div><Fliptext>3d design</Fliptext></div>
                        <div className="relative border-padding"><div className="square-style rotated-square"></div><Fliptext> web design</Fliptext></div>
                        <div className="relative border-padding"><div className="square-style rotated-square"></div><Fliptext>front end</Fliptext></div>
                    </div>
                </div>
                <div className="email-scroll-bar flex relative">
                    <div className="scroller flex">
                        <div to="/contact" className="h2 overflow-text">Let's create something together <Link to="/contact" className='blackout'>email me</Link></div>
                        <div to="/contact" className="h2 overflow-text">Let's create something together <Link to="/contact" className='blackout'>email me</Link></div>
                        <div to="/contact" className="h2 overflow-text">Let's create something together <Link to="/contact" className='blackout'>email me</Link></div>
                        <div to="/contact" className="h2 overflow-text">Let's create something together <Link to="/contact" className='blackout'>email me</Link></div>
                        <div to="/contact" className="h2 overflow-text">Let's create something together <Link to="/contact" className='blackout'>email me</Link></div>
                        <div to="/contact" className="h2 overflow-text">Let's create something together <Link to="/contact" className='blackout'>email me</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const DURATION = 0.25;
const STAGGER = 0.025;

const Fliptext = ({children}) => {
    return(
        <motion.h1
            initial="initial"
            whileHover="hovered"
            className='h1 relative block overflow-hidden whitespace-nowrap bold'>
            <div className='first-div'>
                {children.split("").map((l, i) => {
                    return <motion.span
                    variants={{
                        initial: {
                            y: 0,
                        },
                        hovered: {
                            y: "-100%",
                        },
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    className='inline-block'
                    key={i}>{l}</motion.span>;
                })}
            </div>
            <div className='absolute index-0 second-div'>
            {children.split("").map((l, i) => {
                    return <motion.span
                    variants={{
                        initial: {
                            y: 0,
                        },
                        hovered: {
                            y: "-100%",
                        },
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    className='inline-block'
                    key={i}>{l}</motion.span>;
                })}
            </div>
        </motion.h1>
    )
}

export default About