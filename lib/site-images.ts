import type { StaticImageData } from 'next/image';

import dubaiDeskUaeFlag from '@/public/images/dubai-desk-uae-flag.jpg';
import businessOwnerDubaiOffice from '@/public/images/business-owner-dubai-office.jpg';
import dubaiSkylineDuskTerrace from '@/public/images/dubai-skyline-dusk-terrace.jpg';
import museumOfTheFutureDubai from '@/public/images/museum-of-the-future-dubai.jpg';
import dubaiTerraceSkyline from '@/public/images/dubai-terrace-skyline.jpg';
import dubaiMarinaDusk from '@/public/images/dubai-marina-dusk.jpg';
import smartgicMeetingRoom from '@/public/images/smartgic-meeting-room.jpg';
import dubaiBoardroomPresentation from '@/public/images/dubai-boardroom-presentation.jpg';
import entrepreneurDubaiSkyline from '@/public/images/entrepreneur-dubai-skyline.jpg';
import museumOfTheFutureGardens from '@/public/images/museum-of-the-future-gardens.jpg';
import companyRegistrationDocuments from '@/public/images/company-registration-documents.jpg';
import businessAdvisoryMeeting from '@/public/images/business-advisory-meeting.jpg';
import documentReviewDubaiOffice from '@/public/images/document-review-dubai-office.jpg';
import emiratiBusinessMeeting from '@/public/images/emirati-business-meeting.jpg';
import dubaiBoardMeeting from '@/public/images/dubai-board-meeting.jpg';
import uaePartnersMeeting from '@/public/images/uae-partners-meeting.jpg';
import shareholdersMeetingUaeFlag from '@/public/images/shareholders-meeting-uae-flag.jpg';
import collaborativeWorkspace from '@/public/images/collaborative-workspace.jpg';
import dubaiExecutiveBoardroom from '@/public/images/dubai-executive-boardroom.jpg';
import abuDhabiInvestmentBriefing from '@/public/images/abu-dhabi-investment-briefing.jpg';
import abuDhabiInvestorMeeting from '@/public/images/abu-dhabi-investor-meeting.jpg';

/**
 * Site photography.
 *
 * Optimised copies of the supplied photographs, named by what they show (the
 * numbered originals stay out of the repo). Static imports give next/image the
 * intrinsic size — so nothing shifts as photos load — and a blur placeholder.
 *
 * `position` is the object-position used when a placement crops the frame, set
 * per photo so faces and focal points survive the crop. `mobilePosition`
 * overrides it below the `sm` breakpoint in full-bleed heroes, where a phone's
 * tall frame keeps only a narrow slice of the photo.
 *
 * Placement rules these follow, so imagery never implies something untrue:
 * - The people are illustrative. No photo is captioned or described as Smartgic
 *   staff, and none sits beside copy naming a person.
 * - Skylines are placed only where the city is right: Dubai views on Dubai
 *   pages, the two Abu Dhabi views (Sheikh Zayed Grand Mosque in the window) on
 *   the Abu Dhabi jurisdictions, and no skyline on other emirates' pages.
 * - No photo appears twice on the same page.
 */
export type SiteImage = {
  src: StaticImageData;
  alt: string;
  position?: string;
  mobilePosition?: string;
};

