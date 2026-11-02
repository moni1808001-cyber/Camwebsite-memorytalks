import React, { useState } from 'react';
import { X, Sparkles, Calendar, MapPin, Mail, Phone, User, CheckCircle2, Heart } from 'lucide-react';

export function BookingModal({ isOpen, onClose, initialCategory = 'wedding' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: initialCategory === 'all' ? 'wedding' : initialCategory,
    date: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-cream-50 rounded-3xl overflow-hidden shadow-2xl border border-gold-200/80 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-cream-200/50 transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-gold-100 border border-gold-300 text-gold-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-gold-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold">
                Inquiry Received
              </span>
              <h3 className="font-serif text-3xl text-charcoal-900">
                Thank You, {formData.name || 'Friend'}
              </h3>
              <p className="text-sm text-charcoal-600 font-light max-w-md mx-auto leading-relaxed">
                We have received your celebration request for{' '}
                <strong className="text-charcoal-900 font-medium capitalize">
                  {formData.occasion.replace('-', ' ')}
                </strong>
                . Our studio team will review our calendar and reply within 24 hours with our full brochure and availability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-cream-200 text-xs text-charcoal-500 font-light">
              A confirmation summary has been logged for your date. We cannot wait to hear more of your story!
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors"
            >
              Back To Site
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6 space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-gold-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Your Date</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                Let’s Create Poetry Together
              </h3>
              <p className="text-xs text-charcoal-500 font-light">
                Please share a few details regarding your upcoming celebration.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-charcoal-700 font-medium mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal-700 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-charcoal-700 font-medium mb-1">
                    Occasion / Gallery *
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500"
                  >
                    <option value="wedding">Wedding & Ceremony</option>
                    <option value="pre-wedding">Pre-Wedding & Engagement</option>
                    <option value="post-wedding">Post-Wedding & Honeymoon</option>
                    <option value="baby-shower">Baby Shower & Maternity</option>
                    <option value="vehicle-bike">Vehicle Bike Shoot</option>
                    <option value="vehicle-car">Vehicle Car Shoot</option>
                    <option value="influencer">Influencer & Creator Campaign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-charcoal-700 font-medium mb-1">
                    Target Date / Season
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-charcoal-700 font-medium mb-1">
                    Location / Destination
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Lake Como, Italy or Local Studio"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-charcoal-700 font-medium mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal-700 font-medium mb-1">
                  Tell Us About Your Vision & Story
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the venue, atmosphere, guest count, or photographic style you envision..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-cream-200 bg-white text-charcoal-900 focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-500 hover:bg-gold-600 text-white shadow-gold-subtle transition-all duration-300"
                >
                  Send Booking Inquiry
                </button>
              </div>

              <p className="text-[10px] text-center text-charcoal-400 font-light">
                We respect your privacy. No spam. You'll receive a personal reply directly from our studio.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

