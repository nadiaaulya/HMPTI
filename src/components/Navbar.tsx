/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'profil', label: 'Profil' },
    { id: 'proker', label: 'Proker' },
    { id: 'aspirasi', label: 'Aspirasi' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-cream/90 backdrop-blur-md shadow-md border-b border-accent-cream py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-primary-red p-2 rounded-xl text-primary-cream shadow-md group-hover:bg-primary-dark-red transition-all duration-300">
              <Terminal className="h-6 w-6" id="logo-icon" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-primary-red title-font">
                HMP<span className="text-primary-dark-red">TI</span>
              </span>
              <span className="hidden sm:block text-[10px] font-semibold text-gray-500 uppercase tracking-widest leading-none">
                Teknik Informatika
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 outline-none ${
                    isActive ? 'text-primary-red font-semibold' : 'text-gray-600 hover:text-primary-red'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-red rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            
            <button
              id="cta-join-nav"
              onClick={() => scrollToSection('aspirasi')}
              className="ml-4 px-4 py-2 bg-primary-red text-white hover:bg-primary-dark-red text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-300 flex items-center space-x-2"
            >
              <span>Suarakan Aspirasi</span>
              <Rocket className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary-red hover:bg-accent-cream/50 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-primary-cream border-b border-accent-cream overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary-red text-white shadow-md font-semibold'
                        : 'text-gray-700 hover:bg-accent-cream hover:text-primary-red'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  id="mobile-cta-btn"
                  onClick={() => scrollToSection('aspirasi')}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-primary-red to-primary-dark-red text-white text-base font-bold rounded-xl shadow-md"
                >
                  Suarakan Aspirasi
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
