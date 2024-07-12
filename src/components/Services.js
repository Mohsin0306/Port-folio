// src/components/Services.js
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Services.css';

function Services() {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
  const { ref: topRef, inView: topInView } = useInView({ triggerOnce: false });
  const { ref: bottomRef, inView: bottomInView } = useInView({ triggerOnce: false });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });

  return (
    <section id="services" className="py-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white text-center relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">I offer a variety of services to help you achieve your goals. From web development to graphic design, I've got you covered.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            ref={leftRef}
            className={`bg-white text-gray-800 shadow-lg rounded-lg p-6 ${leftInView ? 'animate-left' : ''}`}
          >
            <i className="fas fa-code fa-3x mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p>Building responsive and modern websites.</p>
          </div>
          <div
            ref={topRef}
            className={`bg-white text-gray-800 shadow-lg rounded-lg p-6 ${topInView ? 'animate-top' : ''}`}
          >
            <i className="fas fa-paint-brush fa-3x mb-4 text-green-500"></i>
            <h3 className="text-2xl font-bold mb-2">Graphic Design</h3>
            <p>Creating stunning graphics and visuals.</p>
          </div>
          <div
            ref={bottomRef}
            className={`bg-white text-gray-800 shadow-lg rounded-lg p-6 ${bottomInView ? 'animate-bottom' : ''}`}
          >
            <i className="fas fa-video fa-3x mb-4 text-red-500"></i>
            <h3 className="text-2xl font-bold mb-2">Video Editing</h3>
            <p>Producing high-quality video content.</p>
          </div>
          <div
            ref={rightRef}
            className={`bg-white text-gray-800 shadow-lg rounded-lg p-6 ${rightInView ? 'animate-right' : ''}`}
          >
            <i className="fas fa-camera fa-3x mb-4 text-yellow-500"></i>
            <h3 className="text-2xl font-bold mb-2">Photo Editing</h3>
            <p>Editing photos to perfection.</p>
          </div>
        </div>
      </div>
      <div className="fade-transition-top"></div>
    </section>
  );
}

export default Services;
