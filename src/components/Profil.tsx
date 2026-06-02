/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Compass, Award, Shield, UserCheck } from 'lucide-react';
import { VISI_MISI, HMPTI_INFO } from '../data/hmptiData';

export default function Profil() {
  const missionIcons = [
    <Shield id="misi-icon-0" className="h-6 w-6 text-primary-red" />,
    <Compass id="misi-icon-1" className="h-6 w-6 text-primary-red" />,
    <UserCheck id="misi-icon-2" className="h-6 w-6 text-primary-red" />
  ];

  return (
    <section id="profil" className="py-24 bg-gradient-to-b from-primary-cream to-white scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 title-font relative inline-block"
          >
            Profil & Landasan Kegiatan
            <div className="h-1 w-20 bg-primary-red mx-auto mt-3 rounded-full" />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed"
          >
            Mengenal lebih dekat arah gerak {HMPTI_INFO.fullName}. Sebagai denyut nadi kemahasiswaan, 
            HMPTI dibangun atas landasan sinergi akademik dan pengembangan keanggotaan.
          </motion.p>
        </div>

        {/* Visi & Misi Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* VISI CARD (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-12 xl:col-span-5 bg-gradient-to-br from-primary-red to-primary-dark-red rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient background decoration */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            <div className="absolute top-10 right-10 opacity-10">
              <Target className="h-32 w-32" />
            </div>

            <div className="relative z-10">
              <div className="bg-white/10 border border-white/20 p-3 rounded-2xl w-fit mb-8 shadow-inner">
                <Target className="h-8 w-8 text-accent-cream" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 title-font text-accent-cream">
                VISI HMPTI
              </h3>
              <p className="text-xl sm:text-2xl font-medium leading-relaxed font-sans text-white/95">
                "{VISI_MISI.visi}"
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/20 relative z-10 text-white/80 text-xs sm:text-sm font-medium tracking-wider flex items-center gap-2 uppercase">
              <Award className="h-4 w-4" />
              <span>Arah Gerak Kepengurusan Terintegrasi</span>
            </div>
          </motion.div>

          {/* MISI CARDS (Right Column) */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-2"
            >
              <Compass className="h-6 w-6 text-primary-red" />
              <h3 className="text-2xl font-bold text-gray-900 title-font uppercase tracking-wide">
                MISI KEPENGURUSAN
              </h3>
            </motion.div>

            {VISI_MISI.misi.map((misiText, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-8 bg-accent-cream/40 hover:bg-accent-cream/70 border border-accent-cream rounded-2xl hover:shadow-md transition-all duration-300 group"
                >
                  {/* Number Indicator Circle */}
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-accent-cream text-primary-red font-bold text-lg shadow-sm group-hover:bg-primary-red group-hover:text-white group-hover:border-primary-red transition-all duration-300">
                    {index + 1}
                  </div>

                  {/* Icon & content info */}
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 leading-snug">
                      Misi Ke-{index + 1}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {misiText}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
