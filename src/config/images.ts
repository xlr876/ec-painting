/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the single file to edit when swapping placeholder images for a
 * client's real photos. Astro will automatically optimize every local image
 * at build time (WebP/AVIF conversion, srcset generation, CLS-safe dimensions).
 *
 * HOW TO ADD YOUR OWN IMAGES
 * ──────────────────────────
 * 1. Drop your image file into the correct folder under src/assets/images/
 * 2. Uncomment the matching import below and update the filename
 * 3. Export it — the component picks it up automatically
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 *
 * FOLDER STRUCTURE
 * ────────────────
 *   src/assets/images/
 *     brand/     ← business logo
 *     hero/      ← one image used in the homepage Hero section
 *     about/     ← one image used in the About section and About page
 *     gallery/   ← all project photos (drop any number of files here)
 *
 * The project gallery stays hidden until real project photos are added.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

// ── Brand ─────────────────────────────────────────────────────────────────────
import brandLogo from '../assets/images/brand/logo.webp';
export { brandLogo };

// ── Hero ──────────────────────────────────────────────────────────────────────
// Use a landscape source close to the hero's 4:3 display ratio.
import heroImage from '../assets/images/hero/painting_02_medium.jpg';
export { heroImage };

// ── Services ──────────────────────────────────────────────────────────────────
import apartmentComplexImage from '../assets/images/hero/apartment_complex_medium.jpg';
import renovationImage from '../assets/images/hero/renovation_medium.jpg';
import vanityImage from '../assets/images/hero/vanity_medium.jpg';
import diningAreaImage from '../assets/images/hero/dining_area_medium.jpg';
export { apartmentComplexImage, renovationImage, vanityImage, diningAreaImage };

// ── About ─────────────────────────────────────────────────────────────────────
// Add an approved business photo here to display it in the About section.
//
// import aboutImage from '../assets/images/about/team.jpg';
export const aboutImage: ImageMetadata | undefined = undefined;
// Comment out the line above and uncomment below to use the imported photo.
// export { aboutImage };

// ── Gallery — auto-discovered ─────────────────────────────────────────────────
// Drop any number of image files into src/assets/images/gallery/ and they will
// appear in the gallery automatically — no code changes needed.
//
// The file name becomes the alt text:
//   kitchen-remodel.jpg    → "Kitchen Remodel"
//   deck-installation.jpg  → "Deck Installation"
//
// Recommended: landscape images, at least 800 × 600 px each.
// Aim for consistent proportions (4:3 works best with the gallery grid).

export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')        // strip extension
    .replace(/[-_]/g, ' ')          // hyphens/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Title Case
}));

export const galleryImages: GalleryImage[] = discovered;
