import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import './style.css'
const Navbar = () => {
  return (
    <div className="navbar">
            
    <div className="container">
        
        <div className="logo">
            <h2 className="logo-text">Ultra Profile</h2>
        </div>
        
        
        
        <ul className="ul-list">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><a href="#">Work</a></li>
            <li className="list-item"><a href="#">Portfolio</a></li>
            <li className="list-item"><a href="#">Resume</a></li>
            <li className="list-item"><a href="#">About</a></li>
            <li className="list-item"><Link to="/contact">Contact</Link></li>
        </ul>
        
    </div>
    
</div>
  )
}

export default Navbar
