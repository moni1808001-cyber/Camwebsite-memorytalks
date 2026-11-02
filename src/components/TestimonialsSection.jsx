import React, { useState } from 'react';
import { TESTIMONIALS, PACKAGES } from '../data/portfolioData';
import { Star, Quote, Check, Sparkles, ArrowRight } from 'lucide-react';

export function TestimonialsSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('testimonials');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-cream-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Toggle between Testimonials & Investment */}
        <div className="flex items-center justify-center space-x-3 mb-16">
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === 'testimonials'
                ? 'bg-gold-500 text-white shadow-gold-subtle'
                : 'bg-cream-50 text-charcoal-700 hover:bg-cream-100 border border-cream-200'
            }`}
          >
            Client Stories & Reviews
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
              activeTab === 'packages'
                ? 'bg-gold-500 text-white shadow-gold-subtle'
                : 'bg-cream-50 text-charcoal-700 hover:bg-cream-100 border border-cream-200'
            }`}
          >
            Investment & Collections
          </button>
        </div>

        {activeTab === 'testimonials' ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
                Heartfelt Praise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal">
                Loved by Couples & Families
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
              <p className="text-sm text-charcoal-600 font-light pt-2">
                The greatest privilege is holding space for life’s most vulnerable, sacred moments.
              </p>
            </div>

            {/* Testimonials Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="bg-cream-50 rounded-2xl p-8 border border-cream-200/90 shadow-cream-card relative flex flex-col justify-between"
                >
                  <Quote className="w-8 h-8 text-gold-300 mb-4" />

                  {/* Stars */}
                  <div className="flex items-center space-x-1 text-gold-500 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-charcoal-700 font-light italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>

                  {/* Author Profile */}
                  <div className="pt-4 border-t border-cream-200 flex items-center space-x-3">
                    <img
                      src={item.avatar}
                      alt={item.couple}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold-300"
                    />
                    <div>
                      <h4 className="font-serif text-base text-charcoal-900 font-medium">
                        {item.couple}
                      </h4>
                      <p className="text-xs text-gold-700 font-sans">{item.celebration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Investment Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
                Transparent Pricing
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal">
                Curated Collections
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
              <p className="text-sm text-charcoal-600 font-light pt-2">
                All collections include high-resolution color grading, full personal print rights, and an archival online gallery.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-cream-100 border-2 border-gold-400 shadow-xl lg:-translate-y-2'
                      : 'bg-white border border-cream-200 shadow-cream-card'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-500 text-white text-[10px] uppercase tracking-widest font-bold shadow-md">
                      Most Chosen
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-gold-700 font-semibold">
                        {pkg.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl text-charcoal-900 mt-1">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="mb-6 pb-6 border-b border-cream-200">
                      <span className="font-serif text-4xl text-charcoal-900 font-medium">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-charcoal-500 ml-2">/ starting investment</span>
                      <p className="text-xs text-charcoal-600 font-light mt-3 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-charcoal-700">
                          <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-gold-subtle'
                        : 'bg-white hover:bg-gold-50 text-charcoal-800 border border-gold-400'
                    }`}
                  >
                    Select Collection
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

