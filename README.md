# Memory Talks — Fine Art Photography & Cinema

A simple, elegant, responsive photography website created with **React**, **Vite**, and **Tailwind CSS**. Styled with a luxurious **cream, white, and gold** palette, editorial typography (*Cormorant Garamond* & *Montserrat*), and a dynamic, maintainable media gallery system.

---

## 🌟 Highlights & Features

### 1. Studio Branding & Header
* **Studio Name**: **Memory Talks** (Fine Art Photography & Cinema)
* **Lead Photographer**: **Manoj Kumar**
* **Sticky Glassmorphic Header**: Prominent **Memory Talks** logo with smooth navigation:
  * **Home**: Hero section, specialized wedding chapters, and Instagram visual feed.
  * **About Us**: Manoj Kumar's story, creative philosophy, 4 artistic pillars, and milestones.
  * **Photos (With Dropdown)**:
    * **Baby Shower** (Maternal radiance, pastel teas, tender beginnings)
    * **Wedding** (Tuscan vows, cathedral veils, candlelit receptions)
    * **Pre-Wedding** (Paris sunrise, Provence lavender, Cappadocia balloons)
    * **Post-Wedding** (Amalfi coastlines, Dubrovnik strolls, barefoot beaches)
  * **Videos**: Cinema and motion section with film highlights.
  * **Book Session**: Modal date reservation inquiry form.

### 2. Automated Asset Management (No Code Edits Required)
Drop your photos and videos directly into the organized folders:

```text
src/
└── assets/
    ├── images/
    │   ├── wedding/       (JPG, PNG, WebP)
    │   ├── pre-wedding/   (JPG, PNG, WebP)
    │   ├── post-wedding/  (JPG, PNG, WebP)
    │   └── baby-shower/   (JPG, PNG, WebP)
    └── videos/
        ├── wedding/       (MP4, WebM)
        ├── pre-wedding/   (MP4, WebM)
        ├── post-wedding/  (MP4, WebM)
        └── baby-shower/   (MP4, WebM)
```

* **Vite `import.meta.glob` Engine**: Automatically detects newly added or replaced media files.
* **Smart Filename Formatting**: `01-golden-hour-vows.jpg` renders cleanly as `"Golden Hour Vows"`.
* **Dynamic Category Counters**: Photo and video counts update automatically.

### 3. Photo Gallery with Interactive Lightbox
* Dedicated galleries for **Wedding**, **Pre-Wedding**, **Post-Wedding**, and **Baby Shower**.
* Responsive masonry/grid layout.
* Fullscreen Lightbox modal with keyboard arrow navigation (`←`, `→`, and `Escape`).

### 4. Video Gallery with Playback Controls
* Dedicated video galleries for **Wedding**, **Pre-Wedding**, **Post-Wedding**, and **Baby Shower**.
* HTML5 video player with timeline seeker, play/pause, volume control, and fullscreen mode.
* Cinema Theater Mode with backdrop blur.

### 5. Instagram Section & Footer
* Clickable `@mr_mk.mano_08202` profile link opening in a new tab:
  [https://www.instagram.com/mr_mk.mano_08202?exln=d3prYWlhM2loYmky](https://www.instagram.com/mr_mk.mano_08202?exln=d3prYWlhM2loYmky)
* Clickable phone number: `9597782125` (`tel:9597782125`)
* Clickable email: `moni1808001@gmail.com` (`mailto:moni1808001@gmail.com`)

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build production bundle
npm run build
```
Live at **`http://localhost:3000/`**.
