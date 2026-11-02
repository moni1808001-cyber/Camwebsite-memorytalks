import React from 'react';
import { Camera, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { PHOTOS, CATEGORIES } from '../data/portfolioData';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer({ onSelectCategory, setActiveSection, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    setActiveSection('photos');
    const el = document.getElementById('photos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6 Instagram teaser thumbnails
  const instaThumbs = PHOTOS.slice(0, 6);

  return (
    <footer className="bg-cream-100 border-t border-cream-200 text-charcoal-800">
      
      {/* Instagram & Social Strip */}
      <div className="border-b border-cream-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold font-sans">
              Follow Us on Social Media
            </span>
            <span className="hidden sm:inline text-cream-300">|</span>
            <a
              href="https://www.instagram.com/mr_mk.mano_08202?exln=d3prYWlhM2loYmky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-50 hover:bg-gold-50 border border-gold-200/90 text-charcoal-800 hover:text-gold-700 transition-all group shadow-sm hover:shadow-gold-subtle"
            >
              <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-medium tracking-wide">@mr_mk.mano_08202</span>
            </a>
          </div>
          <span className="text-xs text-charcoal-500 font-serif italic">
            Daily golden hour diaries & editorial previews
          </span>
        </div>

        {/* 6 Grid Thumbs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
          {instaThumbs.map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/mr_mk.mano_08202?exln=d3prYWlhM2loYmky"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-cream-200 block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <InstagramIcon className="w-5 h-5 text-gold-300" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-white shadow-sm">
                <Camera className="w-5 h-5 text-gold-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.18em] font-medium text-charcoal-900 leading-none">
                  MEMORY TALKS
                </span>
                <span className="text-[9px] tracking-[0.28em] uppercase text-gold-700 font-sans mt-1">
                  Fine Art Photography & Cinema
                </span>
              </div>
            </div>

            <p className="text-xs text-charcoal-600 font-light leading-relaxed max-w-sm">
              Founded by Manoj Kumar, Memory Talks is dedicated to capturing sacred love, raw emotions, and timeless celebrations with fine art excellence and radiant golden light.
            </p>

            <div className="pt-2 text-xs text-charcoal-700 space-y-2">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                <span>
                  Mobile:{' '}
                  <a
                    href="tel:9597782125"
                    className="font-medium text-charcoal-900 hover:text-gold-700 underline underline-offset-2 transition-colors"
                  >
                    9597782125
                  </a>
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                <span>
                  Email:{' '}
                  <a
                    href="mailto:moni1808001@gmail.com"
                    className="font-medium text-charcoal-900 hover:text-gold-700 underline underline-offset-2 transition-colors"
                  >
                    moni1808001@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-widest text-gold-700 font-semibold font-sans">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-gold-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-gold-600 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('photos')}
                  className="hover:text-gold-600 transition-colors"
                >
                  Photos Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('videos')}
                  className="hover:text-gold-600 transition-colors"
                >
                  Motion & Cinema
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-gold-700 font-medium hover:underline"
                >
                  Book Session
                </button>
              </li>
            </ul>
          </div>

          {/* Galleries */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-gold-700 font-semibold font-sans">
              Photo Galleries
            </p>
            <ul className="space-y-2 text-xs text-charcoal-600">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-gold-600 transition-colors flex items-center justify-between w-full"
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-charcoal-400">
                      {cat.count} {cat.count === 1 ? 'Work' : 'Works'}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Journal */}
          <div className="lg:col-span-3 space-y-6">
            {/* Follow Us on Social Media */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-gold-700 font-semibold font-sans">
                Follow Us on Social Media
              </h4>
              <p className="text-xs text-charcoal-600 font-light">
                Join our community for daily stories, behind the scenes, and new highlights.
              </p>
              <a
                href="https://www.instagram.com/mr_mk.mano_08202?exln=d3prYWlhM2loYmky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-4 py-2.5 rounded-full bg-white border border-cream-200 hover:border-gold-400 text-charcoal-800 hover:text-gold-700 transition-all shadow-sm hover:shadow-gold-subtle group"
              >
                <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium tracking-wide">@mr_mk.mano_08202</span>
              </a>
            </div>

            <div className="pt-4 border-t border-cream-200/80 space-y-3">
              <p className="text-xs uppercase tracking-widest text-gold-700 font-semibold font-sans">
                Journal & Dates
              </p>
              <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                Subscribe for our seasonal travel destination schedules and fine art photography journal entries.
              </p>
              <div className="flex items-center space-x-1 pt-1">
                <input
                  type="email"
                  placeholder="your.email@domain.com"
                  className="w-full px-3 py-2 rounded-l-full border border-cream-300 bg-white text-xs text-charcoal-900 focus:outline-none focus:border-gold-500"
                />
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-r-full bg-gold-500 text-white text-xs uppercase tracking-wider font-medium hover:bg-gold-600 transition-colors"
                >
                  Join
                </button>
              </div>
              <p className="text-[10px] text-charcoal-400 font-light italic">
                Accepting limited commissions worldwide for 2025/2026.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <p>© {new Date().getFullYear()} Memory Talks. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <span className="hover:text-gold-700 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-gold-700 cursor-pointer">Terms of Commission</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white border border-cream-200 text-charcoal-700 hover:text-gold-700 hover:border-gold-400 transition-colors flex items-center space-x-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
