import { useState } from 'react'
import './project-card.css'

function Card() {
    return(
        <div className="card texture shadow">
            <div className="top-content">
                <div className="title-heading">
                    <div className="p-firm">edistrict</div>
                    <div className="p-firm">001</div>
                </div>
                <div className="tag-holder">
                    <div className="tag">ui/ux</div>
                    <div className="tag">front end</div>
                </div>
            </div>
            <p>Created for an office in salt lake city. A simple but sleek design.</p>
        </div>
    )
}

export default Card