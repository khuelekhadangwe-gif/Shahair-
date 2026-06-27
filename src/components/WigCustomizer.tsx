/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Check, MessageSquare, Scissors, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'motion/react';

const TEXTURES = [
  { id: 'straight', name: 'Sleek Straight', priceAdd: 0, desc: 'Silky, completely flat, and highly elegant.' },
  { id: 'body-wave', name: 'Body Wave', priceAdd: 300, desc: 'Bouncy luxury waves with perfect shine.' },
  { id: 'loose-curls', name: 'Loose Curls', priceAdd: 400, desc: 'Dense, defined curls for playful volume.' },
  { id: 'deep-wave', name: 'Deep Wave', priceAdd: 600, desc: 'Intense tropical waves for a goddess crown.' },
];

const LENGTHS = [
  { value: 12, priceBase: 2200, label: '12" Bob Length' },
  { value: 16, priceBase: 2600, label: '16" Collarbone' },
  { value: 18, priceBase: 2800, label: '18" Mid-Back' },
  { value: 20, priceBase: 3000, label: '20" Below Chest' },
  { value: 22, priceBase: 3200, label: '22" Waist-Length' },
  { value: 24, priceBase: 3500, label: '24" Ultra Long' },
  { value: 26, priceBase: 3800, label: '26" Goddess Length' },
];

const LACE_TYPES = [
  { id: 'closure', name: '4x4 Lace Closure', priceAdd: 0, desc: 'Great for beginners. Simple, glue-less, and easy protective styling.' },
  { id: 'lace-front', name: '13x4 Lace Front', priceAdd: 600, desc: 'Ear-to-ear natural parting. Allows half-up styles and deep lace melts.' },
  { id: '360', name: '360 Full Perimeter', priceAdd: 1200, desc: 'Total style freedom. Wear high ponytails with an completely natural hairline all-around.' },
];

const HAIR_GRADES = [
  { id: 'remy', name: 'Premium Remy Hair', priceAdd: 0, desc: '100% human hair with cuticle aligned in one direction. Soft & shiny.' },
  { id: 'virgin', name: 'Elite Indian Virgin Hair', priceAdd: 500, desc: 'Unprocessed premium donor raw hair. Lasts 2+ years with pristine bounce.' },
];

const COLORS = [
  { id: 'natural-black', name: 'Natural Black (1B)', hex: '#1C1C1C', priceAdd: 0 },
  { id: 'jet-black', name: 'Deep Jet Black', hex: '#0A0A0A', priceAdd: 200 },
  { id: 'honey-blonde', name: 'Honey Blonde', hex: '#D4A373', priceAdd: 450 },
  { id: 'burgundy', name: 'Royal Burgundy Wine', hex: '#5E1914', priceAdd: 500 },
  { id: 'caramel-highlights', name: 'Caramel Highlights', hex: '#A87C53', priceAdd: 400 },
];

