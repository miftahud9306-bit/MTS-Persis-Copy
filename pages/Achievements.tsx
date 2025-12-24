import React, { useState } from 'react';
import { Section } from '../components/Section';
import { ACHIEVEMENTS, Achievement } from '../constants';
import { Trophy, Medal, Star, Filter } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<string>('Semua');

  const categories = ['Semua', 'Akademik', 'Non-Akademik', 'Keagamaan'];

  const filteredAchievements = filter === 'Semua' 
    ? ACHIEVEMENTS 
    : ACHIEVEMENTS.filter(item => item.category === filter);

  return (
    <main className="pt-24 pb-16">
      <Section className="bg-brand-bg">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">Prestasi Santri</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Deretan prestasi membanggakan yang telah diraih oleh santri MTs Persis Cisomang sebagai bukti nyata kualitas pendidikan kami.
            </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        filter === cat 
                        ? 'bg-brand-primary text-white shadow-lg scale-105' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
                    <div className="relative h-56 overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                item.category === 'Akademik' ? 'bg-blue-100 text-blue-700' :
                                item.category === 'Keagamaan' ? 'bg-green-100 text-green-700' :
                                'bg-orange-100 text-orange-700'
                            }`}>
                                {item.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-sm text-gray-500 mb-3 gap-3">
                            <span className="flex items-center gap-1">
                                <Trophy size={14} className="text-brand-gold" />
                                {item.level}
                            </span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {item.description}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-brand-primary font-semibold text-sm">
                           <Medal size={16} className="mr-2" />
                           MTs Persis Cisomang
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {filteredAchievements.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                <p>Belum ada data prestasi untuk kategori ini.</p>
            </div>
        )}
      </Section>
    </main>
  );
};