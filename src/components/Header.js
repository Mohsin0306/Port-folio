import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="h-screen d-flex flex-column justify-content-center align-items-center text-center px-3">
            <div className="header-content">
                <h1 className="font-weight-bold" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '45px' }}>
                    Hi, I'm <span
                        className="display-4 font-weight-bold text-transparent border-white"
                        style={{ WebkitTextStroke: '1px rgb(255, 255, 255)' }}
                    >
                        Mohsin
                    </span> Ashraf
                </h1>
                <p className="lead mb-4">
                    Youtuber | Content Creator | Graphic Designer | Hacker | Web Developer | Video Editor | Photo Editor
                </p>
                <div>
                    <a href="#contact" className="btn btn-outline-light">Hire Me</a>
                    <a href="#portfolio" className="btn btn-light ml-2">Latest Works</a>
                </div>
            </div>
            <div className="fade-transition"></div>
        </header>
    );
};

export default Header;
