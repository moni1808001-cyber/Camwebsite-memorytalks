import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { InstagramSection } from './components/InstagramSection';
import { GallerySection } from './components/GallerySection';
import { VideosSection } from './components/VideosSection';
import { AboutSection } from './components/AboutSection';
import { AboutUs2 } from './components/AboutUs2';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { BookingModal } from './components/BookingModal';
import { PHOTOS } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Active section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'photos', 'videos', 'about'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered photos for lightbox navigation
  const currentFilteredPhotos = selectedCategory === 'all'
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === selectedCategory);

  const handleLightboxNavigate = (direction) => {
    if (!lightboxPhoto) return;
    const currentIndex = currentFilteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = currentFilteredPhotos.length - 1;
    if (nextIndex >= currentFilteredPhotos.length) nextIndex = 0;

    setLightboxPhoto(currentFilteredPhotos[nextIndex]);
  };

  const handleExploreClick = () => {
    setActiveSection('photos');
    const el = document.getElementById('photos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchVideoClick = () => {
    setActiveSection('videos');
    const el = document.getElementById('videos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-800 flex flex-col font-sans selection:bg-gold-200 selection:text-charcoal-900">
      {/* Sticky Header with Navigation & Dropdown */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onWatchVideoClick={handleWatchVideoClick}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 2. Featured Category Cards: Wedding, Pre-Wedding, Post-Wedding */}
        <FeaturedCategories
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            setActiveSection('photos');
          }}
        />

        {/* 3. Instagram Section on Homepage (@mr_mk.mano_08202) */}
        <InstagramSection />

        {/* 4. Photos Gallery Section with Tabs & Lightbox (including Baby Shower, Wedding, Pre-Wedding, Post-Wedding) */}
        <GallerySection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onPhotoClick={(photo) => setLightboxPhoto(photo)}
        />

        {/* 4. Motion / Cinematic Videos Section */}
        <VideosSection />

        {/* 5. About Us Section */}
        <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 6. AboutUs2 Section: Vehicles & Influencers */}
        <AboutUs2 onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 7. Testimonials & Investment Packages */}
        <TestimonialsSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        setActiveSection={setActiveSection}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          photos={currentFilteredPhotos}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={handleLightboxNavigate}
        />
      )}

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCategory={selectedCategory}
      />
    </div>
  );
}

export default App;

