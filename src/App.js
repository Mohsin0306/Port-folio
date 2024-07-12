import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import './styles/Shared.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About'; // Import About component
import Portfolio from './components/Portfolio'; // Import Portfolio component
import Services from './components/Services'; // Import Services component
import Testimonials from './components/Testimonials'; // Import Testimonials component
import Blog from './components/Blog'; // Import Blog component
import Contact from './components/Contact'; // Import Contact component
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
