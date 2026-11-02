/**
 * Memory Talks — Centralized Image Importing System
 * 
 * To add a new image in the future:
 * 1. Add your image to the respective category folder inside src/assets/images/
 * 2. Import it here using its filename:
 *      import myNewImage from './category/myNewImage.jpg';
 * 3. Export it in the export list below:
 *      export { myNewImage };
 * 4. Use it anywhere in your components:
 *      import { myNewImage } from '../assets/images';
 */

// 1. About Us Section Images
import aboutus1 from './about-us/aboutus1.jpg';
import aboutus2 from './about-us/aboutus2.jpg';

// 2. Wedding Section Images (New + Existing)
import wedding1000214027 from './wedding/1000214027.jpg.jpeg';
import wedding1000215098 from './wedding/1000215098.jpg.jpeg';
import wedding1000215534 from './wedding/1000215534.jpg.jpeg';
import wedding1000077509 from './wedding/1000077509.jpg.jpeg';
import wedding1000077511 from './wedding/1000077511.jpg.jpeg';
import wedding1 from './wedding/01-golden-vows.jpg';
import wedding2 from './wedding/02-cathedral-veil.jpg';
import wedding3 from './wedding/03-first-dance.jpg';

// 3. Pre-Wedding Section Images (New + Existing)
import preWedding1000018022 from './pre-wedding/1000018022.jpg.jpeg';
import preWedding1000018025 from './pre-wedding/1000018025.jpg.jpeg';
import image1prewedding from './pre-wedding/Image1prewedding.jpg';
import image2prewedding from './pre-wedding/Image2prewedding.jpg';
import image3prewedding from './pre-wedding/Image3prewedding.jpg';

// 4. Post-Wedding Section Images (New + Existing)
import postWedding1000078095 from './post-wedding/1000078095.jpg.jpeg';
import image1postwedding from './post-wedding/image1postwedding.jpg';
import image2postwedding from './post-wedding/image2postwedding.jpg';
import image3postwedding from './post-wedding/image3postwedding.jpg';

// 5. Baby Shower Section Images (New + Existing)
import babyShower1000211730 from './baby-shower/1000211730.jpg.jpeg';
import babyShower1000211743 from './baby-shower/1000211743.jpg.jpeg';
import babyShower1000211906 from './baby-shower/1000211906.jpg (1).jpeg';
import babyShower1000211920 from './baby-shower/1000211920.jpg.jpeg';
import babyShower1000211924 from './baby-shower/1000211924.jpg.jpeg';
import babyShower1000211949 from './baby-shower/1000211949.jpg.jpeg';
import babyshowerimage1 from './baby-shower/babyshowerimage1.jpg';

// 6. Vehicle Bike Section Images
import bike1 from './vehicle-bike/bike1.jpeg';
import bike2 from './vehicle-bike/bike2.jpeg';
import bike3 from './vehicle-bike/bike3.jpeg';

// 7. Vehicle Car Section Images
import car1 from './vehicle-car/car1.jpeg';

// 8. Influencer Section Images (New + Existing)
import influencer1000096452 from './influencer/1000096452.jpg.jpeg';
import influencer1000096454 from './influencer/1000096454.jpg.jpeg';
import influencer1000098393 from './influencer/1000098393.jpg.jpeg';
import influencer1000098488 from './influencer/1000098488.jpg.jpeg';
import influencer1000247052 from './influencer/1000247052.jpg.jpeg';
import influencer1000078094 from './influencer/1000078094.jpg.jpeg';
import influ1 from './influencer/influ1.jpeg';
import influ2 from './influencer/influ2.jpeg';
import influ3 from './influencer/influ3.jpeg';

// Named exports for individual images (import { aboutus1 } from '...')
export {
  // About Us
  aboutus1,
  aboutus2,

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
  image1prewedding as Image1prewedding,
  image2prewedding as Image2prewedding,
  image3prewedding as Image3prewedding,

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
  influ1 as influencer1,
  influ2 as influencer2,
  influ3 as influencer3,
};

// Section grouped exports for convenience
export const aboutImages = {
  big: aboutus1,
  small: aboutus2,
};

export const weddingSectionImages = [
  { id: 'wed-new-1', title: 'Sacred Vows & Cathedral Grace', filename: '1000214027.jpg.jpeg', image: wedding1000214027, category: 'wedding' },
  { id: 'wed-new-2', title: 'Amber Twilight Embrace', filename: '1000215098.jpg.jpeg', image: wedding1000215098, category: 'wedding' },
  { id: 'wed-new-3', title: 'Golden Hour Wedding Memoir', filename: '1000215534.jpg.jpeg', image: wedding1000215534, category: 'wedding' },
  { id: 'wed-new-4', title: 'Grand Ceremony Reflections', filename: '1000077509.jpg.jpeg', image: wedding1000077509, category: 'wedding' },
  { id: 'wed-new-5', title: 'Intimate Sacred Promises', filename: '1000077511.jpg.jpeg', image: wedding1000077511, category: 'wedding' },
  { id: 'wed-1', title: 'Golden Hour Vows', filename: '01-golden-vows.jpg', image: wedding1, category: 'wedding' },
  { id: 'wed-2', title: 'Cathedral Veil & Light', filename: '02-cathedral-veil.jpg', image: wedding2, category: 'wedding' },
  { id: 'wed-3', title: 'First Dance Under Chandeliers', filename: '03-first-dance.jpg', image: wedding3, category: 'wedding' },
];

