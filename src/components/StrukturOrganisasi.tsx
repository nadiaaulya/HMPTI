/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  GraduationCap, 
  ShoppingBag, 
  Laptop, 
  Network, 
  Search, 
  User, 
  Mail, 
  Linkedin,
  Compass,
  Award,
  Globe
} from 'lucide-react';
import { KETUA, WAKIL, DIVISIONS } from '../data/hmptiData';
import { Division, Member } from '../types';

export default function StrukturOrganisasi() {
  const [selectedDivId, setSelectedDivId] = useState<string>('psdm');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Map icon names from static data to Lucide React icons
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-5 w-5" />;
      case 'GraduationCap':
        return <GraduationCap className="h-5 w-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="h-5 w-5" />;
      case 'Laptop':
        return <Laptop className="h-5 w-5" />;
      case 'SearchCode':
        return <Network className="h-5 w-5" />; // using Network to represent litbang/research
      case 'Globe':
        return <Globe className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const selectedDivision = DIVISIONS.find((d) => d.id === selectedDivId) || DIVISIONS[0];

  // Global search implementation across leadership & all divisions
  const handleSearch = () => {
    if (!searchQuery) return null;
    
    const query = searchQuery.toLowerCase();
    const results: Member[] = [];
    
    // Check leaders
    if (
      KETUA.name.toLowerCase().includes(query) ||
      KETUA.position.toLowerCase().includes(query)
    ) {
      results.push(KETUA);
    }
    if (
      WAKIL.name.toLowerCase().includes(query) ||
      WAKIL.position.toLowerCase().includes(query)
    ) {
      results.push(WAKIL);
    }
    
    // Check divisions
    DIVISIONS.forEach((div) => {
      div.members.forEach((member) => {
        if (
          member.name.toLowerCase().includes(query) ||
          member.position.toLowerCase().includes(query) ||
          member.nim?.toLowerCase().includes(query)
        ) {
          results.push({
            ...member,
            // Tag with division info for better layout in search results
            email: div.name
          });
        }
      });
    });
    
    return results;
  };

  const searchResults = handleSearch();

  return (
    <section id="struktur" className="py-24 bg-white scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-red/10 border border-primary-red/20 px-3 py-1 rounded-full mb-4"
          >
            <Users className="h-4 w-4 text-primary-red" />
            <span className="text-xs font-semibold text-primary-red uppercase tracking-wider">
              Struktur Kepengurusan 2026/2027
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 title-font"
          >
            Organogram & Pengurus HMPTI
          </motion.h2>
          <div className="h-1 w-20 bg-primary-red mx-auto mt-3 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Sinergi kepemimpinan kolaboratif yang terbagi ke dalam badan pengurus harian 
            serta divisi fungsional yang berdedikasi melayani mahasiswa.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="max-w-md mx-auto mb-16 px-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              id="member-search-input"
              type="text"
              placeholder="Cari nama atau jabatan pengurus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-primary-cream/50 hover:bg-primary-cream focus:bg-white border-2 border-accent-cream focus:border-primary-red rounded-2xl text-gray-800 placeholder-gray-400 transition-colors focus:outline-none shadow-sm font-sans"
            />
            {searchQuery && (
              <button 
                id="search-clear-btn"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-gray-400 hover:text-primary-red transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 1. SECTIONS TO RENDER (STANDARD VIEW VS SEARCH ACTIVE) */}
        <AnimatePresence mode="wait">
          {searchResults !== null ? (
            /* SEARCH RESULTS ACTIVE VIEW */
            <motion.div
              key="search-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[400px]"
            >
              <div className="text-center mb-8">
                <span className="text-sm font-bold text-gray-500">
                  Ditemukan {searchResults.length} hasil pencarian untuk "{searchQuery}"
                </span>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((member) => (
                    <motion.div
                      key={member.id}
                      layout
                      className="bg-primary-cream/30 border border-accent-cream hover:border-primary-red/50 rounded-2xl p-6 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-accent-cream origin-center"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 leading-tight">{member.name}</h4>
                        <p className="text-xs font-semibold text-primary-red mt-0.5">{member.position}</p>
                        <p className="text-[11px] font-mono text-gray-500 mt-1">{member.nim}</p>
                        {member.email && (
                          <span className="inline-block mt-2 bg-accent-cream text-[10px] uppercase tracking-wider font-bold text-gray-600 px-2.5 py-0.5 rounded-full">
                            {member.email}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-primary-cream/30 rounded-3xl border border-dashed border-accent-cream">
                  <User className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">Pengurus tidak ditemukan. Coba keyword lain.</p>
                </div>
              )}
            </motion.div>
          ) : (
            /* ORGANIGRUM TREE STANDARD VIEW */
            <motion.div
              key="standard-tree-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* TOP LEVEL: KETUA & WAKIL KETUA (PHK EXECUTIVE BODY) */}
              <div className="flex flex-col items-center mb-20 relative">
                {/* Visual Connector Lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-accent-cream z-0 hidden lg:block" style={{ height: '140%', top: '20%' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl w-full relative z-10">
                  
                  {/* KETUA CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="p-6 bg-gradient-to-br from-white to-primary-cream/50 rounded-3xl border border-accent-cream shadow-md hover:shadow-xl hover:border-primary-red/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 h-16 w-16 bg-primary-red/10 rounded-bl-3xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-red" />
                    </div>
                    
                    <div className="flex-shrink-0">
                      <img
                        src={KETUA.photoUrl}
                        alt={KETUA.name}
                        referrerPolicy="no-referrer"
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="bg-primary-red/15 text-primary-red text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase leading-none">
                          Pimpinan Inti
                        </span>
                        <h3 className="text-xl font-extrabold text-gray-900 mt-2 hover:text-primary-red transition-colors title-font">
                          {KETUA.name}
                        </h3>
                        <p className="text-sm font-semibold text-primary-red">{KETUA.position}</p>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 pt-3 border-t border-accent-cream/50 flex flex-col sm:flex-row items-center justify-between gap-2">
                        <span className="font-mono text-xs text-gray-500">{KETUA.nim}</span>
                        <div className="flex items-center space-x-2">
                          <a href={`mailto:${KETUA.email}`} className="text-gray-400 hover:text-primary-red transition-colors">
                            <Mail className="h-4 w-4" />
                          </a>
                          <a href={KETUA.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-red transition-colors">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* WAKIL CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
                    className="p-6 bg-gradient-to-br from-white to-primary-cream/50 rounded-3xl border border-accent-cream shadow-md hover:shadow-xl hover:border-primary-red/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 h-16 w-16 bg-primary-red/10 rounded-bl-3xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-red" />
                    </div>
                    
                    <div className="flex-shrink-0">
                      <img
                        src={WAKIL.photoUrl}
                        alt={WAKIL.name}
                        referrerPolicy="no-referrer"
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="bg-primary-red/15 text-primary-red text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase leading-none">
                          Pimpinan Inti
                        </span>
                        <h3 className="text-xl font-extrabold text-gray-900 mt-2 hover:text-primary-red transition-colors title-font">
                          {WAKIL.name}
                        </h3>
                        <p className="text-sm font-semibold text-primary-red">{WAKIL.position}</p>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 pt-3 border-t border-accent-cream/50 flex flex-col sm:flex-row items-center justify-between gap-2">
                        <span className="font-mono text-xs text-gray-500">{WAKIL.nim}</span>
                        <div className="flex items-center space-x-2">
                          <a href={`mailto:${WAKIL.email}`} className="text-gray-400 hover:text-primary-red transition-colors">
                            <Mail className="h-4 w-4" />
                          </a>
                          <a href={WAKIL.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-red transition-colors">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* 2. TABBED DIVISIONS CONTROL PANEL */}
              <div className="border-t border-accent-cream pt-16">
                <div className="flex flex-col items-center mb-10">
                  <h3 className="text-lg font-bold text-gray-800 title-font tracking-wide uppercase mb-2">
                    Eksplorasi Divisi Fungsional
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 text-center max-w-md">
                    Silakan klik tab divisi berikut untuk menampilkan detail struktur, deskripsi tugas, 
                    dan profil 6 pengurus di dalamnya.
                  </p>
                </div>

                {/* Grid Tabs Button */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 max-w-5xl mx-auto px-2">
                  {DIVISIONS.map((division) => {
                    const isSelected = division.id === selectedDivId;
                    return (
                      <button
                        key={division.id}
                        id={`div-tab-${division.id}`}
                        onClick={() => setSelectedDivId(division.id)}
                        className={`flex py-3.5 px-3 rounded-2xl items-center justify-center flex-col gap-2 border-2 text-center transition-all duration-300 focus:outline-none cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-br from-primary-red to-primary-dark-red text-white border-primary-red shadow-lg scale-105'
                            : 'bg-primary-cream/30 border-accent-cream text-gray-600 hover:border-primary-red/30 hover:bg-white hover:text-primary-red'
                        }`}
                      >
                        {getIconComponent(division.iconName)}
                        <span className="text-xs sm:text-sm font-bold tracking-wide">
                          {division.name.replace('Divisi ', '')}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* 3. ACTIVE DIVISION DETAILS & MEMBERS LIST */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDivId}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="bg-[#FCF8F2]/40 rounded-3xl border border-accent-cream/80 p-6 sm:p-10 max-w-6xl mx-auto shadow-sm"
                  >
                    {/* Division Header information */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-accent-cream/80 gap-4">
                      <div>
                        <h4 className="text-2xl font-extrabold text-gray-900 title-font flex items-center gap-2">
                          <span className="text-primary-red p-1.5 bg-white border border-accent-cream rounded-xl">
                            {getIconComponent(selectedDivision.iconName)}
                          </span>
                          {selectedDivision.name}
                        </h4>
                        <p className="text-xs text-primary-red font-semibold uppercase tracking-wider mt-1 font-mono">
                          STRUKTUR 6 PENGURUS UTAMA
                        </p>
                      </div>
                      <p className="max-w-md text-sm text-gray-600 leading-relaxed bg-white/60 p-4 rounded-2xl border border-accent-cream/30">
                        {selectedDivision.description}
                      </p>
                    </div>

                    {/* Member List Grid (Shows exactly 6 cards with nice design) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedDivision.members.map((member, idx) => {
                        // Highlight coordinator or secretary slightly
                        const isKoord = member.position.includes('Koordinator');
                        const isSekre = member.position.includes('Sekretaris');

                        return (
                          <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className={`bg-white rounded-2xl p-5 border shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden group flex flex-col justify-between ${
                              isKoord
                                ? 'border-primary-red/30 bg-gradient-to-br from-white to-primary-cream/10'
                                : 'border-accent-cream hover:border-primary-red/20'
                            }`}
                          >
                            {/* Decorative Corner Tag for Special Role */}
                            {isKoord && (
                              <div className="absolute top-0 right-0 bg-primary-red text-[8px] font-bold text-white px-2.5 py-1 rounded-bl-xl uppercase tracking-widest">
                                KOORDINATOR
                              </div>
                            )}
                            {isSekre && (
                              <div className="absolute top-0 right-0 bg-orange-600 text-[8px] font-bold text-white px-2.5 py-1 rounded-bl-xl uppercase tracking-widest">
                                SEKRETARIS
                              </div>
                            )}

                            <div className="flex items-center space-x-4 mb-4">
                              <img
                                src={member.photoUrl}
                                alt={member.name}
                                referrerPolicy="no-referrer"
                                className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-accent-cream shadow group-hover:scale-105 transition-transform"
                              />
                              <div>
                                <h5 className="font-extrabold text-gray-900 group-hover:text-primary-red transition-colors text-sm sm:text-base leading-tight">
                                  {member.name}
                                </h5>
                                <p className="text-xs text-primary-red font-semibold mt-0.5 min-h-[16px]">
                                  {member.position}
                                </p>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-accent-cream/60 flex items-center justify-between">
                              <span className="font-mono text-[11px] text-gray-400 font-medium">NIM {member.nim}</span>
                              <div className="flex space-x-1">
                                <span className="text-[10px] bg-accent-cream text-gray-500 rounded-full px-2 py-0.5 font-bold uppercase tracking-wide">
                                  TI KAMPUS
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
