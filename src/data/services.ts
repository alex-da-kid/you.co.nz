// Core offers. Set `price` to a string (e.g. '$350 per session') to show it on the site;
// leave it null to show "Pricing on enquiry".
// TODO(Lyncia): decide which prices to publish.

export type Service = {
  slug: string;
  href: string;
  title: string;
  pillar: string;
  summary: string;
  format: string;
  price: string | null;
};

export const services: Service[] = [
  {
    slug: 'coaching',
    href: '/coaching',
    title: 'One-to-one coaching',
    pillar: 'Confidence',
    summary:
      'Time to think, with someone who listens properly. We look at what keeps tripping you up, notice the patterns and build the confidence to take your next step.',
    format: 'In person in Wellington or online, anywhere',
    price: null,
  },
  {
    slug: 'strengths',
    href: '/strengths',
    title: 'Gallup CliftonStrengths',
    pillar: 'Strengths',
    summary:
      'Understand what comes naturally to you and your team, where it helps and where it can get in the way. For individuals, managers and whole teams.',
    format: 'Individual sessions, or team workshops from half a day',
    price: null,
  },
  {
    slug: 'workshops',
    href: '/workshops',
    title: 'Communication workshops',
    pillar: 'Communication',
    summary:
      "Talking isn't the same as communicating. Practical skills for getting what you need and keeping your working relationships intact.",
    format: 'Transforming Communication™, or a programme tailored to your team',
    price: null,
  },
];