export default function WigCustomizer() {
  const [selectedTexture, setSelectedTexture] = useState('straight');
  const [selectedLength, setSelectedLength] = useState(18);
  const [selectedLace, setSelectedLace] = useState('closure');
  const [selectedGrade, setSelectedGrade] = useState('remy');
  const [selectedColor, setSelectedColor] = useState('natural-black');

  // Load preset options from Quick View preselect helper if found
  useEffect(() => {
    try {
      const saved = localStorage.getItem('shahair_preselect_customizer');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.texture) setSelectedTexture(item.texture);
        if (item.length) setSelectedLength(item.length);
        if (item.lace) setSelectedLace(item.lace);
        if (item.grade) setSelectedGrade(item.grade);
        if (item.color) setSelectedColor(item.color);
        
        // Immediate clean up
        localStorage.removeItem('shahair_preselect_customizer');
      }
    } catch (e) {
      console.warn('Could not retrieve customizer preselect details:', e);
    }
  }, []);

  // Find object details
  const textureObj = TEXTURES.find(t => t.id === selectedTexture) || TEXTURES[0];
  const lengthObj = LENGTHS.find(l => l.value === selectedLength) || LENGTHS[2];
  const laceObj = LACE_TYPES.find(l => l.id === selectedLace) || LACE_TYPES[0];
  const gradeObj = HAIR_GRADES.find(g => g.id === selectedGrade) || HAIR_GRADES[0];
  const colorObj = COLORS.find(c => c.id === selectedColor) || COLORS[0];

  // Calculate Price
  const estimatedPrice =
    lengthObj.priceBase +
    textureObj.priceAdd +
    laceObj.priceAdd +
    gradeObj.priceAdd +
    colorObj.priceAdd;

  const handleOrderWhatsApp = () => {
    const messageTemplate = `Hi Shahair! 👑 I would like to order a customized wig with the following premium specifications:

💇‍♀️ Hair Style: ${textureObj.name}
📏 Hair Length: ${selectedLength} inches (${lengthObj.label})
🧵 Lace Layout: ${laceObj.name}
🌸 Hair Class: ${gradeObj.name}
🎨 Color Style: ${colorObj.name}

Estimated Quote: R${estimatedPrice.toLocaleString()}

Please confirm the availability and send me bank details/EFT checkout link! Thank you.`;

    const encodedMsg = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/27608943159?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-rosegold font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4 text-rosegold fill-current" />
            Bespoke Crown Builder
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3">
            Custom Wig Quote builder
          </h2>
          <p className="text-warm-gray mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Configure your bespoke human hair wig. Check instant pricing estimates and submit directly on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-light space-y-8">
            
            {/* Step 1: Hair Style / Texture */}
            <div>
              <label className="block text-sm font-semibold text-charcoal uppercase tracking-wider mb-3 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-rosegold" />
                1. Select Texture Style
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {TEXTURES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTexture(t.id)}
                    className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer select-none relative ${
                      selectedTexture === t.id
                        ? 'border-burgundy bg-rose-light/20'
                        : 'border-rose-light hover:border-rosegold'
                    }`}
                  >
                    <div className="font-semibold text-charcoal flex justify-between items-center text-sm sm:text-base">
                      {t.name}
                      {t.priceAdd > 0 && (
                        <span className="text-xs text-burgundy font-medium">+{t.priceAdd > 0 ? `R${t.priceAdd}` : ''}</span>
                      )}
                    </div>
                    <p className="text-xs text-warm-gray mt-1 leading-relaxed">{t.desc}</p>
                    {selectedTexture === t.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-burgundy flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Hair Length Selection */}
            <div>
              <label className="block text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                2. Select Wig Length ({selectedLength} inches)
              </label>
              <div className="space-y-4">
                <input
                  type="range"
                  min="12"
                  max="26"
                  step="2"
                  value={selectedLength}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    // Standard slider values
                    if ([12, 16, 18, 20, 22, 24, 26].includes(val)) {
                      setSelectedLength(val);
                    } else {
                      // round to closest allowed standard
                      const allowed = [12, 16, 18, 20, 22, 24, 26];
                      const closest = allowed.reduce((prev, curr) => 
                        Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
                      );
                      setSelectedLength(closest);
                    }
                  }}
                  className="w-full h-2 bg-rose-light rounded-lg appearance-none cursor-pointer accent-burgundy"
                />
                <div className="flex flex-wrap gap-2">
                  {LENGTHS.map((len) => (
                    <button
                      key={len.value}
                      onClick={() => setSelectedLength(len.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        selectedLength === len.value
                          ? 'bg-burgundy text-white border-burgundy'
                          : 'bg-rose-light/50 text-charcoal border-rose-light hover:border-rosegold'
                      }`}
                    >
                      {len.value}"
                    </button>
                  ))}
                </div>
                <p className="text-xs text-warm-gray italic">
                  *Length guidelines are measured from Crown to Tips. Curly/Wavy hair style will appear slightly shorter than straight hair.
                </p>
              </div>
            </div>

            {/* Step 3: Lace Configuration */}
            <div>
              <label className="block text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                3. Lace Front & Closure Layout
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {LACE_TYPES.map((lace) => (
                  <button
                    key={lace.id}
                    onClick={() => setSelectedLace(lace.id)}
                    className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                      selectedLace === lace.id
                        ? 'border-burgundy bg-rose-light/20'
                        : 'border-rose-light hover:border-rosegold'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-charcoal text-xs sm:text-sm">
                        {lace.name}
                      </div>
                      <p className="text-[10px] text-warm-gray mt-1 leading-relaxed">{lace.desc}</p>
                    </div>
                    <span className="text-[11px] text-burgundy font-bold mt-2">
                      {lace.priceAdd > 0 ? `+R${lace.priceAdd}` : 'Base Layout'}
                    </span>
                    {selectedLace === lace.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-burgundy flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Hair Grade / Quality */}
            <div>
              <label className="block text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                4. Select Hair Grade
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {HAIR_GRADES.map((grade) => (
                  <button
                    key={grade.id}
                    onClick={() => setSelectedGrade(grade.id)}
                    className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer relative ${
                      selectedGrade === grade.id
                        ? 'border-burgundy bg-rose-light/20'
                        : 'border-rose-light hover:border-rosegold'
                    }`}
                  >
                    <div className="font-bold text-charcoal text-sm flex justify-between items-center">
                      {grade.name}
                      {grade.priceAdd > 0 && (
                        <span className="text-xs text-burgundy font-semibold">+R{grade.priceAdd}</span>
                      )}
                    </div>
                    <p className="text-xs text-warm-gray mt-1 leading-relaxed">{grade.desc}</p>
                    {selectedGrade === grade.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-burgundy flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Color Options */}
            <div>
              <label className="block text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                5. Select Color Undertone
              </label>
              <div className="flex flex-wrap gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all cursor-pointer font-medium text-xs sm:text-sm ${
                      selectedColor === color.id
                        ? 'border-burgundy bg-rose-light/30 ring-1 ring-burgundy'
                        : 'border-rose-light hover:border-rosegold'
                    }`}
                  >
                    <span
                      className="w-4.5 h-4.5 rounded-full border border-black/10 inline-block"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-charcoal font-semibold">{color.name}</span>
                    {color.priceAdd > 0 && (
                      <span className="text-xs text-burgundy">+R{color.priceAdd}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Styling Live Preview Quote Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-burgundy via-burgundy-dark to-charcoal text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute bottom-20 -left-12 w-24 h-24 bg-white/5 rounded-full" />

              <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blush fill-current animate-pulse" />
                Live Quote Estimate
              </h3>

              {/* Specs List */}
              <div className="space-y-4 border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Wig Style & texture</span>
                  <span className="font-semibold text-white">{textureObj.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Selected Length</span>
                  <span className="font-semibold text-white">{selectedLength} inches</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Lace & Cap Layout</span>
                  <span className="font-semibold text-white">{laceObj.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Hair Class Material</span>
                  <span className="font-semibold text-white">{gradeObj.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Hair Color Shade</span>
                  <span className="font-semibold text-white">{colorObj.name}</span>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="mb-8">
                <p className="text-xs text-white/60 uppercase tracking-widest">Estimated Price (ZAR)</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                    R{estimatedPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-blush bg-white/10 px-2 py-0.5 rounded-full">VAT Incl</span>
                </div>
              </div>

              {/* Benefits badge panel inside preview */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs">
                  <Award className="w-4 h-4 text-blush flex-shrink-0" />
                  <span>100% Secure EFT, Card, or COD checkout</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>2–5 day door-to-door nationwide delivery</span>
                </div>
              </div>

              {/* CTA WhatsApp order submitter */}
              <button
                onClick={handleOrderWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-4 px-6 font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/10 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current text-white" />
                <span>Submit Order via WhatsApp</span>
              </button>

              <p className="text-[10px] text-white/50 text-center mt-3 tracking-wide">
                👑 Free matching wig cap and satin hair wrap included with all WhatsApp orders!
              </p>
            </div>

            {/* Warning / Quality Disclaimer Card */}
            <div className="mt-4 bg-white rounded-2xl p-4 border border-rose-light flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rosegold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-charcoal">Pre-Plucked & Bleached Knots Option</p>
                <p className="text-[10px] text-warm-gray mt-0.5">
                  Our professional stylist can customize your wig hairline bleach/pluck for an extra R250. Let us know during WhatsApp checkout!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
