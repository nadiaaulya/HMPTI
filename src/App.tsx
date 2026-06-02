/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import StrukturOrganisasi from './components/StrukturOrganisasi';
import ProgramKerja from './components/ProgramKerja';
import AspirasiForm from './components/AspirasiForm';
import { HMPTI_INFO } from './data/hmptiData';
import { 
  Instagram, 
  Github, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Compass, 
  Terminal, 
  Heart,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dynamic Scroll & Section Highlighting via Intersection Observer
  useEffect(() => {
    const handleScrollButton = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScrollButton);

    const sections = ['home', 'profil', 'proker', 'aspirasi'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Trigger when 35% of the section is visible in screen viewport
          threshold: 0.35,
          rootMargin: '-80px 0px 0px 0px', // adjustment for fixed navbar height
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      window.removeEventListener('scroll', handleScrollButton);
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const handleExploreClick = () => {
    const element = document.getElementById('profil');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-800 antialiased font-sans">
      
      {/* 1. TOP RESPONSIVE NAVIGATION */}
      <Navbar activeSection={activeSection} />

      {/* 2. CORE SECTIONS */}
      <main>
        {/* HERO SECTION */}
        <Hero onExploreClick={handleExploreClick} />

        {/* PROFIL SECTION (VISION & MISSION) */}
        <Profil />

        {/* STRUKTUR ORGANISASI SECTION (ORGANIGRAM & MEMBERS DIRECTORY) */}
        <StrukturOrganisasi />

        {/* PROGRAM KERJA SECTION (GRID GALLERY) */}
        <ProgramKerja />

        {/* FORM ASPIRASI SECTION (FORM & REAL-TIME FEED) */}
        <AspirasiForm />
      </main>

      {/* 3. CAMPUS-THEMED FOOTER (Red and Accent Creams) */}
      <footer className="bg-primary-dark-red text-white py-16 border-t font-sans border-red-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
            
            {/* FIRST COLUMN: Description & Brand */}
            <div className="md:col-span-5 flex flex-col justify-start space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary-red p-2.5 rounded-xl border border-white/10 shadow-lg text-primary-cream">
                  <Terminal className="h-6 w-6 text-primary-cream" />
                </div>
                <span className="text-2xl font-black tracking-tight title-font text-white">
                  HMP<span className="text-accent-cream">TI</span>
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Organisasi resmi wadah mahasiswa Program Studi Teknik Informatika dalam mengembangkan skill teknis, 
                nilai-nilai solidaritas demokratis, kepemimpinan, serta kepedulian lingkungan sosial.
              </p>
              
              {/* Social links handles */}
              <div className="flex items-center space-x-3 pt-4">
                <a 
                  id="footer-ig-link"
                  href={`https://instagram.com/${HMPTI_INFO.instagram}`} 
                  className="p-3 rounded-xl bg-white/5 hover:bg-primary-red hover:text-white border border-white/10 hover:border-white/35 text-gray-300 transition-all duration-300 shadow-inner group"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-105" />
                </a>
                <a 
                  id="footer-github-link"
                  href={HMPTI_INFO.github} 
                  className="p-3 rounded-xl bg-white/5 hover:bg-primary-red hover:text-white border border-white/10 hover:border-white/35 text-gray-300 transition-all duration-300 shadow-inner group"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 group-hover:scale-105" />
                </a>
                <a 
                  id="footer-email-link"
                  href={`mailto:${HMPTI_INFO.email}`} 
                  className="p-3 rounded-xl bg-white/5 hover:bg-primary-red hover:text-white border border-white/10 hover:border-white/35 text-gray-300 transition-all duration-300 shadow-inner group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 group-hover:scale-105" />
                </a>
              </div>
            </div>

            {/* SECOND COLUMN: NAVIGATION LINKS */}
            <div className="md:col-span-3 flex flex-col justify-start">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#FFF2DC] mb-5 font-mono">
                Pintasan Menu
              </h4>
              <ul className="space-y-3.5 text-sm">
                {[
                  { id: 'home', label: 'Halaman Utama' },
                  { id: 'profil', label: 'Visi & Misi Profil' },
                  { id: 'struktur', label: 'Struktur Pengurus TI' },
                  { id: 'proker', label: 'Program Unggulan' },
                  { id: 'aspirasi', label: 'Kanal Aspirasi Live' }
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-gray-300 hover:text-white flex items-center gap-1 group transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-primary-red group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* THIRD COLUMN: GEOLOCATION / MAP DETAILS */}
            <div className="md:col-span-4 flex flex-col justify-start">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#FFF2DC] mb-5 font-mono">
                Sekretariat HMPTI
              </h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-red mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">
                    Gedung Kemahasiswaan F Lantai 2, <br />
                    Kampus Universitas Teknik Informatika, <br />
                    Indonesia
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-primary-red mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed font-semibold">
                    Departemen Pendidikan Tinggi Republik <br />
                    Kaderisasi Nasional Organisasi TI
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright disclaimer */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} HMPTI - Teknik Informatika. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1 font-mono uppercase tracking-widest">
              <span>Sinergi</span>
              <span className="text-primary-red">•</span>
              <span>Inovasi</span>
              <span className="text-primary-red">•</span>
              <span>Kolaborasi</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 4. FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-primary-red hover:bg-primary-dark-red text-white rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:translate-y-[-2px] transition-all"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
