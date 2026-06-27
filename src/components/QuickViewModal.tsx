/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { WigProduct } from '../types';
import { X, MessageSquare, AlertCircle, ShoppingBag, SlidersHorizontal, ShieldCheck, HeartPulse, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface QuickViewModalProps {
  product: WigProduct | null;
  onClose: () => void;
  onCustomizeStyle: (preselects: {
    texture: string;
    length: number;
    lace: string;
    grade: string;
    color: string;
  }) => void;
}

const CAP_SIZES = [
  { id: 'S', label: 'Petite Small (21"-21.5" Cap)', desc: 'For smaller head circumferences.' },
  { id: 'M', label: 'Standard Medium (22"-22.5" Cap)', desc: 'Fits 95% of South African women snugly.' },
  { id: 'L', label: 'Spacious Large (23"-23.5" Cap)', desc: 'Best if wearing thick natural braids underneath.' }
];

export default function QuickViewModal({ product, onClose, onCustomizeStyle }: QuickViewModalProps) {
  const [selectedCapSize, setSelectedCapSize] = useState('M');
  const [selectedColorVariant, setSelectedColorVariant] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Set default color variant based on product shade on load
  useEffect(() => {
    if (product) {
      setSelectedColorVariant(product.color);
      setQuantity(1);
      setSelectedCapSize('M');
    }
  }, [product]);

  // Lock body scroll while modal is fully active
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      // Prevent double scrolling layout shifts on mobile Safari
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [product]);

  // Escape key handler to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  // Derive customizer preselect parameters
  const getPreselectParam = () => {
    const nameLower = product.name.toLowerCase();
    const styleLower = product.styleName.toLowerCase();
    
    let texture = 'straight';
    if (styleLower.includes('wave') || nameLower.includes('wave')) {
      texture = 'body-wave';
    }
    if (styleLower.includes('deep wave')) {
      texture = 'deep-wave';
    }
    if (styleLower.includes('curly') || styleLower.includes('curls') || nameLower.includes('goddess')) {
      texture = 'loose-curls';
    }

    let lace = 'closure';
    if (product.category === 'lace-front') {
      lace = 'lace-front';
    } else if (product.category === '360') {
      lace = '360';
    }

    let grade = 'remy';
    const hairTypeLower = product.hairType.toLowerCase();
    if (hairTypeLower.includes('virgin') || hairTypeLower.includes('raw')) {
      grade = 'virgin';
    }

    let color = 'natural-black';
    if (selectedColorVariant.toLowerCase().includes('jet')) {
      color = 'jet-black';
    } else if (selectedColorVariant.toLowerCase().includes('blonde')) {
      color = 'honey-blonde';
    } else if (selectedColorVariant.toLowerCase().includes('burgundy') || selectedColorVariant.toLowerCase().includes('wine')) {
      color = 'burgundy';
    } else if (selectedColorVariant.toLowerCase().includes('highlights')) {
      color = 'caramel-highlights';
    }

    return {
      texture,
      length: product.length,
      lace,
      grade,
      color
    };
  };

  const handleCustomizeClick = () => {
    const params = getPreselectParam();
    onCustomizeStyle(params);
    onClose();
  };

  const colorVariants = [
    product.color,
    ...(product.color !== 'Natural Black' ? ['Natural Black (1B)'] : []),
    ...(product.color !== 'Deep Jet Black' && product.category === 'lace-front' ? ['Deep Jet Black'] : [])
  ];

  const handleOrderClick = () => {
    const totalPrice = product.price * quantity;
    const chosenCapLabel = CAP_SIZES.find(c => c.id === selectedCapSize)?.label.split(' (')[0] || 'Standard Medium';
    
    const message = `Hi Shahair! 👑 I would like to order:
🛍️ Product: ${product.name} (x${quantity})
📏 Length: ${product.length}" (${product.styleName})
📐 Cap Size: ${chosenCapLabel}
🎨 Color shade: ${selectedColorVariant}
🧵 Type: ${product.hairType}

Estimated Quote: R${totalPrice.toLocaleString()}

Please verify stock availability and provide bank EFT transfer details! Thank you.`;

    const url = `https://wa.me/27608943159?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      {/* Backdrop */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Body */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative border border-rose-light z-10 grid md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] text-left"
      >
        {/* Close Button Trigger */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-charcoal hover:text-burgundy shadow-md transition-all z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-burgundy"
          aria-label="Close product view details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Illustration - Left Column */}
        <div className="md:col-span-5 bg-rose-light relative h-[30vh] md:h-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover select-none"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </span>
          )}
          <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-xl p-3 text-white border border-white/10 hidden sm:block">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose">Premium Layout</span>
            <div className="flex justify-between items-center text-xs mt-1">
              <span>HD Swiss Mesh Lace</span>
              <span className="font-bold">Includes Caps Combs & Straps</span>
            </div>
          </div>
        </div>

        {/* Specification & Configuration - Right Column */}
        <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[85vh] space-y-6">
          
          {/* Header Title Section */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-rosegold text-[10px] font-bold uppercase tracking-widest bg-rose-light px-2.5 py-1 rounded">
                Authentic South African Crown
              </span>
              <span className="text-[11px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                In Stock (Gauteng Dispatch)
              </span>
            </div>
            
            <h2 id="quick-view-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal">
              {product.name}
            </h2>
            <p className="text-xs text-warm-gray font-semibold">{product.styleName} ({product.length} inches)</p>
          </div>

          {/* Description Block */}
          <p className="text-xs text-charcoal/80 leading-relaxed bg-rose-light/20 p-3 sm:p-4 rounded-2xl border border-rose-light/40">
            {product.description}
          </p>

          {/* Configuration Inputs */}
          <div className="space-y-4">
            
            {/* Custom Cap Fit selection */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal mb-2 flex items-center gap-1.5">
                📏 Choose Cap Size (Snug Glue-less Fit):
              </span>
              <div className="grid grid-cols-3 gap-2">
                {CAP_SIZES.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedCapSize(cap.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer relative ${
                      selectedCapSize === cap.id
                        ? 'border-burgundy bg-rose-light/35'
                        : 'border-rose-light/70 bg-cream/20 hover:border-rosegold'
                    }`}
                  >
                    <p className="font-extrabold text-xs text-charcoal">{cap.id}</p>
                    <p className="text-[9px] text-warm-gray leading-none mt-0.5">{cap.id === 'M' ? 'Standard' : cap.id === 'S' ? 'Petite' : 'Spacious'}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Shade Selection */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal mb-2">
                🎨 Choose shade options:
              </span>
              <div className="flex flex-wrap gap-2">
                {colorVariants.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColorVariant(color)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                      selectedColorVariant === color
                        ? 'bg-burgundy text-white border-burgundy'
                        : 'bg-white border-rose-light hover:border-rosegold text-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector Section */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                🔢 Choose Quantity:
              </span>
              <div className="flex items-center border border-rose-light rounded-xl overflow-hidden bg-rose-light/10">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-1.5 text-charcoal hover:bg-rose hover:text-burgundy font-extrabold transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-1.5 font-bold text-xs text-charcoal bg-white min-w-[2.5rem] text-center select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-1.5 text-charcoal hover:bg-rose hover:text-burgundy font-extrabold transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Specifications metrics */}
          <div className="grid grid-cols-3 gap-2.5 bg-cream/35 border border-rose-light/40 py-2.5 px-3 rounded-2xl text-[10px] text-charcoal">
            <div className="text-center">
              <span className="text-warm-gray/70 block uppercase leading-none">Hair Type</span>
              <span className="font-extrabold mt-0.5 block">{product.hairType}</span>
            </div>
            <div className="text-center border-x border-rose-light">
              <span className="text-warm-gray/70 block uppercase leading-none">Density</span>
              <span className="font-extrabold mt-0.5 block">{product.density || '180%'}</span>
            </div>
            <div className="text-center">
              <span className="text-warm-gray/70 block uppercase leading-none">Shipping</span>
              <span className="font-extrabold mt-0.5 block flex items-center justify-center gap-0.5 text-green-700">
                🚚 Free SA Courier
              </span>
            </div>
          </div>

          {/* Action Trigger Row */}
          <div className="border-t border-rose-light/50 pt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            
            {/* Price Output */}
            <div>
              <span className="text-[10px] text-warm-gray block uppercase tracking-wider leading-none">Total Value</span>
              <span className="font-serif text-3xl font-extrabold text-burgundy">
                R{(product.price * quantity).toLocaleString()}
              </span>
            </div>

            {/* Interactive Actions */}
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <button
                onClick={handleCustomizeClick}
                className="flex-1 sm:flex-none border border-burgundy hover:bg-rose-light/30 text-burgundy font-bold rounded-full px-5 py-3 text-[11.5px] transition-all cursor-pointer flex items-center justify-center gap-1 bg-white"
                aria-label="Customize this specific style on builder"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Customize Style</span>
              </button>

              <button
                onClick={handleOrderClick}
                className="flex-[2] sm:flex-none bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 font-bold flex items-center justify-center gap-1.5 text-xs sm:text-sm shadow-md shadow-green-500/10 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>Checkout WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Safety note footer */}
          <div className="text-[10px] text-warm-gray italic text-center w-full pt-1">
            *Includes 7-day CPA hygiene exchange eligibility. Our local stylists coordinate with you immediately.
          </div>

        </div>
      </motion.div>
    </div>
  );
}
