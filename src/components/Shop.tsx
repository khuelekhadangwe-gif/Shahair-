/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { WIG_PRODUCTS } from '../data';
import { WigProduct, LaceType } from '../types';
import { Search, SlidersHorizontal, MessageSquare, X, Shirt, BadgePercent, CheckCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import QuickViewModal from './QuickViewModal';

interface ShopProps {
  onNavigate?: (page: 'home' | 'shop' | 'customize' | 'about' | 'gallery' | 'how-it-works' | 'contact') => void;
}

export default function Shop({ onNavigate }: ShopProps) {
  const [activeFilter, setActiveFilter] = useState<LaceType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<WigProduct | null>(null);
  const [lengthFilter, setLengthFilter] = useState<number | 'all'>('all');

  const categories: { id: LaceType | 'all'; label: string }[] = [
    { id: 'all', label: 'All Wigs' },
    { id: 'lace-front', label: 'Lace Front' },
    { id: 'closure', label: 'Closure Wigs' },
    { id: '360', label: '360 Lace Wigs' },
    { id: 'short', label: 'Short & Pixie' },
  ];

  const allowedLengths = [12, 16, 18, 20, 22, 24, 26];

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    return WIG_PRODUCTS.filter((product) => {
      const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
      const matchesLength = lengthFilter === 'all' || product.length === lengthFilter;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.styleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.hairType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLength && matchesSearch;
    });
  }, [activeFilter, lengthFilter, searchQuery]);

  const orderWhatsApp = (product: WigProduct) => {
    const message = `Hi! 👑 I would like to order the gorgeous "${product.name}" wig (${product.length}" length, color: ${product.color}). Price: R${product.price.toLocaleString()}. Please let me know how to proceed with payment!`;
    const url = `https://wa.me/27608943159?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b border-rose-light text-center mt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-rosegold font-semibold text-xs uppercase tracking-widest block mb-2">Our Curated Catalog</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            The South African Crown Boutique
          </h1>
          <p className="text-warm-gray text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Browse our handpicked collection. Search, filter, and tap to view exhaustive specifications or order directly.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-light space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Category selection */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center lg:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id);
                    setLengthFilter('all');
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer select-none transition-all ${
                    activeFilter === cat.id
                      ? 'bg-burgundy text-white shadow-md'
                      : 'bg-rose-light/40 text-charcoal hover:bg-rose-light/70 text-rosegold border border-rose-light/70'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input block */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray" />
              <input
                type="text"
                placeholder="Search style, color, length..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full text-xs border border-rose-light bg-cream/30 focus:bg-white outline-none focus:ring-1 focus:ring-burgundy transition-all text-charcoal placeholder-warm-gray/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-burgundy text-warm-gray focus:outline-none"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Length filters */}
          <div className="flex flex-wrap items-center gap-3 border-t border-rose-light/50 pt-4 text-xs font-medium text-charcoal">
            <span className="text-warm-gray font-semibold uppercase tracking-wider flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-rosegold" />
              Filter length (Inches):
            </span>
            <div className="flex flex-wrap gap-1.5 mt-1 sm:mt-0">
              <button
                onClick={() => setLengthFilter('all')}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  lengthFilter === 'all'
                    ? 'bg-rosegold text-white border-rosegold font-bold'
                    : 'bg-white border-rose-light hover:border-rosegold text-charcoal'
                }`}
              >
                All Lengths
              </button>
              {allowedLengths.map((len) => (
                <button
                  key={len}
                  onClick={() => setLengthFilter(len)}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    lengthFilter === len
                      ? 'bg-rosegold text-white border-rosegold font-bold'
                      : 'bg-white border-rose-light hover:border-rosegold text-charcoal'
                  }`}
                >
                  {len}"
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Grid listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-rose-light max-w-xl mx-auto">
            <BadgePercent className="w-12 h-12 text-rosegold mx-auto mb-4 stroke-1" />
            <p className="font-serif text-xl font-bold text-charcoal">No style match your exact filters</p>
            <p className="text-xs text-warm-gray mt-2 leading-relaxed">
              We update our catalogue weekly. Try adjusting your parameters or contact our beauty consultants via WhatsApp to configure a custom formulation!
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setLengthFilter('all');
                setSearchQuery('');
              }}
              className="mt-6 bg-burgundy hover:bg-burgundy-dark text-white rounded-full px-6 py-2.5 text-xs font-bold transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((wig) => (
                <motion.div
                  key={wig.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-rose-light shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-rose-light flex-shrink-0">
                    <img
                      src={wig.image}
                      alt={wig.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {wig.badge && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-burgundy to-rosegold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow z-10">
                        {wig.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-extrabold px-2.5 py-1 rounded shadow-sm">
                      Length: {wig.length}"
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-rosegold transition-colors">
                          {wig.name}
                        </h3>
                        <span className="text-[10px] bg-rose-light text-burgundy font-bold uppercase tracking-wide px-2 py-0.5 rounded flex-shrink-0 self-start">
                          {wig.category}
                        </span>
                      </div>
                      <p className="text-xs text-warm-gray mt-1 leading-none font-medium">{wig.styleName}</p>
                    </div>

                    <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed">
                      {wig.description}
                    </p>

                    <div className="flex flex-wrap gap-1 text-[10px]">
                      <span className="bg-rose-light/50 text-rosegold border border-rose-light/80 px-2 py-0.5 rounded">
                        {wig.hairType}
                      </span>
                      <span className="bg-rose-light/50 text-rosegold border border-rose-light/80 px-2 py-0.5 rounded">
                        Color: {wig.color}
                      </span>
                    </div>

                    {/* Footer / Trigger */}
                    <div className="flex items-center justify-between pt-3 border-t border-rose-light/50 mt-auto">
                      <div>
                        <span className="text-[9px] text-warm-gray block uppercase tracking-wider leading-none">Price Est</span>
                        <span className="text-lg font-bold text-burgundy">
                          R{wig.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedProduct(wig)}
                          className="bg-rose-light text-burgundy hover:text-burgundy-dark font-bold text-[11px] px-3.5 py-2.5 rounded-full hover:bg-rose transition-colors cursor-pointer"
                          aria-label={`Quick View details for ${wig.name}`}
                        >
                          Quick View
                        </button>
                        <button
                          onClick={() => orderWhatsApp(wig)}
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
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Quick View Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <QuickViewModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onCustomizeStyle={(preselects) => {
              localStorage.setItem('shahair_preselect_customizer', JSON.stringify(preselects));
              if (onNavigate) {
                onNavigate('customize');
              }
            }}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
