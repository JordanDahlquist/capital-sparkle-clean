import {
  Home,
  CloudRain,
  Layers,
} from "lucide-react";
import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";
import roofWashingHero from "../assets/service-heroes/service-roof-washing-custom.jpg.asset.json";
import concreteCleaningHero from "../assets/service-heroes/service-concrete-cleaning-sealing.png.asset.json";
import type { CityServiceContent } from "./city-services";

export const CITY_SERVICES_NISKAYUNA_BALLSTON_SPA: CityServiceContent[] = [
  {
    slug: "house-washing-niskayuna-ny",
    service: "House Washing",
    city: "Niskayuna",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Niskayuna, NY · Soft Wash Specialists",
      headline: "House Washing in Niskayuna, NY",
      subhead:
        "River-valley fog off the Mohawk keeps Niskayuna's mid-century ranches and GE Realty Plot homes damp for hours after sunrise. Our soft-wash clears mildew and pollen film without touching original brick or trim.",
    },
    intro: [
      "Niskayuna sits low against the Mohawk River, and that geography matters more than most homeowners realize. The bike path corridor along the river throws off a heavy morning fog that rolls up into Rosendale and Van Antwerp before it burns off — and in the meantime, it's soaking into siding, soffits, and shaded brick walls all over town.",
      "Add in the mature pine cover common around Stanford Heights and the GE Realty Plot edge, and you get a steady drip of sap, needles, and pollen settling on rooflines and clapboard year-round. Combined with the humidity, it turns into a sticky film that grows algae fast, especially on the north and river-facing walls of the mid-century ranches that make up so much of this neighborhood's housing stock.",
      "We soft-wash Niskayuna homes with the same low-pressure, biocide-based process regardless of whether you've got a 1958 brick-and-clapboard ranch on Balltown Road or a newer build near Aqueduct — killing the mildew and algae at the root instead of just blasting the color off. Ten-plus years serving the Capital Region means we know which Niskayuna streets need extra dwell time before we even pull up.",
    ],
    localContext: {
      heading: "Built for Niskayuna Houses",
      body:
        "Niskayuna's housing stock runs from GE-era brick-and-clapboard mixes to postwar ranches and split-levels, many shaded by decades-old pines. Each material and each yard's tree cover changes how we approach the wash.",
      bullets: [
        {
          title: "GE Realty Plot & Rosendale",
          desc: "Brick-and-clapboard combinations from the GE boom years need careful detergent selection so we don't strip original paint or drive water behind old trim.",
        },
        {
          title: "Stanford Heights & Van Antwerp",
          desc: "Heavy pine canopy drops sap and needles year-round. We treat shaded walls and soffits with extended dwell time to break down the sticky residue.",
        },
        {
          title: "Balltown Road corridor",
          desc: "Mid-century ranches and split-levels with wide rooflines. Soft-wash reaches every peak from the ground — no ladders resting on your siding.",
        },
        {
          title: "Aqueduct & the Mohawk River bike path corridor",
          desc: "River fog keeps these homes damp longer each morning. Algae grows fastest here, so these blocks get priority scheduling in spring and fall.",
        },
      ],
    },
    neighborhoods: [
      "GE Realty Plot",
      "Rosendale",
      "Van Antwerp",
      "Aqueduct",
      "Stanford Heights",
      "Balltown Road corridor",
      "Niskayuna Co-op",
      "Craig",
      "Blatnick Park area",
      "Niska-Isle",
      "Rosendale Hills",
      "Union Street corridor",
    ],
    benefits: [
      {
        title: "Clears River-Fog Mildew at the Root",
        desc: "Mohawk River moisture keeps north walls damp long after the rest of the block dries. Our biocide treatment kills the mildew instead of temporarily bleaching it.",
      },
      {
        title: "Safe for GE-Era Brick & Trim",
        desc: "Many Rosendale and GE Realty Plot homes have original brick and wood trim from the 1940s–50s. We soft-wash below garden-hose pressure to protect it.",
      },
      {
        title: "Breaks Down Pine Sap & Needle Residue",
        desc: "Stanford Heights and Van Antwerp's mature pine cover leaves a sticky film most pressure washers can't touch. Our detergents are formulated to cut through it.",
      },
      {
        title: "10+ Years Local, Veteran Owned",
        desc: "We've washed homes across Niskayuna's oldest and newest blocks alike. Same crew every visit, fully insured, no subcontractors.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Niskayuna",
        desc: "We inspect siding material, tree cover, and shade exposure, then give you a firm price — usually within 24 hours.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "Cover landscaping, apply eco-safe detergent, let it break down mildew and sap film, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-scrub entryways, soffits, and porch columns, then walk the property with you before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Niskayuna?",
        a: "Most Niskayuna homes fall in the $349–$649 range, depending on square footage, siding material, and tree cover. We give firm on-site quotes.",
      },
      {
        q: "Will the soft-wash damage my brick or original trim?",
        a: "No. We use pressure lower than a garden hose and select detergents specifically for older brick-and-clapboard combinations common in GE Realty Plot and Rosendale.",
      },
      {
        q: "Do you handle heavy pine sap on siding?",
        a: "Yes — Stanford Heights and Van Antwerp homes with mature pine cover get extended dwell time to break down sap and needle residue before rinsing.",
      },
      {
        q: "Do you service my Niskayuna neighborhood?",
        a: "Yes — GE Realty Plot, Rosendale, Van Antwerp, Aqueduct, Stanford Heights, the Balltown Road corridor, Niska-Isle, and everywhere in between.",
      },
      {
        q: "How often should I wash my Niskayuna home?",
        a: "Once a year is ideal, especially for homes near the river fog corridor or under heavy pine cover where mildew and sap build up faster.",
      },
      {
        q: "Can you clean before we list or after we buy?",
        a: "Absolutely — a soft-washed exterior is one of the highest-ROI moves before listing a Niskayuna home, and a great first step after closing.",
      },
    ],
    meta: {
      title: "House Washing in Niskayuna, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Niskayuna, NY — Rosendale, Van Antwerp, Stanford Heights & more. Kills mildew and sap film at the root. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Kill black-streak algae on your Niskayuna roof without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear pine needles and debris that clog Niskayuna gutters every fall.",
      },
      {
        name: "Concrete Cleaning & Sealing",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Even, streak-free driveway cleaning for wide Niskayuna concrete drives.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Niskayuna, NY",
        to: "/roof-washing-niskayuna-ny",
        blurb: "Shingle-safe soft-wash for Niskayuna rooflines.",
      },
      {
        name: "Concrete Cleaning in Niskayuna, NY",
        to: "/concrete-cleaning-niskayuna-ny",
        blurb: "Driveways and walkways restored to an even, streak-free finish.",
      },
    ],
  },
  {
    slug: "roof-washing-niskayuna-ny",
    service: "Roof Washing",
    city: "Niskayuna",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Niskayuna, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Niskayuna, NY",
      subhead:
        "Black streaks creeping across roofs near the Mohawk River bike path and Stanford Heights aren't dirt — it's algae feeding on your shingles. We kill it with a shingle-safe soft wash, not high pressure.",
    },
    intro: [
      "Drive along Balltown Road or through the tree-lined streets of Rosendale and you'll spot it: north-facing roof slopes streaked black while the rest of the shingle looks fine. That's gloeocapsa magma, a living algae that feeds on limestone filler in asphalt shingles — and Niskayuna's river-valley climate is exactly what it wants.",
      "Fog rolling off the Mohawk River corridor keeps rooflines wet well past sunrise, and mature pine cover around Stanford Heights and Van Antwerp shades entire slopes from ever fully drying out. The result is algae growth that starts on the shaded side and spreads faster than most homeowners expect.",
      "High pressure will knock the streaks loose, but it also strips granules and can void your shingle warranty — a bad trade for a roof that's supposed to last 20+ years. Our ARMA-approved soft wash kills the algae on contact from the ground or a ladder, no walking on brittle shingles, and no pressure damage. Just a clean roofline that holds up.",
    ],
    localContext: {
      heading: "Why Niskayuna Roofs Streak So Fast",
      body:
        "Niskayuna sits directly in the Mohawk River's humidity corridor, and its mature tree canopy across Stanford Heights, Van Antwerp, and the GE Realty Plot edge compounds the problem. That combination creates ideal algae conditions on shaded slopes.",
      bullets: [
        {
          title: "Mohawk River Fog",
          desc: "Morning fog off the bike path corridor keeps shingles damp long after neighboring towns have dried out.",
        },
        {
          title: "Mature Pine & Hardwood Canopy",
          desc: "Stanford Heights and Van Antwerp streets are heavily shaded, slowing drying time and accelerating algae growth on north slopes.",
        },
        {
          title: "Pine Needle & Sap Buildup",
          desc: "Needles collect in valleys and against ridge caps, trapping moisture against the shingle surface.",
        },
        {
          title: "Postwar & Mid-Century Roof Ages",
          desc: "Many Niskayuna homes have architectural shingles from the last 10–20 years — prime real estate for algae once dirt and pollen give it a foothold.",
        },
      ],
    },
    neighborhoods: [
      "GE Realty Plot",
      "Rosendale",
      "Van Antwerp",
      "Aqueduct",
      "Stanford Heights",
      "Balltown Road corridor",
      "Niskayuna Co-op",
      "Craig",
      "Niska-Isle",
      "Rosendale Hills",
      "Union Street corridor",
      "Blatnick Park area",
    ],
    benefits: [
      {
        title: "Protects Your Roof's Lifespan",
        desc: "Killing algae stops granule loss, the leading cause of premature shingle failure in river-valley humidity.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "ARMA-approved soft wash means no high pressure, no walking on wet shingles, and no voided manufacturer warranty.",
      },
      {
        title: "Clears Pine Debris From Valleys",
        desc: "We flush needles and sap buildup from roof valleys and ridge lines that trap moisture against shaded Niskayuna rooftops.",
      },
      {
        title: "Instant Curb Appeal",
        desc: "A streak-free roofline reads as a newer roof to buyers and neighbors — a strong upgrade before listing a Niskayuna home.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We check shingle condition, flashing, and drainage around valleys before quoting — an honest read on your roof's health.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied from the ground or ladder, never walking on wet, brittle shingles.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse followed by a gutter and downspout check, especially important where pine needles collect.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Niskayuna?",
        a: "Most Niskayuna roofs run $499–$1,199 depending on pitch, height, and square footage. We quote firm, on-site.",
      },
      {
        q: "Will pressure washing damage my roof?",
        a: "Yes — that's why we don't use it. High pressure voids most shingle warranties and blasts granules loose. We soft-wash exclusively.",
      },
      {
        q: "Why does my north-facing slope streak worse?",
        a: "River fog and tree shade near Stanford Heights and Van Antwerp keep north slopes damp longer, giving algae more time to establish.",
      },
      {
        q: "Do you clear pine needles from roof valleys?",
        a: "Yes, as part of the rinse process we flush needles and debris from valleys and gutters that trap moisture.",
      },
      {
        q: "Do you service my Niskayuna neighborhood?",
        a: "Yes — GE Realty Plot, Rosendale, Van Antwerp, Aqueduct, Stanford Heights, Balltown Road, and every neighborhood in between.",
      },
      {
        q: "Is soft-wash safe for metal or cedar roofs?",
        a: "Yes. We adjust the mix and technique for metal, cedar shake, and asphalt shingle roofs separately.",
      },
    ],
    meta: {
      title: "Roof Washing in Niskayuna, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Niskayuna, NY. Kills black-streak algae without high pressure. ARMA-approved. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash your Niskayuna siding while we're on the roof — package pricing available.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush pine needles and granules after a roof wash to protect your fascia.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "For older Niskayuna roofs — restore shingle flexibility and extend usable life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Niskayuna, NY",
        to: "/house-washing-niskayuna-ny",
        blurb: "Full-house soft wash for Niskayuna homes.",
      },
      {
        name: "Concrete Cleaning in Niskayuna, NY",
        to: "/concrete-cleaning-niskayuna-ny",
        blurb: "Restore wide Niskayuna driveways and walkways after winter.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-niskayuna-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Niskayuna",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Niskayuna, NY · Surface-Cleaner Finish",
      headline: "Concrete Cleaning & Sealing in Niskayuna, NY",
      subhead:
        "Wide concrete driveways and walkways across Niskayuna's mid-century ranches take a beating from pine sap, road salt, and river-valley freeze/thaw cycles. We restore an even, streak-free finish and seal it against next winter.",
    },
    intro: [
      "Niskayuna's ranch and split-level homes along Balltown Road and through Van Antwerp were mostly built with wide, generous concrete driveways and walkways — great for parking, but a lot of surface area for winter grime, pine sap, and salt to settle into.",
      "Add mature pine trees dropping sap and needles across Stanford Heights and the GE Realty Plot edge, and you get dark blotchy staining that plain rain never lifts. Combine that with the freeze/thaw cycles typical of the Mohawk River valley, and unsealed concrete starts to pit and spall within a few winters.",
      "We clean Niskayuna concrete with a commercial rotary surface cleaner — even pressure across the entire slab, no wand marks or streaking left behind. And because sap and salt are constant threats here, we strongly recommend sealing right after cleaning: it blocks staining and salt penetration, keeping the surface look fresh for years instead of months.",
    ],
    localContext: {
      heading: "Niskayuna Concrete Takes a Beating",
      body:
        "Between pine sap, road salt, and the Mohawk River valley's freeze/thaw swings, Niskayuna's wide concrete drives and walkways stain and deteriorate faster than most homeowners expect. Cleaning and sealing together is the most effective way to protect them.",
      bullets: [
        {
          title: "Pine Sap & Needle Staining",
          desc: "Mature pines around Stanford Heights and Van Antwerp drop sap that bakes into concrete pores, leaving dark blotches plain rinsing won't remove.",
        },
        {
          title: "Road Salt Penetration",
          desc: "Winter deicing salt drives into unsealed concrete near Balltown Road and Aqueduct — sealing after cleaning locks it out next season.",
        },
        {
          title: "River Valley Freeze/Thaw",
          desc: "Moisture trapped in hairline cracks freezes and expands repeatedly through Niskayuna winters, popping surface concrete loose over time.",
        },
        {
          title: "Wide Ranch-Era Driveways",
          desc: "Many mid-century homes have generously sized slabs — more surface area means more consistent, even results with commercial equipment.",
        },
      ],
    },
    neighborhoods: [
      "GE Realty Plot",
      "Rosendale",
      "Van Antwerp",
      "Aqueduct",
      "Stanford Heights",
      "Balltown Road corridor",
      "Niskayuna Co-op",
      "Craig",
      "Niska-Isle",
      "Rosendale Hills",
      "Union Street corridor",
      "Blatnick Park area",
    ],
    benefits: [
      {
        title: "Cuts Through Pine Sap Stains",
        desc: "Our commercial detergents are formulated to break down baked-in sap and needle residue common under Niskayuna's mature tree canopy.",
      },
      {
        title: "No Wand Marks, Even Finish",
        desc: "Commercial rotary surface cleaning covers wide ranch-era driveways edge-to-edge with consistent pressure — no streaking or zebra stripes.",
      },
      {
        title: "Sealing Blocks Salt & Freeze Damage",
        desc: "Sealing after cleaning keeps deicing salt and moisture out of the concrete, protecting against the river valley's harsh freeze/thaw cycles.",
      },
      {
        title: "10+ Years Local, Fully Insured",
        desc: "We know Niskayuna's driveway layouts and tree cover firsthand — the same crew shows up every time.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote",
        desc: "We assess slab size, staining type, and sap/sealant history before giving a firm price.",
      },
      {
        title: "Commercial Surface Cleaning",
        desc: "Rotary surface cleaner lifts sap, salt haze, and grime evenly across the full driveway or walkway.",
      },
      {
        title: "Optional Sealing",
        desc: "We apply a penetrating sealer to lock out salt and moisture ahead of the next Niskayuna winter.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Niskayuna?",
        a: "Most driveways run $249–$599 depending on size and staining severity. Sealing is quoted separately and priced by square footage.",
      },
      {
        q: "Can you remove pine sap stains?",
        a: "Yes — our detergents are formulated specifically to break down sap and needle residue common under Niskayuna's mature pines.",
      },
      {
        q: "Do I need to seal after cleaning?",
        a: "We strongly recommend it. Sealing blocks salt penetration and slows freeze/thaw damage, extending the clean look significantly longer.",
      },
      {
        q: "Will you leave streaks or wand marks?",
        a: "No. We use commercial rotary surface cleaners for even, edge-to-edge pressure — no zebra striping like a handheld wand leaves.",
      },
      {
        q: "Do you service my Niskayuna neighborhood?",
        a: "Yes — GE Realty Plot, Rosendale, Van Antwerp, Aqueduct, Stanford Heights, Balltown Road, and everywhere in between.",
      },
      {
        q: "How often should I clean and seal my driveway?",
        a: "Cleaning annually and resealing every 2–3 years keeps most Niskayuna driveways looking new and protected through winter.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Niskayuna, NY | Capital Pro Pressure Washing",
      description:
        "Concrete driveway and walkway cleaning & sealing in Niskayuna, NY. Removes pine sap and salt staining, streak-free finish. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash siding while we're cleaning your Niskayuna driveway.",
      },
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Kill algae streaks on shaded Niskayuna rooflines.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "For Niskayuna patios and walkways built from pavers instead of poured concrete.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Niskayuna, NY",
        to: "/house-washing-niskayuna-ny",
        blurb: "Full-house soft wash for Niskayuna homes.",
      },
      {
        name: "Roof Washing in Niskayuna, NY",
        to: "/roof-washing-niskayuna-ny",
        blurb: "Shingle-safe soft-wash for shaded Niskayuna rooflines.",
      },
    ],
  },
  {
    slug: "house-washing-ballston-spa-ny",
    service: "House Washing",
    city: "Ballston Spa",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Ballston Spa, NY · Soft Wash Specialists",
      headline: "House Washing in Ballston Spa, NY",
      subhead:
        "From 19th-century clapboard homes on Front Street to newer builds near Malta and Luther Forest, Ballston Spa's mix of historic village houses and modern subdivisions each need a different soft-wash approach.",
    },
    intro: [
      "Ballston Spa's Front Street is lined with 19th-century wood clapboard homes and wraparound porches that give the village its charm — and its cleaning challenges. Old wood siding, tight village lots, and decades of paint layers mean these homes need a gentler touch than a modern build near Luther Forest.",
      "Meanwhile, the Kayaderosseras Creek running through the village keeps humidity high downtown, and tree-lined streets throughout Milton and Burnt Hills shade siding long enough for mildew to take hold. Out toward Malta's newer subdivisions, vinyl and Hardie board siding face a different problem — pollen and road dust from Route 67 and Route 9 building up into a dull haze.",
      "We soft-wash Ballston Spa homes with the same care whether it's a historic Front Street Victorian or a 2015 build near Luther Forest — low pressure, targeted detergents, and enough dwell time to kill mildew at the root instead of just knocking the color off. Ten-plus years serving the Capital Region means we've learned exactly how much pressure old village clapboard can take, and how little vinyl needs.",
    ],
    localContext: {
      heading: "Built for Ballston Spa Houses",
      body:
        "Ballston Spa's housing runs from tight-lot 19th-century village homes with original wood siding to newer Malta and Luther Forest subdivisions with vinyl and Hardie board. Each gets a different detergent and pressure setting.",
      bullets: [
        {
          title: "Front Street & Historic Village Core",
          desc: "Original wood clapboard and porch columns need gentle detergents and lower dwell pressure to protect old paint layers.",
        },
        {
          title: "Milton & Kayaderosseras Creek corridor",
          desc: "Creek-side humidity keeps siding damp longer. We prioritize these streets for mildew treatment in spring and fall.",
        },
        {
          title: "Burnt Hills & Ballston Lake",
          desc: "Lake-effect moisture and tree cover create ideal algae conditions on north-facing walls — we treat these first on every route.",
        },
        {
          title: "Malta & Luther Forest subdivisions",
          desc: "Newer vinyl and Hardie siding wash quickly and evenly with our low-pressure system — great prep before painting or listing.",
        },
      ],
    },
    neighborhoods: [
      "Front Street Historic District",
      "Milton",
      "Malta",
      "Ballston Lake",
      "Burnt Hills",
      "Luther Forest",
      "Kayaderosseras Creek corridor",
      "West High Street",
      "Bath Street",
      "Charlton Street",
      "Rowland Street",
      "Village Center",
    ],
    benefits: [
      {
        title: "Gentle on Historic Village Siding",
        desc: "Front Street's 19th-century wood clapboard and original trim need soft-wash pressure lower than a garden hose to protect old paint.",
      },
      {
        title: "Kills Creekside Mildew at the Root",
        desc: "Kayaderosseras Creek humidity keeps north walls damp longer near the village core. Our biocide treatment kills mildew instead of just bleaching it.",
      },
      {
        title: "Fast, Even Results on Newer Malta Builds",
        desc: "Vinyl and Hardie siding in Luther Forest and Malta subdivisions wash quickly and evenly, restoring a like-new look.",
      },
      {
        title: "10+ Years Local, Family Run",
        desc: "We know the difference between a Front Street Victorian and a Luther Forest colonial before we even pull up the truck.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Ballston Spa",
        desc: "We inspect siding age, material, and shade exposure, then give a firm price — usually within 24 hours.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "Cover porches, gardens, and brick sidewalks, apply eco-safe detergent, let it break down mildew, then rinse gently top-to-bottom.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-scrub porch columns, window sills, and entryways, then walk the property with you before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Ballston Spa?",
        a: "Most homes fall in the $349–$649 range. Larger historic Front Street homes and Victorian porches can run higher due to detail work.",
      },
      {
        q: "Will you damage my historic home's wood siding?",
        a: "No. We soft-wash at pressure lower than a garden hose, specifically calibrated for original wood clapboard and old paint layers common on Front Street.",
      },
      {
        q: "Do you service Malta and Luther Forest?",
        a: "Yes — we cover the full village and surrounding area, including Malta, Luther Forest, Milton, Ballston Lake, and Burnt Hills.",
      },
      {
        q: "How long does a Ballston Spa house wash take?",
        a: "Most village homes take 2–3 hours; larger properties in Malta or Burnt Hills can take a full day.",
      },
      {
        q: "How often should I wash my Ballston Spa home?",
        a: "Once a year is ideal, especially for homes near the Kayaderosseras Creek corridor or under heavy shade where mildew builds quickly.",
      },
      {
        q: "Can you clean brick sidewalks and stone steps too?",
        a: "We focus on house exteriors, but we're careful to protect adjacent historic brick sidewalks and stone steps during every wash.",
      },
    ],
    meta: {
      title: "House Washing in Ballston Spa, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Ballston Spa, NY — Front Street, Milton, Malta & more. Gentle on historic siding, kills mildew at the root. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Kill black-streak algae on Ballston Spa roofs without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear leaves and restore gutter faces on historic village homes.",
      },
      {
        name: "Concrete Cleaning & Sealing",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Restore tight village walkways and stone steps to an even finish.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Ballston Spa, NY",
        to: "/roof-washing-ballston-spa-ny",
        blurb: "Shingle-safe soft-wash for Ballston Spa rooflines.",
      },
      {
        name: "Concrete Cleaning in Ballston Spa, NY",
        to: "/concrete-cleaning-ballston-spa-ny",
        blurb: "Village walkways and stone steps cleaned without damage.",
      },
    ],
  },
  {
    slug: "roof-washing-ballston-spa-ny",
    service: "Roof Washing",
    city: "Ballston Spa",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Ballston Spa, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Ballston Spa, NY",
      subhead:
        "Black streaks on Front Street and Milton rooflines are gloeocapsa magma — algae feeding on your shingles. We kill it at the root with a shingle-safe soft wash, never high pressure.",
    },
    intro: [
      "Walk down Front Street or through the tree-shaded blocks near Bath Street and you'll notice the same pattern on older homes: dark streaking creeping down the north-facing roof slope. That's gloeocapsa magma, a living algae that feeds on the limestone filler in asphalt shingles — and it thrives in exactly the conditions the Kayaderosseras Creek corridor provides.",
      "The creek keeps humidity elevated through the village core, and mature shade trees around Milton and the historic district block sunlight from ever fully drying certain roof slopes. Out toward Ballston Lake and Burnt Hills, lake-effect moisture adds another layer of dampness that keeps algae growth going strong.",
      "High pressure will strip the streaks, but it also strips granules and can void a shingle warranty — a bad trade on a roof meant to last two decades. Our ARMA-approved soft wash kills the algae on contact from the ground or a ladder, with no walking on brittle village-home shingles and no pressure damage to older roof decking.",
    ],
    localContext: {
      heading: "Why Ballston Spa Roofs Streak So Fast",
      body:
        "Ballston Spa sits along the Kayaderosseras Creek, with Ballston Lake and Burnt Hills adding lake-effect moisture nearby. Combined with mature tree cover throughout the historic village, these conditions create fast algae growth on shaded roof slopes.",
      bullets: [
        {
          title: "Kayaderosseras Creek Humidity",
          desc: "The creek running through the village core keeps rooflines damp well past sunrise, especially near Front Street and Milton.",
        },
        {
          title: "Ballston Lake Moisture",
          desc: "Lake-effect dampness extends the algae growing season on homes near the water and throughout Burnt Hills.",
        },
        {
          title: "Historic Village Tree Canopy",
          desc: "Mature shade trees over tight village lots block sunlight from drying north-facing slopes, accelerating streak formation.",
        },
        {
          title: "Older Village Roof Decking",
          desc: "Many historic Front Street homes have roofs replaced over original decking that shouldn't be walked on — soft-wash keeps crews off the surface entirely.",
        },
      ],
    },
    neighborhoods: [
      "Front Street Historic District",
      "Milton",
      "Malta",
      "Ballston Lake",
      "Burnt Hills",
      "Luther Forest",
      "Kayaderosseras Creek corridor",
      "West High Street",
      "Bath Street",
      "Charlton Street",
      "Rowland Street",
      "Village Center",
    ],
    benefits: [
      {
        title: "Protects Your Roof's Lifespan",
        desc: "Killing algae stops granule loss, the leading cause of premature shingle failure in creek-side humidity.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "ARMA-approved soft wash means no high pressure, no walking on wet shingles, and no voided manufacturer warranty.",
      },
      {
        title: "Careful With Historic Roof Decking",
        desc: "Older Front Street homes get extra care — soft-wash means our crew never has to walk on original or aging roof structures.",
      },
      {
        title: "Instant Curb Appeal for Village Homes",
        desc: "A streak-free roofline is a standout upgrade on Ballston Spa's historic blocks, where curb appeal carries real weight.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We check shingle condition, flashing, and drainage before quoting — an honest read on your roof's health.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied from the ground or ladder, never walking on wet, brittle shingles.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse followed by a gutter and downspout check to clear debris from tree-lined village streets.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Ballston Spa?",
        a: "Most roofs run $499–$1,199 depending on pitch, height, and square footage. We quote firm, on-site.",
      },
      {
        q: "Will pressure washing damage my roof?",
        a: "Yes — that's why we don't use it. High pressure voids most shingle warranties and can damage older village roof decking. We soft-wash exclusively.",
      },
      {
        q: "Why do Front Street homes streak more than newer Malta builds?",
        a: "Tree cover and creek humidity in the historic village core keep older roofs damp longer than the more open, newer subdivisions near Malta.",
      },
      {
        q: "Do you walk on historic roofs?",
        a: "Only when absolutely necessary, and always with fall protection. Most Ballston Spa roofs are cleaned entirely from ladders and the ground.",
      },
      {
        q: "Do you service my Ballston Spa neighborhood?",
        a: "Yes — Front Street, Milton, Malta, Ballston Lake, Burnt Hills, Luther Forest, and everywhere in between.",
      },
      {
        q: "Is soft-wash safe for metal or cedar roofs?",
        a: "Yes. We adjust the mix and technique for metal, cedar shake, and asphalt shingle roofs separately.",
      },
    ],
    meta: {
      title: "Roof Washing in Ballston Spa, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Ballston Spa, NY. Kills black-streak algae without high pressure. ARMA-approved. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash your Ballston Spa siding while we're on the roof — package pricing available.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush granules and leaves after a roof wash to protect your fascia.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "For older Front Street roofs — restore shingle flexibility and extend usable life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Ballston Spa, NY",
        to: "/house-washing-ballston-spa-ny",
        blurb: "Full-house soft wash for Ballston Spa homes.",
      },
      {
        name: "Concrete Cleaning in Ballston Spa, NY",
        to: "/concrete-cleaning-ballston-spa-ny",
        blurb: "Restore village walkways and stone steps after winter.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-ballston-spa-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Ballston Spa",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Ballston Spa, NY · Surface-Cleaner Finish",
      headline: "Concrete Cleaning & Sealing in Ballston Spa, NY",
      subhead:
        "From historic brick sidewalks on Front Street to newer driveways in Malta and Luther Forest, Ballston Spa's mix of surfaces need careful, even cleaning — and sealing to survive Saratoga County winters.",
    },
    intro: [
      "Ballston Spa's village core is full of historic brick sidewalks, stone steps, and tight concrete walkways squeezed between 19th-century homes on Front Street and Bath Street. These surfaces have character, but decades of grime, moss, and salt exposure leave them dark and slick if they're never cleaned.",
      "Out toward Malta and Luther Forest, the newer subdivisions have wider poured-concrete driveways that face a different problem: road salt from Route 67 and Route 9, plus the same freeze/thaw cycles that hit the rest of Saratoga County hard every winter. Unsealed, these driveways pit and discolor within a few seasons.",
      "We clean Ballston Spa concrete and historic surfaces with a commercial rotary surface cleaner for even, streak-free results — careful around old brick and stone to avoid dislodging mortar or pavers. And because winter salt is unavoidable here, we recommend sealing right after cleaning to lock moisture and salt out before the next freeze.",
    ],
    localContext: {
      heading: "Ballston Spa Concrete & Historic Surfaces Take a Beating",
      body:
        "Between the village's historic brick sidewalks and stone steps, and the newer driveways out toward Malta, Ballston Spa properties face a wide range of surface-cleaning challenges — all worsened by Saratoga County's harsh winters.",
      bullets: [
        {
          title: "Historic Brick Sidewalks & Stone Steps",
          desc: "Front Street and the village core have original brick and stone that need gentler pressure to avoid loosening mortar or joint sand.",
        },
        {
          title: "Road Salt Damage",
          desc: "Saratoga County uses aggressive deicers on Route 67 and Route 9 — salt drives into unsealed concrete near Malta and Luther Forest every winter.",
        },
        {
          title: "Freeze/Thaw Cycles",
          desc: "Water works into hairline cracks in both village walkways and Malta driveways, freezing and expanding through the winter months.",
        },
        {
          title: "Moss & Shade on Tight Village Lots",
          desc: "Narrow lots near Front Street stay shaded longer, letting moss and algae take hold on walkways and steps.",
        },
      ],
    },
    neighborhoods: [
      "Front Street Historic District",
      "Milton",
      "Malta",
      "Ballston Lake",
      "Burnt Hills",
      "Luther Forest",
      "Kayaderosseras Creek corridor",
      "West High Street",
      "Bath Street",
      "Charlton Street",
      "Rowland Street",
      "Village Center",
    ],
    benefits: [
      {
        title: "Careful Around Historic Brick & Stone",
        desc: "We adjust pressure and technique specifically for Front Street's original brick sidewalks and stone steps to protect mortar and joints.",
      },
      {
        title: "No Wand Marks on Malta Driveways",
        desc: "Commercial rotary surface cleaning delivers even, streak-free results across newer, wider Luther Forest and Malta driveways.",
      },
      {
        title: "Sealing Blocks Salt & Freeze Damage",
        desc: "Sealing after cleaning keeps deicing salt and moisture out, protecting against Saratoga County's harsh freeze/thaw cycles.",
      },
      {
        title: "10+ Years Local, Fully Insured",
        desc: "We know the difference between a village brick sidewalk and a Malta poured driveway before we even start the job.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote",
        desc: "We assess surface type — brick, stone, or poured concrete — plus staining and shade exposure before giving a firm price.",
      },
      {
        title: "Commercial Surface Cleaning",
        desc: "Rotary surface cleaner lifts grime, moss, and salt haze evenly, with hand care around historic brick and stone.",
      },
      {
        title: "Optional Sealing",
        desc: "We apply a penetrating sealer to lock out salt and moisture ahead of the next Saratoga County winter.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Ballston Spa?",
        a: "Most driveways and walkways run $249–$599 depending on size and surface type. Historic brick and stone are quoted separately due to the care required.",
      },
      {
        q: "Can you clean historic brick sidewalks without damaging them?",
        a: "Yes — we use lower pressure and careful technique around Front Street's original brick and stone to avoid dislodging mortar or joint sand.",
      },
      {
        q: "Do I need to seal after cleaning?",
        a: "We strongly recommend it, especially for Malta and Luther Forest driveways exposed to road salt — sealing extends the clean look significantly longer.",
      },
      {
        q: "Will you leave streaks or wand marks?",
        a: "No. We use commercial rotary surface cleaners for even, edge-to-edge pressure — no zebra striping like a handheld wand leaves.",
      },
      {
        q: "Do you service my Ballston Spa neighborhood?",
        a: "Yes — Front Street, Milton, Malta, Ballston Lake, Burnt Hills, Luther Forest, and everywhere in between.",
      },
      {
        q: "How often should I clean and seal my driveway or walkway?",
        a: "Cleaning annually and resealing every 2–3 years keeps most Ballston Spa surfaces looking new and protected through winter.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Ballston Spa, NY | Capital Pro Pressure Washing",
      description:
        "Concrete, brick sidewalk, and driveway cleaning & sealing in Ballston Spa, NY. Careful around historic surfaces, streak-free finish. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash siding while we're cleaning your Ballston Spa walkway.",
      },
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Kill algae streaks on shaded Ballston Spa rooflines.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "For patios and walkways built from pavers near Malta and Luther Forest.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Ballston Spa, NY",
        to: "/house-washing-ballston-spa-ny",
        blurb: "Full-house soft wash for Ballston Spa homes.",
      },
      {
        name: "Roof Washing in Ballston Spa, NY",
        to: "/roof-washing-ballston-spa-ny",
        blurb: "Shingle-safe soft-wash for shaded village rooflines.",
      },
    ],
  },
];
