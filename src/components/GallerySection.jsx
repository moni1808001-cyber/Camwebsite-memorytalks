import React, { useState, useMemo } from 'react';
import { CATEGORIES, PHOTOS } from '../data/portfolioData';
import { Eye, MapPin, Sparkles, Image as ImageIcon } from 'lucide-react';

export function GallerySection({ selectedCategory, onSelectCategory, onPhotoClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategoryInfo = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  const filteredPhotos = useMemo(() => {
    return PHOTOS.filter((photo) => {
      const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
      const matchesSearch =
        searchTerm === '' ||
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (photo.location && photo.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (photo.filename && photo.filename.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="photos" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-700">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Fine Art Portfolio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal">
            Moments Immortalized in Light
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 font-light pt-2">
            Browse through our dedicated galleries for Wedding, Pre-Wedding, Post-Wedding, Baby Shower, Vehicle Bike, Vehicle Car, and Influencer. Images added directly to your folders appear here automatically.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-gold-500 text-white font-semibold shadow-gold-subtle scale-105'
                    : 'bg-white hover:bg-cream-100 text-charcoal-700 border border-cream-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-cream-100 text-charcoal-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Current Active Category Description Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold block">
              Viewing Gallery
            </span>
            <h3 className="font-serif text-2xl text-charcoal-900">
              {currentCategoryInfo.label} Collection
            </h3>
            <p className="text-xs text-charcoal-600 font-light mt-0.5 max-w-2xl">
              {currentCategoryInfo.description}
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs text-charcoal-500">
            <span className="px-3 py-1.5 rounded-full bg-cream-50 border border-cream-200 font-medium">
              Showing {filteredPhotos.length} Photographs
            </span>
          </div>
        </div>

        {/* Photos Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16 px-6 bg-white rounded-2xl border border-cream-200 max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mx-auto">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-charcoal-800">
              No photos added to this gallery yet
            </h4>
            <p className="text-xs text-charcoal-500 font-light leading-relaxed">
              To add photos here, simply drop your <code className="bg-cream-100 px-2 py-0.5 rounded border border-cream-200">.jpg</code>, <code className="bg-cream-100 px-2 py-0.5 rounded border border-cream-200">.png</code>, or <code className="bg-cream-100 px-2 py-0.5 rounded border border-cream-200">.webp</code> images into <strong className="text-charcoal-700">src/assets/images/{selectedCategory === 'all' ? '[category]' : selectedCategory}/</strong>.
            </p>
            <p className="text-[11px] text-gold-700 font-medium">
              They will appear here automatically without modifying any code!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-cream-card hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1.5"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Dark subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md text-charcoal-800 shadow-sm border border-gold-200/50">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Floating Details */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center space-x-1.5 text-gold-300 text-[11px] mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{photo.location}</span>
                    </div>
                    <h4 className="font-serif text-2xl font-normal leading-tight text-white mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-cream-100/90 font-light italic">
                      {photo.story}
                    </p>

                    <div className="pt-3 mt-3 border-t border-white/20 flex items-center justify-between text-[11px]">
                      <span className="text-cream-200">{photo.cameraInfo}</span>
                      <span className="inline-flex items-center space-x-1 text-gold-300 font-medium">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Lightbox</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visible Info Card Below Image */}
                <div className="p-5 bg-white border-t border-cream-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-charcoal-900 group-hover:text-gold-700 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-charcoal-500 font-light mt-0.5">
                      {photo.categoryLabel} · {photo.filename || photo.location}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-cream-200 flex items-center justify-center text-charcoal-400 group-hover:border-gold-500 group-hover:text-gold-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
