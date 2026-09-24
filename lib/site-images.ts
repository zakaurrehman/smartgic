import type { StaticImageData } from 'next/image';

import dubaiDeskUaeFlag from '@/public/images/dubai-desk-uae-flag.jpg';
import businessOwnerDubaiOffice from '@/public/images/business-owner-dubai-office.jpg';
import dubaiSkylineDuskTerrace from '@/public/images/dubai-skyline-dusk-terrace.jpg';
import businessTeamMeetingDubai from '@/public/images/business-team-meeting-dubai.jpg';
import museumOfTheFutureDubai from '@/public/images/museum-of-the-future-dubai.jpg';
import dubaiOfficeDesk from '@/public/images/dubai-office-desk.jpg';
import dubaiTerraceSkyline from '@/public/images/dubai-terrace-skyline.jpg';

/**
 * Site photography.
 *
 * Extracted from the designer's Illustrator sources for the blog covers — the
 * original photographs, without the covers' headlines and logos — then cropped
 * to each placement. Static imports give next/image the intrinsic size (no
 * layout shift) and a generated blur placeholder while the photo loads.
 *
 * Placement rules these follow, so the imagery never implies something untrue:
 * - The people are illustrative models, not Smartgic staff. None is placed or
 *   captioned where it would read as "our team" (About, Contact).
 * - The skylines are Downtown Dubai. None sits beside copy about the office,
 *   which is in Deira, or on a jurisdiction page for another emirate.
 */
export type SiteImage = { src: StaticImageData; alt: string };

export const siteImages = {
  dubaiDeskUaeFlag: {
    src: dubaiDeskUaeFlag,
    alt: 'A desk with a laptop, a UAE flag and a coffee cup overlooking the Burj Khalifa and Downtown Dubai',
  },
  businessOwnerDubaiOffice: {
    src: businessOwnerDubaiOffice,
    alt: 'A business owner at his desk overlooking the Dubai skyline, with the Smartgic Immigration logo on his laptop',
  },
  dubaiSkylineDuskTerrace: {
    src: dubaiSkylineDuskTerrace,
    alt: 'A man in a suit on a terrace looking out over the Dubai skyline at dusk',
  },
  businessTeamMeetingDubai: {
    src: businessTeamMeetingDubai,
    alt: 'A team of professionals meeting around a laptop, with the Burj Khalifa behind them',
  },
  museumOfTheFutureDubai: {
    src: museumOfTheFutureDubai,
    alt: 'The Museum of the Future and the Dubai skyline at sunset',
  },
  dubaiOfficeDesk: {
    src: dubaiOfficeDesk,
    alt: 'A businessman reading a newspaper headlined Business Steps at an office desk with a view of Dubai',
  },
  dubaiTerraceSkyline: {
    src: dubaiTerraceSkyline,
    alt: 'A terrace desk with a laptop and a UAE flag overlooking the Dubai skyline across the water',
  },
} satisfies Record<string, SiteImage>;

/**
 * Photo shown in a service page's overview, in place of the "At a glance"
 * stats card (those stats already appear in the service hero). Only services
 * with a genuinely fitting photo are listed; the rest keep the stats card.
 */
export const serviceOverviewImages: Record<string, SiteImage> = {
  'company-registration': siteImages.businessOwnerDubaiOffice,
  'professional-services': siteImages.businessTeamMeetingDubai,
  'visa-services': siteImages.dubaiSkylineDuskTerrace,
  'co-working-space': siteImages.dubaiOfficeDesk,
};
