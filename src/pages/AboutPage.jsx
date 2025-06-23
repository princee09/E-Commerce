import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About EcoStore India</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're passionate about bringing you the finest products with exceptional quality and service across India.
            Our mission is to create an outstanding shopping experience that exceeds your expectations.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a vision to revolutionize online shopping in India, EcoStore has grown from a small startup 
              to a trusted platform serving customers across all major Indian cities. We believe in quality, sustainability, and 
              customer satisfaction above all else.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every product in our catalog is carefully selected and tested to ensure it meets our high 
              standards. We're not just selling products; we're building relationships and creating experiences for Indian families.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Premium quality products
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Fast and reliable shipping
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 customer support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Sustainable practices
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;