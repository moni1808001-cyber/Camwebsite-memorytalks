/**
 * Memory Talks — Automatic Asset Loader
 * 
 * Automatically discovers and imports all images and videos placed in:
 * - src/assets/images/{wedding, pre-wedding, post-wedding, baby-shower, vehicle-bike, vehicle-car, influencer}/*.(jpg|jpeg|png|webp)
 * - src/assets/videos/{wedding, pre-wedding, post-wedding, baby-shower, vehicle-bike, vehicle-car, influencer}/*.(mp4|webm)
 * 
 * Adding a file into any category folder will automatically display it in that gallery!
 * No manual code editing required.
 */

export const CATEGORY_CONFIG = {
  'wedding': {
    id: 'wedding',
    label: 'Wedding',
    tagline: 'Grandeur & Sacred Promises',
    description: 'Sacred vows, unfiltered tears, and timeless celebrations of two souls coming together.',
    videoDescription: 'Cinematic wedding films and ceremony highlights captured in 4K golden light.'
  },
  'pre-wedding': {
    id: 'pre-wedding',
    label: 'Pre-Wedding',
    tagline: 'Adventure & Anticipation',
    description: 'Romantic destination portraits and unscripted intimacy celebrating the excitement of forever.',
    videoDescription: 'Poetic couple love stories and pre-wedding travel cinema.'
  },
  'post-wedding': {
    id: 'post-wedding',
    label: 'Post-Wedding',
    tagline: 'Serenity After The Vows',
    description: 'Relaxed morning portraits, barefoot seaside walks, and peaceful honeymoon memoirs.',
    videoDescription: 'Romantic post-wedding morning films, seaside strolls, and honeymoon reels.'
  },
  'baby-shower': {
    id: 'baby-shower',
    label: 'Baby Shower',
    tagline: 'Pure Love & New Beginnings',
    description: 'Tender beginnings, glowing mothers, and joyous family celebrations welcoming new life.',
    videoDescription: 'Heartfelt celebrations and maternal memories welcoming baby.'
  },
  'vehicle-bike': {
    id: 'vehicle-bike',
    label: 'Vehicle Bike',
    tagline: 'Speed & Chrome Artistry',
    description: 'Dynamic superbike photography, precision engineering, and high-speed fine art cinematography.',
    videoDescription: 'High-octane motorcycle reels and dynamic cinematic motion.'
  },
  'vehicle-car': {
    id: 'vehicle-car',
    label: 'Vehicle Car',
    tagline: 'Sculpted Luxury in Motion',
    description: 'Luxury automotive fine art, aerodynamic curves, and bespoke commercial supercar portfolios.',
    videoDescription: 'Exotic supercar track cinematics and sunset coastal drives.'
  },
  'influencer': {
    id: 'influencer',
    label: 'Influencer',
    tagline: 'Fashion & Creator Spotlight',
    description: 'High-fashion creator portfolios, brand ambassador campaigns, and viral digital presence.',
    videoDescription: 'Fashion reels, lifestyle teasers, and creator motion stories.'
  }
};

export const CATEGORY_KEYS = [
  'wedding',
  'pre-wedding',
  'post-wedding',
  'baby-shower',
  'vehicle-bike',
  'vehicle-car',
  'influencer'
];

/**
 * Format a human-readable title from a filename.
 * E.g., "01-golden-hour-vows.jpg" -> "Golden Hour Vows"
 */
function formatTitle(filename) {
  if (!filename) return 'Memory Talks Moment';
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  const cleanSpacing = nameWithoutExt.replace(/[-_]+/g, ' ');
  const strippedNumber = cleanSpacing.replace(/^\d+[\s.]*/, '');
  const result = (strippedNumber || cleanSpacing).trim();
  
  return result
    .split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') || 'Memory Talks Moment';
}

/**
 * Extract category and filename from a path like:
 * "../assets/images/wedding/01-vows.jpg"
 */
function parsePath(path, baseFolder = 'images') {
  const normalized = path.replace(/\\/g, '/');
  const parts = normalized.split('/');
  const baseIdx = parts.lastIndexOf(baseFolder);
  
  const category = (baseIdx !== -1 && parts[baseIdx + 1]) 
    ? parts[baseIdx + 1].toLowerCase() 
    : 'wedding';
    
  const filename = parts[parts.length - 1];
  return { category, filename };
}

// 1. Auto-discover all images (JPG, JPEG, PNG, WebP)
const imageModules = import.meta.glob(
  '../assets/images/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

// 2. Auto-discover all videos (MP4, WebM)
const videoModules = import.meta.glob(
  '../assets/videos/**/*.{mp4,webm,MP4,WEBM}',
  { eager: true, import: 'default' }
);

/**
 * Load and format all discovered images grouped by category
 */
export function loadAllPhotos() {
  const photos = [];
  const entries = Object.entries(imageModules);

  // Sort paths to keep natural order (e.g. 01, 02, 03)
  entries.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  entries.forEach(([filePath, resolvedUrl], idx) => {
    const { category, filename } = parsePath(filePath, 'images');
    // Only include portfolio gallery categories (skip about-us and non-gallery folders)
    if (!CATEGORY_KEYS.includes(category)) return;

    const validCat = category;
    const config = CATEGORY_CONFIG[validCat] || CATEGORY_CONFIG.wedding;
    const title = formatTitle(filename);

    photos.push({
      id: `photo-${validCat}-${idx + 1}`,
      category: validCat,
      categoryLabel: config.label,
      title: title,
      filename: filename,
      image: resolvedUrl,
      location: 'Memory Talks Fine Art',
      story: `A timeless ${config.label.toLowerCase()} capture preserved with natural golden light by Memory Talks.`,
      cameraInfo: 'Memory Talks Signature Collection'
    });
  });

  return photos;
}

/**
 * Load and format all discovered videos grouped by category
 */
export function loadAllVideos() {
  const videos = [];
  const entries = Object.entries(videoModules);

  // Sort paths numerically
  entries.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  entries.forEach(([filePath, resolvedUrl], idx) => {
    const { category, filename } = parsePath(filePath, 'videos');
    const validCat = CATEGORY_KEYS.includes(category) ? category : 'wedding';
    const config = CATEGORY_CONFIG[validCat] || CATEGORY_CONFIG.wedding;
    const title = formatTitle(filename);

    videos.push({
      id: `video-${validCat}-${idx + 1}`,
      category: validCat,
      categoryLabel: config.label,
      title: title,
      filename: filename,
      videoUrl: resolvedUrl,
      type: `${config.label} Film`,
      duration: '4K Ultra HD',
      aspectRatio: '16:9 Cinema Scope'
    });
  });

  return videos;
}

export default {
  loadAllPhotos,
  loadAllVideos,
  CATEGORY_CONFIG,
  CATEGORY_KEYS,
};
