import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './pageHeading.css'

function PageHeading({title, numberpg}) {
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const letters = titleRef.current.querySelectorAll('.letter');
            
            gsap.set(letters, {
                opacity: 0,
                rotationX: -120,
                rotationY: -15,
                y: -20,
                transformPerspective: 1000,
                transformOrigin: "50% 0%"
            });

            gsap.to(letters, {
                opacity: 1,
                rotationX: 0,
                rotationY: 0,
                y: 0,
                duration: 1,
                stagger: 0.08,
                ease: "power3.out",
            });
        });

        return () => ctx.revert();
    }, [title]);

    const splitTitle = title?.split('').map((letter, index) => (
        <span 
            key={index} 
            className="letter inline-block"
            style={{ 
                display: 'inline-block', 
                transformStyle: 'preserve-3d',
                padding: '0 1px'  // Add slight spacing between letters
            }}
        >
            {letter === ' ' ? '\u00A0' : letter}
        </span>
    )) || [];

    return (
        <div className="container-heading w-full h-fit p-5 flex justify-between align-bottom">
            <div ref={titleRef} className="title-page">{splitTitle}</div>
        </div>
    )
}

export default PageHeading
