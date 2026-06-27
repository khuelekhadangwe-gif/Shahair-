/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { WIG_PRODUCTS, REVIEWS } from '../data';
import { Sparkles, MessageSquare, Heart, ShieldCheck, Truck, ArrowRight, Star, HeartHandshake, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WigProduct } from '../types';
import QuickViewModal from './QuickViewModal';
// @ts-ignore
import luxuryHeroModel from '../assets/images/shahair_luxury_hero_model_1782505471098.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<WigProduct | null>(null);
  // Take 3 best sellers
  const bestSellers = WIG_PRODUCTS.filter(w => w.badge === 'Best Seller' || w.badge === 'Highly Rated').slice(0, 3);

  const orderWhatsApp = (productName: string, color: string, length: number, price: number) => {
    const message = `Hi! 👑 I would like to order the gorgeous "${productName}" wig (${length}" length, color: ${color}). Price: R${price.toLocaleString()}. Please let me know how to proceed with payment!`;
    const url = `https://wa.me/27608943159?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* Redesigned Luxury Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FAF5F0] via-[#F4EAE1] to-[#E9DFD4] py-16 lg:py-0 border-b border-rose-light/50">
        
        {/* Soft elegant studio backlights */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#B58B54]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/40 rounded-full blur-2xl pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-6 z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Elegant Premium Typography */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6 lg:pr-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="w-6 h-[1px] bg-[#B58B54]" />
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#B58B54] uppercase">
                  Shahair Premium Wig Boutique
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-serif text-[#2D2825] text-4xl sm:text-5xl md:text-6xl xl:text-[4.3rem] font-bold leading-[1.1] tracking-tight"
              >
                Confidence looks <br />
                beautiful on you.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-charcoal/80 text-sm sm:text-base md:text-[17px] max-w-xl leading-relaxed font-sans font-light"
              >
                Discover the artistry of hand-tied luxury wigs crafted for the modern, confident woman. Embrace your beauty with our curated collection of premium wigs.
              </motion.p>

              {/* Action buttons (Visual image copy) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md sm:max-w-none"
              >
                <button
                  onClick={() => onNavigate('shop')}
                  className="bg-[#B58B54] text-white hover:bg-[#9E7643] px-8 py-4 rounded-md font-sans uppercase tracking-[0.15em] text-xs font-extrabold transition-all duration-300 shadow-md shadow-[#B58B54]/10 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-[#B58B54]"
                >
                  <span>Shop The Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border border-[#B58B54] text-[#B58B54] hover:bg-[#B58B54]/5 hover:text-[#9E7643] hover:border-[#9E7643] px-8 py-4 rounded-md font-sans uppercase tracking-[0.15em] text-xs font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-current text-[#B58B54] hover:text-[#9E7643]" />
                  <span>Book A Consultation</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column: Luxury High Fashion Model Image */}
            <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, type: 'spring' }}
                className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] max-w-lg lg:max-w-none overflow-hidden rounded-2xl shadow-2xl border border-white/20"
              >
                <img
                  src={luxuryHeroModel}
                  alt="Shahair Luxury Hair Model"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2825]/30 via-transparent to-transparent pointer-events-none" />

                {/* Exclusive styling pill tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-rose-light/50 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] font-sans font-bold text-charcoal tracking-wider uppercase">100% Virgin Hair Crown</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals Block */}
      <section className="bg-white py-12 border-y border-rose-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center text-rosegold flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal leading-tight">Handpicked Quality</p>
                <p className="text-xs text-warm-gray mt-1">Pruned & evaluated strictly</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center text-rosegold flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal leading-tight">Fast Local Courier</p>
                <p className="text-xs text-warm-gray mt-1">Gauteng 1-2 days, Cape/KZN 2-4 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center text-rosegold flex-shrink-0">
                <MessageSquare className="w-6 h-6 fill-current text-rosegold" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal leading-tight">Simple WhatsApp Order</p>
                <p className="text-xs text-warm-gray mt-1">Skip complex carts & forms</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center text-rosegold flex-shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-charcoal leading-tight">Happy Crown Promise</p>
                <p className="text-[11px] text-warm-gray mt-1">Friendly support to dye or style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-burgundy font-semibold text-xs uppercase tracking-widest block mb-2">Our Highly Loved Crowns</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Best Seller Collection</h2>
          <p className="text-warm-gray text-xs sm:text-sm mt-3 leading-relaxed">
            Our most popular handpicked human hair masterpieces. Loved by premium clients for hair density, glow, and sleek styling flexibility.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bestSellers.map((wig) => (
            <motion.div
              key={wig.id}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden shadow-md shadow-rose-light/50 border border-rose-light/70 group"
            >
              {/* Product Thumbnail image */}
              <div className="aspect-[4/5] relative overflow-hidden bg-rose-light">
                <img
                  src={wig.image}
                  alt={wig.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {wig.badge && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-burgundy to-rosegold text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-15">
                    {wig.badge}
                  </span>
                )}
                
                {/* Hair length circle */}
                <span className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  📏 {wig.length} Inches
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                      {wig.name}
                    </h3>
                    <span className="bg-rose-light text-burgundy text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {wig.category}
                    </span>
                  </div>
                  <p className="text-xs text-warm-gray mt-1 font-medium">{wig.styleName}</p>
                </div>

                {/* Parameters bullet markers */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-warm-gray border-y border-rose-light/50 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-rosegold">•</span>
                    <span>Class: <b>{wig.hairType}</b></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-rosegold">•</span>
                    <span>Color: <b>{wig.color}</b></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-rosegold">•</span>
                    <span>Density: <b>{wig.density || '180%'}</b></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-rosegold">•</span>
                    <span>Skin Lace: <b>HD Swiss</b></span>
                  </div>
                </div>

                <p className="text-xs text-charcoal/80 leading-relaxed line-clamp-2">
                  {wig.description}
                </p>

                {/* Pricing & WhatsApp plus Quick View triggers */}
                <div className="flex items-center justify-between pt-3 border-t border-rose-light/50">
                  <div>
                    <p className="text-[10px] text-warm-gray uppercase tracking-wider leading-none">Price Estimate</p>
                    <span className="font-serif text-2xl font-bold text-burgundy">
                      R{wig.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(wig)}
                      className="bg-rose-light text-burgundy hover:text-burgundy-dark font-bold text-xs px-3.5 py-2.5 rounded-full hover:bg-rose transition-colors cursor-pointer"
                      aria-label={`Quick View ${wig.name}`}
                    >
                      Quick View
                    </button>
                    <button
                      onClick={() => orderWhatsApp(wig.name, wig.color, wig.length, wig.price)}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2.5 shadow-sm transition-all hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center justify-center"
                      aria-label={`Order ${wig.name} via WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4 fill-current text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore all CTA button */}
        <div className="text-center mt-12 bg-rose-light/30 border border-rose-light/90 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <p className="font-serif text-lg font-bold text-charcoal">Want to see our comprehensive collection?</p>
          <p className="text-xs text-warm-gray mt-1 mb-4">We host raw styles, custom colored crowns, pixie trims, bob closures, and more.</p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-burgundy hover:bg-burgundy-dark text-white px-8 py-3.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5 mx-auto"
          >
            <span>Explore All 11+ Styles</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </section>

      {/* Styled Bento Branding Block - Why choose Shahair */}
      <section className="bg-rose-light/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-burgundy font-semibold text-xs uppercase tracking-widest block mb-2">Our Distinction</span>
            <h2 className="font-serif text-3xl font-bold text-charcoal">The Shahair Quality Standard</h2>
            <p className="text-warm-gray text-xs sm:text-sm mt-3">
              We stand apart representing authentic grace. Every wig goes through rigorous sanitation, deep hydration conditioning, and quality pruning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-light/80 hover:shadow-md transition-shadow">
              <span className="font-serif text-4xl text-rosegold block mb-4">01</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2">Pre-Sterilized & Bleached Knots</h3>
              <p className="text-xs text-warm-gray leading-relaxed">
                No chemical smell, no dirty lace. All wigs are professionally sanitized, pre-washed with luxurious argan formulas, and ready to install on day one.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-light/80 hover:shadow-md transition-shadow">
              <span className="font-serif text-4xl text-rosegold block mb-4">02</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2">HD Swiss Lace Mesh</h3>
              <p className="text-xs text-warm-gray leading-relaxed">
                We select thin, durable Swiss skin-melt lace that flatters any tone. Melts seamlessly under makeups or protective sprays instantly.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-light/80 hover:shadow-md transition-shadow">
              <span className="font-serif text-4xl text-rosegold block mb-4">03</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2">Authentic Human Weight</h3>
              <p className="text-xs text-warm-gray leading-relaxed">
                No dynamic fiber blends or marketing lingo. What you order is exactly 100% thick, heavy donor hair capable of bleaching, flat irons, or rollers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Trust Reviews Slide/Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16 rounded-3xl border border-rose-light shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-burgundy font-semibold text-xs uppercase tracking-widest block mb-2">Customer Testimonials</span>
          <h2 className="font-serif text-3xl font-bold text-charcoal">Real Reviews From Happy Queens</h2>
          <div className="flex items-center justify-center gap-1 text-amber-500 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-semibold text-charcoal ml-2">4.9/5 Rating (500+ orders)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-rose-light/10 border border-rose-light p-6 sm:p-8 rounded-2xl relative space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-charcoal">{review.name}</h4>
                  <p className="text-[10px] text-warm-gray">{review.location}</p>
                </div>
                <div className="flex items-center gap-0.5 text-xs text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>5.0</span>
                </div>
              </div>
              
              <p className="text-xs text-charcoal/80 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="flex justify-between items-center text-[10px] text-warm-gray border-t border-rose-light/50 pt-3">
                <span>Model Bought: <b>{review.wigModel}</b></span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customizer Call to Action Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-burgundy via-rosegold to-burgundy-dark rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 text-center text-white relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            <div className="relative max-w-2xl mx-auto space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to customize your dream look?
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Configure everything from high density, hair origin, standard Swiss lace cap layouts, highlighted stripes, or precise lengths! Receive an automated quote immediately.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <button
                  onClick={() => onNavigate('customize')}
                  className="bg-white text-burgundy px-8 py-3.5 rounded-full font-bold shadow-md hover:bg-blush transition-all cursor-pointer text-sm"
                >
                  Configure Custom Wig Quote
                </button>
                <a
                  href="https://wa.me/27608943159?text=Hi%20Shahair!%20I%20would%20like%20to%20chat%20about%20ordering%20a%20wig%20and%20looking%20for%20a%20recommendation%20for%20my%20face%20shape."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-bold shadow-md transition-all cursor-pointer text-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-white" />
                  <span>Chat directly with Stylist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <QuickViewModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onCustomizeStyle={(preselects) => {
              localStorage.setItem('shahair_preselect_customizer', JSON.stringify(preselects));
              onNavigate('customize');
            }}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
