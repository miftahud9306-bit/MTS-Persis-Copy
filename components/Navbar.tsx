import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO, COLORS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark shadow-xl py-2' : 'bg-brand-dark py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-3 group">
             <img 
               src={SCHOOL_INFO.logo} 
               alt="Logo MTs Persis Cisomang" 
               className="h-12 w-12 md:h-14 md:w-14 object-contain"
             />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                MTs Persis Cisomang
              </span>
              <span className="text-brand-primary text-xs md:text-sm font-medium tracking-wide">
                Cikalong Wetan, Bandung Barat
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 uppercase tracking-wide ${
                    isActive ? 'text-brand-gold' : 'text-gray-200 hover:text-brand-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a 
              href={SCHOOL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
                <Button variant="secondary" className="!px-4 !py-2 text-sm gap-2">
                    <Phone size={16} />
                    Hubungi
                </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-brand-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4 border-t border-gray-700/50 pt-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-brand-primary/10 text-brand-gold' 
                      : 'text-gray-200 hover:bg-white/5 hover:text-brand-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a 
                href={SCHOOL_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 pt-2"
            >
                <Button variant="secondary" fullWidth className="gap-2">
                    <Phone size={18} />
                    WhatsApp Kami
                </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};