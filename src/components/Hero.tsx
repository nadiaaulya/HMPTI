/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Terminal, ChevronDown, Award, Globe, Code } from 'lucide-react';
import { HMPTI_INFO } from '../data/hmptiData';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FCF8F2] pt-20"
    >
      {/* Visual background decorations (Red and Warm Cream accents) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #B91C1C 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Giant ambient gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-red/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-primary-red/5 blur-3xl" />
        
        {/* Animated binary decoration code stream in background */}
        <div className="absolute right-10 bottom-20 opacity-5 font-mono text-xs text-primary-red hidden lg:block select-none leading-relaxed">
          <div>{'import { HMPTI } from "@prodi/ti";'}</div>
          <div>{'class Sinergi extends HumanOrg {'}</div>
          <div>{'  constructor() {'}</div>
          <div>{'    super("Inovasi", "Kolaborasi");'}</div>
          <div>{'    this.members = 1200+;'}</div>
          <div>{'  }'}</div>
          <div>{'}'}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtitle Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-red/10 to-primary-red/5 border border-primary-red/20 px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Terminal className="h-4 w-4 text-primary-red animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary-red tracking-wide">
              {HMPTI_INFO.fullName}
            </span>
          </motion.div>

          {/* Main Tagline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6 title-font"
          >
            Sinergi <span className="text-primary-red">Inovasi</span> &<br />
            <span className="bg-gradient-to-r from-primary-red to-primary-dark-red bg-clip-text text-transparent">
              Kolaborasi
            </span>{' '}
            Teknologi
          </motion.h1>

          {/* Motivational Paragraph */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed px-2"
          >
            Wadah kolaboratif mahasiswa Teknik Informatika untuk mengasah keahlian digital, 
            memperluas relasi sosial, menyalurkan aspirasi kreatif, dan berkarya nyata bagi masyarakat.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 w-full px-4"
          >
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-red to-primary-dark-red hover:from-primary-dark-red hover:to-primary-red text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center space-x-3 group"
            >
              <span>Eksplor Portal</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#aspirasi"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-accent-cream border-2 border-accent-cream text-gray-800 font-bold rounded-xl shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Hubungi Aspirasi</span>
            </a>
          </motion.div>

          {/* Quick highlight stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto pt-8 border-t border-accent-cream/80 w-full"
          >
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent-cream">
              <span className="text-3xl md:text-4xl font-extrabold text-primary-red">1.200+</span>
              <span className="text-xs md:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">Anggota Aktif</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent-cream">
              <span className="text-3xl md:text-4xl font-extrabold text-primary-red">8</span>
              <span className="text-xs md:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">Divisi Strategis</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent-cream">
              <span className="text-3xl md:text-4xl font-extrabold text-primary-red">15+</span>
              <span className="text-xs md:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">Proker Unggulan</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator bouncing icon */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 font-medium text-xs hidden md:flex flex-col items-center gap-1 select-none pointer-events-none">
          <span>Gulir Kebawah</span>
          <ChevronDown className="h-4 w-4 animate-subtle-bounce text-primary-red" />
        </div>
      </div>
    </section>
  );
}
