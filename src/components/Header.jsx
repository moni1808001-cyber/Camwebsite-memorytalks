import React, { useState, useEffect } from 'react';
import { Camera, ChevronDown, Menu, X, Sparkles, Film, Heart, Phone } from 'lucide-react';

export function Header({
  activeSection,
  setActiveSection,
  selectedCategory,
  onSelectCategory,
  onOpenBooking
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photosDropdownOpen, setPhotosDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setPhotosDropdownOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotoCategoryClick = (catId) => {
    onSelectCategory(catId);
    setActiveSection('photos');
    setMobileMenuOpen(false);
    setPhotosDropdownOpen(false);
    const el = document.getElementById('photos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const photoGalleries = [
    { id: 'all', label: 'All Photos', desc: 'Complete portfolio' },
    { id: 'baby-shower', label: 'Baby Shower', desc: 'Maternal glow & new beginnings' },
    { id: 'wedding', label: 'Wedding', desc: 'Timeless vows & grand ceremonies' },
    { id: 'pre-wedding', label: 'Pre-Wedding', desc: 'Destination & romantic adventures' },
    { id: 'post-wedding', label: 'Post-Wedding', desc: 'Intimate honeymoon & post-ceremony' },
    { id: 'vehicle-bike', label: 'Vehicle Bike', desc: 'Precision superbike & dynamic motion' },
    { id: 'vehicle-car', label: 'Vehicle Car', desc: 'Luxury sports & automotive fine art' },
    { id: 'influencer', label: 'Influencer', desc: 'Fashion creator & editorial campaigns' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-600">
              <Camera className="w-5 h-5 text-gold-600 transition-colors group-hover:text-gold-700" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-medium text-charcoal-900 leading-none">
                MEMORY TALKS
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-gold-700 font-sans mt-1">
                Fine Art Photography & Cinema
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 ${
                activeSection === 'home'
                  ? 'text-gold-700 font-semibold'
                  : 'text-charcoal-700 hover:text-gold-600'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 ${
                activeSection === 'about'
                  ? 'text-gold-700 font-semibold'
                  : 'text-charcoal-700 hover:text-gold-600'
              }`}
            >
              About Us
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full"></span>
              )}
            </button>

            {/* Photos with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPhotosDropdownOpen(true)}
              onMouseLeave={() => setPhotosDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('photos')}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 py-1 flex items-center space-x-1.5 ${
                  activeSection === 'photos'
                    ? 'text-gold-700 font-semibold'
                    : 'text-charcoal-700 hover:text-gold-600'
                }`}
              >
                <span>Photos</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    photosDropdownOpen ? 'rotate-180 text-gold-600' : ''
                  }`}
                />
                {activeSection === 'photos' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full"></span>
                )}
              </button>

              {/* Dropdown Menu */}
              {photosDropdownOpen && (
                <div className="absolute top-full -left-6 w-72 pt-2 animate-fade-in z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-cream-200 p-2 overflow-hidden backdrop-blur-lg max-h-[75vh] overflow-y-auto">
                    <div className="px-3 py-2 border-b border-cream-100">
                      <p className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold">
                        Galleries & Portfolios
                      </p>
                    </div>
                    <div className="py-1">
                      {photoGalleries.map((g) => (
                        <button
                          key={g.id}
                          onClick={() => handlePhotoCategoryClick(g.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between text-xs transition-colors ${
                            selectedCategory === g.id && activeSection === 'photos'
                              ? 'bg-gold-50 text-gold-800 font-medium'
                              : 'text-charcoal-700 hover:bg-cream-50 hover:text-gold-700'
                          }`}
                        >
                          <div>
                            <span className="block font-medium">{g.label}</span>
                            <span className="text-[10px] text-charcoal-500 block">
                              {g.desc}
                            </span>
                          </div>
                          {selectedCategory === g.id && (
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('videos')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 ${
                activeSection === 'videos'
                  ? 'text-gold-700 font-semibold'
                  : 'text-charcoal-700 hover:text-gold-600'
              }`}
            >
              Videos
              {activeSection === 'videos' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium bg-gold-500 hover:bg-gold-600 text-white shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-100" />
              <span>Book Session</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium bg-gold-500 text-white"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-800 hover:text-gold-600 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-cream-50/98 border-b border-cream-200 shadow-xl backdrop-blur-xl transition-all duration-300 px-6 py-6 animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-sm uppercase tracking-wider font-medium py-2 border-b border-cream-200 ${
                activeSection === 'home' ? 'text-gold-700 font-semibold' : 'text-charcoal-800'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left text-sm uppercase tracking-wider font-medium py-2 border-b border-cream-200 ${
                activeSection === 'about' ? 'text-gold-700 font-semibold' : 'text-charcoal-800'
              }`}
            >
              About Us
            </button>

            {/* Mobile Photos Gallery List */}
            <div className="py-2 border-b border-cream-200">
              <div
                onClick={() => handleNavClick('photos')}
                className="text-sm uppercase tracking-wider font-medium text-gold-700 flex items-center justify-between cursor-pointer"
              >
                <span>Photos Portfolio</span>
              </div>
              <div className="pl-4 mt-2 space-y-2">
                {photoGalleries.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => handlePhotoCategoryClick(g.id)}
                    className={`block w-full text-left text-xs py-1.5 transition-colors ${
                      selectedCategory === g.id && activeSection === 'photos'
                        ? 'text-gold-700 font-semibold'
                        : 'text-charcoal-600 hover:text-gold-600'
                    }`}
                  >
                    • {g.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('videos')}
              className={`text-left text-sm uppercase tracking-wider font-medium py-2 border-b border-cream-200 ${
                activeSection === 'videos' ? 'text-gold-700 font-semibold' : 'text-charcoal-800'
              }`}
            >
              Videos
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-500 text-white shadow-gold-subtle flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Your Session</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

