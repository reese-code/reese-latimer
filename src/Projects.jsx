import { useState } from 'react'
import './projects.css'
import edistrict from "../assets/edistrict-desktop.png"
function Projects() {

    return(
        <>
            <div className="projects-home ">
                <div className="title-bar">
                    <div className="section-title">projects</div>
                    <div className="btn-black">explore</div>
                </div>
                <div className="detail-container shadow">
                    <img className='img-desktop' src={edistrict} />
                    <div className="content-detail-card flex flex-col w-full p-5 justify-between relative">
                        <div className="upper-half-card flex flex-col">
                            <div className="title-card-container flex justify-between">
                                <div className="title-card">edistrict</div>
                                <div className="number-project">001</div>
                            </div>
                            <div className="developement-detail flex gap-3">
                                <div className="development-info">ui/ux</div>
                                <div className="development-info">front end</div>
                            </div>
                        </div>
                        <div className="info-project p">Created for an office in salt lake city. A simple but sleek design.</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Projects