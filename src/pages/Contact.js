import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    status: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulated form submission
      // In a real application, you would send this to a backend service
      console.log('Submitting Form:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Set success status
      setSubmitStatus({
        status: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Clear status after 3 seconds
      setTimeout(() => {
        setSubmitStatus({ status: null, message: '' });
      }, 3000);

    } catch (error) {
      // Handle error
      setSubmitStatus({
        status: 'error',
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 bg-gray-800 rounded-lg p-8 shadow-xl">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="mr-4 text-blue-400" size={24} />
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-300 hover:text-white transition"
                >
                  your.email@example.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-4 text-green-400" size={24} />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="mr-4 text-red-400" size={24} />
                <span className="text-gray-300">Your City, Your Country</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {submitStatus.status && (
              <div 
                className={`p-3 rounded ${
                  submitStatus.status === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 text-white'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 transition flex items-center justify-center"
            >
              <Send className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;