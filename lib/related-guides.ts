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
  'mainland-company-formation': [
    'mainland-vs-free-zone-dubai',
    'uae-company-incorporation-legal-structures',
    'how-to-start-a-business-in-dubai-2026',
  ],
  'free-zone-company-formation': [
    'mainland-vs-free-zone-dubai',
    'business-licence-cost-uae-2026',
    'open-business-in-dubai-foreigner',
  ],
  'offshore-company-formation': ['uae-company-incorporation-legal-structures', 'open-corporate-bank-account-uae'],
  'holding-company-setup': ['uae-company-incorporation-legal-structures', 'transfer-company-shares-dubai-llc'],
  'trade-licence': ['business-licence-cost-uae-2026', 'trade-licence-renewal-dubai-guide', 'how-to-start-a-business-in-dubai-2026'],
  'licence-amendments': ['transfer-company-shares-dubai-llc', 'trade-licence-renewal-dubai-guide'],
  'investor-visa': ['uae-residence-visa-types', 'uae-golden-visa-guide-2026'],
  'employment-visa': ['uae-residence-visa-types'],
  'family-visa': ['uae-residence-visa-types', 'uae-golden-visa-guide-2026'],
  'visa-renewal': ['uae-residence-visa-types'],
  'corporate-tax-registration': ['uae-corporate-tax-guide-2026'],
  'corporate-tax-filing': ['uae-corporate-tax-guide-2026'],
  'corporate-tax-advisory': ['uae-corporate-tax-guide-2026', 'mainland-vs-free-zone-dubai'],
  'corporate-tax-deregistration': ['uae-corporate-tax-guide-2026'],
  'accounting-services': ['uae-corporate-tax-guide-2026'],
  'bookkeeping-services': ['uae-corporate-tax-guide-2026'],
  'backlog-accounting': ['uae-corporate-tax-guide-2026'],
  'financial-reporting': ['uae-corporate-tax-guide-2026'],
  'external-audit': ['uae-corporate-tax-guide-2026'],
};
