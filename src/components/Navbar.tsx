import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
     { name: 'Packages', href: '#packages' }, 
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-card py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
{/*             <span className="font-display text-2xl font-bold text-white">Ennbi</span>
            <span className="font-display text-accent-400">Softwares</span> */}
{/*             <span className="font-display text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-black via-gray-900 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]">
  ENNBI SOFTWARES
</span> */}
//             <span className="font-display text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-black via-gray-900 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,0,0,0.5)] hover:animate-pulse">
//   ENNBI SOFTWARES
// </span>

  <span
  className="text-4xl md:text-6xl font-cursive bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#ff416c] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,64,129,0.7)] animate-pulse transition-all duration-500 ease-in-out"
>
  ENNBI SOFTWARES
</span>




          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-accent inline-block text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
