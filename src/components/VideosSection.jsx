import React, { useState } from 'react';
import { VIDEOS, VIDEO_CATEGORIES } from '../data/portfolioData';
import { Film, Play, Sparkles, X, Maximize2, Video as VideoIcon, Info } from 'lucide-react';

export function VideosSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTheaterVideo, setActiveTheaterVideo] = useState(null);

  const filteredVideos = VIDEOS.filter((v) => {
    if (selectedCategory === 'all') return true;
    return v.category === selectedCategory;
  });

  return (
    <section id="videos" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-cream-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-700">
            <Film className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Motion & Cinema Galleries
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal">
            Memories in Motion
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm sm:text-base text-charcoal-600 font-light pt-2">
            Explore our curated films across every milestone. Each video is rendered in high-definition cinema with complete audio and playback controls.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {VIDEO_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-gold-500 text-white font-medium shadow-gold-subtle scale-105'
                    : 'bg-cream-50 hover:bg-cream-100 text-charcoal-700 border border-cream-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-cream-200 text-charcoal-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 px-6 bg-cream-50 rounded-2xl border border-cream-200 max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 mx-auto">
              <VideoIcon className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-charcoal-800">
              No videos added to this gallery yet
            </h4>
            <p className="text-xs text-charcoal-500 font-light leading-relaxed">
              To add videos here, simply drop your <code className="bg-white px-2 py-0.5 rounded border border-cream-300">.mp4</code> or <code className="bg-white px-2 py-0.5 rounded border border-cream-300">.webm</code> files into <strong className="text-charcoal-700">src/assets/videos/{selectedCategory}/</strong>.
            </p>
            <p className="text-[11px] text-gold-700 font-medium">
              They will appear here automatically without modifying any code!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 shadow-cream-card hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* HTML5 Video Player Container */}
                <div className="relative aspect-video bg-charcoal-900 overflow-hidden">
                  <video
                    src={video.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-charcoal-900/80 backdrop-blur-md text-gold-300 border border-gold-400/30">
                      {video.categoryLabel}
                    </span>
                  </div>

                  {/* Cinema Modal Expand Button Top Right */}
                  <button
                    onClick={() => setActiveTheaterVideo(video)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-charcoal-900/70 hover:bg-gold-500 text-white backdrop-blur-md transition-colors"
                    title="Expand to Cinema Mode"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Video Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-cream-100">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-gold-700 font-medium mb-1">
                      <span>{video.location}</span>
                      <span className="text-charcoal-400 font-mono text-[10px]">{video.filename}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-normal leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 font-light mt-1.5 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-cream-100 flex items-center justify-between text-xs text-charcoal-500">
                    <span className="italic font-serif">Memory Talks 4K Cinema</span>
                    <button
                      onClick={() => setActiveTheaterVideo(video)}
                      className="inline-flex items-center space-x-1.5 text-gold-700 hover:text-gold-900 font-medium transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Theater View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cinema Theater Modal */}
        {activeTheaterVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/95 backdrop-blur-xl animate-fade-in"
            onClick={() => setActiveTheaterVideo(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-charcoal-900 rounded-2xl overflow-hidden shadow-2xl border border-cream-200/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Bar */}
              <div className="p-4 bg-charcoal-800 text-white flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold block">
                    Now Playing · {activeTheaterVideo.categoryLabel} Cinema
                  </span>
                  <h4 className="font-serif text-lg text-white">
                    {activeTheaterVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveTheaterVideo(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theater Video Element with full controls */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeTheaterVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Theater Modal Footer */}
              <div className="p-4 sm:p-6 bg-cream-50 text-charcoal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-charcoal-600 font-light max-w-lg">
                    {activeTheaterVideo.description}
                  </p>
                  <p className="text-[11px] text-gold-700 font-medium mt-1">
                    Source: {activeTheaterVideo.filename} · High Bitrate Playback
                  </p>
                </div>
                <button
                  onClick={() => setActiveTheaterVideo(null)}
                  className="px-5 py-2 rounded-full bg-gold-500 text-white text-xs uppercase tracking-wider hover:bg-gold-600 transition-colors"
                >
                  Close Theater
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
