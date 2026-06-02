/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  FileText, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  AlertCircle,
  Hash,
  Rss,
  Info
} from 'lucide-react';
import { Aspirasi } from '../types';

export default function AspirasiForm() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation error states
  const [errors, setErrors] = useState<{ name?: string; nim?: string; message?: string }>({});
  
  // Successful alert modal state
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  // Feed list state (with 3 default values for high design fidelity)
  const [aspirations, setAspirations] = useState<Aspirasi[]>([
    {
      id: 'asp-1',
      name: 'Muhammad Akbar',
      nim: 'A11.2023.14912',
      message: 'Mohon untuk memfasilitasi lebih banyak kelas pelatihan coding camp tingkat lanjut seperti machine learning atau deployment server.',
      createdAt: 'Kemarin, 14:22'
    },
    {
      id: 'asp-2',
      name: 'Siti Rahayu',
      nim: 'A11.2024.15560',
      message: 'Saran untuk kegiatan IT Fest, semoga ada lomba UI/UX Design juga selain competitive programming agar mahasiswa non-coder bisa ikut berkontribusi.',
      createdAt: '2 Hari Lalu, 09:10'
    }
  ]);

  // Handle Input Changes & dynamic clearing of error
  const handleInputChange = (
    field: 'name' | 'nim' | 'message', 
    value: string
  ) => {
    if (field === 'name') {
      setName(value);
      if (value.trim()) setErrors(prev => ({ ...prev, name: undefined }));
    } else if (field === 'nim') {
      // Allow only numbers and dots corresponding to Indonesian student identification number formats
      const cleanValue = value.replace(/[^0-9a-zA-Z.]/g, '');
      setNim(cleanValue);
      if (cleanValue.trim()) setErrors(prev => ({ ...prev, nim: undefined }));
    } else if (field === 'message') {
      setMessage(value);
      if (value.trim().length >= 10) setErrors(prev => ({ ...prev, message: undefined }));
    }
  };

  // Validation Check before submit
  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    } else if (name.trim().length < 3) {
      newErrors.name = 'Nama minimal terdiri dari 3 karakter';
    }

    if (!nim.trim()) {
      newErrors.nim = 'NIM mahasiswa wajib diisi';
    } else if (nim.trim().length < 5) {
      newErrors.nim = 'NIM tidak valid. Silakan periksa kembali.';
    }

    if (!message.trim()) {
      newErrors.message = 'Pesan aspirasi wajib diisi';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Sampaikan aspirasi lebih rinci (minimal 10 karakter)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Create new Aspiration model
    const newAspiration: Aspirasi = {
      id: `asp-${Date.now()}`,
      name: name.trim(),
      nim: nim.trim().toUpperCase(),
      message: message.trim(),
      createdAt: 'Baru saja'
    };

    // Prepend new aspiration to lists
    setAspirations(prev => [newAspiration, ...prev]);

    // Show Success Modal Success Notification
    setIsSuccessModalOpen(true);

    // Reset Inputs
    setName('');
    setNim('');
    setMessage('');
    setErrors({});
  };

  return (
    <section id="aspirasi" className="py-24 bg-white scroll-mt-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-red/10 border border-primary-red/20 px-3 py-1 rounded-full mb-4"
          >
            <MessageSquare className="h-4 w-4 text-primary-red" />
            <span className="text-xs font-semibold text-primary-red uppercase tracking-wider">
              Layanan Aspirasi Mahasiswa
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 title-font"
          >
            Suarakan Ide & Aspirasi Anda
          </motion.h2>
          <div className="h-1 w-20 bg-primary-red mx-auto mt-3 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-sans">
            Pendapat Anda penting! Kami menyediakan kanal interaktif ini untuk menjaring keluhan, masukan, 
            kritik, maupun saran demi kemajuan bersama prodi Teknik Informatika.
          </p>
        </div>

        {/* Dual Grid: Left Form, Right Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: INTERACTIVE FORM CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="lg:col-span-12 xl:col-span-5 bg-gradient-to-br from-primary-cream/40 to-accent-cream/40 border border-accent-cream p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Soft decorative spot */}
            <div className="absolute right-0 top-0 -translate-x-4 -translate-y-4 w-32 h-32 bg-primary-red/5 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="h-5 w-5 text-primary-red" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 title-font">
                Formulir Aspirasi Pengguna
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* NAMA INPUT */}
              <div>
                <label htmlFor="form-name-input" className="block text-xs sm:text-sm font-bold text-gray-700 tracking-wide uppercase mb-2 flex items-center gap-1.5 cursor-pointer">
                  <User className="h-4 w-4 text-gray-400" />
                  <span>Nama Lengkap</span>
                </label>
                <div className="relative">
                  <input
                    id="form-name-input"
                    type="text"
                    placeholder="Contoh: Aulia Nabila"
                    value={name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-white border border-accent-cream rounded-xl text-gray-800 placeholder-gray-450 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-sans text-sm ${
                      errors.name ? 'border-primary-red ring-1 ring-primary-red' : ''
                    }`}
                  />
                </div>
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-xs font-semibold text-primary-red mt-1.5 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.name}</span>
                  </motion.p>
                )}
              </div>

              {/* NIM INPUT */}
              <div>
                <label htmlFor="form-nim-input" className="block text-xs sm:text-sm font-bold text-gray-700 tracking-wide uppercase mb-2 flex items-center gap-1.5 cursor-pointer">
                  <Hash className="h-4 w-4 text-gray-400" />
                  <span>NIM Mahasiswa</span>
                </label>
                <div className="relative">
                  <input
                    id="form-nim-input"
                    type="text"
                    placeholder="Contoh: A11.2023.14201"
                    value={nim}
                    onChange={(e) => handleInputChange('nim', e.target.value)}
                    className={`w-full px-4 py-3 bg-white border border-accent-cream rounded-xl text-gray-800 placeholder-gray-450 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-mono text-sm ${
                      errors.nim ? 'border-primary-red ring-1 ring-primary-red' : ''
                    }`}
                  />
                </div>
                {errors.nim && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-xs font-semibold text-primary-red mt-1.5 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.nim}</span>
                  </motion.p>
                )}
              </div>

              {/* PESAN INPUT (TEXTAREA) */}
              <div>
                <label htmlFor="form-message-input" className="block text-xs sm:text-sm font-bold text-gray-700 tracking-wide uppercase mb-2 flex items-center gap-1.5 cursor-pointer">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span>Pesan / Aspirasi</span>
                </label>
                <div className="relative">
                  <textarea
                    id="form-message-input"
                    rows={4}
                    placeholder="Tuliskan kritik, saran, ide, atau wadah aspirasi Anda di sini..."
                    value={message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 bg-white border border-accent-cream rounded-xl text-gray-800 placeholder-gray-450 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all font-sans text-sm resize-none ${
                      errors.message ? 'border-primary-red ring-1 ring-primary-red' : ''
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-[10px] font-bold text-gray-450">
                  <span className="flex items-center gap-1">
                    <Info className="h-3 w-3 text-gray-400" />
                    <span>Masukan akan disaring oleh internal Kominfo</span>
                  </span>
                  <span className={message.trim().length >= 10 ? 'text-primary-red' : 'text-gray-400'}>
                    {message.trim().length} karakter
                  </span>
                </div>
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-xs font-semibold text-primary-red mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.message}</span>
                  </motion.p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                id="submit-aspirasi-btn"
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-primary-red to-primary-dark-red hover:from-primary-dark-red hover:to-primary-red text-white text-sm font-bold rounded-xl shadow-md uppercase tracking-wider flex items-center justify-center space-x-2.5 transition-all duration-300"
              >
                <span>Kirim Aspirasi</span>
                <Send className="h-4 w-4" />
              </button>

            </form>
          </motion.div>

          {/* RIGHT COLUMN: LIVE REAL-TIME ASPIRATION FEEDSTREAM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="lg:col-span-12 xl:col-span-7 flex flex-col items-stretch"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Rss className="h-5 w-5 text-primary-red" />
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 title-font">
                  Suara Mahasiswa Teknik Informatika
                </h3>
              </div>
              <span className="text-xs font-bold text-primary-red bg-primary-red/10 border border-primary-red/15 py-1 px-3 rounded-full animate-pulse uppercase">
                🔴 Live Feed
              </span>
            </div>

            <p className="text-sm text-gray-550 mb-6 font-sans">
              Daftar aspirasi masuk terbaru yang sedang diverifikasi dan ditinjau oleh Dewan Perwakilan Anggota HMPTI.
            </p>

            {/* Scrollable list content */}
            <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2 custom-feed-scrollbar">
              <AnimatePresence initial={false}>
                {aspirations.map((asp, idx) => (
                  <motion.div
                    key={asp.id}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.35, type: 'spring' }}
                    className="p-5 sm:p-6 bg-[#FCF8F2]/30 hover:bg-[#FCF8F2]/60 border border-accent-cream rounded-2xl hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center space-x-2 flex-wrap text-xs">
                        <span className="font-extrabold text-gray-900">{asp.name}</span>
                        <span className="text-gray-300">|</span>
                        <span className="font-mono text-gray-500 font-medium">{asp.nim}</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 font-mono">
                        {asp.createdAt}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans bg-white/75 p-3 rounded-xl border border-accent-cream/20 italic">
                      "{asp.message}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>

      {/* 2. CUSTOM NOTIFICATION ALERT DIALOG SUCCESS MODAL */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div 
            id="success-toast-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              id="success-toast-card"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full border-t-8 border-primary-red text-center shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-emerald-600" />
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 title-font tracking-tight mb-2">
                Aspirasi Berhasil Dikirim!
              </h4>
              <p className="text-gray-650 text-sm leading-relaxed mb-6 px-1">
                Terima kasih atas partisipasi aktif Anda. Pesan aspirasi Anda telah terdata serta diteruskan ke badan pengurus HMPTI untuk dianalisis dan ditindaklanjuti.
              </p>

              <button
                id="success-dismiss-btn"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-primary-red to-primary-dark-red hover:bg-primary-dark-red font-bold text-sm tracking-widest uppercase text-white rounded-xl shadow cursor-pointer transition-colors"
              >
                Tutup Notifikasi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
