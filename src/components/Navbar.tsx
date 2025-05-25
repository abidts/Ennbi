import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', to: '/blog' }, // external route
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="relative group">
            <span className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <div className="relative flex flex-col items-center">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-tight">
                ENNBI
              </h1>
              <span className="text-sm text-white/70">SOFTWARES</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ name, href, to }) =>
              to ? (
                <Link
                  key={name}
                  to={to}
                  className="text-white/70 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  {name}
                </Link>
              ) : (
                <a
                  key={name}
                  href={href}
                  className="text-white/70 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  {name}
                </a>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {navLinks.map(({ name, href, to }) =>
                to ? (
                  <Link
                    key={name}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white transition-colors duration-300 py-2"
                  >
                    {name}
                  </Link>
                ) : (
                  <a
                    key={name}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white transition-colors duration-300 py-2"
                  >
                    {name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
