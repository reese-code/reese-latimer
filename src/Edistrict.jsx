import React, { useEffect, useRef } from 'react';
import './edistrict.css';
import edistrict from "../assets/edistrict-desktop.png";
import closeNav from "../assets/close-nav.png";
import { gsap } from 'gsap';

function ProjectView({ proTitle, teamMembers, challenge, solution, onClose }) {
  const viewRef = useRef(null);

  useEffect(() => {
    // Slide up animation when the component is mounted
    gsap.fromTo(
      viewRef.current,
      { y: '100%' }, // Start off the bottom of the screen
      { y: '0%', duration: 1, ease: 'power3.out' } // Slide into view
    );
  }, []);

  const handleClose = () => {
    // Slide down animation when closing
    gsap.to(viewRef.current, {
      y: '100%',
      duration: 1,
      ease: 'power3.in',
      onComplete: onClose, // Call onClose to hide ProjectView
    });
  };

  return (
    <div ref={viewRef} className="project-view p-norm" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
      <div className="top-bar-close">
        <img src={closeNav} alt="Close" onClick={handleClose} />
      </div>
      <div className="content-holder flex gap-4 items-center" style={{ position: 'sticky', top: '0' }}>
        <div className="content-info-pro">
          <div className="section-title underline-custom">{proTitle}</div>
          <div className="section-info-pro flex flex-col gap-10">
            <div className="title-info-pro">
              <div className="h3">Team</div>
              <div className="p">{teamMembers}</div>
            </div>
            <div className="title-info-pro">
              <div className="h3">Challenge</div>
              <div className="p">{challenge}</div>
            </div>
            <div className="title-info-pro">
              <div className="h3">Solution</div>
              <div className="p">{solution}</div>
            </div>
          </div>
        </div>
        <div className="image-catolog">
          <img src={edistrict} alt="Edistrict Project" />
        </div>
      </div>
    </div>
  );
}

export default ProjectView;