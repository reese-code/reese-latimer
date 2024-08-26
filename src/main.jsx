import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import Home from './Home.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Home />
    <Footer />
  </StrictMode>,
)
