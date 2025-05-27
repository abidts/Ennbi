import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-accent-500/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary-500/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto mt-16">
          {/* Luxury Grey Title */}
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-gray-300 drop-shadow-md">
              Transform Your Business With
            </span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-100 drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Next-Gen Technology
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-2xl text-brown-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            We help businesses transform their ideas into powerful software solutions. Our team of experts deliver cutting-edge technology to drive your growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a href="#contact" className="btn-accent">
              Book a Free Consultation
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
