import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div ref={titleRef} className="reveal stagger-fade-in text-center">
          <h1 className="section-heading mb-8">
            Crafting Digital
            <span className="block mt-2">Experiences</span>
          </h1>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            We transform ideas into exceptional digital solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contact" className="btn-primary group">
              Start Your Project
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
              Explore Our Work →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/20 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;