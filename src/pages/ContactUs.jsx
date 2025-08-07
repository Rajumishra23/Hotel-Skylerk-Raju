import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-[#fef4ed] to-[#fff8f2] py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>

        {/* Gradient Underline */}
        <motion.div
          className="w-24 h-[3px] bg-gradient-to-r from-[#f4a261] via-[#e07a5f] to-[#b85c38] rounded-full mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Description */}
        <motion.p
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We'd love to hear from you! Reach out with any questions or to make a reservation.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#b85c38] mb-4">Get in Touch</h2>
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85c38]"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85c38]"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85c38]"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="w-full bg-[#b85c38] text-white px-4 py-2 rounded-md hover:bg-[#a14a2c] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.div>

          {/* Contact Info and Map */}
          <motion.div
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#b85c38] mb-4">Our Contact Details</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Address:</span> NH-09 - service Road, Garhmukhteshwar, Distt. Hapur, UP.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Phone:</span> +91 8307777772
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Email:</span> HotelSkylark@gmail.com
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Hours:</span> 24/7 Front Desk
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#b85c38] mb-4">Find Us</h2>
              <div className="w-full h-64 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086397171194!2d-122.4194156846813!3d37.77492977975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d5e3f1b%3A0x9e6b7e6b7e6b7e6b!2s123%20Serenity%20Lane%2C%20Coastal%20City!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;