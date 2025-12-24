import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { SCHOOL_INFO, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={SCHOOL_INFO.logo} 
                alt="Logo" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-xl font-bold text-white">MTs Persis Cisomang</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Membangun generasi Qur'ani yang cerdas, berakhlak mulia, dan berwawasan luas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-brand-primary/30 pb-2 inline-block">Tautan Cepat</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path}
                    className="hover:text-brand-primary transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-brand-primary/30 pb-2 inline-block">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Map Widget (Static Image or Placeholder) */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-800 relative group">
             {/* Using a static map image or placeholder logic */}
             <img 
                src="https://picsum.photos/seed/map/400/300" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <a 
                    href={SCHOOL_INFO.mapsLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-brand-dark transition-all"
                >
                    Buka Google Maps
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} MTs Persis Cisomang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};