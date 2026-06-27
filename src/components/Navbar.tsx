/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Compass, ShoppingBag, BookOpen, User, PhoneCall, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'shop', label: 'Shop Wigs', icon: ShoppingBag },
    { id: 'customize', label: 'Wig Builder', icon: BookOpen },
    { id: 'about', label: 'About', icon: User },
    { id: 'gallery', label: 'Gallery', icon: Compass },
    { id: 'how-it-works', label: 'How It Works', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-rose-light py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 cursor-pointer focus:outline-none group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burgundy via-rosegold to-rose flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold bg-gradient-to-r from-burgundy to-rosegold bg-clip-text text-transparent tracking-tight leading-none mb-0.5">
                  Shahair
                </span>
                <span className="block text-[10px] tracking-widest text-warm-gray uppercase font-medium">
                  Premium Quality Wigs
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors focus:outline-none cursor-pointer ${
                      isActive
                        ? 'text-burgundy font-semibold'
                        : 'text-charcoal hover:text-rosegold'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-burgundy to-rosegold rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              <a
                href="https://wa.me/27608943159?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20premium%20wigs."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:shadow-green-500/25 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-rose-light text-burgundy transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop slide click overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            {/* Content menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl z-50 overflow-y-auto lg:hidden flex flex-col"
            >
              <div className="p-6 border-b border-rose-light flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-burgundy to-rosegold flex items-center justify-center">
                    <span className="text-white font-serif font-bold text-sm">S</span>
                  </div>
                  <span className="font-serif text-xl font-bold text-burgundy">Shahair</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-rose-light text-charcoal transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-6 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left ${
                        isActive
                          ? 'bg-rose-light text-burgundy font-semibold scale-[1.02]'
                          : 'text-charcoal hover:bg-rose-light/50 hover:text-rosegold'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-rosegold" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 border-t border-rose-light bg-rose-light/10">
                <a
                  href="https://wa.me/27608943159?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20premium%20wigs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-green-500/10"
                >
                  <MessageSquare className="w-5 h-5 fill-current text-white" />
                  <span>Order on WhatsApp</span>
                </a>
                <p className="text-center text-[10px] text-warm-gray mt-4">
                  Monday – Sat: 8am – 6pm • Proudly South African 🇿🇦
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
