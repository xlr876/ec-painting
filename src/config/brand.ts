/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Site identity and font names used by layouts, components, and SEO metadata.
 *
 * Fonts flow into   → astro.config.mjs  (Astro 7 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Colors & radius live in ONE place: src/styles/theme.css (@theme block).
 * Edit theme.css directly — do not duplicate values here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: "Lenny's Painting & Drywall LLC",
  tagline: 'Apartment Turnover & Make-Ready Services in Columbus',
  description:
    "Apartment turnover, make-ready, painting, drywall, and cleaning services in Columbus, Ohio and surrounding communities. Serving property managers and rental properties for over 10 years.",
  locale: 'en_US',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },
} as const;

export function getBrand(locale?: string) {
  if (locale === 'es') {
    return {
      ...brand,
      tagline: 'Servicios de preparación y renovación de apartamentos en Columbus',
      description:
        'Servicios de preparación, pintura, reparación de paneles de yeso y limpieza para apartamentos en Columbus, Ohio y comunidades cercanas. Más de 10 años atendiendo a administradores y propiedades de alquiler.',
      locale: 'es_US',
    };
  }

  return brand;
}

export type Brand = typeof brand;