export const siteImages = {
  /* ── Dubai scenes ── */
  dubaiDeskUaeFlag: {
    src: dubaiDeskUaeFlag,
    alt: 'A desk with a laptop, a UAE flag and a coffee cup overlooking the Burj Khalifa and Downtown Dubai',
  },
  dubaiTerraceSkyline: {
    src: dubaiTerraceSkyline,
    alt: 'A terrace desk with a laptop and a UAE flag overlooking the Dubai skyline across the water',
    position: '72% 50%',
  },
  dubaiMarinaDusk: {
    src: dubaiMarinaDusk,
    alt: 'The Dubai Marina skyline and waterfront promenade at dusk',
  },
  entrepreneurDubaiSkyline: {
    src: entrepreneurDubaiSkyline,
    alt: 'A business owner with a laptop on a terrace overlooking the Burj Khalifa and Dubai Water Canal',
    position: '60% 50%',
  },
  businessOwnerDubaiOffice: {
    src: businessOwnerDubaiOffice,
    alt: 'A business owner at a desk overlooking the Dubai skyline, with the Smartgic Immigration logo on the laptop',
    position: '50% 5%',
    // A phone-width slice from the centre cuts the laptop's logo in half;
    // anchoring left keeps the skyline and leaves the logo out of frame.
    mobilePosition: '0% 5%',
  },
  dubaiSkylineDuskTerrace: {
    src: dubaiSkylineDuskTerrace,
    alt: 'A man in a suit on a terrace looking out over the Dubai skyline at dusk',
  },
  museumOfTheFutureDubai: {
    src: museumOfTheFutureDubai,
    alt: 'The Museum of the Future and the Dubai skyline at sunset',
  },
  museumOfTheFutureGardens: {
    src: museumOfTheFutureGardens,
    alt: 'The Museum of the Future in Dubai surrounded by landscaped gardens',
  },

  /* ── Meetings and advisory ── */
  smartgicMeetingRoom: {
    src: smartgicMeetingRoom,
    alt: 'A meeting in a Dubai office with the Smartgic Immigration logo on the presentation screen and the Burj Khalifa beyond the windows',
    // Lifts the branded screen into the header fade: the tagline still shows,
    // but the large logo no longer sits behind the navigation's call button.
    position: '50% 85%',
  },
  dubaiBoardroomPresentation: {
    src: dubaiBoardroomPresentation,
    alt: 'A business presentation in a Dubai boardroom with the Burj Khalifa visible through floor-to-ceiling windows',
  },
  companyRegistrationDocuments: {
    src: companyRegistrationDocuments,
    alt: 'A business owner at a desk with company registration documents, a passport, a laptop and a UAE flag, with the Dubai skyline behind',
    position: '55% 50%',
  },
  businessAdvisoryMeeting: {
    src: businessAdvisoryMeeting,
    alt: 'An advisory meeting in a Dubai office, with financial charts on screen and the Burj Khalifa at sunset',
    position: '60% 50%',
  },
  documentReviewDubaiOffice: {
    src: documentReviewDubaiOffice,
    alt: 'Colleagues reviewing documents and a floor plan together in a Dubai office overlooking the Burj Khalifa',
    position: '66% 50%',
  },
  emiratiBusinessMeeting: {
    src: emiratiBusinessMeeting,
    alt: 'Emirati business people in discussion around a table in a bright UAE office',
    position: '50% 50%',
  },
  dubaiBoardMeeting: {
    src: dubaiBoardMeeting,
    alt: 'A board meeting around a conference table with the Burj Khalifa visible behind',
    position: '50% 50%',
  },
  uaePartnersMeeting: {
    src: uaePartnersMeeting,
    alt: 'An adviser presenting to Emirati and international business partners at a table with a UAE flag, overlooking Dubai',
    position: '84% 50%',
  },
  shareholdersMeetingUaeFlag: {
    src: shareholdersMeetingUaeFlag,
    alt: 'Company shareholders in discussion around a table with laptops and a UAE flag',
    position: '86% 50%',
  },
  collaborativeWorkspace: {
    src: collaborativeWorkspace,
    alt: 'A team collaborating around a shared desk with laptops, documents and a UAE flag in a bright workspace',
    position: '60% 50%',
  },
  dubaiExecutiveBoardroom: {
    src: dubaiExecutiveBoardroom,
    alt: 'An executive boardroom meeting beneath lattice-screen windows, with the Burj Khalifa at sunset',
    position: '60% 50%',
  },

  /* ── Abu Dhabi scenes (Sheikh Zayed Grand Mosque in view) ── */
  abuDhabiInvestmentBriefing: {
    src: abuDhabiInvestmentBriefing,
    alt: 'An investment briefing with global market dashboards and an architectural model, overlooking Abu Dhabi',
    position: '45% 50%',
  },
  abuDhabiInvestorMeeting: {
    src: abuDhabiInvestorMeeting,
    alt: 'An Emirati executive leading a meeting with international investors, with the Sheikh Zayed Grand Mosque in view',
    position: '45% 50%',
  },
} satisfies Record<string, SiteImage>;

/**
 * Photo for a service page's hero. Only services with a genuinely fitting
 * photo are listed; the rest keep the hero's stats card.
 */
export const serviceHeroImages: Record<string, SiteImage> = {
  'company-registration': siteImages.companyRegistrationDocuments,
  'professional-services': siteImages.businessAdvisoryMeeting,
  'visa-services': siteImages.dubaiSkylineDuskTerrace,
  'document-clearing-services': siteImages.documentReviewDubaiOffice,
  'corporate-pro-services': siteImages.emiratiBusinessMeeting,
  'moa-amendments': siteImages.dubaiBoardMeeting,
  'sponsorship-services': siteImages.uaePartnersMeeting,
  'share-transfer': siteImages.shareholdersMeetingUaeFlag,
  'co-working-space': siteImages.collaborativeWorkspace,
};

/**
 * Photo for a jurisdiction page's hero — only where the scene is accurate for
 * that jurisdiction. DIFC sits beside the Burj Khalifa; ADGM and KEZAD are in
 * Abu Dhabi. Every other jurisdiction keeps its fact-card hero.
 */
export const jurisdictionHeroImages: Record<string, SiteImage> = {
  difc: siteImages.dubaiExecutiveBoardroom,
  adgm: siteImages.abuDhabiInvestmentBriefing,
  kezad: siteImages.abuDhabiInvestorMeeting,
};
