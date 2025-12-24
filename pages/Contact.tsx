import React from 'react';
import { Section } from '../components/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SCHOOL_INFO, CONTACT_DETAILS } from '../constants';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <Section>
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">Hubungi Kami</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Kami siap melayani Anda. Silakan hubungi kami melalui kontak di bawah ini atau datang langsung ke sekolah.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-brand-dark mb-6">Informasi Kontak</h2>
                    <div className="space-y-6">
                        {CONTACT_DETAILS.map((detail, idx) => (
                            <div key={idx} className="flex items-start">
                                <div className="p-3 bg-brand-bg rounded-lg mr-4">
                                    {detail.icon}
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium leading-relaxed">{detail.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <a href={SCHOOL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button fullWidth>Hubungi via WhatsApp</Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto relative">
                <iframe
                  title="Lokasi MTs Persis Cisomang"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${encodeURIComponent("MTs Persis Cisomang Cikalong Wetan")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
                
                {/* Fallback button */}
                <div className="absolute bottom-4 right-4">
                     <a 
                        href={SCHOOL_INFO.mapsLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-brand-dark px-4 py-2 rounded-full shadow-lg text-sm font-bold hover:bg-brand-primary hover:text-white transition-colors flex items-center gap-2"
                     >
                        <MapPin size={16} /> Buka di App
                     </a>
                </div>
            </div>
        </div>
      </Section>
    </main>
  );
};