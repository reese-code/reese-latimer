import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Work from './Work.jsx';
import { motion, AnimatePresence } from "framer-motion"

const PageTransition = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayLocation(location);
        setIsAnimating(false);
      }, 700); // Adjust this timing to match your animation duration
    }
  }, [location, displayLocation]);

  const blockVariants = {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={displayLocation} key={displayLocation.pathname}>
          {children}
        </Routes>
      </AnimatePresence>
      <AnimatePresence>
        {isAnimating && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={blockVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ 
              duration: 0.3,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: `${i * (100 / 6)}%`,
              width: `${100 / 6}%`,
              height: '110%',
              backgroundColor: '#111',
              zIndex: 50,
              borderLeft: "0.1px solid #333"
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

function AnimatedRoutes() {
  return (
    <PageTransition>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </PageTransition>
  )
}

export default AnimatedRoutes
