import { useState } from 'react'
import "./hero.css"




function Hero() {

    return(
        <>
            <section className="hero">
                <img className='logo-main' src="./assets/latimer-logo.png" />
                <div className="content">
                    <img className='peace' src="./assets/peace-sign.png" />
                    <div class="p">turning your web dreams into <span className='bold-italic'>reality</span></div>
                </div>
            </section>
        </>
    )
}

export default Hero