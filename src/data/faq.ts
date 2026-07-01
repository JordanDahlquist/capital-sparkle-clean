import { SHOW_LICENSED_INSURED } from "./flags";

export type FaqItem = { q: string; a: string };

const baseFaq: FaqItem[] = [
  {
    q: "How much does house washing or pressure washing cost?",
    a: "Every home is different, so the price depends on the size of your home, the surfaces being cleaned, and how much buildup there is. The fastest way to get a real number is a free quote — we'll look at your property and give you a straight price with no obligation.",
  },
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses high-pressure water and is right for hard surfaces like concrete and pavers. Soft washing uses low pressure plus a cleaning solution that kills mold, mildew, and algae at the root — the safe way to clean siding and roofs without damaging them. We use the right method for each surface.",
  },
  {
    q: "Is soft washing safe for my siding and roof?",
    a: "Yes. High pressure can crack siding, force water behind it, or strip shingles. That's why we soft wash homes and roofs — low pressure and the right detergent clean deeper and last longer, without the damage.",
  },
  {
    q: "How often should I have my house washed?",
    a: "Most Capital Region homes do well with a house wash every 1 to 2 years. Shaded or north-facing sides that grow green algae may need it sooner. Roofs and driveways vary — we'll tell you what your home needs when we quote it.",
  },
  {
    q: "Will the cleaning hurt my plants, pets, or kids?",
    a: "We take care to protect your landscaping and rinse surrounding plants before and after. Once everything is rinsed and dry, it's safe for pets and kids. We'll let you know if we need an area kept clear while we work.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Usually not. As long as we can access the areas being cleaned and an outdoor water spigot, most jobs don't require you to be home. We'll confirm the details when we schedule.",
  },
  {
    q: "What's the best time of year to pressure wash in the Capital Region?",
    a: "Spring through fall is ideal — warm, dry weather lets surfaces dry properly. Spring is popular for clearing winter grime, and fall is great before the cold sets in.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Albany, Schenectady, Clifton Park, Saratoga Springs, Troy, Rensselaer, and the surrounding Capital Region towns. Not sure if you're in range? Just ask.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes — every quote is free and no-obligation. Tell us what you need cleaned and we'll get you a price, usually the same day.",
  },
  {
    q: "Do you offer military or first responder discounts?",
    a: "Yes. We're proud to offer discounts for military members and first responders. Just mention it when you reach out.",
  },
];

const licensedItem: FaqItem = {
  q: "Are you licensed and insured?",
  a: "Yes. Capital Pro Pressure Washing is licensed and insured for your protection.",
};

export const faqItems: FaqItem[] = SHOW_LICENSED_INSURED
  ? [...baseFaq, licensedItem]
  : baseFaq;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};