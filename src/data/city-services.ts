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
        blurb: "For older Albany roofs — restore shingle flexibility and help extend usable roof life.",
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
  {
    slug: "house-washing-schenectady-ny",
    service: "House Washing",
    city: "Schenectady",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Schenectady, NY · Soft Wash for Historic Homes",
      headline: "House Washing in Schenectady, NY",
      subhead:
        "The Stockade District has stood for 350 years — long enough that a pressure washer can undo generations of preservation in an afternoon. We soft-wash Schenectady's historic brick and clapboard the way it should be cleaned: gently, at hose pressure, without touching a single mortar joint.",
    },
    intro: [
      "Schenectady isn't like the newer Capital Region suburbs. Walk the Stockade District and you're looking at some of the oldest continuously occupied wood-frame and brick homes in America — some pre-Revolution. Turn a corner into GE Realty Plot and you're surrounded by grand early-1900s architecture built when Charles Steinmetz and his neighbors ran the electrical world from Union Street.",
      "That housing stock is exactly why so many pressure washing calls in Schenectady go wrong. High-pressure wands split old wood clapboard, drive water behind original siding, and blast crumbling lime mortar right out of Stockade brick joints. What looked like 'just dirt' becomes a five-figure repair.",
      "Our Schenectady soft-wash approach was built for this. Professional-grade cleaning solutions handle the Mohawk River humidity and mildew — the wash does the work, not the pressure. It's the same reason preservation-minded homeowners in the Stockade and GE Plot call us instead of anyone with a trailer and a pressure hose.",
    ],
    localContext: {
      heading: "Built For Schenectady's Housing Stock",
      body:
        "From 18th-century Stockade clapboard to Realty Plot Tudors and postwar Niskayuna ranches, no two Schenectady homes ask for the same wash. We calibrate detergent strength and rinse pressure to the actual surface — not a generic template.",
      bullets: [
        {
          title: "Stockade District — Historic Wood & Brick",
          desc: "Pre-Revolution clapboard and soft, sand-lime mortar don't tolerate pressure. We soft-wash at lower-than-garden-hose PSI and keep water off failing joints entirely.",
        },
        {
          title: "GE Realty Plot & Union Street",
          desc: "Grand early-1900s homes with painted brick, stone accents, and ornate wood trim. Delicate detergents, careful masking around leaded windows, no ladder scars on original wood.",
        },
        {
          title: "Niskayuna & Rotterdam Suburbs",
          desc: "Larger postwar Colonials and split-levels — vinyl, aluminum, and Hardie siding. Our soft-wash reaches gable peaks safely from the ground.",
        },
        {
          title: "Scotia, Glenville & Mont Pleasant",
          desc: "Mohawk River humidity keeps north-facing walls damp for days. Extended dwell times and re-rinsing wipe out mildew that returns quickly on shorter washes.",
        },
      ],
    },
    neighborhoods: [
      "Stockade District",
      "GE Realty Plot",
      "Union Street",
      "Niskayuna",
      "Rotterdam",
      "Glenville",
      "Scotia",
      "Mont Pleasant",
    ],
    benefits: [
      {
        title: "Preservation-Grade Soft Wash",
        desc: "The right approach for Stockade wood and old mortar — cleaning solution does the work at hose pressure, so nothing gets blown out or split.",
      },
      {
        title: "Handles Mohawk River Mildew",
        desc: "Valley humidity feeds green algae and black mildew on shaded siding. Our biocides target it at the root rather than just bleaching the surface.",
      },
      {
        title: "Surface-Specific Detergents",
        desc: "Painted brick, sand-lime mortar, cedar clapboard, vinyl, aluminum — each surface gets its own mix rather than one generic soap.",
      },
      {
        title: "10+ Years On Schenectady Homes",
        desc: "Same local crew that has cleaned homes from Front Street through GE Plot and out into Niskayuna. Not a franchise, not a rotating subcontractor.",
      },
    ],
    process: [
      {
        title: "Free Walkthrough Quote",
        desc: "We walk the property, note any failing mortar, cracked clapboard, or paint issues before we quote, and give you a firm price — never a moving range.",
      },
      {
        title: "Mask, Pre-Treat & Soft-Wash",
        desc: "Pre-rinse plants and shrubs, mask off failing joints and old wood repairs, apply detergent, let it dwell, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-detail around historic doors, porches, and window casings. Walk the home with you before we leave — you approve the finish.",
      },
    ],
    faqs: [
      {
        q: "Is pressure washing safe on Stockade District homes?",
        a: "No — that's exactly the mistake we help homeowners avoid. High pressure splits historic clapboard and pulls sand-lime mortar out of old brick joints. On Stockade homes we soft-wash exclusively, at less pressure than a garden hose.",
      },
      {
        q: "Will your detergents strip old paint or lime mortar?",
        a: "No. We match detergent strength to the surface and pre-test in an inconspicuous area on older or hand-painted homes. On failing mortar joints we mask entirely and hand-detail the surrounding brick.",
      },
      {
        q: "Do you clean GE Realty Plot homes with slate roofs and leaded windows?",
        a: "Yes — regularly. Leaded and stained glass gets masked; slate roofs are only ever soft-washed (never walked or pressure-cleaned). We treat GE Plot exteriors as preservation work.",
      },
      {
        q: "How much does house washing cost in Schenectady?",
        a: "Most single-family Schenectady homes fall in the $349–$699 range. Historic Stockade and larger GE Plot homes with detail work run higher because the labor and masking are more involved.",
      },
      {
        q: "How fast will mildew come back on the shaded side of my house?",
        a: "Along the Mohawk it depends heavily on tree cover and how much sun the north wall sees. Because we treat the biology and not just the color, results generally last considerably longer than a straight pressure rinse — an annual wash typically stays ahead of regrowth.",
      },
      {
        q: "Do you service Niskayuna, Rotterdam, Scotia, and Glenville?",
        a: "Yes — plus Mont Pleasant, Union Street, and out toward Alplaus. If you're inside the Schenectady/Niskayuna/Rotterdam service radius, we cover you.",
      },
    ],
    meta: {
      title: "House Washing in Schenectady, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Schenectady, NY — Stockade District, GE Realty Plot, Niskayuna & Rotterdam. Preservation-safe. 10+ years local. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Shingle-safe soft wash for Schenectady's older rooflines.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear leaves and remove black tiger-stripe staining from the gutter face.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Undo winter salt damage on Schenectady driveways and walkways.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Schenectady, NY",
        to: "/roof-washing-schenectady-ny",
        blurb: "Kill Mohawk-Valley algae streaks on older Schenectady roofs.",
      },
      {
        name: "Concrete Cleaning in Schenectady, NY",
        to: "/concrete-cleaning-schenectady-ny",
        blurb: "Salt-haze and stain removal for Schenectady driveways.",
      },
    ],
  },
  {
    slug: "roof-washing-schenectady-ny",
    service: "Roof Washing",
    city: "Schenectady",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Schenectady, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Schenectady, NY",
      subhead:
        "The Mohawk River valley traps humidity, and Schenectady's older, shaded roofs pay the price — long black streaks of gloeocapsa magma feeding on the limestone in your shingles. We kill it at the root, from the ground, without pressure.",
    },
    intro: [
      "If you've driven down Union Street or through GE Realty Plot in late summer, you've seen it: dark, ribbon-like stains marching down the north slope of otherwise fine roofs. That's not weathering. It's gloeocapsa magma — a living cyanobacteria — and it's eating the limestone filler in your shingles.",
      "Schenectady is a near-perfect breeding ground. The Mohawk River valley holds humidity longer than the surrounding hills. Century-old tree canopies over the Stockade District and Realty Plot keep rooflines shaded and slow to dry. And a lot of Schenectady homes still carry shingles that were installed 15–25 years ago and have never been cleaned.",
      "Pressure washing an older Schenectady roof is one of the worst things you can do to it — it blasts granules into the gutters and voids most shingle warranties. Our ARMA-approved soft wash uses professional cleaning solutions applied from ladders and the ground. The algae dies on contact, no one walks your brittle shingles, and the streaks are gone.",
    ],
    localContext: {
      heading: "Why Schenectady Roofs Streak First",
      body:
        "Schenectady sits at the meeting point of the Mohawk River, dense urban tree cover, and older housing stock — three factors that compound faster here than in most of the Capital Region.",
      bullets: [
        {
          title: "Mohawk River Valley Humidity",
          desc: "Damp valley air keeps shingles wet for hours after everyone else has dried. That's the environment gloeocapsa magma needs.",
        },
        {
          title: "Century-Old Tree Canopy",
          desc: "Stockade, Union Street, and GE Realty Plot all sit under heavy shade. Shade + damp = north-slope streaking in as little as 3–5 years.",
        },
        {
          title: "Older Asphalt Shingles",
          desc: "Plenty of Schenectady roofs still carry architectural shingles from the late 90s or 2000s. Prime real estate for algae if never treated.",
        },
        {
          title: "Slate & Metal Roofs Too",
          desc: "Many historic and Realty Plot homes have slate or standing-seam metal. Both need soft-wash — nothing else touches them.",
        },
      ],
    },
    neighborhoods: [
      "Stockade District",
      "GE Realty Plot",
      "Union Street",
      "Niskayuna",
      "Rotterdam",
      "Glenville",
      "Scotia",
      "Mont Pleasant",
    ],
    benefits: [
      {
        title: "Protects Aging Schenectady Roofs",
        desc: "Killing the algae stops granule loss — the biggest single driver of premature shingle failure on Schenectady's older architectural roofs.",
      },
      {
        title: "Slate & Metal Safe",
        desc: "Historic slate on Stockade homes and standing-seam metal on GE Plot roofs both get their own soft-wash formulation — never pressure.",
      },
      {
        title: "Warranty-Safe Application",
        desc: "ARMA-approved. No high pressure. No walking wet, brittle shingles. Warranty language stays intact.",
      },
      {
        title: "Curb Appeal In A Preservation City",
        desc: "A clean, streak-free roof reads as 'well kept' — a real factor for Schenectady homes going to market or up for historic recognition.",
      },
    ],
    process: [
      {
        title: "Free Ground-Level Roof Assessment",
        desc: "We photograph the roof from the ground and ladders, note flashing, drip edge, and shingle condition, and give a firm quote.",
      },
      {
        title: "Soft-Wash From Ladders & Ground",
        desc: "ARMA-approved solution is applied at low pressure. On most Schenectady homes we never walk the roof at all.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse, then flush gutters and downspouts before we leave — critical on older Stockade and Realty Plot fascia.",
      },
    ],
    faqs: [
      {
        q: "Can you soft-wash a slate roof on a Stockade District home?",
        a: "Yes — carefully. Slate is safe with the correct soft-wash mix at very low pressure and never walking on the tile. It's how historic Schenectady roofs should be cleaned.",
      },
      {
        q: "My shingles are almost 20 years old. Should I still wash them?",
        a: "Usually yes — if the shingles are intact but stained, washing removes the algae eating the granules and helps the remaining shingle life. If they're already curling or bald in spots we'll tell you honestly on the free assessment.",
      },
      {
        q: "How is soft-wash different from what a pressure washing company does?",
        a: "High pressure blasts the color off the surface temporarily and often voids the shingle warranty. Soft-wash uses cleaning chemistry — not pressure — to kill the algae itself. The streaks don't come back the same way, and no granules end up in the gutters.",
      },
      {
        q: "Do you work on standing-seam metal or copper roofs on Realty Plot?",
        a: "Yes. Metal and copper get a different mix and technique than asphalt or slate. We're used to the ornate Realty Plot rooflines and dormer detailing.",
      },
      {
        q: "Will you damage my landscaping in the Stockade District?",
        a: "No. We pre-rinse plantings, tarp sensitive beds, and re-rinse after. On tight Stockade lots this matters — we treat neighbors' plantings the same way we treat yours.",
      },
      {
        q: "How much does roof washing cost in Schenectady?",
        a: "Most Schenectady roofs quote in the $499–$1,299 range depending on pitch, height, square footage, and shingle vs slate vs metal. Firm on-site quote, never a bait-and-switch range.",
      },
    ],
    meta: {
      title: "Roof Washing in Schenectady, NY | Capital Pro Pressure Washing",
      description:
        "Shingle, slate & metal-safe soft-wash roof cleaning in Schenectady, NY. Kills Mohawk Valley algae streaks. ARMA-approved. Free on-site quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding cleaning with your roof — one visit, one crew.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush the granules and debris out after a roof wash — protect Schenectady fascia.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "For aging Schenectady shingles — restore flexibility and help extend usable life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Schenectady, NY",
        to: "/house-washing-schenectady-ny",
        blurb: "Preservation-grade soft wash for Schenectady exteriors.",
      },
      {
        name: "Concrete Cleaning in Schenectady, NY",
        to: "/concrete-cleaning-schenectady-ny",
        blurb: "Undo winter salt damage on Schenectady drives and walks.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-schenectady-ny",
    service: "Concrete Cleaning",
    city: "Schenectady",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Schenectady, NY · Surface-Cleaner Finish",
      headline: "Concrete & Driveway Cleaning in Schenectady, NY",
      subhead:
        "Schenectady winters are hard on concrete — road salt, plow slush, and dozens of freeze/thaw cycles pit and stain everything they touch. Our rotary surface cleaner puts an even, streak-free finish back on the drive, and sealing keeps it there.",
    },
    intro: [
      "Older Schenectady neighborhoods — the Stockade, Union Street, Mont Pleasant, and stretches of Rotterdam and Scotia — are full of concrete that has been in the ground for decades. Every winter that concrete takes another beating: brine trucks up front, driveway salt at the door, plow slush piled on top, and a freeze/thaw cycle that runs from November into April.",
      "By the time the snow clears in Schenectady, most driveways look like a topographic map — salt haze in a milky ring near the garage, tire lines, rust from planters, oil drops, and a gray-black film the spring rain doesn't touch. And then someone shows up with a pressure wand and leaves behind 'tiger stripes' that make the driveway look worse than before.",
      "We clean Schenectady concrete with a commercial-grade rotary surface cleaner — the same equipment that keeps gas station aprons and shopping-plaza sidewalks looking presentable. Uniform pressure across the full surface. No wand marks. No zebra stripes. Older, salt-worn concrete that hasn't been touched in years often looks like a new pour when we're done.",
    ],
    localContext: {
      heading: "Why Schenectady Concrete Ages Fast",
      body:
        "The Capital Region is one of the toughest concrete climates in the Northeast, and Schenectady's mix of heavy road salting, older driveways, and long wet springs accelerates every failure mode concrete has.",
      bullets: [
        {
          title: "Aggressive Road Salt",
          desc: "Schenectady County salts hard and salts often. That brine gets tracked and plowed into unsealed concrete every single winter.",
        },
        {
          title: "Dozens Of Freeze/Thaw Cycles",
          desc: "Water works into hairline cracks, freezes, expands, and pops the surface. Sealing is the single biggest defense against spalling.",
        },
        {
          title: "Older Concrete In Established Neighborhoods",
          desc: "Stockade, Mont Pleasant, and Union Street driveways are often 30–60 years old. A proper surface-clean usually brings them back further than owners expect.",
        },
        {
          title: "Organic Staining Under Trees",
          desc: "Heavy tree cover over Realty Plot and Niskayuna drops tannin, sap, and leaves — leaving orange and black shadow stains no rinse handles alone.",
        },
      ],
    },
    neighborhoods: [
      "Stockade District",
      "GE Realty Plot",
      "Union Street",
      "Niskayuna",
      "Rotterdam",
      "Glenville",
      "Scotia",
      "Mont Pleasant",
    ],
    benefits: [
      {
        title: "Even Rotary Surface-Cleaner Finish",
        desc: "Uniform pressure edge to edge — no wand marks, no zebra stripes, no missed strips down the middle of the drive.",
      },
      {
        title: "Cuts Salt Haze & Winter Film",
        desc: "Specialty pre-treatments break the milky white brine film that rain and a garden hose won't touch.",
      },
      {
        title: "Sealing For Schenectady Winters",
        desc: "The single smartest post-clean upgrade in this climate — a good sealer blocks salt penetration, resists freeze/thaw, and helps the clean hold much longer.",
      },
      {
        title: "Older Concrete Comes Back Further Than Owners Expect",
        desc: "On Stockade, Mont Pleasant and Union Street driveways we routinely surprise homeowners with how much of the 'permanent' gray was just decades of grime.",
      },
    ],
    process: [
      {
        title: "Stain-By-Stain Pre-Treat",
        desc: "Spot-treat oil drips, rust rings, tannin shadows, and salt haze before the main pass — each stain type gets its own chemistry.",
      },
      {
        title: "Commercial Rotary Surface-Clean",
        desc: "Full-width rotary head at even pressure. The finish is uniform corner to corner, garage apron to sidewalk.",
      },
      {
        title: "Rinse & Optional Sealing Visit",
        desc: "Final rinse today. If you're sealing, we return once the concrete has fully dried and apply a densifier or penetrating sealer built for Northeast winters.",
      },
    ],
    faqs: [
      {
        q: "Can you actually remove winter salt haze?",
        a: "Yes. Salt haze is one of the most common Schenectady calls we take in April. Pre-treatment plus a rotary surface-clean pass takes off the milky ring that rain, a broom, and a garden hose won't move.",
      },
      {
        q: "Is sealing worth it on a 40-year-old driveway?",
        a: "Usually yes. Even on older concrete, a penetrating sealer slows further salt damage and freeze/thaw spalling and helps the clean hold much longer. On a driveway that's already crumbling we'll tell you honestly if sealing is the wrong call.",
      },
      {
        q: "Will pressure washing crack my Schenectady driveway?",
        a: "A properly used rotary surface cleaner won't, because pressure is spread evenly across the head. It's DIY wands — one narrow high-pressure line held in one spot — that gouge concrete and leave the 'tiger stripe' pattern.",
      },
      {
        q: "Can you clean around raised joints and older expansion strips?",
        a: "Yes. Older Schenectady driveways often have failing tar joints or wood expansion strips. We adjust angle and pressure around them so we don't blow them out of the seam.",
      },
      {
        q: "Do you clean paver driveways too?",
        a: "Yes — pavers get a different process (cleaning, joint re-sanding, and sealing). We can quote a paver driveway and a concrete apron on the same visit.",
      },
      {
        q: "How much does driveway cleaning cost in Schenectady?",
        a: "Most Schenectady driveways run $249–$549 for cleaning alone. Sealing is quoted separately based on square footage and product.",
      },
    ],
    meta: {
      title: "Concrete Cleaning in Schenectady, NY | Capital Pro Pressure Washing",
      description:
        "Driveway & concrete cleaning in Schenectady, NY — rotary surface-cleaner finish, salt-haze removal, and optional sealing. Free on-site quotes.",
    },
    relatedServices: [
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore Schenectady paver drives and patios — cleaning plus polymeric sanding and sealing.",
      },
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding cleaning with your driveway visit.",
      },
      {
        name: "Deck & Patio Cleaning",
        to: "/$service",
        slug: "deck-patio-cleaning",
        blurb: "Strip graying and mildew off Schenectady decks — prep for stain.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Schenectady, NY",
        to: "/house-washing-schenectady-ny",
        blurb: "Preservation-grade soft wash for Schenectady exteriors.",
      },
      {
        name: "Roof Washing in Schenectady, NY",
        to: "/roof-washing-schenectady-ny",
        blurb: "Kill Mohawk-Valley algae streaks on Schenectady rooflines.",
      },
    ],
  },
  {
    slug: "roof-washing-saratoga-springs-ny",
    service: "Roof Washing",
    city: "Saratoga Springs",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Saratoga Springs, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Saratoga Springs, NY",
      subhead:
        "Saratoga's famous tree canopy is beautiful — and it's exactly why so many roofs here streak black and grow moss faster than anywhere else in the Capital Region. We soft-wash from the ground so the shingles survive.",
    },
    intro: [
      "Walk down North Broadway, through the East Side, or under the elms off Union Ave, and look up. That mature tree canopy is one of the things people love about Saratoga Springs — and it's also the single biggest reason roofs here suffer. Constant shade keeps shingles damp for days after rain. Leaves, sap, and pollen fall onto rooflines and stay there. Add Saratoga County's humid summers and you've built a perfect greenhouse for the two problems we see on nearly every Saratoga roof: gloeocapsa magma black streaking and — much more than in Albany or Schenectady — actual moss.",
      "Moss is the giveaway that Saratoga is a heavier-shade market. Moss doesn't just stain a roof; it holds moisture against the shingle surface and works between the tabs, prying them up over time. By the time you can see it clearly from the sidewalk, it's already been at work on the deck of the roof for years.",
      "There is a hard deadline built into this town: track season. Late July through Labor Day, Saratoga homeowners host out-of-town guests, list homes as short-term rentals for the meet, and throw backyard parties two or three nights a week. A moss-covered, streaked roof is the first thing an incoming guest photographs from the driveway. Our ARMA-approved soft wash kills both algae and moss at the root without pressure — no walking on wet, brittle shingles, no voided warranty, no granules in the gutters. Book by early June to be in the queue before the meet.",
    ],
    localContext: {
      heading: "Why Saratoga Roofs Streak & Grow Moss First",
      body:
        "Saratoga Springs sits under one of the densest residential tree canopies in the Capital Region, and that canopy interacts with humid summers, older housing stock, and steep Victorian rooflines to produce more moss and algae than the surrounding towns.",
      bullets: [
        {
          title: "Dense Mature Tree Canopy",
          desc: "North Broadway, the East Side, and downtown streets stay shaded for most of the day. Roofs never fully dry between storms — ideal for algae and, unusually for the region, moss.",
        },
        {
          title: "Debris Load From Overhanging Limbs",
          desc: "Constant leaf, needle, and sap fall traps moisture on the shingle surface and in valleys, feeding moss and speeding stain buildup.",
        },
        {
          title: "Victorian & Steep-Pitch Rooflines",
          desc: "Downtown, North Broadway, and Broadway-adjacent homes have complex, high-pitch roofs with dormers, valleys, and turrets. Perfect microclimates for moss to hide.",
        },
        {
          title: "The Track-Season Deadline",
          desc: "July–August you're hosting or renting. Curb appeal has a firm date. Soft-wash should be done by mid-June to hit the meet clean.",
        },
      ],
    },
    neighborhoods: [
      "Downtown / Broadway",
      "North Broadway",
      "East Side",
      "Geyser Crest",
      "Wilton",
      "Greenfield",
      "Ballston Spa area",
    ],
    benefits: [
      {
        title: "Kills Moss & Algae At The Root",
        desc: "In heavy-canopy Saratoga, treating the biology — not just bleaching the surface — is what keeps the roof from looking the same again in two months.",
      },
      {
        title: "Protects Steep Victorian Rooflines",
        desc: "Applied from ladders and the ground so no one walks your ornate downtown or North Broadway rooflines. Complex valleys and dormer flashings stay intact.",
      },
      {
        title: "Warranty-Safe Application",
        desc: "ARMA-approved soft wash. No high-pressure cleaning, no granule loss into the gutters, no warranty language undone.",
      },
      {
        title: "Ready For Track Season & Rental Guests",
        desc: "Book by early June for a clean roofline before the meet — the first thing arriving guests, buyers, and short-term renters see from the drive.",
      },
    ],
    process: [
      {
        title: "Free Ground & Ladder Assessment",
        desc: "We photograph the roof from every side, note moss coverage, flashing, and shingle condition, and give a firm quote — no vague ranges.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied at low pressure from ladders and the ground. Moss and algae die on contact.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse, then flush the gutters and downspouts so nothing left over drains onto your driveway or landscaping.",
      },
    ],
    faqs: [
      {
        q: "Do you clean actual moss off Saratoga roofs, or only black algae?",
        a: "Both. Saratoga's canopy makes it one of the few Capital Region markets where full moss growth is common. Our soft-wash mix kills moss at the root; over the following weeks it dries out and weathers off the shingle rather than being scraped or pressure-blasted.",
      },
      {
        q: "How soon before track season should I schedule?",
        a: "Book by late May or early June. July and August fill up fast because every rental host and party host in town wants a clean exterior before the meet. Anything after mid-July risks not fitting into the schedule.",
      },
      {
        q: "Can you soft-wash the complex roof on a Victorian downtown home?",
        a: "Yes — that's most of what we do in Saratoga. Turrets, dormers, valleys, and steep pitches are handled from ladders using extension application, never by walking the roof surface.",
      },
      {
        q: "Will the treatment harm the mature trees and gardens I care about?",
        a: "No. We pre-rinse plantings before the wash, apply the treatment with drift control, and re-rinse afterward. The mature landscaping in Saratoga is part of what makes the homes valuable — we treat it accordingly.",
      },
      {
        q: "My roof is old but not ready to replace. Is washing still worth it?",
        a: "Usually yes. If the shingles are intact but moss- and algae-stained, killing the biology helps slow further granule loss on the shingles you have. On badly failing roofs we'll say so plainly during the free assessment.",
      },
      {
        q: "How much does roof washing cost in Saratoga Springs?",
        a: "Most Saratoga roofs quote in the $549–$1,499 range depending on pitch, height, square footage, and moss load. Downtown and North Broadway Victorians with complex rooflines run higher. Firm on-site quote every time.",
      },
    ],
    meta: {
      title: "Roof Washing in Saratoga Springs, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash roof cleaning in Saratoga Springs, NY. Kills moss and black algae under Saratoga's tree canopy — book before track season. ARMA-approved. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding cleaning with your roof visit — before the meet.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush the moss, granules, and leaf litter Saratoga's canopy dumps into your gutters.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "For aging Saratoga shingles — restore flexibility and help extend usable roof life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Saratoga Springs, NY",
        to: "/house-washing-saratoga-springs-ny",
        blurb: "Victorian-safe soft wash for Saratoga exteriors, ready by track season.",
      },
      {
        name: "Concrete Cleaning in Saratoga Springs, NY",
        to: "/concrete-cleaning-saratoga-springs-ny",
        blurb: "Drives, walks, and entertaining spaces cleaned before you host.",
      },
    ],
  },
  {
    slug: "house-washing-saratoga-springs-ny",
    service: "House Washing",
    city: "Saratoga Springs",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Saratoga Springs, NY · Soft Wash Before The Meet",
      headline: "House Washing in Saratoga Springs, NY",
      subhead:
        "Victorian downtown, grand North Broadway, and shaded East Side homes — we soft-wash Saratoga at hose pressure, so painted trim and original woodwork stay intact and the exterior is guest-ready by track season.",
    },
    intro: [
      "There's a specific look Saratoga Springs homes are supposed to have: painted Victorian trim in three colors, mature landscaping, a wraparound porch, and siding that reads as freshly maintained. That look does not survive high pressure. Painted spindles crack, old putty gets driven out of window sashes, and ornate wood detailing splinters — the exact features that make North Broadway and downtown houses worth what they're worth.",
      "Meanwhile the tree canopy that makes these streets beautiful keeps the north side of every home shaded and slow to dry. Green algae and mildew build fast in those conditions. By June, houses that looked fine over the winter are showing streaks along shaded siding, gutters, and porch ceilings.",
      "There's a hard deadline on this in Saratoga: track season. From late July through Labor Day, homeowners are hosting friends, family, buyers, or short-term rental guests. The house needs to be photograph-ready. Our soft-wash approach uses professional cleaning solutions at less pressure than a garden hose — safe for Victorian trim, historic paint, and delicate landscaping — and kills mildew at the root so it doesn't rebound in six weeks. Book by early June and you're on the schedule before the meet.",
    ],
    localContext: {
      heading: "Built For Saratoga's Housing Stock",
      body:
        "Downtown Victorians, North Broadway estates, East Side Colonials, and the newer builds in Geyser Crest and Wilton all ask for a different wash. We match detergent strength and rinse pressure to the actual surface — not a generic template.",
      bullets: [
        {
          title: "Downtown & Broadway Victorians",
          desc: "Painted wood spindles, brackets, and clapboard. Low-pressure soft-wash and gentle detergents that clean without stripping historic paint or driving water into old sashes.",
        },
        {
          title: "North Broadway Estates",
          desc: "Large homes with painted brick, stone accents, and mature plantings right against the foundation. Careful masking around leaded windows, drift control near heirloom gardens.",
        },
        {
          title: "East Side & Shaded Streets",
          desc: "Heavy canopy = mildew heaven on north-facing walls. Extended dwell time and a re-rinse — the algae doesn't come back a month later.",
        },
        {
          title: "Geyser Crest, Wilton & Greenfield",
          desc: "Larger newer homes on bigger lots — vinyl, Hardie, and painted cedar. Our soft-wash reaches high gables safely from the ground.",
        },
      ],
    },
    neighborhoods: [
      "Downtown / Broadway",
      "North Broadway",
      "East Side",
      "Geyser Crest",
      "Wilton",
      "Greenfield",
      "Ballston Spa area",
    ],
    benefits: [
      {
        title: "Victorian- & Trim-Safe Soft Wash",
        desc: "Painted spindles, ornate brackets, and old wood sashes stay intact. Cleaning does the work at hose pressure — no splitting, no water intrusion.",
      },
      {
        title: "Kills Canopy-Shade Mildew",
        desc: "Saratoga's tree cover feeds mildew on shaded siding. Our biocides target the biology at the root rather than just bleaching the color out.",
      },
      {
        title: "Track-Season & Rental-Ready",
        desc: "Book by early June and the exterior is photograph-ready before guests arrive for the meet — a real deadline for hosts and short-term rentals.",
      },
      {
        title: "Careful Around Mature Landscaping",
        desc: "North Broadway and East Side plantings aren't replaceable. We pre-rinse beds, apply with drift control, and re-rinse — no scorched hostas or hydrangeas.",
      },
    ],
    process: [
      {
        title: "Free Walkthrough Quote",
        desc: "We walk the property, note any historic trim, failing paint, or delicate landscaping, and give a firm price — never a moving range.",
      },
      {
        title: "Mask, Pre-Treat & Soft-Wash",
        desc: "Pre-rinse plantings, mask historic elements, apply detergent, let it dwell on shaded walls, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-detail around porch spindles, front doors, and window casings. Walk the home with you — you approve the finish before we leave.",
      },
    ],
    faqs: [
      {
        q: "Can you clean the painted Victorian trim on my downtown home?",
        a: "Yes — that's the housing stock we clean most often in Saratoga. Soft-wash at less-than-garden-hose pressure removes mildew and grime without stripping historic paint or splintering ornate spindles and brackets.",
      },
      {
        q: "How far in advance of track season should I book?",
        a: "By late May or early June. July and August fill fast because so many owners host or rent during the meet. Booking early puts you in the clean-before-guests window rather than the after-they-leave window.",
      },
      {
        q: "Will your cleaning damage the mature plantings on North Broadway lots?",
        a: "No. We pre-rinse beds and shrubs before the wash, apply detergent with drift control, and re-rinse after. Mature landscaping is a big part of Saratoga curb appeal — we treat it accordingly.",
      },
      {
        q: "The north side of my house grows green every year. Can you actually stop that?",
        a: "We can't remove the tree cover feeding it, but we can treat the biology instead of just bleaching the surface. That's why homes we wash tend to stay cleaner meaningfully longer than a straight pressure rinse — an annual visit typically stays ahead of regrowth.",
      },
      {
        q: "Do you work on short-term rental homes on tight turnarounds?",
        a: "Yes — we schedule Saratoga rental hosts around meet-week check-ins whenever we can. Tell us the arrival date on the quote.",
      },
      {
        q: "How much does house washing cost in Saratoga Springs?",
        a: "Most single-family Saratoga homes fall in the $399–$799 range. Downtown Victorians and larger North Broadway estates with detailed trim run higher — the labor and masking are more involved.",
      },
    ],
    meta: {
      title: "House Washing in Saratoga Springs, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Saratoga Springs, NY — Victorian-safe, track-season ready. Downtown, North Broadway, East Side & Wilton. Free on-site quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Kill moss and black streaks on Saratoga's canopy-shaded roofs.",
      },
      {
        name: "Window Cleaning",
        to: "/$service",
        slug: "window-cleaning",
        blurb: "Exterior windows crystal-clear for meet-season photos and open houses.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Drives, walks, and entertaining spaces cleaned before hosting.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Saratoga Springs, NY",
        to: "/roof-washing-saratoga-springs-ny",
        blurb: "Moss and algae, gone — the shade problem in Saratoga.",
      },
      {
        name: "Concrete Cleaning in Saratoga Springs, NY",
        to: "/concrete-cleaning-saratoga-springs-ny",
        blurb: "Guest-ready drives, walks, and patios before track season.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-saratoga-springs-ny",
    service: "Concrete Cleaning",
    city: "Saratoga Springs",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Saratoga Springs, NY · Surface-Cleaner Finish",
      headline: "Concrete & Driveway Cleaning in Saratoga Springs, NY",
      subhead:
        "The driveway and walkway are the first surfaces meet-season guests touch. We surface-clean Saratoga concrete edge-to-edge — no wand marks — and undo a winter's worth of salt and shade staining before your first party.",
    },
    intro: [
      "In Saratoga Springs, driveways and walkways do double duty. They're daily driveways for eight months of the year, and they're entertaining space from Memorial Day through Labor Day. Cars park at the curb because the driveway is full of guests. The walk from the sidewalk to the front porch is the first physical surface every arriving guest — or short-term rental check-in — actually steps on.",
      "Between winter salt, freeze/thaw cycles, and the tannin drop from Saratoga's mature tree canopy, that concrete takes a beating. Salt haze leaves a milky ring near the garage. Leaves and needles stain the walk in orange and black shadows the rain never touches. And someone with a rented pressure wand almost always makes it worse — 'tiger stripes' down the driveway that scream DIY.",
      "We clean Saratoga concrete with a commercial rotary surface cleaner — the same equipment kept on gas station aprons and high-traffic plazas. Even pressure across the whole surface. No zebra stripes. Then, because this is a heavy salt-and-shade market, we strongly recommend sealing: it blocks salt penetration, resists freeze/thaw spalling, and keeps the concrete guest-ready deeper into the season. Book by early June and the drive, walk, and any patio pavers are done before the meet.",
    ],
    localContext: {
      heading: "Why Saratoga Concrete Stains Fast",
      body:
        "Saratoga sits at the meeting point of heavy winter salting, mature tree canopy, and a summer entertaining calendar that puts every square foot of concrete on display. That combination stains concrete faster than most Capital Region markets — and gives owners a hard deadline to fix it.",
      bullets: [
        {
          title: "Winter Salt & Freeze/Thaw",
          desc: "Aggressive deicing plus dozens of freeze/thaw cycles push salt into unsealed concrete and pop the surface loose. Sealing is the single biggest fix.",
        },
        {
          title: "Tannin & Organic Staining",
          desc: "Mature canopy drops leaves, needles, sap, and berries onto walks and drives — leaving orange and black shadow stains a garden hose can't move.",
        },
        {
          title: "Shaded, Slow-Drying Walkways",
          desc: "East Side and North Broadway walks stay damp under the canopy. Algae builds a green film that gets slippery in wet weather.",
        },
        {
          title: "The Hosting & Track-Season Deadline",
          desc: "Guests, buyers, and rental check-ins arrive from late June through Labor Day. Drives, walks, and patios need to be finished before the first arrival, not the last.",
        },
      ],
    },
    neighborhoods: [
      "Downtown / Broadway",
      "North Broadway",
      "East Side",
      "Geyser Crest",
      "Wilton",
      "Greenfield",
      "Ballston Spa area",
    ],
    benefits: [
      {
        title: "Even Rotary Surface-Cleaner Finish",
        desc: "Uniform pressure edge-to-edge — no wand marks, no zebra stripes down the middle of the drive.",
      },
      {
        title: "Cuts Salt Haze & Tannin Shadows",
        desc: "Targeted pre-treatments handle Saratoga's specific mix: winter salt film plus canopy-tannin staining that plain water won't touch.",
      },
      {
        title: "Sealing For Saratoga Winters",
        desc: "The smartest post-clean upgrade in this climate — a penetrating sealer blocks salt, resists freeze/thaw, and helps the clean hold much longer.",
      },
      {
        title: "Guest-Ready Before Track Season",
        desc: "Book by early June and the drive, walk, and pavers are photograph-ready before the first meet-week arrival.",
      },
    ],
    process: [
      {
        title: "Stain-By-Stain Pre-Treat",
        desc: "Spot-treat oil drops, rust rings, tannin shadows, and salt haze before the main pass — each stain type gets its own chemistry.",
      },
      {
        title: "Commercial Rotary Surface-Clean",
        desc: "Full-width rotary head at even pressure. Finish is uniform corner to corner, garage apron to sidewalk to porch step.",
      },
      {
        title: "Rinse & Optional Sealing Visit",
        desc: "Final rinse today. If you're sealing, we return once the concrete has dried and apply a densifier or penetrating sealer built for Northeast winters.",
      },
    ],
    faqs: [
      {
        q: "Can you have my drive and walk ready for a meet-week arrival?",
        a: "Yes if you book early — late May or June is ideal. We schedule Saratoga hosts and rental owners around specific arrival dates whenever we can. Tell us the date on the quote.",
      },
      {
        q: "Do you clean paver walkways and patios too?",
        a: "Yes. Pavers are cleaned, re-sanded, and sealed as a separate service — we can quote a paver patio, a concrete apron, and the front walk on the same visit.",
      },
      {
        q: "Will you remove the orange and black shadow stains under my trees?",
        a: "Most of them. Tannin and organic staining respond well to the pre-treat plus rotary pass. Deep, years-old staining often lightens dramatically but may not vanish entirely — we set honest expectations before starting.",
      },
      {
        q: "Is sealing worth it in Saratoga?",
        a: "Usually yes. Between winter salt, freeze/thaw, and canopy tannin, a good penetrating sealer helps the clean hold much longer and slows further damage to the concrete beneath. On badly failing concrete we'll tell you plainly if sealing is the wrong call.",
      },
      {
        q: "Will pressure washing crack older Saratoga concrete?",
        a: "A properly used rotary surface cleaner won't — pressure is spread evenly across the head. It's DIY narrow wands held in one spot that gouge concrete and leave the 'tiger stripe' pattern that screams unprofessional.",
      },
      {
        q: "How much does driveway cleaning cost in Saratoga Springs?",
        a: "Most Saratoga driveways run $279–$599 for cleaning alone. Sealing is quoted separately by square footage. Long North Broadway drives and detailed downtown walkways run higher.",
      },
    ],
    meta: {
      title: "Concrete Cleaning in Saratoga Springs, NY | Capital Pro Pressure Washing",
      description:
        "Driveway & concrete cleaning in Saratoga Springs, NY — surface-cleaner finish, salt-haze removal, optional sealing. Guest-ready before track season.",
    },
    relatedServices: [
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore Saratoga paver patios and walkways — cleaning plus polymeric sanding and sealing.",
      },
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding cleaning with your driveway visit.",
      },
      {
        name: "Deck & Patio Cleaning",
        to: "/$service",
        slug: "deck-patio-cleaning",
        blurb: "Strip graying and mildew off Saratoga decks — prep for stain before hosting.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Saratoga Springs, NY",
        to: "/house-washing-saratoga-springs-ny",
        blurb: "Victorian- and trim-safe soft wash before track season.",
      },
      {
        name: "Roof Washing in Saratoga Springs, NY",
        to: "/roof-washing-saratoga-springs-ny",
        blurb: "Kill moss and algae on canopy-shaded Saratoga roofs.",
      },
    ],
  },
  {
    slug: "house-washing-troy-ny",
    service: "House Washing",
    city: "Troy",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Troy, NY · Soft Wash For Historic Brick",
      headline: "House Washing in Troy, NY",
      subhead:
        "Troy is a brick-and-brownstone city — 19th-century rowhouses, Washington Park townhouses, Pottery District walk-ups. High pressure destroys old lime mortar. We soft-wash brick and masonry at less-than-garden-hose pressure so the walls stay intact.",
    },
    intro: [
      "Troy is the most masonry-heavy city in the Capital Region. Walk Washington Park, the blocks around Russell Sage, or the streets of the Pottery District and you're surrounded by Victorian rowhouses, brownstones, and 19th-century brick buildings — much of it built when lime mortar, not modern Portland cement, was the standard. That's the thing most washing companies get wrong here: old lime mortar is soft, and a high-pressure wand pointed at a joint will blow it out in seconds.",
      "The damage is usually invisible from the sidewalk until the next hard rain, when water drives through the opened joint into the masonry wall behind. On a preserved rowhouse that repair runs into thousands of dollars — plus the historic-district paperwork if you're near Washington Park or downtown.",
      "Our Troy soft-wash approach is built for exactly this housing stock. Professional cleaning solutions do the work — not pressure. We soft-wash brick, brownstone, and painted masonry at lower-than-garden-hose PSI, mask around failing joints, and keep water off the wall rather than driving it in. Hudson River humidity feeds green algae and mildew on shaded sides; the treatment kills it at the root rather than just bleaching the color out.",
    ],
    localContext: {
      heading: "Built For Troy's Brick & Brownstone",
      body:
        "No two Troy homes ask for the exact same wash — Washington Park brownstone, Pottery District brick, Sycaway vinyl, and Lansingburgh clapboard all get their own detergent and rinse pressure. We calibrate to the actual surface rather than blasting everything the same way.",
      bullets: [
        {
          title: "Washington Park & Downtown Rowhouses",
          desc: "Preserved 19th-century brick with original lime mortar. We soft-wash at very low pressure and mask any failing joints — no water driven into masonry walls.",
        },
        {
          title: "Pottery District & Little Italy",
          desc: "Painted brick storefronts and walk-ups. Detergents matched to painted masonry so cleaning doesn't strip historic paint or expose brick underneath.",
        },
        {
          title: "South Troy & Lansingburgh",
          desc: "Older wood clapboard, aluminum, and vinyl mixed on tight lots. Careful drift control between adjacent homes and shared walls.",
        },
        {
          title: "Sycaway & Sycaway-Adjacent Homes",
          desc: "Larger postwar homes with vinyl and Hardie siding. Soft-wash reaches high peaks safely from the ground — no ladders scraping siding.",
        },
      ],
    },
    neighborhoods: [
      "Washington Park",
      "Pottery District",
      "Little Italy",
      "Sycaway",
      "Lansingburgh",
      "South Troy",
      "Downtown Troy",
    ],
    benefits: [
      {
        title: "Masonry-Safe Soft Wash",
        desc: "The right approach for Troy's lime mortar and historic brick — chemistry does the cleaning at hose pressure, so joints stay intact.",
      },
      {
        title: "Kills Hudson River Mildew",
        desc: "Riverfront humidity and shaded sides feed green algae on Troy walls. Our treatment targets the biology at the root rather than just fading the color.",
      },
      {
        title: "Surface-Specific Detergents",
        desc: "Brownstone, painted brick, vinyl, aluminum, and cedar each get their own mix rather than one generic soap that damages one to clean another.",
      },
      {
        title: "Careful On Tight Troy Lots",
        desc: "Rowhouses share walls and gardens. We use drift control and pre-rinse neighboring plantings so we don't create a problem next door.",
      },
    ],
    process: [
      {
        title: "Free Walkthrough Quote",
        desc: "We walk the property, note any failing mortar, cracked brick, or paint issues, and give a firm price — no vague ranges that change on the day.",
      },
      {
        title: "Mask, Pre-Treat & Soft-Wash",
        desc: "Pre-rinse plantings, mask failing joints and historic elements, apply detergent, let it dwell on shaded walls, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-detail around historic doors, stoops, and window casings. Walk the property with you before we leave — you approve the finish.",
      },
    ],
    faqs: [
      {
        q: "Is pressure washing safe on a Washington Park brownstone?",
        a: "No — that's exactly the mistake we help homeowners avoid. High pressure blows soft lime mortar out of the joint and drives water into the masonry wall behind. On Washington Park, downtown, and any 19th-century Troy home, we soft-wash exclusively at less pressure than a garden hose.",
      },
      {
        q: "Will your detergents strip painted brick or historic paint?",
        a: "No. We match detergent strength to the surface and pre-test in an inconspicuous spot on older or hand-painted homes. On painted brick we use gentler chemistry than we'd use on raw masonry.",
      },
      {
        q: "My rowhouse shares walls with the neighbors. Will your wash bother them?",
        a: "We plan every Troy rowhouse job around the shared walls, shared gutters, and tight lots. Drift control, pre-rinsing neighboring plantings, and keeping runoff on your property — not theirs — is part of the standard job.",
      },
      {
        q: "There's failing mortar on my house already. Can you still wash it?",
        a: "Yes, but carefully. We identify failing joints during the walkthrough, mask them entirely, and hand-detail the surrounding brick. We won't clean anywhere the wash would drive water into a wall — you'll be told plainly what should be repointed first.",
      },
      {
        q: "How fast will the green come back on the shaded side facing the Hudson?",
        a: "Because we treat the biology and not just the color, results generally last considerably longer than a straight pressure rinse. Exact timing depends on shade and tree cover — an annual wash typically stays ahead of regrowth on shaded riverfront-adjacent walls.",
      },
      {
        q: "How much does house washing cost in Troy?",
        a: "Most single-family Troy homes fall in the $349–$749 range. Washington Park brownstones and downtown rowhouses with detailed masonry run higher because the masking and hand-detail work is more involved.",
      },
    ],
    meta: {
      title: "House Washing in Troy, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Troy, NY — safe for brick, brownstone, and lime mortar. Washington Park, Pottery District, Sycaway & Lansingburgh. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Shingle-safe soft wash for Troy's older rooflines.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear rowhouse gutters and remove black tiger-stripe staining from the face.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Undo winter salt damage on Troy stoops, walkways, and brick paths.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Troy, NY",
        to: "/roof-washing-troy-ny",
        blurb: "Kill black algae streaks on Troy's older, shaded rooflines.",
      },
      {
        name: "Concrete Cleaning in Troy, NY",
        to: "/concrete-cleaning-troy-ny",
        blurb: "Salt-worn stoops, brick walks, and driveways cleaned safely.",
      },
    ],
  },
  {
    slug: "roof-washing-troy-ny",
    service: "Roof Washing",
    city: "Troy",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Troy, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Troy, NY",
      subhead:
        "Older Troy rooflines take a beating from Hudson River humidity and shaded, narrow streets. The black streaks on your shingles are living algae — we kill it at the root with a soft wash, not high pressure.",
    },
    intro: [
      "Troy's roofs age faster than most. Between Hudson River humidity, the steep narrow streets that keep sunlight off north-facing slopes for much of the day, and a housing stock where architectural shingles installed 15–25 years ago are still doing the work, the conditions for gloeocapsa magma — the black-streak algae — are close to ideal.",
      "The tell is the same on nearly every block from Washington Park up through Lansingburgh: long dark ribbons running down the north slope of otherwise fine roofs, feeding on the limestone filler in the shingles. Left alone, it drives granule loss, which drives premature roof failure.",
      "The wrong fix is a pressure washer. High pressure will strip the streaks temporarily and take shingle granules straight into your gutters — and void most manufacturer warranties in the process. Our ARMA-approved soft wash uses professional cleaning solutions applied from ladders and the ground. Algae dies on contact. Nobody walks your brittle shingles. And the rooflines stay clean.",
    ],
    localContext: {
      heading: "Why Troy Roofs Streak So Fast",
      body:
        "Troy's geography makes it a heavier algae market than the surrounding towns — a river valley humid enough to keep shingles wet longer, plus steep streets and older housing stock that stay in the shade.",
      bullets: [
        {
          title: "Hudson River Humidity",
          desc: "Riverfront damp air keeps shingles wet long after storms — ideal algae conditions on any north-facing slope in the city.",
        },
        {
          title: "Steep, Narrow, Shaded Streets",
          desc: "Rowhouse streets around Washington Park and downtown block direct sun. Roofs don't fully dry between rains, which accelerates streaking.",
        },
        {
          title: "Older Architectural Shingles",
          desc: "Plenty of Troy roofs still carry shingles installed 15–25 years ago and never washed. Prime real estate for algae if never treated.",
        },
        {
          title: "Slate & Metal On Historic Roofs",
          desc: "Washington Park townhouses and downtown buildings often have slate, tin, or standing-seam metal — each requires its own soft-wash approach, never pressure.",
        },
      ],
    },
    neighborhoods: [
      "Washington Park",
      "Pottery District",
      "Little Italy",
      "Sycaway",
      "Lansingburgh",
      "South Troy",
      "Downtown Troy",
    ],
    benefits: [
      {
        title: "Protects Aging Troy Roofs",
        desc: "Killing the algae stops granule loss — the biggest single driver of premature shingle failure on Troy's older architectural roofs.",
      },
      {
        title: "Slate, Tin & Metal Safe",
        desc: "Washington Park and downtown historic roofs get their own soft-wash formulation and technique — never pressure, never walked when brittle.",
      },
      {
        title: "Warranty-Safe Application",
        desc: "ARMA-approved. No high pressure, no granules in the gutters, no shingle-warranty language undone.",
      },
      {
        title: "Rowhouse-Aware Setup",
        desc: "On shared-wall Troy rowhouses we plan drift, runoff, and gutter flush so the neighbor's roof and gardens aren't affected.",
      },
    ],
    process: [
      {
        title: "Free Ground & Ladder Assessment",
        desc: "We photograph the roof from every side, check flashing, drip edge, and shingle condition, and quote firm — no bait-and-switch ranges.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied at low pressure from ladders and the ground. On most Troy homes nobody walks the roof at all.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse, then flush gutters and downspouts — especially important on rowhouse gutters shared with the next-door roof.",
      },
    ],
    faqs: [
      {
        q: "Can you soft-wash a slate roof on a Washington Park townhouse?",
        a: "Yes. Slate is safe with the correct soft-wash mix at very low pressure, applied from ladders and never by walking the tile. It's the right way to clean historic Troy roofs.",
      },
      {
        q: "My roof is nearly 20 years old. Is washing still worth it?",
        a: "Usually yes. If the shingles are intact but algae-stained, killing the biology helps slow further granule loss on the shingles you have. If they're already curling or bald in spots we'll say so plainly on the free assessment.",
      },
      {
        q: "The rowhouse next door has visible algae too. Should we book together?",
        a: "It usually saves both households money and produces a better result — algae spreads block-to-block on connected rooflines. Group discounts are available when neighbors book adjacent rowhouses on the same visit.",
      },
      {
        q: "How is soft-wash different from what a pressure washing crew does?",
        a: "High pressure blasts the color off the surface temporarily and typically voids the shingle warranty. Soft-wash uses cleaning chemistry — not pressure — to kill the algae itself, so it doesn't rebound the same way and no granules end up in the gutters.",
      },
      {
        q: "Do you protect the gardens and street trees on tight Troy lots?",
        a: "Yes. We pre-rinse plantings, tarp sensitive beds, and re-rinse after. On rowhouse blocks we treat neighboring gardens with the same care as yours.",
      },
      {
        q: "How much does roof washing cost in Troy?",
        a: "Most Troy roofs quote in the $499–$1,299 range depending on pitch, height, square footage, and shingle vs slate vs metal. Historic downtown and Washington Park roofs with complex flashing run higher.",
      },
    ],
    meta: {
      title: "Roof Washing in Troy, NY | Capital Pro Pressure Washing",
      description:
        "Shingle, slate, and metal-safe soft-wash roof cleaning in Troy, NY. Kills Hudson-Valley algae streaks. ARMA-approved. Free on-site quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding and brick cleaning with your roof visit.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush granules and leaf debris out of Troy rowhouse gutters after a roof wash.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "For aging Troy shingles — restore flexibility and help extend usable roof life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Troy, NY",
        to: "/house-washing-troy-ny",
        blurb: "Masonry-safe soft wash for Troy brick and brownstone.",
      },
      {
        name: "Concrete Cleaning in Troy, NY",
        to: "/concrete-cleaning-troy-ny",
        blurb: "Restore Troy stoops, brick walks, and drives after winter.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-troy-ny",
    service: "Concrete Cleaning",
    city: "Troy",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Troy, NY · Surface-Cleaner Finish",
      headline: "Concrete, Brick & Stoop Cleaning in Troy, NY",
      subhead:
        "Troy stoops, brick walkways, and driveways take the full winter — road salt, plow slush, and freeze/thaw all season long. We clean concrete AND historic brick masonry safely, then seal to keep salt out next winter.",
    },
    intro: [
      "In Troy, the surfaces underfoot are a mix you don't see in most of the Capital Region. It's not just poured concrete drives — it's brick sidewalks in front of Washington Park, bluestone stoops on 19th-century rowhouses, brick walkways in the Pottery District, and older poured concrete aprons in South Troy and Lansingburgh. Every one of these takes a beating every winter.",
      "Road salt gets tracked and plowed into unsealed concrete and shot straight into brick joints. Freeze/thaw cycles work water into hairline cracks, freeze it, and pop the surface loose. By spring the sidewalk out front looks tired, the stoop is streaked white with salt haze, and someone with a rented pressure wand almost always makes it worse — blown-out mortar between brick pavers or 'tiger stripes' down the driveway.",
      "We clean Troy concrete with a commercial rotary surface cleaner for even, no-wand-mark results, and we clean historic brick and stoops at reduced pressure with masonry-safe chemistry so lime mortar joints stay intact. Sealing after cleaning is especially valuable here — Troy winters are hard and older masonry can't take too many more seasons of salt penetration.",
    ],
    localContext: {
      heading: "Why Troy Masonry & Concrete Age Fast",
      body:
        "The Capital Region is a punishing concrete climate, and Troy's mix of historic brick, older concrete, and heavy winter salting accelerates every failure mode masonry has.",
      bullets: [
        {
          title: "Aggressive Winter Salt",
          desc: "Rensselaer County salts hard, and Troy's stoops and brick walks get the worst of it. That salt attacks unsealed masonry every single winter.",
        },
        {
          title: "Freeze/Thaw Cycles",
          desc: "Water works into brick joints and hairline cracks in concrete, freezes, expands, and pops the surface loose. Sealing is the biggest single defense.",
        },
        {
          title: "Historic Brick Walkways & Stoops",
          desc: "Washington Park, downtown, and Pottery District have brick and bluestone that pre-dates modern mortar. It has to be cleaned at low pressure with masonry-safe chemistry — never wand-blasted.",
        },
        {
          title: "Older Poured Concrete",
          desc: "South Troy, Lansingburgh, and Sycaway have poured drives and walks that are decades old. A proper surface-clean usually brings them back further than owners expect.",
        },
      ],
    },
    neighborhoods: [
      "Washington Park",
      "Pottery District",
      "Little Italy",
      "Sycaway",
      "Lansingburgh",
      "South Troy",
      "Downtown Troy",
    ],
    benefits: [
      {
        title: "Safe On Historic Brick & Mortar",
        desc: "Reduced pressure and masonry-safe chemistry on brick walkways, stoops, and pavers — no blown-out lime mortar joints.",
      },
      {
        title: "Even Rotary Surface-Cleaner Finish On Concrete",
        desc: "Uniform pressure across the whole driveway or apron — no wand marks, no zebra stripes, no missed strips down the middle.",
      },
      {
        title: "Cuts Salt Haze & Winter Film",
        desc: "Specialty pre-treatments break the milky white brine film that rain and a garden hose can't move off stoops and drives.",
      },
      {
        title: "Sealing Built For Troy Winters",
        desc: "The single smartest post-clean upgrade — a good sealer blocks salt penetration, resists freeze/thaw, and helps the clean hold much longer.",
      },
    ],
    process: [
      {
        title: "Surface-By-Surface Assessment",
        desc: "We map the property — brick walk, bluestone stoop, poured drive, concrete apron — and set a different pressure and chemistry for each.",
      },
      {
        title: "Pre-Treat, Clean & Rinse",
        desc: "Pre-treat oil, rust, salt haze, and tannin. Rotary surface-clean on poured concrete. Lower-pressure clean with masonry chemistry on brick and stoops. Final rinse.",
      },
      {
        title: "Optional Sealing Visit",
        desc: "Once fully dry, we return and apply a densifier or penetrating sealer built for Northeast winters — the single biggest longevity move for Troy masonry.",
      },
    ],
    faqs: [
      {
        q: "Can you clean historic brick walkways and stoops without blowing out the mortar?",
        a: "Yes — that's exactly what most Troy jobs look like. We drop pressure and switch to masonry-safe chemistry for brick, bluestone, and any older mortar joints. Wand-style blasting is never used on historic surfaces.",
      },
      {
        q: "Is sealing worth it in Troy?",
        a: "Especially in Troy, yes. Between aggressive salting, freeze/thaw, and older masonry that can't take another decade of salt penetration, a good penetrating sealer helps the clean hold much longer and slows further damage.",
      },
      {
        q: "Will pressure washing damage my Washington Park stoop?",
        a: "It can, if it's done the wrong way — narrow high-pressure wands held in one spot gouge bluestone and blow out mortar joints. A rotary surface cleaner spreads pressure evenly and, at the right setting, is safe on bluestone stoops.",
      },
      {
        q: "Can you remove salt haze and rust rings from my brick walkway?",
        a: "Most of them. Salt haze responds well to pre-treatment plus a low-pressure pass. Deep, years-old rust and organic staining often lightens dramatically but may not vanish entirely — we set honest expectations before starting.",
      },
      {
        q: "Do you clean brick garden walls and retaining walls too?",
        a: "Yes. Same masonry-safe approach as walkways and stoops. We can quote a walkway, a stoop, a driveway, and a garden wall on the same visit.",
      },
      {
        q: "How much does concrete and stoop cleaning cost in Troy?",
        a: "Most Troy drives run $249–$549 for cleaning alone. Historic brick walkways, stoops, and multiple masonry surfaces are quoted separately based on square footage and complexity. Sealing is quoted separately.",
      },
    ],
    meta: {
      title: "Concrete & Brick Cleaning in Troy, NY | Capital Pro Pressure Washing",
      description:
        "Driveway, brick walkway, and stoop cleaning in Troy, NY — masonry-safe, salt-haze removal, optional sealing. Historic-brick specialists. Free quotes.",
    },
    relatedServices: [
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore Troy brick and paver walks — cleaning plus polymeric sanding and sealing.",
      },
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash brick and siding cleaning with your stoops and drive.",
      },
      {
        name: "Deck & Patio Cleaning",
        to: "/$service",
        slug: "deck-patio-cleaning",
        blurb: "Strip graying and mildew off Troy decks and patios — prep for stain.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Troy, NY",
        to: "/house-washing-troy-ny",
        blurb: "Masonry-safe soft wash for Troy brick and brownstone.",
      },
      {
        name: "Roof Washing in Troy, NY",
        to: "/roof-washing-troy-ny",
        blurb: "Kill algae streaks on Troy's older, shaded rooflines.",
      },
    ],
  },
];

export function getCityService(slug: string) {
  return CITY_SERVICES.find((s) => s.slug === slug);
}