// src/components/Portfolio.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Portfolio.css';

function Portfolio() {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
  const { ref: topRef, inView: topInView } = useInView({ triggerOnce: false });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });

  return (
    <section id="portfolio" className="py-16 bg-gray-900 text-white relative">
      <div className="fade-transition-top"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            ref={leftRef}
            className={`card bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden ${leftInView ? 'animate-left' : ''}`}
          >
            <img src="../images/pro1.jpeg" alt="Project 1" className="w-full" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p>My Another Portfolio Website.</p>
            </div>
          </div>
          <div
            ref={topRef}
            className={`card bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden ${topInView ? 'animate-top' : ''}`}
          >
            <img src="../images/adidas.jpeg" alt="Project 2" className="w-full" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p>Adidas Brand 3D Website.</p>
            </div>
          </div>
          <div
            ref={rightRef}
            className={`card bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden ${rightInView ? 'animate-right' : ''}`}
          >
            <img src="../images/ecomerce.jpeg" alt="Project 3" className="w-full" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p>My E-commerce Web Project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
