/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, MessageSquare, CreditCard, Truck, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Browse & Choose',
    desc: 'Explore our catalog of premium handpicked human hair wigs. Use state filters or consult directly with us to find your match.'
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Order on WhatsApp',
    desc: 'Simply tap "Order" or use our customized Wig Builder to auto-estimate a quote. Send the configuration string directly to our consultant.'
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Secure Payment (EFT/Card)',
    desc: "Once your parameters are confirmed, pay securely via standard Bank EFT or direct secure payment link. Your funds are verified immediately."
  },
  {
    num: '04',
    icon: Truck,
    title: 'Nationwide courier delivery',
    desc: 'We pack your crown with an complementary wig cap and silk wrapping paper. Shipped securely to your door via Courier Guy (2-5 days).'
  }
];

const FAQS = [
  {
    q: 'How long do human hair wigs from Shahair typically last?',
    a: 'Due to our commitment to raw-origin Remy and virgin products, ours wigs hold cuticles intact! With standard aftercare (regular gentle washing, deep conditioning sprays, storing on a wig mount or in a satin bag), they can easily last 1–2 years or more.'
  },
  {
    q: 'Can I curl, straighten, and blow dry the wigs?',
    a: 'Absolutely! Our wigs represent genuine 100% human hair. They naturally withstand styling heat tools, straighteners, rollers, and blow-dryers. We highly recommend using a premium Heat Protector Spray beforehand to retain hair elasticity.'
  },
  {
    q: 'Is it safe to dye or bleach these hair extensions?',
    a: 'Yes, our Raw Virgin Indian selections (like Cape Town Chic and Pretoria Pearl) are fully capable of bleaching up to Blonde Shade 27 or custom bright coloring. We advise consulting a professional hairdresser to preserve structural density.'
  },
  {
    q: 'What is your refund or return policy?',
    a: 'Due to strict hygiene protocols with custom products, wigs can only be returned or exchanged if they are in their pristine original state (HD lace uncut, hair unwashed, tags attached, unaltered). Please contact us on WhatsApp within 48 hours of courier delivery to initiate any inquiries.'
  },
  {
    q: 'How does Nationwide delivery operate?',
    a: 'We send packages nation-wide inside South Africa using leading couriers (The Courier Guy / Aramex). Courier service is door-to-door, secure, and has tracking available. Main centers (JHB, PTA) receive parcels in 1-2 days; coastal centers (CT, DBN, PE) in 3-5 days.'
  },
  {
    q: 'Which payment options are accepted?',
    a: 'We process secure Bank EFT payments, secure automated PayFast card payment links (supporting Visa, Mastercard, and Instant EFT), or Cash on Pick-up at our scheduled JHB office suite.'
  }
];

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b border-rose-light text-center mt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-rosegold font-semibold text-xs uppercase tracking-widest block mb-2">Simplicity & Trust</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            How It Works
          </h1>
          <p className="text-warm-gray text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Experience our easy boutique process. Ordering, payment, and delivery are built completely around your personal convenience.
          </p>
        </div>
      </section>

      {/* Step Timeline Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Connector Line for Desktop */}
        <div className="hidden lg:block absolute left-12 right-12 top-28 h-0.5 bg-gradient-to-r from-rose via-rosegold/30 to-rose" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-rose-light/75 text-center relative group hover:shadow-md transition-shadow">
                
                {/* Visual Number circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose to-blush flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-105 transition-transform shadow-sm">
                  <Icon className="w-7 h-7 text-burgundy" />
                </div>
                
                <span className="text-rosegold font-bold block text-sm mb-1 uppercase tracking-widest">
                  {step.num}
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-warm-gray leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}
        </div>
      </section>

      {/* Frequently Asked Inquiries block (Accordion widget) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-rose-light/20 rounded-3xl py-12 px-6 sm:px-12 border border-rose-light">
        <div className="text-center">
          <HelpCircle className="w-10 h-10 text-burgundy mx-auto mb-3" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Frequently Asked Inquiries
          </h2>
          <p className="text-warm-gray text-xs mt-1">
            Find immediate answers on quality, delivery, and styling aftercare.
          </p>
        </div>

        <div className="space-y-3.5 mt-8">
          {FAQS.map((faq, idx) => {
            const isFaqOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-rose-light/50 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-charcoal hover:bg-rose-light/15 focus:outline-none focus:ring-0 transition-colors select-none text-xs sm:text-sm cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isFaqOpen ? (
                    <ChevronUp className="w-4 h-4 text-rosegold" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-rosegold" />
                  )}
                </button>

                <AnimatePresence>
                  {isFaqOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-warm-gray leading-relaxed border-t border-rose-light/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
