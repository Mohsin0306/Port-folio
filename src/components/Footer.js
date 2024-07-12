import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Mohsin Ashraf</h2>
                        <p className="mb-4">Web Developer & Designer</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-purple-500 transition">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white hover:text-purple-500 transition">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-purple-500 transition">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-white hover:text-purple-500 transition">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-purple-500 transition">About Me</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="hover:text-purple-500 transition">Portfolio</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-purple-500 transition">Services</a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-purple-500 transition">Testimonials</a>
                            </li>
                            <li>
                                <a href="#blog" className="hover:text-purple-500 transition">Blog</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact</h2>
                        <ul className="space-y-2">
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span className="ml-2">mohsinashraf121519@gmail.com</span>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span className="ml-2">+92-331-3269415</span>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="ml-2">PMA HQ, Abbotabad, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p>&copy; 2024 Mohsin Ashraf. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
