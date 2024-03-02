// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css'; // Import CSS file for styling

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/testimonials" className="nav-link">Testimonials</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
