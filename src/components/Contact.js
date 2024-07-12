import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import '../styles/Contact.css'; // Add your styles here or use inline styles

function Contact() {
  const [formData, setFormData] = useState({
    to_name: '', // Make sure to include this if needed
    from_name: '',
    reply_to: '', // Ensure 'reply_to' matches your input field name for email
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success message visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Check if form data is populated correctly
    emailjs.sendForm(
      'service_dews8sq',
      'template_pm7jsz6',
      e.target,
      'LodCcQL1JS8wd0HEv'
    )
    .then((result) => {
      console.log('Email successfully sent:', result.text);
      setShowSuccessMessage(true); // Show success message
      resetForm(); // Optionally clear form fields after successful submission
    }, (error) => {
      console.error('Email sending failed:', error.text);
      alert('Failed to send message. Please try again.'); // Optionally add an error message
    });
  };

  const resetForm = () => {
    setFormData({
      to_name: '',
      from_name: '',
      reply_to: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        {showSuccessMessage && (
          <div className="success-message">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="input-field" name="from_name" value={formData.from_name} onChange={handleChange} />
            <input type="email" placeholder="Your Email" className="input-field" name="reply_to" value={formData.reply_to} onChange={handleChange} />
          </div>
          <textarea placeholder="Your Message" className="textarea-field my-6" name="message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
      <div className="fade-transition"></div>
    </section>
  );
}

export default Contact;
