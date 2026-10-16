/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TERMS OF SERVICE — edit the sections below with your own terms.
 * ─────────────────────────────────────────────────────────────────────────────
 * Each section has a `heading` and a `content` array of paragraphs.
 * Add, remove, or reorder sections as needed for your business.
 *
 * The `effectiveDate` is displayed at the top of the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const termsOfService = {
  effectiveDate: '',

  sections: [
    {
      heading: 'Acceptance of Terms',
      content: [
        'By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.',
      ],
    },
    {
      heading: 'Services',
      content: [
        'We provide apartment turnover, make-ready, unit turn, and cleaning services in Columbus, Ohio and surrounding communities, as described on our website.',
        'Project scope and pricing will be provided in an estimate before work begins.',
      ],
    },
    {
      heading: 'Estimates & Pricing',
      content: [
        'Free estimates are based on the information available at the time of assessment. If the requested work changes, the updated scope and pricing will be confirmed before proceeding.',
        'Payment terms and any deposit requirements will be specified in the project agreement.',
      ],
    },
    {
      heading: 'Scheduling & Cancellations',
      content: [
        'Project schedules are confirmed directly with the customer. Please contact us as soon as possible if you need to request a schedule change.',
      ],
    },
    {
      heading: 'Warranties & Guarantees',
      content: [
        'Any warranty that applies to specific work will be stated in the written estimate or project agreement.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      content: [
        'To the fullest extent permitted by law, our total liability for any claim arising from our services shall not exceed the amount you paid for the specific service giving rise to the claim.',
        'We are not liable for indirect, incidental, or consequential damages, including lost profits or data, even if we have been advised of the possibility of such damages.',
      ],
    },
    {
      heading: 'Intellectual Property',
      content: [
        'All content on this website — including text, images, logos, and design — is our property or used with permission and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our written consent.',
      ],
    },
    {
      heading: 'Changes to These Terms',
      content: [
        'We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with a revised effective date. Your continued use of our website or services after changes are posted constitutes acceptance of the updated terms.',
      ],
    },
    {
      heading: 'Contact Us',
      content: [
        'If you have questions about these Terms of Service, please contact us using the information on our Contact page.',
      ],
    },
  ],
} as const;

export type TermsOfService = typeof termsOfService;
