import { useState } from 'react'
import "./hero.css"
import logo from "../assets/latimer-logo.png"
import peace from "../assets/peace-sign.png"

function Hero() {

    return(
        <>
            <section className="hero">
                <img className='logo-main' src={logo} />
                <div className="content">
                    <img className='peace' src={peace} />
                    <div class="p">turning your web dreams into <span className='bold-italic'>reality</span></div>
                </div>
            </section>
        </>
    )
}

export default Hero