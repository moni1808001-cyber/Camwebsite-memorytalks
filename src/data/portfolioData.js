import {
  // Wedding
  wedding1000214027,
  wedding1000215098,
  wedding1000215534,
  wedding1000077509,
  wedding1000077511,
  wedding1,
  wedding2,
  wedding3,
  // Pre-Wedding
  preWedding1000018022,
  preWedding1000018025,
  image1prewedding,
  image2prewedding,
  image3prewedding,
  // Post-Wedding
  postWedding1000078095,
  image1postwedding,
  image2postwedding,
  image3postwedding,
  // Baby Shower
  babyShower1000211730,
  babyShower1000211743,
  babyShower1000211906,
  babyShower1000211920,
  babyShower1000211924,
  babyShower1000211949,
  babyshowerimage1,
  // Vehicle Bike
  bike1,
  bike2,
  bike3,
  // Vehicle Car
  car1,
  // Influencer
  influencer1000096452,
  influencer1000096454,
  influencer1000098393,
  influencer1000098488,
  influencer1000247052,
  influencer1000078094,
  influ1,
  influ2,
  influ3,
} from '../assets/images';
import { loadAllVideos } from './assetLoader';

// Export all section photos imported directly by filename
export const PHOTOS = [
  // ==========================================
  // --- WEDDING SECTION ---
  // ==========================================
  {
    id: 'wedding-new-1',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Sacred Vows & Cathedral Grace',
    filename: '1000214027.jpg.jpeg',
    image: wedding1000214027,
    location: 'Memory Talks Fine Art',
    story: 'Sacred vows and monumental promises bathed in radiant golden light.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-new-2',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Amber Twilight Embrace',
    filename: '1000215098.jpg.jpeg',
    image: wedding1000215098,
    location: 'Memory Talks Fine Art',
    story: 'Gentle newlyweds holding hands under warm sunset skies.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-new-3',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Golden Hour Wedding Memoir',
    filename: '1000215534.jpg.jpeg',
    image: wedding1000215534,
    location: 'Memory Talks Fine Art',
    story: 'Timeless romance and authentic emotion captured in natural elegance.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-new-4',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Grand Ceremony Reflections',
    filename: '1000077509.jpg.jpeg',
    image: wedding1000077509,
    location: 'Memory Talks Fine Art',
    story: 'Unfiltered tears of joy and sacred family rituals celebrated in style.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-new-5',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Intimate Sacred Promises',
    filename: '1000077511.jpg.jpeg',
    image: wedding1000077511,
    location: 'Memory Talks Fine Art',
    story: 'The delicate glance between two souls stepping into their forever.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-1',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Golden Hour Vows',
    filename: '01-golden-vows.jpg',
    image: wedding1,
    location: 'Memory Talks Fine Art',
    story: 'Sacred vows and timeless promises bathed in warm golden illumination.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-2',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'Cathedral Veil & Light',
    filename: '02-cathedral-veil.jpg',
    image: wedding2,
    location: 'Memory Talks Fine Art',
    story: 'Bespoke cathedral veil and intimate emotions along historic arches.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'wedding-3',
    category: 'wedding',
    categoryLabel: 'Wedding',
    title: 'First Dance Under Chandeliers',
    filename: '03-first-dance.jpg',
    image: wedding3,
    location: 'Memory Talks Fine Art',
    story: 'Unforgettable first dance as two souls unite under amber chandeliers.',
    cameraInfo: 'Memory Talks Signature Collection'
  },

  // ==========================================
  // --- PRE-WEDDING SECTION ---
  // ==========================================
  {
    id: 'pre-wedding-new-1',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding',
    title: 'Romantic Destination Memoir',
    filename: '1000018022.jpg.jpeg',
    image: preWedding1000018022,
    location: 'Memory Talks Fine Art',
    story: 'Bespoke destination portraiture capturing the tender anticipation of forever.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'pre-wedding-new-2',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding',
    title: 'Coastal Sunset Serenade',
    filename: '1000018025.jpg.jpeg',
    image: preWedding1000018025,
    location: 'Memory Talks Fine Art',
    story: 'Sun-drenched outdoor intimacy and genuine laughter before the celebration.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'pre-wedding-1',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding',
    title: 'Pre-Wedding Story 1',
    filename: 'image1prewedding.jpg',
    image: image1prewedding,
    location: 'Memory Talks Fine Art',
    story: 'Romantic destination embrace capturing the excitement of forever.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'pre-wedding-2',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding',
    title: 'Pre-Wedding Story 2',
    filename: 'image2prewedding.jpg',
    image: image2prewedding,
    location: 'Memory Talks Fine Art',
    story: 'Unscripted laughter and timeless connection before the big day.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'pre-wedding-3',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding',
    title: 'Pre-Wedding Story 3',
    filename: 'image3prewedding.jpg',
    image: image3prewedding,
    location: 'Memory Talks Fine Art',
    story: 'Golden twilight portrait celebrating anticipation and heartfelt love.',
    cameraInfo: 'Memory Talks Signature Collection'
  },

  // ==========================================
  // --- POST-WEDDING SECTION ---
  // ==========================================
  {
    id: 'post-wedding-new-1',
    category: 'post-wedding',
    categoryLabel: 'Post-Wedding',
    title: 'Serene Newlywed Reflection',
    filename: '1000078095.jpg.jpeg',
    image: postWedding1000078095,
    location: 'Memory Talks Fine Art',
    story: 'Quiet post-ceremony intimacy and heartfelt joy as newlywed partners.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'post-wedding-1',
    category: 'post-wedding',
    categoryLabel: 'Post-Wedding',
    title: 'Post-Wedding Memoir 1',
    filename: 'image1postwedding.jpg',
    image: image1postwedding,
    location: 'Memory Talks Fine Art',
    story: 'Serene newlywed moments and relaxed intimacy captured in golden light.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'post-wedding-2',
    category: 'post-wedding',
    categoryLabel: 'Post-Wedding',
    title: 'Post-Wedding Memoir 2',
    filename: 'image2postwedding.jpg',
    image: image2postwedding,
    location: 'Memory Talks Fine Art',
    story: 'Gentle post-wedding morning reflections and timeless romance.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'post-wedding-3',
    category: 'post-wedding',
    categoryLabel: 'Post-Wedding',
    title: 'Post-Wedding Memoir 3',
    filename: 'image3postwedding.jpg',
    image: image3postwedding,
    location: 'Memory Talks Fine Art',
    story: 'Barefoot seaside walk and quiet post-ceremony celebration.',
    cameraInfo: 'Memory Talks Signature Collection'
  },

  // ==========================================
  // --- BABY SHOWER SECTION ---
  // ==========================================
  {
    id: 'baby-shower-new-1',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'Maternal Radiance & Blessings',
    filename: '1000211730.jpg.jpeg',
    image: babyShower1000211730,
    location: 'Memory Talks Fine Art',
    story: 'Ethereal maternal glow and traditional floral blessings welcoming new life.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'baby-shower-new-2',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'Joyous Celebration of Life',
    filename: '1000211743.jpg.jpeg',
    image: babyShower1000211743,
    location: 'Memory Talks Fine Art',
    story: 'Heartfelt laughter and sacred family rituals honoring mother and child.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'baby-shower-new-3',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'Tender Family Welcoming',
    filename: '1000211906.jpg (1).jpeg',
    image: babyShower1000211906,
    location: 'Memory Talks Fine Art',
    story: 'Pure love, gentle touches, and generational blessings captured in warmth.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'baby-shower-new-4',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'Golden Floral Grace',
    filename: '1000211920.jpg.jpeg',
    image: babyShower1000211920,
    location: 'Memory Talks Fine Art',
    story: 'Traditional garland elegance and loving smiles from dear family members.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'baby-shower-new-5',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'Cherished Maternal Warmth',
    filename: '1000211924.jpg.jpeg',
    image: babyShower1000211924,
    location: 'Memory Talks Fine Art',
    story: 'Radiant expecting mother celebrating the sweet journey into motherhood.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'baby-shower-new-6',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'New Beginnings Celebration',
    filename: '1000211949.jpg.jpeg',
    image: babyShower1000211949,
    location: 'Memory Talks Fine Art',
    story: 'Tender beginnings and unforgettable family memories welcoming baby.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'baby-shower-1',
    category: 'baby-shower',
    categoryLabel: 'Baby Shower',
    title: 'Baby Shower Celebration 1',
    filename: 'babyshowerimage1.jpg',
    image: babyshowerimage1,
    location: 'Memory Talks Fine Art',
    story: 'Ethereal maternal glow and tender blessings welcoming a precious new life.',
    cameraInfo: 'Memory Talks Signature Collection'
  },

  // ==========================================
  // --- VEHICLE BIKE SECTION ---
  // ==========================================
  {
    id: 'vehicle-bike-1',
    category: 'vehicle-bike',
    categoryLabel: 'Vehicle Bike',
    title: 'Vehicle Bike 1',
    filename: 'bike1.jpeg',
    image: bike1,
    location: 'Memory Talks Fine Art',
    story: 'Precision motorcycle artistry captured with natural golden illumination.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'vehicle-bike-2',
    category: 'vehicle-bike',
    categoryLabel: 'Vehicle Bike',
    title: 'Vehicle Bike 2',
    filename: 'bike2.jpeg',
    image: bike2,
    location: 'Memory Talks Fine Art',
    story: 'Sculpted contours and powerful road presence documented in fine art clarity.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'vehicle-bike-3',
    category: 'vehicle-bike',
    categoryLabel: 'Vehicle Bike',
    title: 'Vehicle Bike 3',
    filename: 'bike3.jpeg',
    image: bike3,
    location: 'Memory Talks Fine Art',
    story: 'Dynamic angles and dramatic reflections under ambient twilight skies.',
    cameraInfo: 'Memory Talks Signature Collection'
  },

  // ==========================================
  // --- VEHICLE CAR SECTION ---
  // ==========================================
  {
    id: 'vehicle-car-1',
    category: 'vehicle-car',
    categoryLabel: 'Vehicle Car',
    title: 'Vehicle Car 1',
    filename: 'car1.jpeg',
    image: car1,
    location: 'Memory Talks Fine Art',
    story: 'Timeless aerodynamic craftsmanship and luxury automotive styling.',
    cameraInfo: 'Memory Talks Signature Collection'
  },

  // ==========================================
  // --- INFLUENCER SECTION ---
  // ==========================================
  {
    id: 'influencer-new-1',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Editorial Fashion Spotlight',
    filename: '1000096452.jpg.jpeg',
    image: influencer1000096452,
    location: 'Memory Talks Fine Art',
    story: 'Striking couture styling and editorial lighting crafted for high-impact portfolios.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-new-2',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'High-Fashion Runway Muse',
    filename: '1000096454.jpg.jpeg',
    image: influencer1000096454,
    location: 'Memory Talks Fine Art',
    story: 'Bespoke fashion aesthetic and dramatic framing designed for digital campaigns.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-new-3',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Contemporary Creator Showcase',
    filename: '1000098393.jpg.jpeg',
    image: influencer1000098393,
    location: 'Memory Talks Fine Art',
    story: 'Fresh, vibrant lifestyle creator imagery captured in radiant golden tones.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-new-4',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Golden Hour Style Portrait',
    filename: '1000098488.jpg.jpeg',
    image: influencer1000098488,
    location: 'Memory Talks Fine Art',
    story: 'Natural sun-drenched portraiture celebrating personality and elegance.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-new-5',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Signature Brand Campaign',
    filename: '1000247052.jpg.jpeg',
    image: influencer1000247052,
    location: 'Memory Talks Fine Art',
    story: 'Commercial lifestyle photography for luxury brand collaborations.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-new-6',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Chic Studio Influence',
    filename: '1000078094.jpg.jpeg',
    image: influencer1000078094,
    location: 'Memory Talks Fine Art',
    story: 'Refined indoor studio lighting and sharp modern fashion aesthetics.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-1',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Influencer 1',
    filename: 'influ1.jpeg',
    image: influ1,
    location: 'Memory Talks Fine Art',
    story: 'High-fashion editorial lighting designed for standout digital portfolio impact.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-2',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Influencer 2',
    filename: 'influ2.jpeg',
    image: influ2,
    location: 'Memory Talks Fine Art',
    story: 'Sun-drenched authentic storytelling and premium personal branding.',
    cameraInfo: 'Memory Talks Signature Collection'
  },
  {
    id: 'influencer-3',
    category: 'influencer',
    categoryLabel: 'Influencer',
    title: 'Influencer 3',
    filename: 'influ3.jpeg',
    image: influ3,
    location: 'Memory Talks Fine Art',
    story: 'Chic portraiture and radiant aesthetics crafted for premier digital campaigns.',
    cameraInfo: 'Memory Talks Signature Collection'
  }
];

