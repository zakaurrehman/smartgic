import type { Service } from '../service-types';
import { accountingAuditServices } from './accounting-audit';
import { businessCorporateLicensingServices } from './business-corporate-licensing';
import { corporateTaxServices } from './corporate-tax';
import { vatIndirectTaxServices } from './vat-indirect-tax';
import { visaComplianceServices } from './visa-compliance';

/**
 * Services added in the 2026 catalogue expansion, one file per area.
 * lib/services.ts merges these with the original thirteen and orders them by
 * lib/catalog.ts.
 */
export const extendedServices: Service[] = [
  ...businessCorporateLicensingServices,
  ...corporateTaxServices,
  ...vatIndirectTaxServices,
  ...visaComplianceServices,
  ...accountingAuditServices,
];
