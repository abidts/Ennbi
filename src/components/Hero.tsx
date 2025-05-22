import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
          Transform Your Ideas Into
          <span className="block mt-2">Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto fade-in">
          We create innovative software solutions that drive business growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Start Project
          </a>
          <a href="#services" className="btn-outline">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;