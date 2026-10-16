/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, service area, services, reviews, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * Set the `site` field in astro.config.mjs when the production domain is known.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: "Lenny's Painting & Drywall LLC",
  tagline: 'Apartment Turnover & Make-Ready Services in Columbus',
  description:
    "Apartment turnover, make-ready, painting, drywall, and cleaning services in Columbus, Ohio and surrounding communities. Serving property managers and rental properties for over 10 years.",
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  contactName: 'Erik Cruz',
  email: 'lennyspaintingllc@gmail.com',
  phoneForTel: '6147178408',
  phoneFormatted: '(614) 717-8408',
  serviceArea: 'Columbus, Ohio & surrounding communities',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: '',
    instagram: '',
    google: '',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Apartment Turnover & Make-Ready',
      description:
        'We help property managers, landlords, apartment communities, and rental property owners get units clean, refreshed, and ready for the next tenant.',
    },
    {
      title: 'Repairs & Maintenance',
      description:
        'Interior painting and touch-ups, drywall repair and patching, flooring repairs and replacement, general maintenance repairs, and punch list completion.',
    },
    {
      title: 'Fixture & Hardware Replacement',
      description:
        'Replacement of kitchen cabinets, bathroom vanities, kitchen and bathroom faucets and plumbing, blinds, fixtures, and hardware.',
    },
    {
      title: 'Turnover Cleaning & Unit Preparation',
      description:
        'Move-in and move-out cleaning, deep cleaning, kitchen and bathroom cleaning, floors, baseboards and interior surfaces, unit cleanouts, trash and debris removal, final cleaning, and move-in-ready inspections.',
    },
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      "Lenny's Painting & Drywall LLC specializes in apartment turnover, make-ready, and unit turn services for property managers, landlords, apartment communities, and rental properties.",
      'Serving Columbus, Ohio and surrounding communities for over 10 years, we focus on experience, quality, reliability, and professional service to help prepare units for the next tenant.',
    ],
    team: [],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Columbus, Ohio & nearby communities' },
    { label: 'Apartment turnover specialists' },
    { label: 'Years serving the area', value: '10+' },
    { label: 'Experience • Quality • Reliability' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
