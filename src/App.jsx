import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import "./index.css"
import AnimatedRoutes from './AnimatedRoutes.jsx';

function App() {
    return (
        <div className='overflow-x-hidden'>
            <Router>
                <Nav />
                <div className="content-wrapper">
                    <AnimatedRoutes />
                </div>
                <Footer />
            </Router>   
        </div>
    );
}

export default App;
