import React from 'react';
import './Navbar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
                    <i className="fa fa-bars"></i>
            </label>
            <a href="#" className="logo">Covid-19 Dashboard</a>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav" id="js-menu">
            <li>
                <a href="#" className="nav-links">Home</a>
            </li>
            
            <li>
                <a href="#" className="nav-links">About</a>
            </li>
            <li>
                <a href="#" className="nav-links">Contact</a>
            </li>
            
            </ul>
      </nav>
    )
}

export default NavBar;
