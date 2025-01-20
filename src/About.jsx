import { useState, useEffect, useRef } from 'react';
import './about.css';
import face from "../assets/pixel-face.png";
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeading from './pageHeading.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const descriptionRef = useRef(null);
    const textContent = 'Colorado-based Designer & Developer with focus on Art direction and Front end.';
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const intervalRef = useRef(null);
    const cursorIntervalRef = useRef(null);

    useEffect(() => {
        // Cursor blinking effect
        cursorIntervalRef.current = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => {
            if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
        };
    }, []);

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: descriptionRef.current,
            start: "top center",
            onEnter: () => {
                if (!isTyping) {
                    setIsTyping(true);
                    let currentIndex = 0;
                    
                    // Add a small delay before starting
                    setTimeout(() => {
                        intervalRef.current = setInterval(() => {
                            if (currentIndex <= textContent.length) {
                                setDisplayText(textContent.slice(0, currentIndex));
                                currentIndex++;
                            } else {
                                if (intervalRef.current) clearInterval(intervalRef.current);
                            }
                        }, 35); // Typing speed
                    }, 400); // Initial delay
                }
            },
            onLeaveBack: () => {
                setDisplayText('');
                setIsTyping(false);
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
        });

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (trigger) trigger.kill();
        };
    }, [isTyping]);

    return(
        <>
            <div className="about-page">
                <PageHeading title="about" />
                <div className="description h3" ref={descriptionRef}>
                    &lt;&gt;<span className='color-black'>{displayText}{showCursor && <span className="cursor">|</span>}</span>&lt;/&gt;
                </div>
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
