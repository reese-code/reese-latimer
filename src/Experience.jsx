import { useState } from 'react'
import './experience.css'
import {motion} from 'framer-motion'
import world from "../assets/wwworld.png"

function Experience() {
    return(
        <>
            <div className="container-exp texture p-norm flex flex-col gap-4">
                <div className="title-bar">
                    <div className="section-title">what I do</div>
                    <img className='world' src={world} />
                </div>
                <div className="content-exp">
                    
                <div className='relative'><div className="square-style square-left-exp"></div><Fliptext>e-commerce</Fliptext><div className="square-style square-right-exp"></div></div>
                <div className='relative'><div className="square-style square-left-exp"></div><Fliptext>3d design</Fliptext><div className="square-style square-right-exp"></div></div>
                <div className='relative'><div className="square-style square-left-exp"></div><Fliptext>web design</Fliptext><div className="square-style square-right-exp"></div></div>
                <div className='relative'><div className="square-style square-left-exp"></div><Fliptext>front end</Fliptext><div className="square-style square-right-exp"></div></div>
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
            className='h1 relative block overflow-hidden whitespace-nowrap'>
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

export default Experience