import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
                    <i className="fa fa-bars"></i>
            </label>
            <Link to="/" className="logo">Covid-19 Dashboard</Link>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav" id="js-menu">
                <li>
                    <Link to="/" className="nav-links">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-links">About</Link>
                </li>
            </ul>
      </nav>
    )
}

export default NavBar;
