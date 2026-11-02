import React from 'react';
import { ExternalLink, Sparkles, Heart } from 'lucide-react';
import { PHOTOS } from '../data/portfolioData';

function InstagramIcon({ className = "w-5 h-5" }) {
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

export function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/mr_mk.mano_08202?exln=d3prYWlhM2loYmky";
  const username = "@mr_mk.mano_08202";

  // Use loaded local photos (strictly wedding, pre-wedding, post-wedding for homepage)
  const romanticPhotos = PHOTOS.filter((p) => p.category !== 'baby-shower');

  const defaultFallbacks = [
    { title: 'Tuscan Sunset Vows', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', likes: '1.2k' },
    { title: 'Parisian Morning Walk', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80', likes: '942' },
    { title: 'Amalfi Coast Romance', image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80', likes: '1.8k' },
    { title: 'Cathedral Veil & Light', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80', likes: '2.1k' },
    { title: 'Lake Como Villa Serenade', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80', likes: '870' }
  ];

  const feedImages = romanticPhotos.length > 0
    ? romanticPhotos.slice(0, 5).map((p, idx) => ({
        id: p.id,
        title: p.title,
        image: p.image,
        likes: `${(idx + 1) * 380 + 520}`
      }))
    : defaultFallbacks;

  return (
    <section className="py-20 bg-cream-50/80 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Header with Clickable Icon and Username */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 text-gold-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              Live Feed & Daily Stories
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
            Follow Our Visual Journal
          </h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />

          {/* Clickable Instagram Icon & Username Badge */}
          <div className="pt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white hover:bg-gold-50 border border-gold-300/80 text-charcoal-900 shadow-sm hover:shadow-gold-subtle transition-all duration-300 group transform hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <span className="font-sans font-medium text-sm tracking-wider text-charcoal-800 group-hover:text-gold-700 transition-colors">
                {username}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <p className="text-xs text-charcoal-500 font-light pt-1">
            Behind the scenes, golden hour portraits, and destination memoirs updated weekly.
          </p>
        </div>

        {/* 5-Photo Interactive Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {feedImages.map((item) => (
            <a
              key={item.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-cream-200 border border-cream-200/90 shadow-sm cursor-pointer block"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Overlay with Icon & Likes */}
              <div className="absolute inset-0 bg-charcoal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-1.5 p-3 text-center">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-gold-300">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <p className="text-xs font-serif text-white line-clamp-1">{item.title}</p>
                <div className="flex items-center space-x-1 text-[11px] text-cream-100">
                  <Heart className="w-3 h-3 fill-current text-rose-400" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Follow Button */}
        <div className="text-center mt-8">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-gold-700 hover:text-gold-900 transition-colors"
          >
            <span>View Full Instagram Gallery</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
