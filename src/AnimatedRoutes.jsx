import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Work from './Work.jsx';
import { motion, AnimatePresence } from "framer-motion"

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [hasNavigated, setHasNavigated] = useState(false);
  const [showLines, setShowLines] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setHasNavigated(true);
      setShowLines(true);
      const timer = setTimeout(() => {
        setShowLines(false);
      }, 1000); // 1 second delay
      return () => clearTimeout(timer);
    }
  }, [location]);

  const blockVariants = {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {children}
        </Routes>
      </AnimatePresence>
      <AnimatePresence>
        {hasNavigated && showLines && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={blockVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: `${i * (100 / 6)}%`,
              width: `${100 / 6}%`,
              height: '100%',
              backgroundColor: '#000',
              zIndex: 50,
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
