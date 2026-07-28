import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";

export type CityContent = {
  slug: string; // URL slug e.g. pressure-washing-albany-ny
  city: string;
  region: string;
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
  whyLocal: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  meta: { title: string; description: string };
};

export const CITIES: CityContent[] = [
  {
    slug: "pressure-washing-albany-ny",
    city: "Albany",
    region: "Capital Region, NY",
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Albany, NY · Soft-Wash Specialists",
      headline: "Pressure Washing in Albany, NY",
      subhead:
        "Hudson River humidity, dense tree canopy in Pine Hills and Buckingham Pond, and long shoulder seasons grow mildew fast on Albany homes. We soft-wash siding, roofs, concrete, gutters, and more — killing the biology at the root so it stays gone.",
    },
    intro: [
      "Albany homes take a beating you don't see until it's too late. Hudson River humidity and dense tree cover through Pine Hills, Buckingham Pond, and Delmar create the exact conditions mildew and green algae love — dark, damp, and slow to dry.",
      "By the time you notice the green streaks on the north side of the house, the black staining under the gutters, or the salt haze on the driveway, it has already crept into the seams and pores of the surface. High pressure blasts it off temporarily. Two months later, it's back.",
      "Our Albany soft-wash system uses professional biocides at low pressure to kill mildew, algae, and cobwebs at the root — so the results last 3–5× longer than a pressure-only wash. We're local, we know the housing stock, and we've been cleaning Albany homes and driveways for over 10 years.",
    ],
    localContext: {
      heading: "Built for Albany Homes",
      body:
        "From 1900s Center Square brownstones to Colonie ranches and Delmar Colonials, we've cleaned every style of home Albany has. Each surface — brick, stucco, aluminum, painted cedar, vinyl, asphalt shingle — gets its own detergent mix and rinse pressure. No one-size-fits-all wash.",
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
    whyLocal: [
      {
        title: "10+ Years Cleaning Albany Homes",
        desc: "Same local crew from Whitehall Road to New Scotland Ave. Not a franchise, not a rotating subcontractor — the same team every visit.",
      },
      {
        title: "Soft-Wash Kills Algae at the Root",
        desc: "The green streaks on your north wall are living algae fed by Hudson Valley humidity. Our biocides kill it — not just bleach it — so it doesn't come back in eight weeks.",
      },
      {
        title: "Safe for Historic Albany Homes",
        desc: "Center Square and Mansion District homes have painted brick, historic wood, and delicate mortar. We soft-wash at pressure lower than a garden hose.",
      },
      {
        title: "Perfect Before You List",
        desc: "Albany real estate moves fast. A cleaned exterior is one of the highest-ROI upgrades before an open house.",
      },
    ],
    faqs: [
      {
        q: "What areas of Albany do you serve?",
        a: "All of it — Center Square, Pine Hills, Buckingham Pond, the Mansion District, Delmar, Slingerlands, Loudonville, Colonie, Latham, Guilderland, Bethlehem, and everywhere in between.",
      },
      {
        q: "How much does pressure washing cost in Albany?",
        a: "Depends on the service and property size. Most single-family house washes fall in the $349–$649 range; driveways $199–$399; roof soft-wash $499–$1,299. We give firm quotes — never a range that changes on the day of service.",
      },
      {
        q: "Will you damage my siding, roof, or landscaping?",
        a: "No. We use soft-wash pressure (lower than a garden hose) on siding and roofs and pre-rinse landscaping before, during, and after. Perennials, hostas, and hydrangeas — all fine.",
      },
      {
        q: "How often should my Albany home be cleaned?",
        a: "House washing: once a year. Roof washing: every 2–4 years depending on shade. Concrete cleaning & sealing: every 2–3 years. Homes with heavy tree cover in Pine Hills benefit from annual visits to stay ahead of the mildew.",
      },
      {
        q: "Are you licensed and insured in Albany?",
        a: "Yes — fully insured with workers comp and liability coverage. Certificate of insurance available on request before any job.",
      },
      {
        q: "Do you offer free quotes in Albany?",
        a: "Yes. Same-day callback. We measure, inspect the surface condition, and give a firm price — usually within 24 hours of your call. No obligation.",
      },
    ],
    meta: {
      title: "Pressure Washing in Albany, NY | Capital Pro",
      description:
        "Soft-wash pressure washing in Albany, NY — house, roof, concrete, decks & more. Center Square, Pine Hills, Delmar & Colonie. 10+ years local. Free quotes.",
    },
  },
  {
    slug: "pressure-washing-schenectady-ny",
    city: "Schenectady",
    region: "Capital Region, NY",
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Schenectady, NY · Preservation-Grade Soft Wash",
      headline: "Pressure Washing in Schenectady, NY",
      subhead:
        "The Stockade District has stood for 350 years — long enough that the wrong pressure washer can undo generations of preservation in an afternoon. We soft-wash Schenectady's historic brick, clapboard, roofs, and drives the way they should be cleaned: gently, without touching a mortar joint.",
    },
    intro: [
      "Schenectady isn't like the newer Capital Region suburbs. Walk the Stockade District and you're looking at some of the oldest continuously occupied wood-frame and brick homes in America — some pre-Revolution. Turn a corner into GE Realty Plot and you're surrounded by grand early-1900s architecture built when Charles Steinmetz ran the electrical world from Union Street.",
      "That housing stock is exactly why so many pressure washing calls in Schenectady go wrong. High-pressure wands split old wood clapboard, drive water behind original siding, and blast crumbling lime mortar right out of Stockade brick joints. What looked like 'just dirt' becomes a five-figure repair.",
      "Our Schenectady soft-wash approach was built for this — house washing, roof cleaning, concrete, and gutter work all calibrated to the actual surface. Same reason preservation-minded homeowners in the Stockade and GE Plot call us instead of anyone with a trailer and a pressure hose.",
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
          desc: "Grand early-1900s homes with painted brick, stone accents, slate roofs, and ornate wood trim. Delicate detergents, careful masking around leaded windows.",
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
    whyLocal: [
      {
        title: "Preservation-Grade Soft Wash",
        desc: "The right approach for Stockade wood and old mortar — cleaning chemistry does the work at hose pressure, so nothing gets blown out or split.",
      },
      {
        title: "Handles Mohawk River Mildew",
        desc: "Valley humidity feeds green algae and black roof streaks. Our biocides target the biology at the root rather than just bleaching the surface.",
      },
      {
        title: "Slate & Metal Roof Safe",
        desc: "Historic slate on Stockade homes and standing-seam metal on Realty Plot roofs both get their own soft-wash formulation — never pressure.",
      },
      {
        title: "10+ Years On Schenectady Homes",
        desc: "Same local crew that has cleaned homes from Front Street through GE Plot and out into Niskayuna. Not a franchise.",
      },
    ],
    faqs: [
      {
        q: "Is pressure washing safe on Stockade District homes?",
        a: "Only soft-wash is. High pressure splits historic clapboard and pulls sand-lime mortar out of old brick joints. On Stockade homes we soft-wash exclusively, at less pressure than a garden hose.",
      },
      {
        q: "Will your detergents strip old paint or lime mortar?",
        a: "No. We match detergent strength to the surface and pre-test in an inconspicuous area on older or hand-painted homes. On failing mortar joints we mask entirely and hand-detail the surrounding brick.",
      },
      {
        q: "Do you clean slate roofs and leaded windows on GE Realty Plot homes?",
        a: "Yes — regularly. Leaded and stained glass gets masked; slate roofs are only ever soft-washed (never walked or pressure-cleaned). We treat GE Plot exteriors as preservation work.",
      },
      {
        q: "How much does pressure washing cost in Schenectady?",
        a: "Depends on the service and property. House washes run $349–$699; concrete drives $199–$449; roof soft-wash $499–$1,299. Historic Stockade and Realty Plot homes with detail work run higher because the labor and masking are more involved.",
      },
      {
        q: "Do you service Niskayuna, Rotterdam, Scotia, and Glenville?",
        a: "Yes — plus Mont Pleasant, Union Street, and out toward Alplaus. If you're inside the Schenectady/Niskayuna/Rotterdam service radius, we cover you.",
      },
      {
        q: "Are you insured?",
        a: "Yes — full workers comp and liability. Especially important on historic Schenectady homes. Certificate available before any job.",
      },
    ],
    meta: {
      title: "Pressure Washing in Schenectady, NY | Capital Pro",
      description:
        "Soft-wash pressure washing in Schenectady, NY — house, roof, concrete & more. Stockade District, GE Realty Plot, Niskayuna & Rotterdam. Preservation-safe. Free quotes.",
    },
  },
  {
    slug: "pressure-washing-saratoga-springs-ny",
    city: "Saratoga Springs",
    region: "Capital Region, NY",
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Saratoga Springs, NY · Track-Season Ready",
      headline: "Pressure Washing in Saratoga Springs, NY",
      subhead:
        "Victorian downtown, grand North Broadway, shaded East Side homes — we soft-wash Saratoga siding, roofs, decks, and driveways so painted trim and original woodwork stay intact and the exterior is guest-ready by track season.",
    },
    intro: [
      "There's a specific look Saratoga Springs homes are supposed to have: painted Victorian trim in three colors, mature landscaping, a wraparound porch, and siding that reads as freshly maintained. That look does not survive high pressure. Painted spindles crack, old putty gets driven out of window sashes, and ornate wood detailing splinters — the exact features that make North Broadway and downtown houses worth what they're worth.",
      "The tree canopy that makes these streets beautiful keeps north walls shaded and slow to dry. Green algae and mildew build fast in those conditions — and Saratoga is one of the few Capital Region markets where actual moss grows on roofs, not just algae streaks. By June, homes that looked fine over winter are showing streaks along shaded siding, gutters, and porch ceilings.",
      "There's a hard deadline on this in Saratoga: track season. From late July through Labor Day, homeowners host guests, list short-term rentals for the meet, and throw backyard parties two or three nights a week. Our soft-wash approach uses professional cleaning solutions at less than garden-hose pressure — safe for Victorian trim, historic paint, and delicate landscaping — and kills mildew at the root. Book by early June and you're on the schedule before the meet.",
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
          desc: "Heavy canopy = mildew heaven on north-facing walls and moss on shaded roofs. Extended dwell time and re-rinse — the biology doesn't come back a month later.",
        },
        {
          title: "Geyser Crest, Wilton & Greenfield",
          desc: "Larger newer homes on bigger lots — vinyl, Hardie, and painted cedar. Our soft-wash reaches high gables and steep roof pitches safely from the ground.",
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
    whyLocal: [
      {
        title: "Track-Season & Rental-Ready",
        desc: "Book by early June and the exterior is photograph-ready before guests arrive for the meet — a real deadline for hosts and short-term rentals.",
      },
      {
        title: "Victorian- & Trim-Safe Soft Wash",
        desc: "Painted spindles, ornate brackets, and old wood sashes stay intact. Cleaning does the work at hose pressure — no splitting, no water intrusion.",
      },
      {
        title: "Kills Moss AND Algae At The Root",
        desc: "Saratoga's dense canopy is one of the few markets in the region where full moss grows on roofs. Our mix kills it — pressure only pretends to.",
      },
      {
        title: "Careful Around Mature Landscaping",
        desc: "North Broadway and East Side plantings aren't replaceable. We pre-rinse beds, apply with drift control, and re-rinse — no scorched hostas or hydrangeas.",
      },
    ],
    faqs: [
      {
        q: "How far in advance of track season should I book?",
        a: "By late May or early June. July and August fill fast because so many owners host or rent during the meet. Booking early puts you in the clean-before-guests window rather than the after-they-leave window.",
      },
      {
        q: "Can you clean the painted Victorian trim on my downtown home?",
        a: "Yes — that's the housing stock we clean most often in Saratoga. Soft-wash at less-than-garden-hose pressure removes mildew and grime without stripping historic paint or splintering ornate spindles and brackets.",
      },
      {
        q: "Do you actually remove moss from Saratoga roofs?",
        a: "Yes. Saratoga's canopy makes it one of the few Capital Region markets where full moss growth is common. Our soft-wash mix kills moss at the root; over the following weeks it dries out and weathers off the shingle rather than being scraped or blasted off.",
      },
      {
        q: "Will the treatment harm my mature trees and gardens?",
        a: "No. We pre-rinse plantings before the wash, apply with drift control, and re-rinse afterward. The mature landscaping in Saratoga is part of what makes the homes valuable — we treat it accordingly.",
      },
      {
        q: "Do you work on short-term rental homes on tight turnarounds?",
        a: "Yes — we schedule Saratoga rental hosts around meet-week check-ins whenever we can. Tell us the arrival date on the quote.",
      },
      {
        q: "How much does pressure washing cost in Saratoga Springs?",
        a: "House washes run $399–$799; concrete/paver cleaning $249–$549; roof soft-wash $549–$1,499. Downtown Victorians and North Broadway estates with detailed trim run higher because the labor and masking are more involved.",
      },
    ],
    meta: {
      title: "Pressure Washing in Saratoga Springs, NY | Capital Pro",
      description:
        "Soft-wash pressure washing in Saratoga Springs, NY — Victorian-safe, track-season ready. Downtown, North Broadway, East Side & Wilton. Free on-site quotes.",
    },
  },
  {
    slug: "pressure-washing-troy-ny",
    city: "Troy",
    region: "Capital Region, NY",
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Troy, NY · Masonry-Safe Soft Wash",
      headline: "Pressure Washing in Troy, NY",
      subhead:
        "Washington Park brownstones, Pottery District brick, downtown rowhouses, Lansingburgh clapboard — Troy's housing stock is unlike anything else in the Capital Region. We soft-wash it the way it should be cleaned: gently, without blowing out lime mortar or historic paint.",
    },
    intro: [
      "Troy is a masonry city. Walk Washington Park and you're surrounded by 19th-century brownstones and brick rowhouses. Head into the Pottery District or Little Italy and it's painted brick storefronts and walk-ups. South Troy, Lansingburgh, and Sycaway mix older wood clapboard, aluminum, and vinyl on tight lots. Every one of those surfaces asks for a different wash.",
      "The wrong crew treats all of them the same and blows soft lime mortar right out of Washington Park joints, drives water behind clapboard on Congress Street, and leaves 'tiger stripes' down the driveway. Once the mortar is gone, it's a five-figure repointing job — a cost no one budgets for after a $400 driveway cleaning.",
      "Our Troy soft-wash approach is calibrated to the surface: chemistry does the work at hose pressure on brick, brownstone, and clapboard; a commercial rotary surface cleaner gives an even, no-wand-mark finish on concrete drives and stoops; and every roof gets an ARMA-approved application from ladders and the ground. Same local crew, over 10 years cleaning Troy homes.",
    ],
    localContext: {
      heading: "Built For Troy's Housing Stock",
      body:
        "From 19th-century brownstones and painted brick to postwar suburban Sycaway ranches, no two Troy homes ask for the same wash. We calibrate detergent strength and rinse pressure to the actual surface.",
      bullets: [
        {
          title: "Washington Park Brownstones & Rowhouses",
          desc: "Historic sandstone and brick with soft lime mortar joints. Soft-wash only at less-than-garden-hose pressure. We mask failing joints and hand-detail around them.",
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
          title: "Sycaway & Suburban Troy",
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
    whyLocal: [
      {
        title: "Masonry-Safe Soft Wash",
        desc: "The right approach for Troy's lime mortar and historic brick — chemistry does the cleaning at hose pressure, so joints stay intact.",
      },
      {
        title: "Kills Hudson River Mildew",
        desc: "Riverfront humidity and shaded sides feed green algae on Troy walls and black streaks on roofs. Our treatment targets the biology at the root.",
      },
      {
        title: "Rowhouse-Aware Setup",
        desc: "On shared-wall Troy rowhouses we plan drift, runoff, and gutter flush so the neighbor's roof and gardens aren't affected.",
      },
      {
        title: "Salt-Damage Recovery On Stoops & Walks",
        desc: "Rensselaer County salts hard. We clean AND seal historic brick walks, bluestone stoops, and concrete drives so next winter does less damage.",
      },
    ],
    faqs: [
      {
        q: "Is pressure washing safe on a Washington Park brownstone?",
        a: "Only soft-wash is. High pressure blows soft lime mortar out of the joint and drives water into the masonry wall behind. On Washington Park, downtown, and any 19th-century Troy home, we soft-wash exclusively at less pressure than a garden hose.",
      },
      {
        q: "Will your detergents strip painted brick or historic paint?",
        a: "No. We match detergent strength to the surface and pre-test in an inconspicuous spot on older or hand-painted homes. On painted brick we use gentler chemistry than we'd use on raw masonry.",
      },
      {
        q: "My rowhouse shares walls with the neighbors. Will your wash bother them?",
        a: "We plan every Troy rowhouse job around shared walls, shared gutters, and tight lots. Drift control, pre-rinsing neighboring plantings, and keeping runoff on your property — not theirs — is part of the standard job.",
      },
      {
        q: "There's failing mortar on my house already. Can you still wash it?",
        a: "Yes, but carefully. We identify failing joints during the walkthrough, mask them entirely, and hand-detail the surrounding brick. We won't clean anywhere the wash would drive water into a wall — you'll be told plainly what should be repointed first.",
      },
      {
        q: "Do you clean historic brick walkways and bluestone stoops?",
        a: "Yes — with masonry-safe chemistry at reduced pressure. We never wand-blast old brick joints or bluestone. After cleaning we recommend sealing to keep road salt out next winter.",
      },
      {
        q: "How much does pressure washing cost in Troy?",
        a: "House washes run $349–$749; concrete/brick walk cleaning $199–$499; roof soft-wash $499–$1,299. Washington Park brownstones and downtown rowhouses with detailed masonry run higher because the masking and hand-detail work is more involved.",
      },
    ],
    meta: {
      title: "Pressure Washing in Troy, NY | Capital Pro",
      description:
        "Soft-wash pressure washing in Troy, NY — safe for brick, brownstone, and lime mortar. Washington Park, Pottery District, Sycaway & Lansingburgh. Free quotes.",
    },
  },
];

export function getCity(slug: string): CityContent | undefined {
  return CITIES.find((c) => c.slug === slug);
}