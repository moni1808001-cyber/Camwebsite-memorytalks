import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Heart, Share2, Sparkles, Check } from 'lucide-react';

export function Lightbox({ photo, photos, onClose, onNavigate }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const total = photos.length;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-charcoal-900/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30">
            {photo.categoryLabel}
          </span>
          <span className="text-xs text-cream-200/70 font-sans">
            {currentIndex + 1} of {total}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`p-2.5 rounded-full transition-colors ${
              liked
                ? 'bg-rose-500/20 text-rose-400 border border-rose-400/40'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
            title="Favorite"
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors relative"
            title="Share"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
            {copied && (
              <span className="absolute -bottom-8 right-0 text-[10px] bg-white text-charcoal-900 px-2 py-0.5 rounded shadow">
                Copied!
              </span>
            )}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors ml-2"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl border border-cream-200/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image Canvas */}
        <div className="relative flex-1 bg-charcoal-900/90 flex items-center justify-center p-2 sm:p-4 min-h-[350px] sm:min-h-[500px]">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[60vh] lg:max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
          />

          {/* Navigation Arrows for Image */}
          <button
            onClick={() => onNavigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onNavigate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Right: Editorial Story & Details */}
        <div className="w-full lg:w-96 p-6 sm:p-8 bg-cream-50 flex flex-col justify-between overflow-y-auto max-h-[35vh] lg:max-h-[82vh] border-t lg:border-t-0 lg:border-l border-cream-200">
          <div className="space-y-5">
            <div>
              <div className="flex items-center space-x-1.5 text-gold-700 text-xs font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{photo.location}</span>
                <span>·</span>
                <span>{photo.year}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 leading-tight">
                {photo.title}
              </h3>
              <p className="font-serif italic text-base text-gold-800 mt-1">
                Featuring {photo.couple}
              </p>
            </div>

            <div className="w-12 h-0.5 bg-gold-400" />

            {/* Story */}
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-charcoal-400 font-semibold">
                The Story Behind The Frame
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
                {photo.story}
              </p>
            </div>

            {/* Technical Camera Notes */}
            <div className="p-3.5 rounded-xl bg-white border border-cream-200 space-y-1.5">
              <div className="flex items-center space-x-2 text-charcoal-800 text-xs font-medium">
                <Camera className="w-4 h-4 text-gold-600" />
                <span>Shot Details</span>
              </div>
              <p className="text-[11px] text-charcoal-600 font-mono">
                {photo.cameraInfo}
              </p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-cream-200 flex items-center justify-between text-xs">
            <span className="text-charcoal-500 italic">Memory Talks Signature Archival Grade</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-charcoal-900 text-white uppercase tracking-wider text-[11px] hover:bg-gold-600 transition-colors"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

