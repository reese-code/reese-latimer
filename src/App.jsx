import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Work from './Work';

function App() {
    return (
        <>
            
                <Router>
                <Nav />
                <Routes>
                    <Route index element={<Home />} ></Route>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/hbout" element={<About />} />
                    <Route path="/hork" element={<Work />} />
                    <Route path="/hontact" element={<Contact />} />
                </Routes>
                </Router>   
            <Footer />
        </>
    );
}

export default App;