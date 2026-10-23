// Single source of truth for business details used across the site.

export const site = {
  name: 'YOU Coaching',
  legalName: 'YOU Coaching Ltd',
  owner: 'Lyncia Podmore',
  url: 'https://www.you.co.nz',
  tagline: "There's nothing wrong with you.",
  description:
    'Strengths-based coaching, Gallup CliftonStrengths and communication workshops in Wellington and online with Lyncia Podmore. Calm, practical support for individuals, leaders and teams.',
  phone: '+64 27 484 9706',
  phoneHref: 'tel:+64274849706',
  // TODO(Lyncia): confirm the public email address to show on the site.
  email: '',
  calendly: 'https://calendly.com/youcoachingnz',
  address: {
    street: '24 Johnston Street',
    locality: 'Wellington Central',
    city: 'Wellington',
    postcode: '6011',
    country: 'NZ',
  },
  mapUrl: 'https://maps.google.com/?q=24+Johnston+Street,+Wellington+Central,+Wellington+6011',
  social: {
    facebook: 'https://www.facebook.com/You-Coaching-117648319093347/',
    linkedin: 'https://www.linkedin.com/in/lynciapodmore/',
  },
};

export const nav = [
  { href: '/coaching', label: 'Coaching' },
  { href: '/strengths', label: 'Strengths' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/for-organisations', label: 'For organisations' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const credentials = [
  'BA (Hons) Psychology',
  'Gallup Certified Strengths Coach',
  'Transforming Communication™ Accredited Trainer',
  'NLP Master Practitioner',
  'Certified Coach, NeuroLeadership Institute',
  'Emotional Culture Deck Practitioner',
  'ICI Member',
];
