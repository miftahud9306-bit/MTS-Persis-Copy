import React from 'react';
import { Section } from '../components/Section';
import { BookOpen, Trophy, Clock, Image as ImageIcon } from 'lucide-react';
import { ACADEMIC_GALLERY } from '../constants';

export const Academics: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <Section className="bg-brand-bg">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">Akademik & Kesiswaan</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Program unggulan untuk mengembangkan potensi intelektual dan spiritual santri.
            </p>
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-brand-primary mr-3" />
                <h2 className="text-2xl font-bold text-brand-dark">Kurikulum</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
                MTs Persis Cisomang menerapkan kurikulum terpadu yang menggabungkan Kurikulum Nasional (Kemenag) dan Kurikulum Kepesantrenan (Persatuan Islam). Hal ini bertujuan untuk mencetak lulusan yang tidak hanya cerdas secara akademis, tetapi juga memiliki pemahaman agama yang kuat.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-primary">
                    <h3 className="font-bold text-brand-dark mb-2">Mata Pelajaran Umum</h3>
                    <p className="text-sm text-gray-600">Matematika, IPA, Bahasa Indonesia, Bahasa Inggris, IPS, PKn, dll.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-gold">
                    <h3 className="font-bold text-brand-dark mb-2">Mata Pelajaran Diniyah</h3>
                    <p className="text-sm text-gray-600">Aqidah, Fiqih, Hadits, Tafsir, Bahasa Arab, Tarikh Islam, dll.</p>
                </div>
            </div>
        </div>

        {/* Extracurriculars */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                    <Trophy className="w-8 h-8 text-brand-gold mr-3" />
                    <h2 className="text-2xl font-bold text-brand-dark">Ekstrakurikuler</h2>
                </div>
                <ul className="grid grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Pramuka</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Paskibra</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Futsal</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Badminton</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Tenis Meja</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Muhadhoroh</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Tahfidz Qur'an</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span> Kaligrafi</li>
                </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-brand-dark mr-3" />
                    <h2 className="text-2xl font-bold text-brand-dark">Jam Operasional</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Sabtu - Rabu</span>
                        <span className="font-semibold text-brand-dark">07:00 - 14:30 WIB</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Kamis</span>
                        <span className="font-semibold text-brand-dark">07:00 - 14:00 WIB</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Jumat</span>
                        <span className="font-semibold text-brand-dark text-red-500">Libur</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 italic">
                        *Jadwal dapat berubah menyesuaikan kalender pendidikan dan kegiatan khusus.
                    </p>
                </div>
            </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-white">
          <div className="text-center mb-12">
              <div className="inline-block p-3 bg-brand-bg rounded-full mb-4">
                 <ImageIcon className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Galeri Kegiatan</h2>
              <div className="h-1 w-20 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                  Dokumentasi aktivitas santri dalam menuntut ilmu dan mengembangkan diri.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACADEMIC_GALLERY.map((item) => (
                  <div key={item.id} className="bg-brand-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="h-64 overflow-hidden relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed border-t border-brand-dark/10 pt-3 mt-3">
                              {item.description}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>
    </main>
  );
};