// Dynamically auto-load all videos from src/assets/videos
export const VIDEOS = loadAllVideos();

// Dynamically compute category counts from loaded assets
export const CATEGORIES = [
  {
    id: 'all',
    label: 'All Works',
    count: PHOTOS.length,
    description: 'A curated selection of our finest captures across all celebrations and commercial portfolios.'
  },
  {
    id: 'wedding',
    label: 'Wedding',
    count: PHOTOS.filter(p => p.category === 'wedding').length,
    description: 'Sacred vows, unfiltered tears, and timeless celebrations of two souls coming together.'
  },
  {
    id: 'pre-wedding',
    label: 'Pre-Wedding',
    count: PHOTOS.filter(p => p.category === 'pre-wedding').length,
    description: 'Romantic destination portraits and unscripted intimacy celebrating the anticipation and excitement of forever.'
  },
  {
    id: 'post-wedding',
    label: 'Post-Wedding',
    count: PHOTOS.filter(p => p.category === 'post-wedding').length,
    description: 'Relaxed morning portraits, barefoot seaside walks, and peaceful honeymoon memoirs.'
  },
  {
    id: 'baby-shower',
    label: 'Baby Shower',
    count: PHOTOS.filter(p => p.category === 'baby-shower').length,
    description: 'Tender beginnings, glowing mothers, and joyous family celebrations welcoming new life.'
  },
  {
    id: 'vehicle-bike',
    label: 'Vehicle Bike',
    count: PHOTOS.filter(p => p.category === 'vehicle-bike').length,
    description: 'Precision motorcycle artistry, dynamic road motion, and sculpted superbike photography.'
  },
  {
    id: 'vehicle-car',
    label: 'Vehicle Car',
    count: PHOTOS.filter(p => p.category === 'vehicle-car').length,
    description: 'Luxury automotive fine art, aerodynamic curves, and bespoke commercial car portfolios.'
  },
  {
    id: 'influencer',
    label: 'Influencer',
    count: PHOTOS.filter(p => p.category === 'influencer').length,
    description: 'High-fashion creator portfolios, brand ambassador campaigns, and viral digital presence.'
  }
];

