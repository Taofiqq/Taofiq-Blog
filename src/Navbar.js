import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
           <h1 className="navbar-name">My Mini React Blog</h1> 
           <div className="navbar-links">
               <Link to="/" className="navbar-link">Home</Link>
               <Link to="/create" className="navbar-link" >New Blog</Link>
           </div>
        </div>
    )
}

export default Navbar
