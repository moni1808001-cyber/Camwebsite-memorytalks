import React from 'react';
import { Sparkles, ArrowRight, Play, Award } from 'lucide-react';
import { PHOTOS } from '../data/portfolioData';
import { aboutus2 } from '../assets/images';

export function Hero({ onExploreClick, onWatchVideoClick, onOpenBooking }) {
  const heroImage = aboutus2;
  const heroTitle = 'Memory Talks';
  return (
    <section id="home" className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream-50">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cream-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 pt-4">

            {/* Elegant Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold-300/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-gold-800">
                Memory Talks · Luxury Fine Art Photography & Cinema
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-charcoal-900 leading-[1.12] tracking-tight">
              Where intimate love meets{' '}
              <span className="italic font-normal text-gold-gradient font-serif">
                timeless golden light.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-sm sm:text-base md:text-lg text-charcoal-600 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Preserving life’s most profound celebrations—from the sacred vows of weddings to romantic destination memoirs, captured in pure golden elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-gold-500 hover:bg-gold-600 text-white shadow-gold-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5"
              >
                <span>View Galleries</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWatchVideoClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-white hover:bg-cream-100 text-charcoal-800 border border-cream-200/80 shadow-sm transition-all duration-300 flex items-center justify-center space-x-2.5 group"
              >
                <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Reel (4K)</span>
              </button>
            </div>

            {/* Trust Metrics / Badges */}
            <div className="pt-8 border-t border-cream-200/70 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-medium">12+</p>
                <p className="text-[11px] uppercase tracking-wider text-charcoal-500 mt-0.5">Years Experience</p>
              </div>
              <div className="border-x border-cream-200/80 px-2">
                <p className="font-serif text-2xl sm:text-3xl text-gold-600 font-medium">450+</p>
                <p className="text-[11px] uppercase tracking-wider text-charcoal-500 mt-0.5">Weddings Celebrated</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-medium">5.0 ★</p>
                <p className="text-[11px] uppercase tracking-wider text-charcoal-500 mt-0.5">Vogue Featured</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Golden Frame Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-cream-200">
                <img
                  src={heroImage}
                  alt={heroTitle}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Floating caption tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gold-200/50 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold">Memory Talks</p>
                      <p className="font-serif text-base text-charcoal-900">{heroTitle}</p>
                    </div>
                    <span className="text-[11px] text-charcoal-500 italic font-serif">Fine Art</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Badge (Award seal) */}
              <div className="absolute -top-4 -right-4 z-20 w-24 h-24 rounded-full bg-cream-50/95 border-2 border-gold-400 p-2 shadow-lg flex flex-col items-center justify-center text-center backdrop-blur-sm animate-pulse">
                <Award className="w-5 h-5 text-gold-600 mb-0.5" />
                <span className="text-[8px] uppercase tracking-widest font-bold text-charcoal-900 leading-tight">
                  Best In Fine Art
                </span>
                <span className="text-[7px] text-gold-700">2025 Honors</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

