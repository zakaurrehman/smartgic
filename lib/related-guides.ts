/**
 * Blog guides worth surfacing on each service page, most relevant first.
 *
 * Curated by hand rather than keyword-matched: a guide only appears where a
 * visitor reading that service would genuinely want it. Services with nothing
 * relevant are simply absent, and the section does not render for them.
 * Unknown slugs are skipped, so deleting a post cannot break a service page.
 */
export const relatedGuidesByService: Record<string, string[]> = {
  'company-registration': [
    'uae-company-registration-documents-cost-timeline',
    'how-to-start-a-business-in-dubai-2026',
    'mainland-vs-free-zone-dubai',
  ],
  'professional-services': [
    'business-licence-cost-uae-2026',
    'uae-company-incorporation-legal-structures',
    'open-business-in-dubai-foreigner',
  ],
  'bank-account-opening': ['open-corporate-bank-account-uae'],
  'visa-services': ['uae-residence-visa-types', 'uae-golden-visa-guide-2026'],
  'document-clearing-services': ['document-clearing-services-dubai-explained'],
  'corporate-pro-services': [
    'document-clearing-services-dubai-explained',
    'trade-licence-renewal-dubai-guide',
  ],
  'trade-license-renewals': ['trade-licence-renewal-dubai-guide', 'business-licence-cost-uae-2026'],
  'moa-amendments': [
    'transfer-company-shares-dubai-llc',
    'uae-company-incorporation-legal-structures',
  ],
  'sponsorship-services': ['local-sponsor-lsa-dubai-2026', 'uae-residence-visa-types'],
  'share-transfer': [
    'transfer-company-shares-dubai-llc',
    'uae-company-incorporation-legal-structures',
  ],
  'co-working-space': ['mainland-vs-free-zone-dubai', 'business-licence-cost-uae-2026'],
};