export const preWeddingSectionImages = [
  { id: 'pre-new-1', title: 'Romantic Destination Memoir', filename: '1000018022.jpg.jpeg', image: preWedding1000018022, category: 'pre-wedding' },
  { id: 'pre-new-2', title: 'Coastal Sunset Serenade', filename: '1000018025.jpg.jpeg', image: preWedding1000018025, category: 'pre-wedding' },
  { id: 'pre-1', title: 'Pre-Wedding Story 1', filename: 'Image1prewedding.jpg', image: image1prewedding, category: 'pre-wedding' },
  { id: 'pre-2', title: 'Pre-Wedding Story 2', filename: 'Image2prewedding.jpg', image: image2prewedding, category: 'pre-wedding' },
  { id: 'pre-3', title: 'Pre-Wedding Story 3', filename: 'Image3prewedding.jpg', image: image3prewedding, category: 'pre-wedding' },
];

export const postWeddingSectionImages = [
  { id: 'post-new-1', title: 'Serene Newlywed Reflection', filename: '1000078095.jpg.jpeg', image: postWedding1000078095, category: 'post-wedding' },
  { id: 'post-1', title: 'Post-Wedding Memoir 1', filename: 'image1postwedding.jpg', image: image1postwedding, category: 'post-wedding' },
  { id: 'post-2', title: 'Post-Wedding Memoir 2', filename: 'image2postwedding.jpg', image: image2postwedding, category: 'post-wedding' },
  { id: 'post-3', title: 'Post-Wedding Memoir 3', filename: 'image3postwedding.jpg', image: image3postwedding, category: 'post-wedding' },
];

export const babyShowerSectionImages = [
  { id: 'baby-new-1', title: 'Maternal Radiance & Blessings', filename: '1000211730.jpg.jpeg', image: babyShower1000211730, category: 'baby-shower' },
  { id: 'baby-new-2', title: 'Joyous Celebration of Life', filename: '1000211743.jpg.jpeg', image: babyShower1000211743, category: 'baby-shower' },
  { id: 'baby-new-3', title: 'Tender Family Welcoming', filename: '1000211906.jpg (1).jpeg', image: babyShower1000211906, category: 'baby-shower' },
  { id: 'baby-new-4', title: 'Golden Floral Grace', filename: '1000211920.jpg.jpeg', image: babyShower1000211920, category: 'baby-shower' },
  { id: 'baby-new-5', title: 'Cherished Maternal Warmth', filename: '1000211924.jpg.jpeg', image: babyShower1000211924, category: 'baby-shower' },
  { id: 'baby-new-6', title: 'New Beginnings Celebration', filename: '1000211949.jpg.jpeg', image: babyShower1000211949, category: 'baby-shower' },
  { id: 'baby-1', title: 'Baby Shower Celebration 1', filename: 'babyshowerimage1.jpg', image: babyshowerimage1, category: 'baby-shower' },
];

export const vehicleBikeSectionImages = [
  {
    id: 'veh-bike-1',
    title: 'Vehicle Bike 1',
    subtitle: 'Signature Superbike Series',
    category: 'vehicle-bike',
    categoryLabel: 'Vehicle Bike',
    filename: 'bike1.jpeg',
    image: bike1,
    tag: 'Vehicle Bike',
    description: 'Precision motorcycle artistry captured with natural golden illumination.'
  },
  {
    id: 'veh-bike-2',
    title: 'Vehicle Bike 2',
    subtitle: 'Speed & Chrome Aesthetics',
    category: 'vehicle-bike',
    categoryLabel: 'Vehicle Bike',
    filename: 'bike2.jpeg',
    image: bike2,
    tag: 'Vehicle Bike',
    description: 'Sculpted contours and powerful road presence documented in fine art clarity.'
  },
  {
    id: 'veh-bike-3',
    title: 'Vehicle Bike 3',
    subtitle: 'Twilight Road Edition',
    category: 'vehicle-bike',
    categoryLabel: 'Vehicle Bike',
    filename: 'bike3.jpeg',
    image: bike3,
    tag: 'Vehicle Bike',
    description: 'Dynamic angles and dramatic reflections under ambient twilight skies.'
  }
];

