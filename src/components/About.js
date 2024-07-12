// src/components/About.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

function About() {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });

  return (
    <section id="about" className="py-16 bg-gradient-to-r text-white text-center relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div
          ref={leftRef}
          className={`md:w-1/2 flex justify-center mb-6 md:mb-0 about-img-container ${leftInView ? 'animate-left' : ''}`}
        >
          <img src="../images/ownerabout.png" alt="About Me Image" className="about-img" />
        </div>
        <div
          ref={rightRef}
          className={`md:w-1/2 about-text text-left p-6 ${rightInView ? 'animate-right' : ''}`}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p>Hi, I'm Mohsin Ashraf. I am passionate about creating engaging content and beautiful designs. My skills range from video and photo editing to web development and ethical hacking. Welcome to my portfolio!</p>
        </div>
      </div>
      <div className="fade-transition-bottom"></div>
    </section>
  );
}

export default About;
