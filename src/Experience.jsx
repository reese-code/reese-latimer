import { useState } from 'react'
import './experience.css'

function Experience() {
    return(
        <>
            <div className="container-exp texture p-norm">
                <div className="title-bar">
                    <div className="section-title">what I do</div>
                    <img className='world' src="./assets/wwworld.png" />
                </div>
                <div className="content-exp glitch">
                    <h1>e-commerce</h1>
                    <h1>3d design</h1>
                    <h1>web design</h1>
                    <h1>front end</h1>
                </div>
            </div>
        </>
    )
}

export default Experience