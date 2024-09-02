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
            <Nav />
            <Router>
                <Routes>
                    <Route index element={<Home />} ><Home /></Route>
                    <Route path="/Home" element={<Home />} ><Home /></Route>
                    <Route path="/About" element={<About />} />
                    <Route path="/Work" element={<Work />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;