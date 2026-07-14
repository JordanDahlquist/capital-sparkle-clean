import {
  Home,
  CloudRain,
  Layers,
  type LucideIcon,
} from "lucide-react";
import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";
import roofWashingHero from "../assets/service-heroes/service-roof-washing-custom.jpg.asset.json";
import concreteCleaningHero from "../assets/service-heroes/service-concrete-cleaning-sealing.png.asset.json";

export type CityServiceContent = {
  slug: string;
  service: string;
  city: string;
  region: string;
  icon: LucideIcon;
  heroImage: string;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
  };
  intro: string[];
  localContext: {
    heading: string;
    body: string;
    bullets: { title: string; desc: string }[];
  };
  neighborhoods: string[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  meta: { title: string; description: string };
  // Related service links (internal SEO)
  relatedServices: { name: string; to: "/$service"; slug: string; blurb: string }[];
  relatedCityLinks: { name: string; to: string; blurb: string }[];
};

export const CITY_SERVICES: CityServiceContent[] = [
  {
    slug: "house-washing-albany-ny",
    service: "House Washing",
    city: "Albany",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Albany, NY · Soft Wash Specialists",
      headline: "House Washing in Albany, NY",
      subhead:
        "Albany's humid Hudson River summers grow mildew fast — especially on north-facing siding in Pine Hills, Center Square, and Delmar. Our soft-wash kills it at the root without harming your paint, plants, or vinyl.",
    },
    intro: [
      "Albany homes take a beating you don't see until it's too late. Hudson River humidity, dense tree canopy through Buckingham Pond and Pine Hills, and long shoulder seasons create the exact conditions mildew and green algae love — dark, damp, and slow to dry.",
      "By the time you notice the green streaks on the north side of the house or the black staining under the gutters, it has already crept into the seams of the siding. High pressure blasts it off the surface, but the roots stay behind. Two months later, it's back.",
      "Our Albany soft-wash system uses professional biocides at low pressure to kill mildew, algae, and cobwebs at the root — so the results last 3–5× longer than a pressure-only wash. We're local, we know the housing stock, and we've been cleaning Albany homes for over 10 years.",
    ],
    localContext: {
      heading: "Built for Albany Houses",
      body:
        "From 1900s Center Square brownstones to Colonie ranches and Delmar Colonials, we've cleaned every style of home Albany has. Each surface — brick, stucco, aluminum, painted cedar, vinyl — gets its own detergent mix and rinse pressure. No one-size-fits-all wash.",
      bullets: [
        {
          title: "Historic Center Square & Mansion District",
          desc: "Painted brick and older wood trim need gentle detergents. We soft-wash without stripping paint or driving water into old mortar joints.",
        },
        {
          title: "Pine Hills & Buckingham Pond",
          desc: "Heavy tree cover = mildew heaven. We treat shaded north walls first, extend dwell time, and re-rinse — no green streaks left behind.",
        },
        {
          title: "New Scotland, Delmar & Slingerlands",
          desc: "Larger Colonials with dormers and gables. We reach the peaks safely from the ground with soft-wash — no ladders scraping your siding.",
        },
        {
          title: "Colonie, Loudonville & Latham",
          desc: "Vinyl and Hardie siding wash beautifully with our low-pressure system. Perfect prep before painting or listing.",
        },
      ],
    },
    neighborhoods: [
      "Center Square",
      "Pine Hills",
      "Buckingham Pond",
      "Mansion District",
      "New Scotland",
      "Delmar",
      "Slingerlands",
      "Loudonville",
      "Colonie",
      "Latham",
      "Guilderland",
      "Bethlehem",
    ],
    benefits: [
      {
        title: "Kills Albany's Green Algae at the Root",
        desc: "The green streaks on your north wall are living algae fed by Hudson Valley humidity. Our biocides kill it — not just bleach it — so it doesn't come back in eight weeks.",
      },
      {
        title: "Safe for Old Albany Homes",
        desc: "Center Square and Mansion District homes have painted brick, historic wood, and delicate mortar. We soft-wash at pressure lower than a garden hose.",
      },
      {
        title: "Perfect Before You List",
        desc: "Albany real estate moves fast. A soft-washed exterior is one of the highest-ROI upgrades before an open house — often paying for itself many times over.",
      },
      {
        title: "10+ Years Local — We Know Your Block",
        desc: "We've cleaned houses on nearly every street from Whitehall Road to New Scotland Ave. Not a franchise, not a subcontractor — the same crew every visit.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Albany",
        desc: "Same-day callback. We measure, inspect siding condition, and give a firm price — usually within 24 hours of your call.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "Cover plants and shrubs (your Pine Hills perennials are safe), apply eco-safe detergent, let it kill the mildew, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-scrub around doors, sills, and porches. Walk the home with you before we pack up. You approve the job before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Albany?",
        a: "Most Albany single-family homes fall in the $349–$649 range. Historic Center Square brownstones and larger Delmar Colonials run higher. We give firm quotes — never a range that changes on the day of service.",
      },
      {
        q: "Will you damage my siding or landscaping?",
        a: "No. We use soft-wash pressure (lower than a garden hose) and pre-rinse landscaping before, during, and after. Perennials, hostas, and hydrangeas — all fine.",
      },
      {
        q: "Do you service my Albany neighborhood?",
        a: "Yes — Center Square, Pine Hills, Buckingham Pond, the Mansion District, Delmar, Slingerlands, Loudonville, Colonie, Latham, Guilderland, Bethlehem, and everywhere in between.",
      },
      {
        q: "How long does an Albany house wash take?",
        a: "Most single-family homes take 2–4 hours. Larger Delmar and Slingerlands Colonials can take a full day.",
      },
      {
        q: "How often should I have my Albany home washed?",
        a: "Once a year is ideal. Homes with heavy tree cover in Pine Hills or shaded north walls benefit from an annual wash to stay ahead of the mildew.",
      },
      {
        q: "Do you clean brick and stucco?",
        a: "Yes. Common on Center Square and Mansion District homes. We adjust detergent and pressure for masonry and never drive water into old mortar joints.",
      },
    ],
    meta: {
      title: "House Washing in Albany, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Albany, NY — Center Square, Pine Hills, Delmar & more. Kills mildew and algae at the root. 10+ years local. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Kill the black streaks on your Albany roof without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear leaves and remove the black tiger stripes on your gutter face.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Even, streak-free driveway and walkway cleaning — no wand marks.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Albany, NY",
        to: "/roof-washing-albany-ny",
        blurb: "Shingle-safe soft-wash for Albany rooflines.",
      },
      {
        name: "Concrete Cleaning in Albany, NY",
        to: "/concrete-cleaning-albany-ny",
        blurb: "Driveways, walkways, and patios — even results every time.",
      },
    ],
  },
  {
    slug: "roof-washing-albany-ny",
    service: "Roof Washing",
    city: "Albany",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Albany, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Albany, NY",
      subhead:
        "Those black streaks on Albany roofs are gloeocapsa magma — a living algae eating your shingles. We kill it at the root with a shingle-safe soft wash, not high pressure.",
    },
    intro: [
      "Drive down New Scotland Ave, Western Ave, or any leafy street in Delmar and you'll see the same thing: perfectly good roofs streaked with ugly black stains on the north-facing slope. Those aren't dirt. They aren't shadows. They're a living algae — gloeocapsa magma — feeding on the limestone filler in your shingles.",
      "Albany's climate is a gift to this stuff. Humid summers, dense shade through Pine Hills and Buckingham Pond, and rooflines that stay damp for days after a storm. Left alone, the algae eats shingle granules — the #1 cause of premature roof failure.",
      "High pressure will strip the streaks. It will also void your shingle warranty and blast granules into the gutters. Our ARMA-approved soft wash uses professional cleaning solutions that kill the algae on contact, from the ground. No walking on wet shingles. No pressure damage. Streak-free rooflines that stay clean for years.",
    ],
    localContext: {
      heading: "Why Albany Roofs Streak So Fast",
      body:
        "Albany sits in a humidity corridor between the Hudson River, the Helderberg Escarpment, and the Adirondack foothills. Combine that with mature tree canopies over most of the city's residential streets, and you've got the perfect breeding ground for roof algae.",
      bullets: [
        {
          title: "Hudson River Humidity",
          desc: "Warm, damp summer air keeps shingles wet long after storms — ideal algae conditions.",
        },
        {
          title: "Mature Tree Canopy",
          desc: "Pine Hills, Buckingham Pond, and Delmar streets are shaded. Shade + damp = algae growth on north slopes within 3–5 years.",
        },
        {
          title: "Long Wet Shoulder Seasons",
          desc: "Albany springs and falls are wet and slow-drying — extending the growing window well past summer.",
        },
        {
          title: "Older Housing Stock",
          desc: "Many Albany homes have architectural shingles installed 10–20 years ago that are prime real estate for algae if never cleaned.",
        },
      ],
    },
    neighborhoods: [
      "Center Square",
      "Pine Hills",
      "Buckingham Pond",
      "New Scotland",
      "Delmar",
      "Slingerlands",
      "Loudonville",
      "Colonie",
      "Latham",
      "Guilderland",
      "Bethlehem",
      "Voorheesville",
    ],
    benefits: [
      {
        title: "Protects Your Roof's Lifespan",
        desc: "Killing the algae stops granule loss — the leading cause of premature shingle failure in the Hudson Valley climate.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "ARMA-approved soft wash. No high pressure, no walking on wet shingles, no voided warranty.",
      },
      {
        title: "Kills Algae At The Root",
        desc: "Bleach-only 'pressure wash' cleans just fade the streaks. Our treatment targets the algae itself, so results hold up far longer than a surface rinse.",
      },
      {
        title: "Instant Curb Appeal in Albany's Market",
        desc: "A streak-free roofline is a huge win before selling — buyers see 'new roof' when it's really just clean.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We check shingles, flashing, drip edge, and drainage before we quote — you get an honest read on your roof's condition.",
      },
      {
        title: "Soft-Wash Application",
        desc: "Apply ARMA-approved cleaning solution from the ground or ladder — never walking on wet, brittle shingles.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse, then flush and inspect your gutters and downspouts before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Albany?",
        a: "Most Albany roofs run $499–$1,199 depending on pitch, height, and square footage. We quote firm, on-site — never a moving target.",
      },
      {
        q: "Will pressure washing damage my Albany roof?",
        a: "Yes — that's why we don't do it. High pressure voids most shingle warranties and blasts granules into your gutters. We soft-wash exclusively.",
      },
      {
        q: "Do you walk on my roof?",
        a: "Only when absolutely necessary and always with fall protection. Most Albany roofs are cleaned entirely from ladders and the ground.",
      },
      {
        q: "How long before the black streaks come back?",
        a: "Because we kill the algae at the root instead of just bleaching the color out, Albany rooflines typically stay clean far longer than a standard pressure rinse. Regrowth timing depends on shade, tree cover, and humidity — an annual house wash helps keep it at bay.",
      },
      {
        q: "Do you service my Albany neighborhood?",
        a: "Yes — Center Square, Pine Hills, Buckingham Pond, Mansion District, Delmar, Slingerlands, Loudonville, Colonie, Latham, Guilderland, Bethlehem, and Voorheesville.",
      },
      {
        q: "Is soft-wash safe for metal, tile, or cedar roofs?",
        a: "Yes. We adjust the mix and technique separately for metal, tile, cedar shake, and asphalt shingles.",
      },
    ],
    meta: {
      title: "Roof Washing in Albany, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Albany, NY. Kills black-streak algae at the root without high pressure. ARMA-approved. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash your Albany siding while we're on the roof — package pricing available.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush granules and debris after a roof wash — protect your fascia.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "For older Albany roofs — restore flexibility and add 5+ years of life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Albany, NY",
        to: "/house-washing-albany-ny",
        blurb: "Full-house soft wash for Albany homes.",
      },
      {
        name: "Concrete Cleaning in Albany, NY",
        to: "/concrete-cleaning-albany-ny",
        blurb: "Restore Albany driveways and walkways after winter.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-albany-ny",
    service: "Concrete Cleaning",
    city: "Albany",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Albany, NY · Surface-Cleaner Finish",
      headline: "Concrete & Driveway Cleaning in Albany, NY",
      subhead:
        "Albany winters chew up concrete. Between road salt, freeze/thaw cycles, and years of grime, driveways go dark and blotchy. Our commercial surface-cleaner leaves an even, streak-free finish — no wand marks.",
    },
    intro: [
      "If you live in Albany, you know what winter does to a driveway. The plow throws salt-heavy slush into every crack. Water freezes, expands, and pops chunks of concrete loose. By April, your driveway is a topographic map of stains — oil drips from the garage, rust from patio furniture, tire marks, and a haze of gray-black grime the rain won't touch.",
      "Then someone with a pressure washer tries to fix it and leaves the driveway looking worse: 'tiger stripes' from the wand, bright clean streaks between dirty ones, spots where they leaned in too long. That's the DIY special.",
      "We clean Albany concrete with commercial-grade rotary surface cleaners — the same equipment used on gas stations and shopping plaza sidewalks. Even pressure across the full surface, no wand marks, no zebra stripes. The finish is uniform edge-to-edge. And in the Capital Region climate, we strongly recommend sealing after — it extends the clean 3–4× and blocks salt penetration next winter.",
    ],
    localContext: {
      heading: "Albany Concrete Takes a Beating",
      body:
        "The Capital Region has one of the harshest concrete climates in the Northeast. Between deicing salts, temperature swings, and long wet springs, unsealed driveways spall, pit, and stain fast. Regular cleaning + sealing is the single biggest thing you can do to make a driveway last.",
      bullets: [
        {
          title: "Road Salt Damage",
          desc: "Albany County uses aggressive deicers. Salt gets driven into unsealed concrete every winter — sealing after cleaning is essential.",
        },
        {
          title: "Freeze/Thaw Cycles",
          desc: "Water works into hairline cracks, freezes, expands, and pops surface concrete loose. Sealing keeps water out.",
        },
        {
          title: "Oil, Rust & Organic Stains",
          desc: "Garage oil drips, rust from grills and furniture, tannin from tree leaves — we pre-treat each stain before the surface-clean pass.",
        },
        {
          title: "Blotchy Older Driveways",
          desc: "Many Albany driveways poured decades ago look permanently gray. A proper surface-clean often looks like new concrete.",
        },
      ],
    },
    neighborhoods: [
      "Center Square",
      "Pine Hills",
      "New Scotland",
      "Delmar",
      "Slingerlands",
      "Loudonville",
      "Colonie",
      "Latham",
      "Guilderland",
      "Bethlehem",
      "Menands",
      "Voorheesville",
    ],
    benefits: [
      {
        title: "Even, Streak-Free Finish",
        desc: "Commercial rotary surface cleaner — no wand marks or 'tiger stripes' the way most DIY jobs turn out.",
      },
      {
        title: "Removes Oil, Rust & Salt Haze",
        desc: "Specialty pre-treatments handle Albany's typical mix of garage oil, planter rust, and winter salt film.",
      },
      {
        title: "Optional Sealing for Albany Winters",
        desc: "Sealing after cleaning is the smartest concrete investment in the Capital Region — blocks salt, extends life, keeps the clean.",
      },
      {
        title: "Huge Curb-Appeal Lift",
        desc: "For most Albany homes, a clean driveway is the single most visible exterior improvement. Neighbors notice.",
      },
    ],
    process: [
      {
        title: "Pre-Treat Every Stain",
        desc: "Spot-treat oil, rust, salt haze, and organic staining before we start the main pass.",
      },
      {
        title: "Commercial Surface-Clean Pass",
        desc: "Even pressure across the full surface with a rotary surface cleaner — the finish is uniform edge-to-edge.",
      },
      {
        title: "Rinse & Optional Seal",
        desc: "Final rinse. If you're sealing, we return once the concrete is fully dry and apply a densifier or penetrating sealer.",
      },
    ],
    faqs: [
      {
        q: "How much does driveway cleaning cost in Albany?",
        a: "Most Albany driveways run $249–$499 for cleaning alone. Sealing is quoted separately based on square footage.",
      },
      {
        q: "Should I seal my Albany driveway?",
        a: "Yes — in the Capital Region climate, sealing is the single best thing you can do. It blocks salt, resists freeze/thaw damage, and keeps the concrete looking clean 3–4× longer.",
      },
      {
        q: "Will you remove old oil stains?",
        a: "Most of them. Fresh drips come out completely; deep, old stains often lighten dramatically but may not vanish entirely. We set honest expectations before starting.",
      },
      {
        q: "How often should I clean my driveway in Albany?",
        a: "Annual cleaning is ideal — especially after Albany winters. Sealer every 2–3 years.",
      },
      {
        q: "Do you service my Albany neighborhood?",
        a: "Yes — Center Square, Pine Hills, New Scotland, Delmar, Slingerlands, Loudonville, Colonie, Latham, Guilderland, Bethlehem, Menands, and Voorheesville.",
      },
      {
        q: "How long does it take?",
        a: "Most Albany driveways clean in 1–2 hours. Sealing (if selected) is a separate visit once the concrete is fully dry.",
      },
    ],
    meta: {
      title: "Concrete Cleaning in Albany, NY | Capital Pro Pressure Washing",
      description:
        "Concrete and driveway cleaning in Albany, NY — even, streak-free surface-cleaner finish. Removes salt, oil, and rust. Sealing available. Free quotes.",
    },
    relatedServices: [
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore Albany paver patios and walkways — cleaning plus polymeric sanding and sealing.",
      },
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle your driveway with a soft-wash house cleaning.",
      },
      {
        name: "Deck & Patio Cleaning",
        to: "/$service",
        slug: "deck-patio-cleaning",
        blurb: "Strip years of graying and mildew — prep decks for staining.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Albany, NY",
        to: "/house-washing-albany-ny",
        blurb: "Soft-wash your Albany siding while we clean the drive.",
      },
      {
        name: "Roof Washing in Albany, NY",
        to: "/roof-washing-albany-ny",
        blurb: "Kill the black streaks on Albany rooflines.",
      },
    ],
  },
];

export function getCityService(slug: string) {
  return CITY_SERVICES.find((s) => s.slug === slug);
}