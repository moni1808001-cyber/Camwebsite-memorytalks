import React from 'react';
import { Camera, Heart, Award, Sparkles, Feather, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';
import { aboutus1, aboutus2 } from '../assets/images';

export function AboutSection({ onOpenBooking }) {
  const values = [
    {
      title: 'Empathy & Discretion',
      desc: 'We step into your sacred celebrations not as intrusive directors, but as gentle observers who honour your genuine emotions.',
      icon: Heart
    },
    {
      title: 'Timeless Golden Aesthetic',
      desc: 'Natural warmth, delicate cream tones, and refined golden highlights that never fall victim to passing social media trends.',
      icon: Sparkles
    },
    {
      title: 'Archival Medium & Color Science',
      desc: 'Shot on high-resolution medium format & cinema sensors, individually graded frame-by-frame for museum-grade print longevity.',
      icon: Camera
    },
    {
      title: 'Seamless Global Travel',
      desc: 'From the rolling hills of Tuscany and the canals of Venice to intimate family retreats worldwide, we travel with ease.',
      icon: Feather
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Dual Portraits & Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Photographer at work (aboutus1) */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-cream-200 aspect-[3/4]">
                <img
                  src={aboutus1}
                  alt="Manoj Kumar - Lead Photographer at Memory Talks"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Overlapping Image (aboutus2) */}
              <div className="absolute -bottom-8 -right-6 w-52 sm:w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={aboutus2}
                  alt="Manoj Kumar - Memory Talks Founder"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-gold-700">Lead Photographer & Founder</p>
                  <p className="font-serif text-sm text-charcoal-900 font-medium">Manoj Kumar</p>
                </div>
              </div>

              {/* Floating Award Seal */}
              <div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gold-200/60 shadow-lg flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold">Memory Talks</p>
                  <p className="font-serif text-xs text-charcoal-800">Fine Art Excellence</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold-700">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Meet Manoj Kumar & Memory Talks
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight">
              Giving timeless voice to life’s most precious, unforgettable moments.
            </h2>

            <div className="w-16 h-0.5 bg-gold-400" />

            <div className="space-y-4 text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
              <p>
                Hello, I am <strong className="font-semibold text-charcoal-900">Manoj Kumar</strong>, the photographer and creative vision behind <strong className="font-semibold text-charcoal-900">Memory Talks</strong>.
              </p>
              
              <p>
                Photography is far more than a craft to me—it is a lifelong passion for freezing time and preserving genuine human emotion. I believe that every glance, unforced laugh, and quiet tear holds profound beauty. My goal with every photograph is to let your memories speak for themselves, telling stories that remain vivid, warm, and heartfelt decades down the line.
              </p>

              <p>
                Whether capturing the grandeur of wedding vows, the gentle thrill of pre-wedding love stories, or peaceful post-wedding memoirs, I work unobtrusively with natural golden light to bring out your true, authentic essence.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Tailored shot list & timeline planning',
                'Natural light & editorial direction',
                'Full digital gallery within 4 weeks',
                'Complimentary engagement consultation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-gold-500 hover:bg-gold-600 text-white shadow-gold-subtle transition-all duration-300"
              >
                Inquire For Your Date
              </button>
              <span className="text-xs text-charcoal-500 italic font-serif">
                Currently booking 2025 & 2026 seasons
              </span>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mt-16 pt-16 border-t border-cream-200">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">The Standard</p>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mt-1">Our Artistic Pillars</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-cream-200/90 shadow-cream-card hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-charcoal-900 font-medium">{v.title}</h4>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* By The Numbers Ribbon */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-cream-200 shadow-cream-card">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-cream-200">
            {STATS.map((s, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'px-4' : ''}`}>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-gold-600 mb-1">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-charcoal-500 font-sans">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

