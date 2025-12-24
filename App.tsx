import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';
import { Academics } from './pages/Academics';
import { Achievements } from './pages/Achievements';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/akademik" element={<Academics />} />
            <Route path="/prestasi" element={<Achievements />} />
            <Route path="/ppdb" element={<Admissions />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;