import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star, ChevronLeft } from 'lucide-react';
import { FEATURES, SCHOOL_INFO, STATS, TEACHERS } from '../constants';
import { Button } from '../components/Button';

const HERO_SLIDES = [
  {
    id: 1,
    // Image representing Islamic study/Quran
    image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "Ahlan Wa Sahlan",
    title: "Mewujudkan Generasi <span class='text-brand-gold'>Qur'ani</span> & Berprestasi",
    description: "MTs Persis Cisomang berkomitmen mencetak kader ulama dan pemimpin masa depan yang berakhlakul karimah.",
    primaryBtn: { text: "Profil Sekolah", link: "/profil" },
    secondaryBtn: { text: "Hubungi Kami", link: "/kontak" }
  },
  {
    id: 2,
    // Image representing students/classroom environment for PPDB
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "Penerimaan Peserta Didik Baru",
    title: "Mari Bergabung Bersama <span class='text-brand-gold'>Keluarga Besar Kami</span>",
    description: "Pendaftaran siswa baru tahun ajaran 2024/2025 telah dibuka. Segera daftarkan putra-putri Anda.",
    primaryBtn: { text: "Daftar Sekarang", link: "/ppdb" },
    secondaryBtn: { text: "Info Syarat", link: "/ppdb" }
  },
  {
    id: 3,
    // Image representing scouting/activities (Pramuka is common in MTs)
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "Ekstrakurikuler & Prestasi",
    title: "Kembangkan Minat & <span class='text-brand-gold'>Bakat Santri</span>",
    description: "Beragam kegiatan ekstrakurikuler siap mewadahi potensi non-akademik santri untuk meraih prestasi gemilang.",
    primaryBtn: { text: "Lihat Kegiatan", link: "/akademik" },
    secondaryBtn: { text: "Galeri Foto", link: "/akademik" }
  }
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <main>
      {/* Hero Slider Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center bg-brand-dark overflow-hidden group">
        
        {/* Slides */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.subtitle} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/30"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
              <div className={`max-w-3xl transition-all duration-1000 transform ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-semibold mb-6 border border-brand-gold/30">
                  {slide.subtitle}
                </span>
                <h1 
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={slide.primaryBtn.link}>
                    <Button className="w-full sm:w-auto gap-2 text-lg px-8">
                      {slide.primaryBtn.text} <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <Link to={slide.secondaryBtn.link}>
                    <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-dark">
                      {slide.secondaryBtn.text}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:block"
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:block"
        >
          <ChevronRight size={40} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-brand-gold w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-primary relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-4">
              <div className="bg-white/20 p-3 rounded-full text-white mb-3">
                {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Mengapa Memilih Kami?</h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Kami menggabungkan nilai-nilai Islam dengan pendidikan modern untuk menciptakan lingkungan belajar yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-brand-bg rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4 border-transparent hover:border-brand-primary group">
                <div className="bg-white w-16 h-16 rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 text-brand-gold' })}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="py-20 bg-brand-bg overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-xl"></div>
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl"></div>
               {/* Updated Principal Image to a male placeholder to match "Ust." */}
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Kepala Sekolah" 
                 className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto z-10"
               />
               <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                 <p className="font-bold text-brand-dark">Ust. Nama Kepala Sekolah</p>
                 <p className="text-sm text-brand-primary">Kepala Madrasah</p>
               </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Sambutan Mudirul 'Am</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi MTs Persis Cisomang.
                Di era digital ini, kami berupaya untuk terus berinovasi dalam memberikan layanan pendidikan terbaik
                yang berbasis Al-Qur'an dan As-Sunnah. Kami berharap website ini dapat menjadi jembatan informasi
                bagi wali santri, calon santri, dan masyarakat umum."
              </p>
              <div className="flex items-center gap-4">
                 <Link to="/profil">
                    <Button variant="secondary" className="gap-2">
                       Selengkapnya <ChevronRight size={16} />
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-brand-dark relative overflow-hidden">
         <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
             <Star size={200} className="text-brand-gold" />
         </div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah Bersama Kami</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
               Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 telah dibuka.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
               <a href={SCHOOL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="w-full sm:w-auto">
                     Hubungi via WhatsApp
                  </Button>
               </a>
               <Link to="/ppdb">
                  <Button variant="outline" className="w-full sm:w-auto">
                     Info Pendaftaran
                  </Button>
               </Link>
            </div>
         </div>
      </section>
      
      {/* Teacher Profile - Infinite Scroll */}
      <section className="py-16 bg-brand-bg overflow-hidden border-t border-brand-dark/5">
        <div className="container mx-auto px-4 mb-10 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Profil Pengajar</h2>
             <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
             <div className="flex animate-marquee space-x-8 min-w-max py-4">
                 {/* Duplicated list to create the infinite effect */}
                 {[...TEACHERS, ...TEACHERS].map((teacher, idx) => (
                     <div 
                        key={`${teacher.id}-${idx}`} 
                        className="flex-shrink-0 w-64 h-80 bg-white rounded-2xl shadow-md overflow-hidden relative group hover:shadow-xl transition-shadow duration-300"
                     >
                        <img 
                            src={teacher.image} 
                            alt={teacher.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        {/* Overlay only visible on hover (optional as per 'Just photos' but good for UX) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            {/* Uncomment if names are desired in the future */}
                            {/* <p className="text-white font-medium text-lg">{teacher.name}</p> */}
                        </div>
                     </div>
                 ))}
             </div>
        </div>
      </section>
    </main>
  );
};