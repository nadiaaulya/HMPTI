/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { WORK_PROGRAMS } from '../data/hmptiData';
import { 
  Rocket, 
  BookOpen, 
  Lightbulb, 
  Calendar, 
  Target, 
  Heart, 
  Store,
  Terminal,
  Grid
} from 'lucide-react';
import { ProgramKerja as ProkerType } from '../types';

export default function ProgramKerja() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');

  const categories = ['Semua', 'Akademik', 'Teknologi', 'Kreatif', 'Sosial', 'Kewirausahaan'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Akademik':
        return <BookOpen className="h-4 w-4" />;
      case 'Teknologi':
        return <Terminal className="h-4 w-4" />;
      case 'Kreatif':
        return <Lightbulb className="h-4 w-4" />;
      case 'Sosial':
        return <Heart className="h-4 w-4" />;
      case 'Kewirausahaan':
        return <Store className="h-4 w-4" />;
      default:
        return <Rocket className="h-4 w-4" />;
    }
  };

  const getStatusStyle = (status: ProkerType['status']) => {
    switch (status) {
      case 'Selesai':
        return {
          bg: 'bg-emerald-100 border-emerald-200 text-emerald-800',
          label: 'Selesai Terlaksana'
        };
      case 'Berjalan':
        return {
          bg: 'bg-sky-100 border-sky-200 text-sky-800',
          label: 'Sedang Berjalan'
        };
      case 'Persiapan':
        return {
          bg: 'bg-amber-100 border-amber-200 text-amber-800',
          label: 'Dalam Persiapan'
        };
      case 'Rencana':
        return {
          bg: 'bg-purple-100 border-purple-200 text-purple-800',
          label: 'Rencana Agenda'
        };
      default:
        return {
          bg: 'bg-gray-100 border-gray-200 text-gray-800',
          label: 'Agenda'
        };
    }
  };

  // Filter programs
  const filteredPrograms = selectedFilter === 'Semua' 
    ? WORK_PROGRAMS 
    : WORK_PROGRAMS.filter(p => p.category === selectedFilter);

  return (
    <section id="proker" className="py-24 bg-gradient-to-b from-white to-[#FCF8F2]/60 scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-red/10 border border-primary-red/20 px-3 py-1 rounded-full mb-4"
          >
            <Grid className="h-4 w-4 text-primary-red" />
            <span className="text-xs font-semibold text-primary-red uppercase tracking-wider">
              Agenda Kreatif & Kerja Nyata
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 title-font"
          >
            Program Kerja Unggulan
          </motion.h2>
          <div className="h-1 w-20 bg-primary-red mx-auto mt-3 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 mt-4 font-sans">
            Rangkaian kegiatan strategis berbasis teknologi informasi yang dikemas secara profesional 
            untuk meningkatkan mutu profesionalitas, akademis, dan kreativitas mahasiswa.
          </p>
        </div>

        {/* Categories Tab Pill Filter */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-12 px-4">
          {categories.map((cat) => {
            const isSelected = cat === selectedFilter;
            return (
              <button
                key={cat}
                id={`proker-category-pill-${cat}`}
                onClick={() => setSelectedFilter(cat)}
                className={`flex items-center space-x-1.5 py-2 px-4 rounded-full text-xs sm:text-sm font-bold tracking-wide border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary-red border-primary-red text-white shadow-md'
                    : 'bg-white border-accent-cream text-gray-600 hover:border-primary-red/30 hover:text-primary-red'
                }`}
              >
                {cat !== 'Semua' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((proker, index) => {
            const statusInfo = getStatusStyle(proker.status);

            return (
              <motion.div
                key={proker.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl border border-accent-cream shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:translate-y-[-4px]"
              >
                {/* Header card decor */}
                <div className="p-6 sm:p-8 flex-1">
                  
                  {/* Category & Status tag info */}
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 bg-accent-cream text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-accent-cream/40">
                      {getCategoryIcon(proker.category)}
                      <span>{proker.category}</span>
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${statusInfo.bg}`}>
                      {statusInfo.label}
                    </span>
                  </div>

                  {/* Title of Proker */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug group-hover:text-primary-red transition-colors mb-3 title-font">
                    {proker.title}
                  </h3>

                  {/* Description of Proker */}
                  <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
                    {proker.description}
                  </p>

                </div>

                {/* Footer details inside card */}
                <div className="bg-primary-cream/50 px-6 sm:px-8 py-5 border-t border-accent-cream/60 grid grid-cols-2 gap-4">
                  
                  {/* Scheduled date */}
                  <div className="flex items-start space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block leading-none mb-1">JADWAL</span>
                      <span className="text-xs font-bold text-gray-700 leading-none">{proker.date}</span>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="flex items-start space-x-2">
                    <Target className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block leading-none mb-1">SASARAN</span>
                      <span className="text-xs font-bold text-gray-700 leading-tight block truncate" title={proker.targetAudience}>
                        {proker.targetAudience}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
        
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-white border border-dashed border-accent-cream rounded-3xl max-w-md mx-auto">
            <BookOpen className="h-10 w-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-500">Belum ada program kerja untuk kategori ini.</p>
          </div>
        )}

      </div>
    </section>
  );
}
