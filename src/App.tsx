/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import WigCustomizer from './components/WigCustomizer';
import About from './components/About';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import { ArrowUp, MessageSquare, X, Info, ShieldCheck, Scale, Ruler, HeartPulse, FileText, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type PageId = 'home' | 'shop' | 'customize' | 'about' | 'gallery' | 'how-it-works' | 'contact';

type ModalType = 'delivery' | 'returns' | 'care' | 'size' | 'privacy' | 'terms' | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync navigation with horizontal hash router (popstate)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'shop', 'customize', 'about', 'gallery', 'how-it-works', 'contact'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Run on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for Scroll-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getModalContent = (type: ModalType) => {
    switch (type) {
      case 'delivery':
        return {
          title: 'Delivery & Nationwide Shipping Information',
          icon: <Info className="w-10 h-10 text-burgundy" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-charcoal">
              <p>Shahair delivers nationwide to all corners of South Africa using primary courier services, predominantly <strong>The Courier Guy</strong> and <strong>Aramex</strong>.</p>
              <div className="bg-rose-light/40 p-4 rounded-xl border border-rose-light text-[11px] sm:text-xs">
                <p className="font-bold text-burgundy">Estimated Timelines:</p>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li><strong>Gauteng (JHB, PTA):</strong> 1 – 2 business days.</li>
                  <li><strong>Major Coastal Cities (CT, DBN, PE, EL):</strong> 2 – 4 business days.</li>
                  <li><strong>Outlying / Regional Towns:</strong> 3 – 5 business days.</li>
                </ul>
              </div>
              <p className="font-semibold text-charcoal">Courier Costs & Tracking:</p>
              <p className="text-warm-gray leading-relaxed text-xs">A flat rate of R100 is charged for all orders below R3,500. Shipping is completely <strong>free for orders of R3,500 and above</strong>. Once payment clears, we will share the secure waybill tracking link with you via email or WhatsApp so you can monitor your package doorstep arrival.</p>
              <p className="text-warm-gray leading-relaxed text-xs"><em>Note: JHB orders can also opt for cash/card on pick-up at our Sandton studio landmark strictly by scheduled appointment reservation.</em></p>
            </div>
          )
        };
      case 'returns':
        return {
          title: 'CPA Sanitary Guidelines & Hygiene Exchange Policy',
          icon: <ShieldCheck className="w-10 h-10 text-burgundy" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-charcoal">
              <p>In strict accordance with local South African sanitary protocols, our wigs represent premium personal items. To ensure client hygiene safety, Shahair enforces strict exchange principles.</p>
              <div className="bg-rose-light/40 p-5 rounded-2xl border border-rose-light text-xs space-y-2">
                <p className="font-extrabold text-burgundy uppercase tracking-wider text-[10px]">CPA & Hygiene Compliance Checks:</p>
                <p className="font-medium text-charcoal">Wigs can only be exchanged or returned if they undergo our hygiene inspections in their 100% original, unaltered state:</p>
                <ul className="list-disc pl-4 space-y-1 text-warm-gray">
                  <li><strong>HD Swiss lace must remain completely uncut and unaltered.</strong></li>
                  <li><strong>All original boutique tag seals and net packaging must be intact.</strong></li>
                  <li>Hair must be completely unwashed, unworn, and free of cosmetics or synthetic sprays.</li>
                </ul>
              </div>
              <p className="font-semibold text-charcoal">7-Day Cooling-Off Exchange Window:</p>
              <p className="text-warm-gray text-xs leading-relaxed">You have a secure <strong>7-day return window</strong> from the date of physical courier delivery to log an exchange request. Once our professional stylists verify the uncut lace and pristine condition, we will issue your refund or exchange credit immediately.</p>
            </div>
          )
        };
      case 'care':
        return {
          title: 'Shahair Premium Wig Care Guide',
          icon: <HeartPulse className="w-10 h-10 text-burgundy" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-charcoal max-h-[50vh] overflow-y-auto pr-2">
              <p>Preserving the silky glow, intact cuticles, and elastic bounce of your 100% human hair wig is simple with routine aftercare.</p>
              <div className="space-y-3">
                <p className="font-bold text-burgundy text-xs sm:text-sm">1. Gentle Washing Routine:</p>
                <p className="text-warm-gray text-xs leading-relaxed">Wash your crown after approximately 15–20 wears. Submerge in lukewarm water infused with premium sulfate-free shampoo. Rub softly from base cap to ends — never bundle or aggressively rub the hair together to prevent friction tangles.</p>

                <p className="font-bold text-burgundy text-xs sm:text-sm">2. Elite Hydration Conditioning:</p>
                <p className="text-warm-gray text-xs leading-relaxed">Rinse and apply a rich moisture conditioner or oil therapy mask. Leave it saturate for 10–15 minutes, then rinse thoroughly. Apply 2-3 drops of lightweight Argan oil while damp to lock in high-shine luster.</p>

                <p className="font-bold text-burgundy text-xs sm:text-sm">3. Detangling & Air Drying:</p>
                <p className="text-warm-gray text-xs leading-relaxed">Always detangle with a wide-tooth comb or specialized detangling brush. Gently comb from the팁 (tips) and work incrementally upward. Allow the wig to air dry naturally on a tall wire wig stand. Avoid blow-drying on extreme heat.</p>

                <p className="font-bold text-burgundy text-xs sm:text-sm">4. Heat Styling Care:</p>
                <p className="text-warm-gray text-xs leading-relaxed">Shahair human hair easily matches hair straighteners or curling wands up to 180°C. Always spray with a trusted heat protection coat beforehand to shield cuticle proteins.</p>
              </div>
            </div>
          )
        };
      case 'size':
        return {
          title: 'Caps & Sizing Fitting Guide',
          icon: <Ruler className="w-10 h-10 text-burgundy" />,
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-charcoal">
              <p>Choosing the correct cap size ensures comfortable, secure, and completely unnoticeable glue-less wear throughout your active days.</p>
              <div className="bg-rose-light/40 p-4 rounded-xl border border-rose-light text-[11px] sm:text-xs">
                <p className="font-bold text-burgundy mb-2">Standard Cap Sizing Table:</p>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li><strong>Small (21" - 21.5" circumference):</strong> Best for petite head shapes or frames.</li>
                  <li><strong>Medium (22" - 22.5" circumference):</strong> Fits over 95% of South African clients. Holds snuggly and naturally.</li>
                  <li><strong>Large (23" - 23.5" circumference):</strong> Designed for voluminous natural braids/cornrows underneath.</li>
                </ul>
              </div>
              <p className="font-semibold text-charcoal">Snug Snaps Adjustability:</p>
              <p className="text-warm-gray text-xs leading-relaxed">Every Shahair wig is pre-fitted with adjustable elastic security bands and built-in crown combs. This lets you custom-tighten your lace cap cap securement, rendering glue-less installs simple, safe, and perfectly snug.</p>
            </div>
          )
        };
      case 'privacy':
        return {
          title: 'POPIA Private Data and Compliance Statement',
          icon: <FileText className="w-10 h-10 text-burgundy" />,
          body: (
            <div className="space-y-3 text-xs sm:text-sm text-charcoal leading-relaxed">
              <p>In accordance with the <strong>Protection of Personal Information Act (POPIA)</strong>, Act No. 4 of 2013 of South Africa, Shahair is dedicated to preserving the absolute confidentiality of your digital data records.</p>
              <div className="bg-rose-light/50 p-4 rounded-xl border border-rose-light text-[11px] space-y-1.5 text-warm-gray">
                <p className="font-bold text-burgundy">Processed Private Information:</p>
                <p>We process only minimal identification data: your billing/shipping name, verified physical delivery addresses (for Courier Guy or Aramex logistics routing), contact email, and active WhatsApp communication handles.</p>
                <p className="font-bold text-burgundy">Storage & Protection Security Controls:</p>
                <p>All virtual invoices, personal wig cap sizing records, and delivery details are safely stored inside encrypted databases with restrictive employee access permissions. We never rent, sell, or barter your details with external advertising agencies.</p>
              </div>
              <p className="text-warm-gray text-xs">You enjoy complete statutory privileges under local POPIA guidelines to access your records, correct typos, or request complete deletion of your files. Direct security concerns and data-erasing requests to our compliance officer at <a href="mailto:hello@shahair.co.za" className="text-burgundy font-bold underline">hello@shahair.co.za</a>.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'EFT, Payments & Courier Logistical Terms',
          icon: <Scale className="w-10 h-10 text-burgundy" />,
          body: (
            <div className="space-y-3 text-xs sm:text-sm text-charcoal leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
              <p>Welcome to the Shahair Premium hair shopping portal. By submitting requests or customizing wigs on our builder, you agree to our standard logistical agreements:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-burgundy text-xs">1. Bank EFT Clearance Logic:</p>
                  <p className="text-warm-gray text-xs leading-relaxed">To ensure financial security against online fraud, physical delivery packages are couriered only following 100% successful clearance of bank EFT or instant transfer funds in our accounts. Manual EFT payments require sending a valid PDF Proof of Payment (PoP).</p>
                </div>
                <div>
                  <p className="font-bold text-burgundy text-xs">2. Courier Delivery Operations:</p>
                  <p className="text-warm-gray text-xs leading-relaxed">We ship nationwide via professional couriers (The Courier Guy / Aramex). Waybills are shared via WhatsApp for real-time tracking from dispatch point to doorstep. All orders R3,500 and above qualify for free shipping.</p>
                </div>
                <div>
                  <p className="font-bold text-burgundy text-xs">3. Custom Styling & Highlight Window:</p>
                  <p className="text-warm-gray text-xs leading-relaxed">Specialized custom coloring services (e.g., custom honey highlights, custom bleach knots, or specific styling cuts) require an additional 24 to 48 hours for our professional styling team to safely complete before handover to couriers.</p>
                </div>
              </div>
            </div>
          )
        };
      default:
        return { title: '', icon: null, body: null };
    }
  };

  const modalDetails = getModalContent(activeModal);

  return (
    <div className="bg-cream text-charcoal font-sans antialiased min-h-screen flex flex-col pt-16 lg:pt-20">
      
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Pages Container with clean transitions */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Home onNavigate={navigateTo} />
            </motion.div>
          )}

          {currentPage === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Shop onNavigate={navigateTo} />
            </motion.div>
          )}

          {currentPage === 'customize' && (
            <motion.div
              key="customize"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <WigCustomizer />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}

          {currentPage === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Gallery />
            </motion.div>
          )}

          {currentPage === 'how-it-works' && (
            <motion.div
              key="how-it-works"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <HowItWorks />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer component */}
      <footer className="bg-charcoal text-white/80 border-t border-rose-light/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1: Brand & Socials */}
            <div className="space-y-4">
              <button
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-burgundy rounded p-1"
                aria-label="Shahair Home"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-burgundy to-rosegold flex items-center justify-center shadow">
                  <span className="text-white font-serif font-bold text-base">S</span>
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-wide">Shahair</span>
              </button>
              <p className="text-white/60 text-xs leading-relaxed max-w-xs">
                Meticulously selected, 100% human hair premium wigs for the modern South African woman. Designed for style, comfort, and undeniable confidence.
              </p>
              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://wa.me/27608943159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-green-500/20 hover:bg-green-500 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Direct WhatsApp channel"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rosegold/20 hover:bg-rosegold flex items-center justify-center transition-all hover:scale-105 text-white font-serif font-bold text-xs"
                  aria-label="Visual Instagram lookbook"
                >
                  IG
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rose-light/10 hover:bg-rosegold flex items-center justify-center transition-all hover:scale-105 text-white font-serif font-bold text-xs"
                  aria-label="TikTok review clips"
                >
                  TT
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider text-rose">Quick Directory</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => navigateTo('shop')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1">
                    Shop Premium Wigs
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('customize')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1">
                    Exclusive Wig Builder
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('about')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1">
                    Our Stylist Story
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('gallery')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1">
                    Customer Crown Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('contact')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1">
                    Reach Out / Consult
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Care Information */}
            <div>
              <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider text-rose">Customer Care</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => setActiveModal('delivery')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left">
                    🚚 Door Delivery Info
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('returns')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left">
                    🛡️ Hygiene Exchanges
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('care')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left">
                    🧴 Wig Washing & Aftercare
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('size')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left">
                    📐 Cap Sizing Measurements
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('how-it-works')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left">
                    ❓ Frequently Asked FAQs
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal Framework */}
            <div>
              <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider text-rose">Legal Guidelines</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => setActiveModal('privacy')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left w-full">
                    📋 POPIA Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('terms')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left w-full">
                    ⚖️ Terms of Service & EFT Agreements
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('returns')} className="text-white/60 hover:text-rosegold transition-colors cursor-pointer focus:outline-none p-1 text-left w-full">
                    🛡️ Refund & Return Policy (CPA)
                  </button>
                </li>
                <li className="text-white/50 text-[10px] leading-relaxed pt-2">
                  <span className="font-bold text-white block">Official Contact:</span>
                  128 Rivonia Road, Sandhurst, Sandton, Johannesburg, 2196.
                </li>
              </ul>
            </div>

          </div>

          {/* Secure compliance bottom banner */}
          <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
            <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/5">
              <p className="text-white/60 text-[10px] leading-relaxed">
                <strong className="text-white/90">POPIA Compliance Announcement:</strong> In compliance with the Protection of Personal Information Act (POPIA) No. 4 of 2013 of South Africa, Shahair guarantees that your personal information is processed strictly for verified payment checkouts and courier logistics routing. We uphold high security controls. You enjoy statutory privileges to request copies of, edit, or request full deletion of records. Direct secure POPIA inquiries and data questions to <a href="mailto:hello@shahair.co.za" className="text-rosegold hover:text-rosegold-dark underline">hello@shahair.co.za</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 pt-2">
              <p>&copy; {new Date().getFullYear()} Shahair Premium Hair Boutique. All rights reserved.</p>
              <p className="flex items-center gap-1.5 font-medium">
                Made with ❤️ in Johannesburg, South Africa 🇿🇦
              </p>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Active Page Core Support widgets */}
      
      {/* Floating WhatsApp Quick Consultation Tool */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <a
          href="https://wa.me/27608943159?text=Hi!%20I%20am%20browsing%20the%20Shahair%20Premium%20Wigs%20site%20and%20would%20love%20a%20personal%20hair%20and%20cap%20recommendation!"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center whatsapp-pulse cursor-pointer"
          aria-label="Direct WhatsApp Consultation"
        >
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white relative z-10" />
        </a>
        
        {/* Hover Tooltip */}
        <div className="absolute right-0 bottom-full mb-3 bg-charcoal text-white text-[11px] font-bold py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          Chat with Stylist WhatsApp Hub ⚡
        </div>
      </div>

      {/* Scroll to Top Back-Up clicker */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-rosegold hover:bg-rosegold-dark text-white shadow-md active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top of screen"
      >
        <ArrowUp className="w-5 h-5 text-white stroke-[2.5px]" />
      </button>

      {/* Shared Care and Policy Dialog Overlay (Portal UI) */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            {/* Backdrop slide block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setActiveModal(null)}
            />

            {/* Panel box */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 relative border border-rose-light shadow-2xl z-10 space-y-5"
            >
              {/* Close marker */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 bg-rose-light/50 p-2 rounded-full text-charcoal hover:text-burgundy hover:bg-rose-light transition-colors cursor-pointer focus:outline-none"
                aria-label="Close dialog window"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title group */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-light rounded-2xl">
                  {modalDetails.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-charcoal leading-snug">
                  {modalDetails.title}
                </h3>
              </div>

              {/* Description Body */}
              <div className="border-t border-rose-light/40 pt-4 leading-relaxed">
                {modalDetails.body}
              </div>

              {/* CTA footer inside popup */}
              <div className="pt-4 border-t border-rose-light/30 flex justify-between items-center">
                <p className="text-[10px] text-warm-gray">Shahair SA Support Team</p>
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-burgundy hover:bg-burgundy-dark text-white rounded-full font-bold px-5 py-2 text-xs transition-colors cursor-pointer"
                >
                  I Understand, Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
