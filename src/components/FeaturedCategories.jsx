import React from 'react';
import { ArrowUpRight, Heart, Sparkles, Compass } from 'lucide-react';
import { PHOTOS } from '../data/portfolioData';

export function FeaturedCategories({ onSelectCategory }) {
  const getCategoryPhoto = (catId, fallbackUrl) => {
    const found = PHOTOS.find(p => p.category === catId);
    return found ? found.image : fallbackUrl;
  };

  const getCategoryCount = (catId) => {
    const count = PHOTOS.filter(p => p.category === catId).length;
    return `${count} ${count === 1 ? 'Photograph' : 'Photographs'}`;
  };

  const categories = [
    {
      id: 'wedding',
      title: 'Weddings & Ceremonies',
      tagline: 'Grandeur & Sacred Promises',
      description: 'The tender tears, monumental vows, and timeless celebrations of two souls pledging their forever.',
      image: getCategoryPhoto('wedding', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80'),
      count: getCategoryCount('wedding'),
      icon: Heart
    },
    {
      id: 'pre-wedding',
      title: 'Pre-Wedding & Engagement',
      tagline: 'Adventure & Anticipation',
      description: 'Romantic destination shoots across sun-drenched coastlines, scenic architecture, and effortless candid intimacy.',
      image: getCategoryPhoto('pre-wedding', 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80'),
      count: getCategoryCount('pre-wedding'),
      icon: Compass
    },
    {
      id: 'post-wedding',
      title: 'Post-Wedding & Honeymoon',
      tagline: 'Serenity After The Vows',
      description: 'Relaxed morning portraits, barefoot seaside walks, and peaceful honeymoon memoirs as newlyweds.',
      image: getCategoryPhoto('post-wedding', 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80'),
      count: getCategoryCount('post-wedding'),
      icon: Sparkles
    }
  ];

  const handleClick = (id) => {
    onSelectCategory(id);
    const el = document.getElementById('photos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-y border-cream-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold font-sans">
            Curated Portfolios
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal">
            Specialized Photographic Chapters
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 font-light pt-2">
            Every chapter of your journey holds its own rhythm, atmosphere, and grace. Explore our distinct galleries.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => handleClick(cat.id)}
                className="group relative bg-cream-50 rounded-2xl overflow-hidden border border-cream-200/90 shadow-cream-card hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1.5"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-charcoal-800">
                      <Icon className="w-3 h-3 text-gold-600" />
                      <span>{cat.count}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-widest text-gold-300 font-sans mb-1">
                      {cat.tagline}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Card Description Footer */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light line-clamp-2">
                    {cat.description}
                  </p>
                  
                  <div className="pt-2 border-t border-cream-100 flex items-center justify-between text-xs text-gold-700 font-medium group-hover:text-gold-800">
                    <span className="uppercase tracking-widest text-[11px]">Explore Gallery</span>
                    <div className="w-7 h-7 rounded-full bg-gold-50 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:bg-gold-500 group-hover:text-white">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
