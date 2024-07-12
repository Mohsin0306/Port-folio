import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(false); // Initially hide the navbar

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true); // Show navbar when scrolling down
            } else {
                setShow(false); // Hide navbar when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = (event, target) => {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark  ${show ? 'show' : 'hide'}`} id="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">Mohsin Ashraf</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog" onClick={(e) => handleSmoothScroll(e, '#blog')}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
