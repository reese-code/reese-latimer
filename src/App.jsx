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
                    <Route path="/home" element={<Home />} ></Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>   
            <Footer />
        </>
    );
}

export default App;