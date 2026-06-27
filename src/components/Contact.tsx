/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { MessageSquare, Smartphone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'product-enquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate netlify submission or database log
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'product-enquiry',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b border-rose-light text-center mt-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-rosegold font-semibold text-xs uppercase tracking-widest block mb-2">Connect With Us</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            Get In Touch
          </h1>
          <p className="text-warm-gray text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Got custom styling questions? Want to discuss custom coloring, local pickup slots, or wholesale? Drop us a prompt. We reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Details layout grids */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Form column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-rose-light shadow-xs relative">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Send Us A Message</h2>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 rounded-2xl p-6 text-center border border-green-150 space-y-4 py-12"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-green-900">Message Sent Successfully!</h3>
                <p className="text-xs text-green-700 max-w-sm mx-auto leading-relaxed">
                  Thank you for connecting with Shahair. Your inquiry has been processed. One of our hair stylists will follow up with you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 text-xs font-bold transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal/80 uppercase mb-1.5 pl-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lerato Mokwena"
                      className="w-full px-4 py-3 rounded-xl border border-rose-light bg-cream/10 focus:bg-white outline-none focus:ring-1 focus:ring-burgundy transition-all text-xs font-medium text-charcoal placeholder-warm-gray/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-charcoal/80 uppercase mb-1.5 pl-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. lerato@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-rose-light bg-cream/10 focus:bg-white outline-none focus:ring-1 focus:ring-burgundy transition-all text-xs font-medium text-charcoal placeholder-warm-gray/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-charcoal/80 uppercase mb-1.5 pl-1">
                    WhatsApp Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 060 894 3159"
                    className="w-full px-4 py-3 rounded-xl border border-rose-light bg-cream/10 focus:bg-white outline-none focus:ring-1 focus:ring-burgundy transition-all text-xs font-medium text-charcoal placeholder-warm-gray/50"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-charcoal/80 uppercase mb-1.5 pl-1">
                    Subject Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-rose-light bg-cream/10 focus:bg-white outline-none focus:ring-1 focus:ring-burgundy transition-all text-xs font-semibold text-charcoal cursor-pointer"
                  >
                    <option value="product-enquiry">Product Enquiry & Availability</option>
                    <option value="custom-spec">Bespoke Fitting & Customizing</option>
                    <option value="wholesale">Wholesale & Stylist Partnerships</option>
                    <option value="delivery-support">Courier & Delivery Status</option>
                    <option value="feedback">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-charcoal/80 uppercase mb-1.5 pl-1">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your dream wig, preferred density, cap size, or customized highlight specifications..."
                    className="w-full px-4 py-3 rounded-xl border border-rose-light bg-cream/10 focus:bg-white outline-none focus:ring-1 focus:ring-burgundy transition-all text-xs font-medium text-charcoal placeholder-warm-gray/50 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-burgundy hover:bg-burgundy-dark text-white rounded-full py-3.5 font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md shadow-burgundy/10 cursor-pointer disabled:bg-burgundy/60"
                >
                  {loading ? 'Sending Request...' : 'Submit Message'}
                </button>
              </form>
            )}
          </div>

          {/* Local Information and hours column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">Studio & Channels</h2>
            
            {/* Direct Channels cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-green-50 border border-green-100 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-green-500/10">
                  <MessageSquare className="w-6 h-6 fill-current text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-charcoal leading-tight">Fastest Channel: WhatsApp</h3>
                  <p className="text-[11px] text-warm-gray mt-1 leading-relaxed">
                    Consultations, order confirmations, custom photos, weight videos, and instant quotes.
                  </p>
                  <a 
                    href="https://wa.me/27608943159?text=Hi!%20I%20have%20an%20enquiry%20regarding%20Shahair%20Premium%20Wigs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-bold text-xs text-green-600 hover:text-green-700 transition-colors"
                  >
                    🚀 Ping +27 60 894 3159
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-rose-light shadow-xs">
                <div className="w-12 h-12 rounded-full bg-rose-light text-rosegold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-charcoal leading-tight">Business Email</h3>
                  <p className="text-[11px] text-warm-gray mt-1 leading-relaxed">
                    For wholesale invoice layouts, bulk catalog orders, or POPIA queries.
                  </p>
                  <a 
                    href="mailto:hello@shahair.co.za" 
                    className="inline-block mt-2 font-bold text-xs text-burgundy hover:text-burgundy-dark transition-colors"
                  >
                    hello@shahair.co.za
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-rose-light shadow-xs">
                <div className="w-12 h-12 rounded-full bg-rose-light text-rosegold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-charcoal leading-tight">Studio Pickup Landmark</h3>
                  <p className="text-[11px] text-warm-gray mt-1 leading-relaxed">
                    Johannesburg Business Suite, Sandton, Gauteng, South Africa.
                  </p>
                  <p className="text-[10px] text-rosegold mt-1.5 font-semibold">
                    📍 In-person fitting available by appointment booking only.
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-rose-light shadow-xs">
                <div className="w-12 h-12 rounded-full bg-rose-light text-rosegold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-charcoal leading-tight">Business Consult Times</h3>
                  <p className="text-[11px] text-warm-gray mt-1 leading-relaxed">
                    Monday – Friday: 08:00 – 18:00 <br />
                    Saturday: 09:00 – 14:00 <br />
                    Sundays: Closed (WhatsApp chat monitored periodically)
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
