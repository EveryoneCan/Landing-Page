import React from 'react';
import './Navbar.css'; 
import hologo from '../../assets/images/hologo.jpeg'; 
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                <img src={hologo} alt="AI Ally Logo" className="logo-image" />
                    Hologo
                </div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#testimonials">Testimonials</a>
                </div>
                <button className="sign-in-btn">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
