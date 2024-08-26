import { StrictMode } from 'react'
import "./Footer.css"

function Footer() {
    return (
        <>
        <section className='lines'>
            <img src="./assets/expanded-lines.svg" />
        </section>
        <div className="footer texture">
            <h2>lets create</h2>
            <div className="btn-white">Get in touch</div>
            <div className="links-footer">
                <a href="" className="p">about</a>
                <a href="" className="p">work</a>
                <a href="" className="p">contant</a>
            </div>
            <div className="copy-right">
                <div className="p-firm">Reese Latimer</div>
                <div className="p-firm">2024©</div>
            </div>
        </div>
        </>
    )
}

export default Footer