/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PRIVACY POLICY — edit the sections below with your own policy content.
 * ─────────────────────────────────────────────────────────────────────────────
 * Each section has a `heading` and a `content` array of paragraphs.
 * Add, remove, or reorder sections as needed for your business.
 *
 * The `effectiveDate` is displayed at the top of the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const privacyPolicy = {
  effectiveDate: '',

  sections: [
    {
      heading: 'Information We Collect',
      content: [
        'When you submit our contact form, we receive the name, email address, message, and any optional phone number you provide, including details about the apartment turnover services you need.',
        'Our website hosting and form provider may process technical information needed to deliver and protect the website and contact form.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      content: [
        'We use contact form information to respond to your message, discuss your apartment turnover needs, and prepare a requested estimate.',
      ],
    },
    {
      heading: 'Information Sharing',
      content: [
        'Contact form submissions are processed by the providers needed to operate this website and deliver your message. We do not sell your personal information.',
        'We may disclose information when required by law or legal process.',
      ],
    },
    {
      heading: 'Cookies & Tracking',
      content: [
        'This website stores your selected display theme in your browser’s local storage. No analytics or advertising tracking is configured on the site.',
      ],
    },
    {
      heading: 'Data Security',
      content: [
        'We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      heading: 'Your Rights',
      content: [
        'You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us using the information provided below.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.',
      ],
    },
    {
      heading: 'Contact Us',
      content: [
        'If you have questions or concerns about this Privacy Policy, please contact us using the information on our Contact page.',
      ],
    },
  ],
} as const;

export type PrivacyPolicy = typeof privacyPolicy;