export const VIDEO_CATEGORIES = [
  { id: 'all', label: 'All Videos', count: VIDEOS.length },
  { id: 'wedding', label: 'Wedding', count: VIDEOS.filter(v => v.category === 'wedding').length },
  { id: 'pre-wedding', label: 'Pre-Wedding', count: VIDEOS.filter(v => v.category === 'pre-wedding').length },
  { id: 'post-wedding', label: 'Post-Wedding', count: VIDEOS.filter(v => v.category === 'post-wedding').length },
  { id: 'baby-shower', label: 'Baby Shower', count: VIDEOS.filter(v => v.category === 'baby-shower').length },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Memory Talks and Manoj Kumar didn't just document our wedding; they bottled the pure emotion of that day. Looking through our gallery brings us to tears every single time. Their eye for golden light is incomparable.",
    couple: "Eleanor & Julian Vance",
    celebration: "Tuscany Destination Wedding",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    quote: "Our pre-wedding shoot in Paris felt like starring in a vintage French romance film. They made us feel so effortless and natural in front of the lens. True masters of their craft.",
    couple: "Serena & Daniel Kim",
    celebration: "Paris Pre-Wedding Session",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    quote: "The tenderness they captured at my baby shower is something our family will treasure for generations. Every delicate detail, the warm glow, the emotion—everything was perfection.",
    couple: "Madeline & Christian Ross",
    celebration: "Montecito Garden Baby Shower",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const STATS = [
  { value: '12+', label: 'Years of Artistry' },
  { value: '450+', label: 'Weddings Captured' },
  { value: '180+', label: 'Baby & Family Celebrations' },
  { value: '24', label: 'Countries Documented' },
  { value: '100%', label: 'Five-Star Reviews' }
];

export const PACKAGES = [
  {
    title: 'Intimate Memoirs',
    subtitle: 'Pre-Wedding or Baby Shower',
    price: '$1,800',
    description: 'Designed for couples or expecting parents seeking intimate, timeless storytelling in natural light.',
    features: [
      'Up to 3 hours of dedicated coverage',
      'Single or dual curated locations',
      '80+ hand-retouched high resolution digital files',
      'Private online gallery with print release',
      'Custom styling & location consultation guide'
    ],
    popular: false
  },
  {
    title: 'The Signature Wedding',
    subtitle: 'Full Day Fine Art Coverage',
    price: '$4,800',
    description: 'Comprehensive, poetic coverage of your entire celebration from morning prep to the sparkler farewell.',
    features: [
      'Up to 10 hours of wedding day coverage',
      'Principal photographer + Associate artist',
      '500+ masterfully color-graded high res photos',
      'Complimentary Pre-Wedding or Post-Wedding portrait session',
      'Heirloom archival album (12x12 handcrafted leather)',
      'Highlight video reel (3-5 minutes)'
    ],
    popular: true
  },
  {
    title: 'The Grand Cinema & Photo',
    subtitle: 'Multi-Day Destination Luxury',
    price: '$8,500',
    description: 'The ultimate editorial immersion with photography and cinematic filmmaking for destination celebrations.',
    features: [
      'Full weekend / multi-day coverage (Welcome dinner to Farewell brunch)',
      '2 Lead photographers + 2 Cinematographers',
      'Full-length cinematic documentary film + 4K trailer',
      'Drone aerial cinematography (weather & venue permitting)',
      'Two luxury bespoke albums + parent companion albums',
      'Next-day sneak peek gallery within 24 hours'
    ],
    popular: false
  }
];
