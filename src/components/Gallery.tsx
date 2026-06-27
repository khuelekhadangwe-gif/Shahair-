/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Compass, Sparkles, X, Eye, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_PHOTOS = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80',
    title: 'Sleek Straight 24"',
    desc: 'Midnight Elegance HD Hairline melt',
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f69c?w=800&auto=format&fit=crop&q=80',
    title: 'Body Wave Bounce 18"',
    desc: 'Pretoria Pearl rich natural volume waves',
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=80',
    title: 'Loose Curly Protect 16"',
    desc: 'Kruger Kiss glue-less 4x4 closures',
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=800&auto=format&fit=crop&q=80',
    title: 'Curly Honey Goddess 20"',
    desc: 'Rose Gold Honey Highlights luxury coils',
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1595959183075-c1d09e57adbc?w=800&auto=format&fit=crop&q=80',
    title: 'Honey Blonde Straight 22"',
    desc: 'Savannah Sun pre-lifted smooth cuticles',
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&auto=format&fit=crop&q=80',
    title: 'Textured short Pixie 4"',
    desc: 'Joburg Glam bold auburn cropped layout',
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1512413313708-31676dfb482e?w=800&auto=format&fit=crop&q=80',
    title: 'Jet Black Asymmetrical 12"',
    desc: 'Cape Town Chic pre-styled sleek bob cuts',
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
    title: 'Deep Wave 360 Ponytail 26"',
    desc: 'Velvet Night ultimate high ponytail styling mesh',
  },
  {
    id: 'g9',
    url: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=800&auto=format&fit=crop&q=80',
    title: 'Caramel highlights waves 24"',
    desc: 'Sunset Strip framing highlighted strokes',
  },
  {
    id: 'g10',
    url: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=800&auto=format&fit=crop&q=80',
    title: 'Ocean wave brown curls 22"',
    desc: 'Coastal Breeze soft medium brown luster',
  },
  {
    id: 'g11',
    url: 'https://images.unsplash.com/photo-1618679078696-29177a2efaf3?w=800&auto=format&fit=crop&q=80',
    title: 'Deep burgundy wine curls',
    desc: 'Wine Country luxurious crown select reds',
  },
  {
    id: 'g12',
    url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80',
    title: 'Satin cap protection',
    desc: 'Shahair luxury silk and hair wraps',
  }
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b border-rose-light text-center mt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-rosegold font-semibold text-xs uppercase tracking-widest block mb-2">Style Inspiration</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            The Crown Gallery
          </h1>
          <p className="text-warm-gray text-sm sm:text-base mt-2 max-w-xl mx-auto">
            See our luxury hand-picked wigs worn in real life by beautiful South African queens. Appreciate the lace melts, color gradients, and textures closely.
          </p>
        </div>
      </section>

      {/* Grid photos layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, i) => (
            <motion.div
              layoutId={`photo-container-${photo.id}`}
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group aspect-[3/4] relative overflow-hidden rounded-2xl bg-rose-light shadow-xs hover:shadow-md transition-shadow border border-rose-light cursor-pointer select-none"
              whileHover={{ y: -4 }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay styling elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white space-y-1">
                <span className="text-blush text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blush fill-current" />
                  Shahair Look
                </span>
                <p className="font-serif text-sm font-bold truncate leading-none">
                  {photo.title}
                </p>
                <p className="text-[10px] text-white/80 line-clamp-2">
                  {photo.desc}
                </p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-blush pt-1">
                  <Eye className="w-3 h-3" />
                  <span>Tap to inspect lace</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Zoom lightbox view */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setActivePhoto(null)}
            />

            <motion.div
              layoutId={`photo-container-${activePhoto.id}`}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl relative border border-rose-light z-10 w-full max-w-xl flex flex-col"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-charcoal hover:text-burgundy shadow-sm transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/5] bg-rose-light">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-white space-y-2">
                <span className="text-rosegold text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Compass className="w-3 h-3 text-rosegold" />
                  Studio styling signature
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  {activePhoto.desc} — meticulously sterilized, styled, and hydrated with premium oil formulas. Ready for EFT WhatsApp order dispatch nationwide!
                </p>
                
                <div className="pt-3 border-t border-rose-light/40 flex justify-end">
                  <a
                    href={`https://wa.me/27608943159?text=Hi!%20I%20saw%20the%20gorgeous%20"${activePhoto.title}"%20look%20on%20your%20Gallery%20and%20would%20like%20to%20enquire%20about%20ordering%20it!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white py-2.5 px-5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Inquire Style Ordering</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
