import { useState } from 'react'
import './index.css'

import Hero from "./Hero.jsx"
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'

function Home() {

  console.log("Home page is rendering")
 
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
    </>
  )
}

export default Home
