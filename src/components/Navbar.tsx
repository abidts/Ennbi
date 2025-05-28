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
    { name: 'Blog', to: '/blog' },
    { name: 'Employee Corner', to: '/login' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="relative flex items-center space-x-3 group">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMTlUMTY6MzM6NDUrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMTlUMTY6MzM6NDUrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTE5VDE2OjMzOjQ1KzA1OjMwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0ZDY5ZjE5LTM2ZDAtNDY4ZC1hZmQ5LTM2MjYzODM3MzI5ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY0ZDY5ZjE5LTM2ZDAtNDY4ZC1h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"
              alt="Ennbi Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="relative flex flex-col items-start">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-tight">
                EnnBI
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