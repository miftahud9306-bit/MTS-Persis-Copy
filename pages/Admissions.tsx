import React from 'react';
import { Section } from '../components/Section';
import { CheckCircle, Calendar, FileText, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { SCHOOL_INFO } from '../constants';

export const Admissions: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-brand-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Penerimaan Peserta Didik Baru</h1>
                <p className="text-lg md:text-xl text-green-50 opacity-90 mb-8 max-w-2xl mx-auto">
                    Tahun Ajaran 2024/2025. Mari bergabung menjadi bagian dari keluarga besar MTs Persis Cisomang.
                </p>
                <a href={SCHOOL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="font-bold text-lg px-8 py-4">
                        Daftar via WhatsApp
                    </Button>
                </a>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-dark opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Syarat */}
            <div className="md:col-span-2 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
                        <FileText className="mr-3 text-brand-primary" /> Syarat Pendaftaran
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <ul className="space-y-4">
                            {[
                                "Mengisi Formulir Pendaftaran",
                                "Fotocopy Ijazah SD/MI (Legalisir 2 rangkap)",
                                "Fotocopy SKHUN (Legalisir 2 rangkap)",
                                "Fotocopy Kartu Keluarga (KK)",
                                "Fotocopy Akta Kelahiran",
                                "Pas Foto 3x4 (4 lembar) dan 2x3 (4 lembar)",
                                "Fotocopy KIP/PKH/KKS (Jika ada)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
                        <Calendar className="mr-3 text-brand-primary" /> Jadwal Pendaftaran
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-brand-bg p-6 rounded-xl border-l-4 border-brand-primary">
                            <h3 className="font-bold text-brand-dark mb-2">Gelombang 1</h3>
                            <p className="text-sm text-gray-600 mb-1">Pendaftaran & Seleksi</p>
                            <p className="text-lg font-semibold text-brand-primary">Januari - Maret 2024</p>
                        </div>
                        <div className="bg-brand-bg p-6 rounded-xl border-l-4 border-brand-gold">
                            <h3 className="font-bold text-brand-dark mb-2">Gelombang 2</h3>
                            <p className="text-sm text-gray-600 mb-1">Pendaftaran & Seleksi</p>
                            <p className="text-lg font-semibold text-brand-gold">April - Juni 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Sidebar */}
            <div className="h-fit sticky top-24">
                <div className="bg-brand-dark text-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
                    <p className="text-gray-300 mb-6 text-sm">
                        Jika ada informasi yang kurang jelas mengenai pendaftaran, silakan hubungi panitia PPDB kami.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center p-3 bg-white/10 rounded-lg">
                            <Phone className="w-5 h-5 text-brand-gold mr-3" />
                            <div>
                                <p className="text-xs text-gray-400">Hotline / WhatsApp</p>
                                <p className="font-semibold">{SCHOOL_INFO.phone}</p>
                            </div>
                        </div>
                    </div>

                    <a href={SCHOOL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Button fullWidth variant="secondary">
                            Chat Panitia
                        </Button>
                    </a>
                </div>
            </div>
        </div>
      </Section>
    </main>
  );
};