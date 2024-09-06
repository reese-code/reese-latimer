import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import "./index.css"
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Work from './Work.jsx';

function App() {
    return (
        <div className='overflow-x-hidden'>
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
        </div>
    );
}

export default App;