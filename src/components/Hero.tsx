import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-accent-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 h-screen flex items-center justify-center">
         <div className="text-center max-w-4xl mx-auto mt-16"> {/* Added mt-16 */}
    <h1 className="text-5xl md:text-7xl font-bold mb-8">
{/*         <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8"> */}
            Transform Your Business With
            <span className="block text-gradient">Next-Gen Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We help businesses transform their ideas into powerful software solutions. Our team of experts deliver cutting-edge technology to drive your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="btn-accent">
              Book a Free Consultation
            </a>
            <a href="#services" className="btn-outline">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
{/*       <p className="text-sm mb-2 text-gray-400">Scroll to explore</p> */}
        {/* <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"> */}
{/*           <div className="w-1 bg-gray-400 rounded-full animate-scroll-down"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
