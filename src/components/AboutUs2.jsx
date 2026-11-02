import React, { useState } from 'react';
import { Sparkles, Compass, ArrowUpRight, CheckCircle2, Car, Bike, UserCheck, Eye, Layers } from 'lucide-react';
import {
  vehicleSectionImages,
  influencerSectionImages
} from '../assets/images';

export function AboutUs2({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState(null);

  // Tab filter logic
  const showVehicles = activeTab === 'all' || activeTab === 'vehicles';
  const showInfluencers = activeTab === 'all' || activeTab === 'influencers';

  return (
    <section id="commercial" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream-50/70 border-b border-cream-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-700">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Commercial & Editorial Showcases
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight">
            Vehicles & Influencer Editions
          </h2>

          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />

          <p className="text-sm sm:text-base text-charcoal-600 font-light pt-2 leading-relaxed">
            Beyond weddings and family milestones, Memory Talks captures high-octane automotive campaigns and high-fashion creator editorials with signature golden warmth.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gold-500 text-white shadow-gold-subtle'
                  : 'bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              All Showcases ({vehicleSectionImages.length + influencerSectionImages.length})
            </button>

            <button
              onClick={() => setActiveTab('vehicles')}
              className={`inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeTab === 'vehicles'
                  ? 'bg-gold-500 text-white shadow-gold-subtle'
                  : 'bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Vehicles ({vehicleSectionImages.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('influencers')}
              className={`inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeTab === 'influencers'
                  ? 'bg-gold-500 text-white shadow-gold-subtle'
                  : 'bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Influencers ({influencerSectionImages.length})</span>
            </button>
          </div>
        </div>

        {/* 1. VEHICLES SECTION */}
        {showVehicles && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-200">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
                    Vehicle Photography Collection
                  </h3>
                  <p className="text-xs text-charcoal-500 font-light">
                    Superbikes, luxury automobiles, and bespoke automotive editorials
                  </p>
                </div>
              </div>

              <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200/80 hidden sm:inline-block">
                {vehicleSectionImages.length} Vehicles Displayed
              </span>
            </div>

            {/* Vehicle Cards Grid — Bike and Car with identical design & size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {vehicleSectionImages.map((veh) => {
                const IconComponent = veh.category === 'bike' ? Bike : Car;
                return (
                  <div
                    key={veh.id}
                    onClick={() => setActiveModalImage(veh)}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-cream-card hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1.5"
                  >
                    {/* Image Container with identical 4/3 Aspect Ratio */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                      <img
                        src={veh.image}
                        alt={veh.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/15 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-charcoal-800 shadow-sm border border-gold-200/60">
                          <IconComponent className="w-3.5 h-3.5 text-gold-600" />
                          <span>{veh.categoryLabel}</span>
                        </span>
                      </div>

                      {/* Top Right Quick Zoom Icon */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4 text-gold-300" />
                      </div>

                      {/* Bottom Overlay Label */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-[10px] uppercase tracking-widest text-gold-300 font-sans">
                          {veh.tag}
                        </p>
                        <h4 className="font-serif text-lg font-medium leading-snug">
                          {veh.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                      <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gold-700 mb-1">
                          {veh.subtitle}
                        </p>
                        <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                          {veh.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-cream-100 flex items-center justify-between text-xs text-charcoal-700">
                        <span className="text-[11px] text-charcoal-500 font-mono">
                          {veh.filename}
                        </span>
                        <div className="inline-flex items-center space-x-1 text-gold-700 font-medium group-hover:text-gold-900">
                          <span className="text-[11px] uppercase tracking-wider">Inspect</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. INFLUENCERS SECTION */}
        {showInfluencers && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-200">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
                    Influencer & Creator Section
                  </h3>
                  <p className="text-xs text-charcoal-500 font-light">
                    High-fashion portraits, brand ambassadorships, and viral editorial campaigns
                  </p>
                </div>
              </div>

              <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200/80 hidden sm:inline-block">
                {influencerSectionImages.length} Influencers Displayed
              </span>
            </div>

            {/* Influencer Cards Grid — with matching design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {influencerSectionImages.map((inf) => (
                <div
                  key={inf.id}
                  onClick={() => setActiveModalImage(inf)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-cream-card hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1.5"
                >
                  {/* Image Container with matching 4/3 Aspect Ratio */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                    <img
                      src={inf.image}
                      alt={inf.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/15 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-charcoal-800 shadow-sm border border-gold-200/60">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>{inf.categoryLabel}</span>
                      </span>
                    </div>

                    {/* Creator Handle Pill */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-sans font-medium text-gold-300">
                        {inf.creator}
                      </span>
                    </div>

                    {/* Bottom Overlay Label */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] uppercase tracking-widest text-gold-300 font-sans">
                        {inf.tag}
                      </p>
                      <h4 className="font-serif text-lg font-medium leading-snug">
                        {inf.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-gold-700 mb-1">
                        {inf.subtitle}
                      </p>
                      <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                        {inf.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-cream-100 flex items-center justify-between text-xs text-charcoal-700">
                      <span className="text-[11px] text-charcoal-500 font-mono">
                        {inf.filename}
                      </span>
                      <div className="inline-flex items-center space-x-1 text-gold-700 font-medium group-hover:text-gold-900">
                        <span className="text-[11px] uppercase tracking-wider">Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Commercial Inquiry Bar */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-cream-200 shadow-cream-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700">
              Commercial Booking & Brand Collabs
            </p>
            <h4 className="font-serif text-xl sm:text-2xl text-charcoal-900">
              Need a vehicle photoshoot or creator editorial?
            </h4>
            <p className="text-xs text-charcoal-600 font-light">
              We shoot on medium-format cameras and high-end cinema lenses for magazine & digital publishing.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-gold-500 hover:bg-gold-600 text-white shadow-gold-subtle transition-all duration-300 flex-shrink-0"
          >
            Inquire For Commercial Shoot
          </button>
        </div>

      </div>

      {/* Interactive Quick-View Lightbox Modal for AboutUs2 */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gold-300/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-cream-200">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                  {activeModalImage.tag}
                </span>
                <h3 className="font-serif text-xl text-charcoal-900 font-medium mt-1">
                  {activeModalImage.title}
                </h3>
                <p className="text-xs text-charcoal-600 font-light mt-0.5">
                  {activeModalImage.description}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-charcoal-500 bg-cream-100 px-3 py-1 rounded-lg">
                  {activeModalImage.filename}
                </span>
                <button
                  onClick={() => {
                    setActiveModalImage(null);
                    if (onOpenBooking) onOpenBooking();
                  }}
                  className="px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-gold-500 hover:bg-gold-600 text-white transition-colors"
                >
                  Book Shoot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutUs2;

