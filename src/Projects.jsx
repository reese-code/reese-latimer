import { useState } from 'react'
import './projects.css'
import Card from './Project-card.jsx'

function Projects() {

    return(
        <>
            <div className="projects-home ">
                <div className="title-bar">
                    <div className="section-title">projects</div>
                    <div className="btn-black">explore</div>
                </div>
                <div className="detail-container">
                    <img className='img-desktop shadow' src="../assets/edistrict-desktop.png" />
                    <img className='img-mobile shadow' src="../assets/edistrict-mobile.png" />
                    <Card />
                </div>
                
            </div>
        </>
    )
}

export default Projects