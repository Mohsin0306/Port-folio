import React from 'react';
import '../styles/Testimonials.css'; // Add your styles here or use inline styles

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white text-center relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-md bg-gray-800 p-6">
            <blockquote className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</blockquote>
            <footer className="mt-4 block text-gray-400">- John Doe</footer>
          </div>
          <div className="rounded-lg shadow-md bg-gray-800 p-6">
            <blockquote className="text-lg">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</blockquote>
            <footer className="mt-4 block text-gray-400">- Jane Smith</footer>
          </div>
          <div className="rounded-lg shadow-md bg-gray-800 p-6">
            <blockquote className="text-lg">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</blockquote>
            <footer className="mt-4 block text-gray-400">- Sam Wilson</footer>
          </div>
        </div>
        </div>
      <div className="fade-transition"></div>
    </section >
  );
}

export default Testimonials;
