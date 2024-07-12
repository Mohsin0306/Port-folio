import React from 'react';
import '../styles/Blog.css'; // Add your styles here or use inline styles

function Blog() {
  return (
    <section id="blog" className="py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden animate-left">
            <img src="../images/bog post 1.jpeg" alt="" className="w-full" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Blog Post 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="card bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden animate-top">
            <img src="../images/blog post 2.jpeg" alt="Blog Post 2" className="w-full" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Blog Post 2</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
          <div className="card bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden animate-right">
            <img src="../images/blog post 3.webp" alt="Blog Post 3" className="w-full" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Blog Post 3</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-transition"></div>
    </section>
  );
}

export default Blog;
