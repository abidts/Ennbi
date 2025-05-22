import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neon-pink via-neon-blue to-neon-green text-white font-display"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-blue-500/20 blur-3xl"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto mt-24 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-green-400">
            Transform Your Business With
            <span className="block">Next-Gen Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            We help businesses transform their ideas into powerful software solutions. Our team delivers cutting-edge tech to power your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;