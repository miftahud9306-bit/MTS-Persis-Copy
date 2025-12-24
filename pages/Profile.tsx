import React from 'react';
import { Section } from '../components/Section';
import { Target, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

export const Profile: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <Section className="bg-white">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">Profil Sekolah</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Mengenal lebih dekat MTs Persis Cisomang sebagai lembaga pendidikan yang mengedepankan adab dan ilmu.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-brand-dark/5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-primary/10 rounded-full">
                        <Target className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-dark">Visi</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                    "Terwujudnya Generasi Ulul Albab yang Tafaqquh Fiddin, Berakhlakul Karimah, dan Unggul dalam Prestasi."
                </p>
            </div>

            <div className="bg-brand-bg p-8 rounded-2xl shadow-sm border border-brand-dark/5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-gold/10 rounded-full">
                        <Compass className="w-8 h-8 text-brand-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-dark">Misi</h2>
                </div>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                        <span>Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Islam dalam setiap aspek pembelajaran.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                        <span>Membangun lingkungan sekolah yang kondusif untuk pembentukan karakter santri.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                        <span>Mengembangkan potensi akademik dan non-akademik siswa melalui kegiatan intrakurikuler dan ekstrakurikuler.</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Gedung Sekolah" 
                    className="rounded-2xl shadow-lg"
                />
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Sejarah Singkat</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                    <p>
                        MTs Persis Cisomang berdiri sebagai wujud kepedulian Jam'iyyah Persatuan Islam terhadap pentingnya pendidikan 
                        bagi generasi muda di wilayah Bandung Barat. Sejak awal berdirinya, madrasah ini bertekad untuk menjadi 
                        benteng akidah dan pusat kaderisasi umat.
                    </p>
                    <p>
                        Berlokasi di {SCHOOL_INFO.address}, kami terus berkembang baik dari segi fasilitas maupun kualitas 
                        pendidikan. Dengan dukungan masyarakat dan dedikasi para asatidz, MTs Persis Cisomang telah melahirkan 
                        ribuan alumni yang berkiprah di berbagai bidang.
                    </p>
                </div>
            </div>
        </div>
      </Section>
    </main>
  );
};