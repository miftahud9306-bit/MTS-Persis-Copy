import React from 'react';
import { BookOpen, Users, Trophy, GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NavItem, Feature, SchoolStats } from './types';

export const SCHOOL_INFO = {
  name: "MTs Persis Cisomang",
  address: "Jl. Desa Cisomang Barat No.003/009, Cisomang Bar., Kec. Cikalong Wetan, Kabupaten Bandung Barat, Jawa Barat 40556",
  phone: "0813-2946-3017",
  whatsappUrl: "https://wa.me/6281329463017",
  mapsLink: "https://maps.app.goo.gl/XG8oMJBhAcPmKRoB8",
  logo: "https://res.cloudinary.com/dllys6jl9/image/upload/v1766608096/69cef83d-740d-4ffa-93b7-0f7de559e6dd_removalai_preview_lnkypn.png",
  email: "info@mtspersiscisomang.sch.id", // Placeholder
  province: "Jawa Barat"
};

export const COLORS = {
  brandDark: '#0F3D2E',
  brandPrimary: '#1FAF7A',
  brandGold: '#F4C430',
  textMain: '#2E2E2E',
  bgLight: '#F2F4F3',
  white: '#FFFFFF',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil', path: '/profil' },
  { label: 'Akademik', path: '/akademik' },
  { label: 'Prestasi', path: '/prestasi' },
  { label: 'PPDB', path: '/ppdb' },
  { label: 'Kontak', path: '/kontak' },
];

export const FEATURES: Feature[] = [
  {
    title: "Kurikulum Terpadu",
    description: "Memadukan kurikulum nasional dan kepesantrenan untuk membentuk karakter Islami yang kuat.",
    icon: <BookOpen className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "Pengajar Berkualitas",
    description: "Didukung oleh tenaga pendidik yang kompeten, berdedikasi, dan berpengalaman di bidangnya.",
    icon: <Users className="w-8 h-8 text-brand-gold" />
  },
  {
    title: "Ekstrakurikuler",
    description: "Beragam kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.",
    icon: <Trophy className="w-8 h-8 text-brand-gold" />
  },
];

export const STATS: SchoolStats[] = [
  { label: "Siswa Aktif", value: "350+", icon: <Users className="w-6 h-6" /> },
  { label: "Guru & Staf", value: "25+", icon: <GraduationCap className="w-6 h-6" /> },
  { label: "Lulusan", value: "1000+", icon: <Trophy className="w-6 h-6" /> },
];

export const CONTACT_DETAILS = [
  {
    icon: <MapPin className="w-5 h-5 text-brand-primary" />,
    text: SCHOOL_INFO.address,
  },
  {
    icon: <Phone className="w-5 h-5 text-brand-primary" />,
    text: SCHOOL_INFO.phone,
  },
  {
    icon: <Mail className="w-5 h-5 text-brand-primary" />,
    text: SCHOOL_INFO.email,
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-primary" />,
    text: "Sabtu - Kamis: 07:00 - 14:00",
  }
];

export const TEACHERS = [
  { id: 1, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 1" },
  { id: 2, image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 2" },
  { id: 3, image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 3" },
  { id: 4, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 4" },
  { id: 5, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 5" },
  { id: 6, image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 6" },
  { id: 7, image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 7" },
  { id: 8, image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", name: "Teacher 8" },
];

export interface Achievement {
  id: number;
  title: string;
  category: "Akademik" | "Non-Akademik" | "Keagamaan";
  level: "Kecamatan" | "Kabupaten" | "Provinsi" | "Nasional" | "Internal";
  year: string;
  description: string;
  image: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Juara 1 Lomba Pidato Bahasa Arab",
    category: "Keagamaan",
    level: "Kabupaten",
    year: "2023",
    description: "Meraih juara pertama dalam ajang pekan kreativitas santri tingkat Kabupaten Bandung Barat.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Juara 2 Kompetisi Sains Madrasah (Matematika)",
    category: "Akademik",
    level: "Kabupaten",
    year: "2023",
    description: "Prestasi membanggakan di bidang akademik sains dalam KSM tahun 2023.",
    image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Juara 1 Turnamen Futsal Liga Santri",
    category: "Non-Akademik",
    level: "Kabupaten",
    year: "2023",
    description: "Tim futsal sekolah berhasil membawa pulang piala bergilir Liga Santri.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Juara Harapan 1 Musabaqah Hifdzil Qur'an",
    category: "Keagamaan",
    level: "Provinsi",
    year: "2022",
    description: "Kategori 5 Juz tingkat Provinsi Jawa Barat.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Juara 2 Lomba Kaligrafi Kontemporer",
    category: "Non-Akademik",
    level: "Kabupaten",
    year: "2022",
    description: "Kreativitas seni Islam yang dituangkan dalam kanvas.",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Juara 3 Lomba Pramuka Sandi Morse",
    category: "Non-Akademik",
    level: "Kecamatan",
    year: "2023",
    description: "Ketangkasan regu pramuka dalam memecahkan sandi.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const ACADEMIC_GALLERY = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577896334699-1e6a5b17a7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Kegiatan Belajar Mengajar",
    description: "Suasana pembelajaran yang interaktif dan kondusif di dalam kelas."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Program Tahfidz Al-Qur'an",
    description: "Setoran hafalan rutin santri kepada pembimbing tahfidz."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Praktikum Sains",
    description: "Eksperimen sains di laboratorium untuk mempraktikkan teori pelajaran."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1526634332515-d5102928d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Ekstrakurikuler Pramuka",
    description: "Kegiatan kepramukaan untuk melatih kemandirian dan kedisiplinan."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Kajian Kitab Kuning",
    description: "Pendalaman ilmu agama melalui kajian kitab-kitab turats."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Olahraga Futsal",
    description: "Pertandingan persahabatan antar kelas untuk menjaga kebugaran fisik."
  }
];