export const vehicleCarSectionImages = [
  {
    id: 'veh-car-1',
    title: 'Vehicle Car 1',
    subtitle: 'Luxury Sports Automotive',
    category: 'vehicle-car',
    categoryLabel: 'Vehicle Car',
    filename: 'car1.jpeg',
    image: car1,
    tag: 'Vehicle Car',
    description: 'Timeless aerodynamic craftsmanship and luxury automotive styling.'
  }
];

export const influencerSectionImages = [
  {
    id: 'inf-new-1',
    title: 'Editorial Fashion Spotlight',
    subtitle: 'High-Fashion & Runway Muse',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@editorial_muse',
    filename: '1000096452.jpg.jpeg',
    image: influencer1000096452,
    tag: 'Influencer',
    description: 'Striking couture styling and editorial lighting crafted for high-impact portfolios.'
  },
  {
    id: 'inf-new-2',
    title: 'High-Fashion Runway Muse',
    subtitle: 'Haute Couture Edition',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@couture_style',
    filename: '1000096454.jpg.jpeg',
    image: influencer1000096454,
    tag: 'Influencer',
    description: 'Bespoke fashion aesthetic and dramatic framing designed for digital campaigns.'
  },
  {
    id: 'inf-new-3',
    title: 'Contemporary Creator Showcase',
    subtitle: 'Modern Lifestyle Brand',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@creator_vibe',
    filename: '1000098393.jpg.jpeg',
    image: influencer1000098393,
    tag: 'Influencer',
    description: 'Fresh, vibrant lifestyle creator imagery captured in radiant golden tones.'
  },
  {
    id: 'inf-new-4',
    title: 'Golden Hour Style Portrait',
    subtitle: 'Ambient Sunlight Portfolio',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@golden_creator',
    filename: '1000098488.jpg.jpeg',
    image: influencer1000098488,
    tag: 'Influencer',
    description: 'Natural sun-drenched portraiture celebrating personality and elegance.'
  },
  {
    id: 'inf-new-5',
    title: 'Signature Brand Campaign',
    subtitle: 'Brand Ambassador Series',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@brand_ambassador',
    filename: '1000247052.jpg.jpeg',
    image: influencer1000247052,
    tag: 'Influencer',
    description: 'Commercial lifestyle photography for luxury brand collaborations.'
  },
  {
    id: 'inf-new-6',
    title: 'Chic Studio Influence',
    subtitle: 'Studio Editorial Portrait',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@studio_influencer',
    filename: '1000078094.jpg.jpeg',
    image: influencer1000078094,
    tag: 'Influencer',
    description: 'Refined indoor studio lighting and sharp modern fashion aesthetics.'
  },
  {
    id: 'inf-1',
    title: 'Influencer 1',
    subtitle: 'Editorial Fashion Portrait',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@creator_spotlight',
    filename: 'influ1.jpeg',
    image: influ1,
    tag: 'Influencer',
    description: 'High-fashion editorial lighting designed for standout digital portfolio impact.'
  },
  {
    id: 'inf-2',
    title: 'Influencer 2',
    subtitle: 'Golden Hour Lifestyle',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@style_ambassador',
    filename: 'influ2.jpeg',
    image: influ2,
    tag: 'Influencer',
    description: 'Sun-drenched authentic storytelling and premium personal branding.'
  },
  {
    id: 'inf-3',
    title: 'Influencer 3',
    subtitle: 'Brand Ambassador Portfolio',
    category: 'influencer',
    categoryLabel: 'Influencer',
    creator: '@modern_muse',
    filename: 'influ3.jpeg',
    image: influ3,
    tag: 'Influencer',
    description: 'Chic portraiture and radiant aesthetics crafted for premier digital campaigns.'
  }
];

export const vehicleSectionImages = [
  ...vehicleBikeSectionImages,
  ...vehicleCarSectionImages,
];

export const allSectionImages = [
  ...weddingSectionImages,
  ...preWeddingSectionImages,
  ...postWeddingSectionImages,
  ...babyShowerSectionImages,
  ...vehicleBikeSectionImages,
  ...vehicleCarSectionImages,
  ...influencerSectionImages,
];

export default {
  aboutus1,
  aboutus2,
  wedding1000214027,
  wedding1000215098,
  wedding1000215534,
  wedding1000077509,
  wedding1000077511,
  wedding1,
  wedding2,
  wedding3,
  preWedding1000018022,
  preWedding1000018025,
  image1prewedding,
  image2prewedding,
  image3prewedding,
  postWedding1000078095,
  image1postwedding,
  image2postwedding,
  image3postwedding,
  babyShower1000211730,
  babyShower1000211743,
  babyShower1000211906,
  babyShower1000211920,
  babyShower1000211924,
  babyShower1000211949,
  babyshowerimage1,
  bike1,
  bike2,
  bike3,
  car1,
  influencer1000096452,
  influencer1000096454,
  influencer1000098393,
  influencer1000098488,
  influencer1000247052,
  influencer1000078094,
  influ1,
  influ2,
  influ3,
};
