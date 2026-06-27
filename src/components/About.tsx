/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Heart, Shield, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Curated Precision',
      desc: 'We do not sell mass bulk batches. Each lace cap, weave strand, and color blend is visually and physically checked by our premium stylists before sterilizing.'
    },
    {
      icon: Heart,
      title: 'Confidence & Empowerment',
      desc: "Beauty is a strong form of self-expression. We configure our hair architectures to look completely natural, giving South African women the power to own their crowns."
    },
    {
      icon: Shield,
      title: 'Transparence & Trust',
      desc: 'All our options represent genuine raw weight human hair specs. No misleading fibers or ambiguous marketing. What you pay is what you wear.'
    }
  ];

  const stats = [
    { value: '100%', label: 'Human Hair Promise' },
    { value: '500+', label: 'Happy Queens in SA' },
    { value: '4.9★', label: 'Client Feedback Rating' },
    { value: '2-5 Days', label: 'Door Courier Delivery' }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b border-rose-light text-center mt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-rosegold font-semibold text-xs uppercase tracking-widest block mb-2">Our Origins</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            About Shahair
          </h1>
          <p className="text-warm-gray text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Our story is born from a lifelong obsession for luxury hair aesthetics and empowering women through pristine grace.
          </p>
        </div>
      </section>

      {/* Owner Story section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-burgundy font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rosegold fill-current" />
              Empowering South African Luxury
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              Crafting Crowns to reveal your inner majesty
            </h2>
            <div className="text-xs sm:text-sm text-warm-gray leading-relaxed space-y-4">
              <p>
                Shahair was launched in Johannesburg with an fundamental belief: any woman deserves to look, feel, and express herself in ultimate confidence. What started as a personal passion identifying authentic weave bundles has evolved into one of South Africa’s most loved online boutique wig brands.
              </p>
              <p>
                We understand that your hair is your crown. In our local South African environment, protective styling needs to look completely authentic, feel feather-light under the sun, and last for years without losing soft, bouncy definitions.
              </p>
              <p>
                That is why we strictly buy raw hair bundles directly from Indian and Brazilian donor sources. I personally inspect each HD Swiss mesh, test the knot bleached gradients, wash each wig with custom hydration formulas, and ensure they are pristine and ready to wear out of the box!
              </p>
              <p>
                We look forward to welcoming you into the Shahair sisterhood. Your crown is waiting!
              </p>
            </div>
          </div>

          {/* Picture frame */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-rose-light bg-rose-light/50 max-w-sm mx-auto">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80"
                alt="Representative Portrait of Shahair founder"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Soft decorative visual structures */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blush/30 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-burgundy/10 rounded-full -z-10" />
          </div>

        </div>
      </section>

      {/* Metrics Counter Grid */}
      <section className="bg-gradient-to-r from-burgundy via-burgundy-dark to-charcoal text-white rounded-3xl max-w-7xl mx-auto p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divider-y">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-white/70 text-xs uppercase tracking-widest font-medium font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-rosegold font-semibold text-xs uppercase tracking-widest block mb-2">Our Foundation</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">What We Represent</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-light hover:shadow-md transition-shadow duration-300 flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center text-rosegold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal">{v.title}</h3>
                <p className="text-xs text-warm-gray leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Satisfaction Promise Block */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-rose-light/20 rounded-3xl p-8 sm:p-12 border border-rose-light/50 space-y-6">
        <div className="w-16 h-16 rounded-full bg-burgundy flex items-center justify-center text-white mx-auto shadow-md">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">The sisterhood promise</h3>
        <p className="text-xs sm:text-sm text-warm-gray leading-relaxed max-w-2xl mx-auto">
          When you buy from Shahair, you don't just receive a parcel, you join a vibrant community of beautiful queens. We provide complete hairstyle aftercare, tips on how to preserve curls, bleach hairlines, and advise which silk wraps hold density longest. We're here for you every step of the way!
        </p>
      </section>

    </div>
  );
}
