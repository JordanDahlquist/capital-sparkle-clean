import {
  Home,
  CloudRain,
  Layers,
} from "lucide-react";
import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";
import roofWashingHero from "../assets/service-heroes/service-roof-washing-custom.jpg.asset.json";
import concreteCleaningHero from "../assets/service-heroes/service-concrete-cleaning-sealing.png.asset.json";
import type { CityServiceContent } from "./city-services";

export const CITY_SERVICES_CLIFTON_RENSSELAER: CityServiceContent[] = [
  {
    slug: "house-washing-clifton-park-ny",
    service: "House Washing",
    city: "Clifton Park",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Clifton Park, NY · Soft Wash Specialists",
      headline: "House Washing in Clifton Park, NY",
      subhead:
        "Wooded lots off Clifton Country Road and Vischer Ferry Road trap moisture against vinyl and Hardie siding. Our soft-wash lifts the green and black film without a single pressure mark.",
    },
    intro: [
      "Clifton Park grew fast — subdivision after subdivision carved out of dense woods from the 1980s through the 2000s, from the Sunningdale and Country Knolls neighborhoods to the newer builds off Route 146. That growth left most homes surrounded by mature trees that block sun and hold humidity against the siding, especially on the shaded rear elevations that back up to greenbelts and drainage buffers required by the town's subdivision rules.",
      "The result is predictable: vinyl and Hardie siding that looks fine from the street but is streaked green and black along the north and east walls, under soffits, and around foundation planting beds. Add in the Mohawk River bluffs near Vischer Ferry and Rexford, where fog settles into the low-lying yards most mornings, and you've got ideal algae and mildew conditions that no amount of garden-hose rinsing will fix.",
      "We soft-wash Clifton Park homes with the same low-pressure, biocide-based process regardless of whether you're in a tight HOA cul-de-sac in Ballston Lake or an older ranch near Jonesville — killing growth at the root so it doesn't reappear in a few weeks like a pressure-only rinse would.",
    ],
    localContext: {
      heading: "Built for Clifton Park's Wooded Subdivisions",
      body:
        "From large 1990s colonials with vinyl siding in Country Knolls to newer Hardie-board builds near Ushers Road, most Clifton Park homes share the same problem: too many trees, not enough sun exposure on at least one side of the house. We adjust dwell time and detergent strength based on which walls actually get direct light.",
      bullets: [
        {
          title: "Country Knolls & Sunningdale",
          desc: "Dense tree cover keeps siding damp for days after rain. We hit shaded rear elevations hardest and re-check before we leave.",
        },
        {
          title: "Vischer Ferry & Rexford River Bluffs",
          desc: "Morning fog off the Mohawk River keeps ground-level siding and foundation walls perpetually damp — a magnet for algae.",
        },
        {
          title: "Route 146 & Clifton Country Road Corridor",
          desc: "Newer construction with vinyl and Hardie siding still needs annual soft-washing to keep warranty-grade finish looking new.",
        },
        {
          title: "HOA Neighborhoods & Ballston Lake",
          desc: "Strict community standards mean curb appeal matters. We wash gently enough to protect landscaping HOAs require you to maintain.",
        },
      ],
    },
    neighborhoods: [
      "Country Knolls",
      "Sunningdale",
      "Vischer Ferry",
      "Jonesville",
      "Rexford",
      "Halfmoon",
      "Ballston Lake",
      "Clifton Park Center",
      "Van Vranken",
      "Grooms Corners",
      "Moe Road area",
      "Route 146 corridor",
    ],
    benefits: [
      {
        title: "Kills Algae Hiding Under Tree Canopy",
        desc: "Clifton Park's wooded lots keep siding shaded and damp far longer than open developments. Our biocide treatment kills growth at the root, not just the surface.",
      },
      {
        title: "Gentle on Newer Vinyl & Hardie Siding",
        desc: "Most Clifton Park homes are 20 years old or newer with vinyl or fiber-cement siding. Soft-wash pressure protects the finish and keeps warranties intact.",
      },
      {
        title: "HOA-Friendly Curb Appeal",
        desc: "Many Clifton Park neighborhoods have community standards. A clean, streak-free exterior keeps you compliant and keeps your block looking sharp.",
      },
      {
        title: "10+ Years Local, Veteran Owned & Family Run",
        desc: "We know the difference between a Country Knolls colonial and a Ballston Lake ranch — and we price and treat each one accordingly.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Clifton Park",
        desc: "We walk your property, check tree coverage and siding type, and give you a firm price — usually within a day of your call.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "Landscaping is pre-rinsed and protected, biocide is applied to kill mildew and algae, then we rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "We hand-scrub soffits, window sills, and garage doors, then walk the exterior with you before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Clifton Park?",
        a: "Most Clifton Park single-family homes fall in the $349–$649 range depending on square footage and tree coverage. We give firm quotes, not estimates that change on service day.",
      },
      {
        q: "Will pressure washing damage my HOA landscaping?",
        a: "No. We use soft-wash pressure — lower than a garden hose — and pre-rinse all landscaping and foundation plantings before, during, and after the wash.",
      },
      {
        q: "Do you service my Clifton Park neighborhood?",
        a: "Yes — Country Knolls, Sunningdale, Vischer Ferry, Jonesville, Rexford, Halfmoon, Ballston Lake, and everywhere along the Route 146 corridor.",
      },
      {
        q: "Why does my north wall stay green even though the rest of the house looks clean?",
        a: "Tree canopy and shade keep that wall damp longer than the rest of the house, which is exactly where algae and mildew take hold first. We treat those walls with extra dwell time.",
      },
      {
        q: "How often should I wash my Clifton Park home?",
        a: "Once a year is ideal, especially for homes with heavy tree cover near Vischer Ferry or Country Knolls where shade keeps siding damp longer.",
      },
      {
        q: "Do you clean stamped concrete patios too?",
        a: "Yes — many Clifton Park backyards have stamped concrete patios. Ask about bundling house washing with concrete cleaning and sealing.",
      },
    ],
    meta: {
      title: "House Washing in Clifton Park, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Clifton Park, NY — Country Knolls, Vischer Ferry, Ballston Lake & more. Kills algae at the root. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Remove black streaks from your Clifton Park roof without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear leaves from wooded lots and remove black streaking on gutter faces.",
      },
      {
        name: "Concrete Cleaning & Sealing",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Even, streak-free driveway and stamped patio cleaning.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Clifton Park, NY",
        to: "/roof-washing-clifton-park-ny",
        blurb: "Shingle-safe soft-wash for Clifton Park rooflines.",
      },
      {
        name: "Concrete Cleaning in Clifton Park, NY",
        to: "/concrete-cleaning-clifton-park-ny",
        blurb: "Driveways, walkways, and stamped patios — even results every time.",
      },
    ],
  },
  {
    slug: "roof-washing-clifton-park-ny",
    service: "Roof Washing",
    city: "Clifton Park",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Clifton Park, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Clifton Park, NY",
      subhead:
        "Those black streaks on your Country Knolls or Sunningdale roof are gloeocapsa magma feeding on your shingles. We kill it at the root with a shingle-safe soft wash.",
    },
    intro: [
      "Drive through nearly any Clifton Park subdivision built since the 1980s and you'll spot the same pattern: roofs with dark, streaky staining creeping down from the ridge on the shaded slopes. That's not soot or shadow — it's gloeocapsa magma, an algae that feeds on the limestone filler baked into asphalt shingles.",
      "Clifton Park's combination of mature tree cover in neighborhoods like Country Knolls and Sunningdale, plus the low-lying humidity that settles near the Mohawk River bluffs around Vischer Ferry and Rexford, keeps rooflines damp long after storms pass. That moisture is exactly what the algae needs to spread across a roof over a few seasons.",
      "High pressure will blast the streaks off, but it also strips protective granules and can void your shingle warranty — a real concern on the newer 30-year architectural shingles common on Clifton Park's post-2000 builds. Our ARMA-approved soft wash uses low-pressure application from the ground, killing the algae on contact without walking on your roof or damaging the shingle surface.",
    ],
    localContext: {
      heading: "Why Clifton Park Roofs Streak So Fast",
      body:
        "Between tree-dense subdivisions and river-valley humidity near the Mohawk, Clifton Park roofs stay damp longer than roofs in more open, sun-exposed towns. That extended dampness is the single biggest driver of algae growth on north- and east-facing roof slopes.",
      bullets: [
        {
          title: "Mohawk River Valley Humidity",
          desc: "Fog and dampness settle into low-lying areas near Vischer Ferry and Rexford, keeping roof decks wet well past sunrise.",
        },
        {
          title: "Mature Tree Canopy Over Subdivisions",
          desc: "Country Knolls and Sunningdale streets are heavily wooded — shade plus moisture equals algae within 3-5 years of a new roof.",
        },
        {
          title: "Newer Architectural Shingles",
          desc: "Many Clifton Park homes have 20-30 year architectural shingles installed since 2000 — soft wash protects the manufacturer warranty.",
        },
        {
          title: "Steep Rooflines on Colonials",
          desc: "Many Clifton Park colonials have steep, multi-gable rooflines. We reach every peak from the ground — no walking on wet shingles.",
        },
      ],
    },
    neighborhoods: [
      "Country Knolls",
      "Sunningdale",
      "Vischer Ferry",
      "Jonesville",
      "Rexford",
      "Halfmoon",
      "Ballston Lake",
      "Clifton Park Center",
      "Van Vranken",
      "Grooms Corners",
      "Moe Road area",
      "Route 146 corridor",
    ],
    benefits: [
      {
        title: "Shingle-Safe, ARMA-Approved Process",
        desc: "We follow Asphalt Roofing Manufacturers Association guidelines — soft wash only, never high pressure, to protect your shingle warranty.",
      },
      {
        title: "Removes Algae at the Root",
        desc: "Our treatment kills gloeocapsa magma at the cellular level, not just bleaching the surface, so streaks stay gone for years, not weeks.",
      },
      {
        title: "No Walking on Your Roof",
        desc: "We apply and rinse from the ground or ladder, protecting your shingles from foot traffic damage — important on steep Clifton Park colonials.",
      },
      {
        title: "Extends Roof Life & Curb Appeal",
        desc: "Algae eats away at shingle granules over time. Regular soft washing protects your investment and keeps HOA-standard curb appeal intact.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection & Quote",
        desc: "We assess streak severity, roof pitch, and shingle type before quoting a firm price — no surprises on service day.",
      },
      {
        title: "Low-Pressure Application",
        desc: "Professional-grade cleaning solution is applied at low pressure from the ground or ladder, targeting streaked and algae-heavy areas.",
      },
      {
        title: "Rinse & Final Inspection",
        desc: "A gentle rinse removes dead algae and residue. We walk the property with you to confirm the roofline looks streak-free from the street.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Clifton Park?",
        a: "Most single-family homes run $349–$599 depending on roof size and pitch. We give a firm quote after a quick on-site or photo assessment.",
      },
      {
        q: "Will this void my shingle warranty?",
        a: "No — most manufacturers require soft washing, not pressure washing, to maintain warranty coverage. Our process meets ARMA guidelines.",
      },
      {
        q: "Do you service steep colonial roofs in Country Knolls?",
        a: "Yes, we regularly work on steep multi-gable colonials throughout Country Knolls, Sunningdale, and the surrounding subdivisions.",
      },
      {
        q: "How long do results last?",
        a: "Typically 2-4 years, though homes with heavy tree cover near Vischer Ferry or Rexford may need more frequent treatment.",
      },
      {
        q: "Is roof algae actually harmful?",
        a: "Yes — it feeds on the limestone filler in shingles, degrading granule protection and shortening the life of your roof if left untreated.",
      },
      {
        q: "Can you also clean my gutters while you're there?",
        a: "Absolutely — many Clifton Park customers bundle roof washing with gutter cleaning since wooded lots fill gutters with debris quickly.",
      },
    ],
    meta: {
      title: "Roof Washing in Clifton Park, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Clifton Park, NY. Removes black algae streaks without voiding your warranty. Free quotes, ARMA-approved.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash your siding to match your freshly cleaned roofline.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear wooded-lot debris and remove black streaking on gutter faces.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "Restore faded shingle color and extend roof life further.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Clifton Park, NY",
        to: "/house-washing-clifton-park-ny",
        blurb: "Soft-wash siding cleaning for Clifton Park homes.",
      },
      {
        name: "Concrete Cleaning in Clifton Park, NY",
        to: "/concrete-cleaning-clifton-park-ny",
        blurb: "Driveways, walkways, and stamped patios — even results every time.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-clifton-park-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Clifton Park",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Clifton Park, NY · Concrete & Paver Cleaning",
      headline: "Concrete Cleaning & Sealing in Clifton Park, NY",
      subhead:
        "Long asphalt driveways and stamped concrete patios throughout Country Knolls and Ballston Lake collect tree tannins, mold, and algae under constant shade. We restore them and seal in the results.",
    },
    intro: [
      "Clifton Park's suburban subdivisions were built for space — long driveways, large stamped concrete patios, and paver walkways set among heavily wooded lots. That same wooded privacy that makes the town desirable also means driveways and patios sit under near-constant leaf litter and shade for much of the year.",
      "Tree tannins, pollen, and organic debris break down on concrete surfaces and feed mold and algae growth, especially on driveways off Clifton Country Road and Route 146 that see minimal direct sun. Stamped concrete patios common in newer Ballston Lake and Halfmoon-adjacent developments are especially prone to staining in the recessed grout lines that mimic natural stone joints.",
      "We use surface cleaners and hot water when needed to strip embedded grime evenly, without leaving streaks, then apply a penetrating sealer that protects against future staining and makes next year's cleaning far easier — critical in a town where tree cover means the problem never really stops.",
    ],
    localContext: {
      heading: "Built for Clifton Park's Long Driveways & Patios",
      body:
        "From oil-and-tannin-stained asphalt driveways to stamped concrete pool decks throughout the town's many HOA developments, we adjust our cleaning method and sealer choice to match what's actually underfoot.",
      bullets: [
        {
          title: "Long Driveways Under Tree Cover",
          desc: "Country Knolls and Sunningdale driveways collect leaf tannins and algae in shaded stretches — we use surface cleaners for even, streak-free results.",
        },
        {
          title: "Stamped Concrete Patios",
          desc: "Popular in newer Clifton Park backyards, stamped concrete needs careful cleaning to avoid stripping color sealer, then re-sealing to protect the finish.",
        },
        {
          title: "Paver Walkways in HOA Developments",
          desc: "Many communities require paver walkways be kept weed- and stain-free. We clean and re-sand joints as part of the service.",
        },
        {
          title: "Pool Decks Near Ballston Lake",
          desc: "Homes near Ballston Lake with pool decks need slip-resistant sealers that handle constant foot traffic and splash exposure.",
        },
      ],
    },
    neighborhoods: [
      "Country Knolls",
      "Sunningdale",
      "Vischer Ferry",
      "Jonesville",
      "Rexford",
      "Halfmoon",
      "Ballston Lake",
      "Clifton Park Center",
      "Van Vranken",
      "Grooms Corners",
      "Moe Road area",
      "Route 146 corridor",
    ],
    benefits: [
      {
        title: "Removes Tree Tannin & Algae Stains",
        desc: "We target the organic staining common on shaded Clifton Park driveways and patios, restoring concrete to its original color.",
      },
      {
        title: "Protects Stamped Concrete Color",
        desc: "We use lower pressure and gentler agitation to avoid stripping decorative color sealer common on Clifton Park patios and pool decks.",
      },
      {
        title: "Sealing Extends Time Between Cleanings",
        desc: "A penetrating sealer keeps future tannin and algae buildup from bonding to the surface — a real advantage under Clifton Park's tree canopy.",
      },
      {
        title: "HOA-Compliant, Streak-Free Results",
        desc: "Even cleaning with no wand marks or blotchy patches, keeping your property in line with community appearance standards.",
      },
      {
        title: "10+ Years Local, Fully Insured",
        desc: "Veteran owned and family run, we've cleaned concrete throughout Saratoga County for over a decade.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Clifton Park",
        desc: "We assess square footage, staining type, and surface (stamped, broom-finish, or pavers) before quoting a firm price.",
      },
      {
        title: "Surface Cleaning & Spot Treatment",
        desc: "A rotary surface cleaner delivers even coverage across driveways and patios, with spot treatment for oil or heavy tannin stains.",
      },
      {
        title: "Seal & Protect",
        desc: "Once fully dry, we apply a penetrating sealer to protect against future staining and make next year's cleaning faster and easier.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Clifton Park?",
        a: "Most driveways run $199–$449 depending on length and staining severity; sealing is typically quoted separately based on square footage.",
      },
      {
        q: "Will cleaning strip the color from my stamped concrete patio?",
        a: "No — we use lower pressure and appropriate detergents specifically to protect stamped and colored concrete finishes.",
      },
      {
        q: "Do you clean paver walkways too?",
        a: "Yes, including joint sand replacement where needed, common in Clifton Park's HOA-maintained paver walkways.",
      },
      {
        q: "How often should driveways under tree cover be cleaned?",
        a: "Annually is ideal for shaded driveways in Country Knolls or Sunningdale, where tannin and algae buildup happens faster than in open, sunny areas.",
      },
      {
        q: "Do I need to seal my concrete every time it's cleaned?",
        a: "Not necessarily — sealer typically lasts 2-3 years. We'll tell you honestly if your existing sealer still has life left.",
      },
      {
        q: "Can you remove oil stains from my driveway?",
        a: "Most oil stains can be significantly lightened or removed with hot water extraction and degreasing agents, though very old stains may only lighten.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Clifton Park, NY | Capital Pro",
      description:
        "Driveway, patio, and paver cleaning & sealing in Clifton Park, NY. Removes tree tannin and algae stains. Free quotes, 10+ years local.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Complete the exterior refresh with a soft-wash of your siding.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Specialty cleaning and joint sand restoration for paver walkways.",
      },
      {
        name: "Deck & Patio Cleaning",
        to: "/$service",
        slug: "deck-patio-cleaning",
        blurb: "Restore wood decks alongside your stamped concrete patio.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Clifton Park, NY",
        to: "/house-washing-clifton-park-ny",
        blurb: "Soft-wash siding cleaning for Clifton Park homes.",
      },
      {
        name: "Roof Washing in Clifton Park, NY",
        to: "/roof-washing-clifton-park-ny",
        blurb: "Shingle-safe soft-wash for Clifton Park rooflines.",
      },
    ],
  },
  {
    slug: "house-washing-rensselaer-ny",
    service: "House Washing",
    city: "Rensselaer",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Rensselaer, NY · Soft Wash Specialists",
      headline: "House Washing in Rensselaer, NY",
      subhead:
        "Riverfront humidity and rail-corridor soot leave Rensselaer's aluminum and vinyl-sided homes streaked black and green. Our soft-wash cuts through both without stripping old paint.",
    },
    intro: [
      "Rensselaer sits directly across the Hudson River from Albany, and that riverfront position brings a specific combination of problems most Capital Region towns don't face: constant humidity off the water, diesel and soot film drifting from the CSX rail corridor and Amtrak station, and steep hillside streets where older homes have stood since the early 1900s.",
      "Walk through Downtown Rensselaer, up the hill toward Forbes Avenue, or over to the Fort Crailo and Riverside neighborhoods, and you'll see the housing stock tell the story — aluminum siding from the 1960s-70s, older asbestos-shingle homes still standing in solid shape, and a mix of two-family houses with narrow side yards that trap moisture between buildings. That density and age make dirt, diesel grime, and mildew build up faster than in newer suburban towns.",
      "Our soft-wash process is built for exactly this kind of housing stock — low pressure that won't crack old aluminum panels or lift aging paint, combined with a biocide treatment that actually kills the mildew and soot-fed algae instead of just knocking it loose for a few weeks.",
    ],
    localContext: {
      heading: "Built for Rensselaer's River-Corridor Housing",
      body:
        "Between the humidity coming off the Hudson and the grime from the rail yard and Amtrak station, Rensselaer homes need a different approach than suburban vinyl siding jobs. We know which streets get the worst soot buildup and which older siding types need extra care.",
      bullets: [
        {
          title: "Downtown & the Rail Corridor",
          desc: "Homes near the Amtrak station and CSX lines pick up diesel soot film that regular rain won't rinse away. We break it down without harsh chemicals.",
        },
        {
          title: "Fort Crailo & Riverside Neighborhoods",
          desc: "Older two-family homes with tight side yards trap moisture. We hand-treat these narrow gaps where mildew builds fastest.",
        },
        {
          title: "Hillside Streets Near Forbes Avenue",
          desc: "Steep terrain means runoff drainage patterns vary house to house — we adjust rinse direction to avoid pooling against foundations.",
        },
        {
          title: "Older Aluminum & Asbestos-Era Siding",
          desc: "Many Rensselaer homes still have original aluminum or asbestos shingle siding — we use gentle, low-pressure techniques that won't crack or chip it.",
        },
      ],
    },
    neighborhoods: [
      "Downtown Rensselaer",
      "Fort Crailo",
      "Riverside",
      "Forbes Avenue area",
      "East Greenbush",
      "North Greenbush",
      "Defreestville",
      "Wynantskill",
      "Castleton-on-Hudson",
      "Bath-on-Hudson",
      "Rensselaer waterfront",
      "Partition Street corridor",
    ],
    benefits: [
      {
        title: "Cuts Through Rail-Corridor Soot & Diesel Film",
        desc: "Homes near the CSX line and Amtrak station build up grime that plain rinsing can't remove. Our detergent breaks it down safely.",
      },
      {
        title: "Safe for Older Aluminum & Asbestos Siding",
        desc: "Rensselaer's older housing stock needs gentle handling. Soft-wash pressure is lower than a garden hose, so nothing cracks or chips.",
      },
      {
        title: "Kills Mildew in Tight Side Yards",
        desc: "Two-family homes with narrow gaps between structures trap moisture. We hand-treat these areas where mildew grows fastest and hides longest.",
      },
      {
        title: "10+ Years Local, Veteran Owned & Family Run",
        desc: "We know Rensselaer's hillside streets and older housing stock, and price and treat each home based on its actual condition.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Rensselaer",
        desc: "We inspect siding type, condition, and soot buildup before giving you a firm price — no surprise upcharges on service day.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "We apply an eco-safe detergent to break down soot and mildew, let it dwell, then rinse gently top-to-bottom.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-scrub tight side-yard gaps, porches, and window sills, then walk the exterior with you before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Rensselaer?",
        a: "Most single-family and two-family homes fall in the $299–$549 range depending on siding type and soot buildup severity.",
      },
      {
        q: "Will soft-washing damage my old aluminum siding?",
        a: "No — our low-pressure process is specifically chosen to be safe on older aluminum and asbestos-era siding common throughout Rensselaer.",
      },
      {
        q: "Do you service my Rensselaer neighborhood?",
        a: "Yes — Downtown, Fort Crailo, Riverside, Forbes Avenue, East Greenbush, North Greenbush, Defreestville, Wynantskill, and Castleton-on-Hudson.",
      },
      {
        q: "Why is the film on my siding black and greasy, not green?",
        a: "That's diesel soot and rail-corridor grime, common on homes near the CSX line and Amtrak station. It needs a different detergent than typical algae.",
      },
      {
        q: "How often should I wash my Rensselaer home?",
        a: "Once a year is ideal, especially for homes near the rail corridor or in tight, shaded side-yard configurations common in Fort Crailo and Riverside.",
      },
      {
        q: "Do you clean two-family homes?",
        a: "Yes, we regularly service Rensselaer's two-family and multi-unit housing stock, with pricing based on total square footage.",
      },
    ],
    meta: {
      title: "House Washing in Rensselaer, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Rensselaer, NY — Fort Crailo, Riverside, Downtown & more. Removes soot and mildew safely. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Remove black algae streaks from your Rensselaer roofline.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear debris and remove black tiger stripes on gutter faces.",
      },
      {
        name: "Concrete Cleaning & Sealing",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Restore salt-stained driveways and walkways to even, clean concrete.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Rensselaer, NY",
        to: "/roof-washing-rensselaer-ny",
        blurb: "Shingle-safe soft-wash for Rensselaer rooflines.",
      },
      {
        name: "Concrete Cleaning in Rensselaer, NY",
        to: "/concrete-cleaning-rensselaer-ny",
        blurb: "Driveways and walkways restored from years of road salt staining.",
      },
    ],
  },
  {
    slug: "roof-washing-rensselaer-ny",
    service: "Roof Washing",
    city: "Rensselaer",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Rensselaer, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Rensselaer, NY",
      subhead:
        "Hudson River humidity and older, steeply pitched roofs make Rensselaer homes prone to black algae streaking. We treat it with a shingle-safe soft wash, not high pressure.",
    },
    intro: [
      "Rensselaer's older housing stock — much of it built before or shortly after WWII on hilly streets rising up from the Hudson River waterfront — tends to have steeply pitched roofs that stay shaded and damp for long stretches, especially on the north-facing slopes overlooking the river toward Albany.",
      "Combine that with the humidity that rolls off the Hudson daily and settles into low-lying streets near Broadway and Partition Street, and you get ideal conditions for gloeocapsa magma, the black algae responsible for the streaking you see on roofs throughout Fort Crailo, Riverside, and the hillside blocks near Forbes Avenue.",
      "Older Rensselaer roofs, some of which have been re-shingled multiple times over the decades, can't take the abuse of high-pressure washing without losing granules or working shingles loose at the edges. Our ARMA-approved soft-wash approach applies cleaning solution at low pressure from the ground or ladder, killing the algae without ever stepping foot on your roof deck.",
    ],
    localContext: {
      heading: "Why Rensselaer Roofs Streak So Fast",
      body:
        "Riverfront humidity, hillside shade patterns, and an older housing stock with roofs that have seen decades of New York winters all combine to make Rensselaer roofs particularly prone to algae streaking.",
      bullets: [
        {
          title: "Hudson River Humidity",
          desc: "Daily humidity rolling off the river keeps roof decks damp well into the afternoon, especially on north-facing slopes.",
        },
        {
          title: "Hillside Shade Patterns",
          desc: "Streets rising from the waterfront toward Forbes Avenue create shadow patterns from neighboring homes that keep certain roof sections perpetually damp.",
        },
        {
          title: "Older Roofing Stock",
          desc: "Many Rensselaer roofs are older installations that can't handle high-pressure cleaning without granule loss or shingle damage.",
        },
        {
          title: "Steep Older Pitches",
          desc: "Pre-war construction often used steeper roof pitches — we reach every peak safely from the ground, no walking on aging shingles.",
        },
      ],
    },
    neighborhoods: [
      "Downtown Rensselaer",
      "Fort Crailo",
      "Riverside",
      "Forbes Avenue area",
      "East Greenbush",
      "North Greenbush",
      "Defreestville",
      "Wynantskill",
      "Castleton-on-Hudson",
      "Bath-on-Hudson",
      "Rensselaer waterfront",
      "Partition Street corridor",
    ],
    benefits: [
      {
        title: "Shingle-Safe for Older Roofs",
        desc: "Our soft-wash process is gentle enough for Rensselaer's aging roof stock, avoiding the granule loss that high pressure causes.",
      },
      {
        title: "Removes Algae at the Root",
        desc: "We kill gloeocapsa magma at the cellular level so streaking stays gone for years, not just a few weeks after a surface rinse.",
      },
      {
        title: "No Foot Traffic on Fragile Roofs",
        desc: "We apply and rinse from the ground or ladder — critical for older Rensselaer roofs that shouldn't bear the weight of a technician walking the deck.",
      },
      {
        title: "Protects Your Roof Investment",
        desc: "Regular soft washing slows granule loss and extends the usable life of a roof that may already be decades old.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection & Quote",
        desc: "We assess roof age, pitch, and streak severity before giving a firm price — important for Rensselaer's older housing stock.",
      },
      {
        title: "Low-Pressure Application",
        desc: "Professional cleaning solution is applied from the ground or ladder, focused on streaked and algae-heavy north-facing slopes.",
      },
      {
        title: "Rinse & Final Inspection",
        desc: "A gentle rinse clears dead algae and residue, and we walk the property with you to confirm streak-free results.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Rensselaer?",
        a: "Most homes run $299–$549 depending on roof size, pitch, and age of the shingles. We give a firm quote after assessing your roof.",
      },
      {
        q: "Is my old roof too fragile for cleaning?",
        a: "Our soft-wash method is specifically designed to be gentle on older roofs — we assess condition first and will tell you honestly if we have concerns.",
      },
      {
        q: "Do you service hillside homes near Forbes Avenue?",
        a: "Yes, we regularly work throughout Rensselaer's hillside streets and waterfront neighborhoods.",
      },
      {
        q: "How long do results last?",
        a: "Typically 2-4 years, though homes in constantly shaded hillside spots may need more frequent treatment.",
      },
      {
        q: "Will this void my roof's remaining warranty?",
        a: "No — soft washing is the manufacturer-recommended method for cleaning algae, unlike high-pressure washing which often voids warranties.",
      },
      {
        q: "Can you clean my gutters at the same time?",
        a: "Yes, many Rensselaer customers bundle roof washing with gutter cleaning, especially on older homes with narrow, easily-clogged gutters.",
      },
    ],
    meta: {
      title: "Roof Washing in Rensselaer, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Rensselaer, NY. Removes black algae streaks on older roofs without damage. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash siding to match your freshly cleaned roofline.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear debris and remove black streaking on older, narrow gutter systems.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "Restore faded color and extend the life of an older roof.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Rensselaer, NY",
        to: "/house-washing-rensselaer-ny",
        blurb: "Soft-wash siding cleaning for Rensselaer homes.",
      },
      {
        name: "Concrete Cleaning in Rensselaer, NY",
        to: "/concrete-cleaning-rensselaer-ny",
        blurb: "Driveways and walkways restored from years of road salt staining.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-rensselaer-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Rensselaer",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Rensselaer, NY · Concrete & Driveway Cleaning",
      headline: "Concrete Cleaning & Sealing in Rensselaer, NY",
      subhead:
        "Steep, salt-stained driveways on Rensselaer's hillside streets take a beating every winter. We strip years of road-salt residue and seal the surface to protect it going forward.",
    },
    intro: [
      "Rensselaer's hilly terrain, rising from the Hudson River waterfront up toward Forbes Avenue and East Greenbush, means many driveways and front walkways sit on steep grades. Every winter, road salt and calcium chloride run down these slopes and pool at the base, leaving chalky white staining and accelerating concrete spalling that flat, low-lying towns rarely deal with to the same degree.",
      "Add in the age of the housing stock — many Rensselaer driveways and sidewalks were poured decades ago and have never been sealed — and you get concrete that's absorbed years of salt, oil drips, and diesel grime from the nearby rail corridor. That combination leaves surfaces looking gray, blotchy, and rough instead of clean and uniform.",
      "We use hot-water surface cleaning to lift embedded salt staining and grime evenly across the whole driveway or walkway, then apply a penetrating sealer that helps prevent salt absorption going forward — a meaningful upgrade for any Rensselaer homeowner tired of watching their concrete degrade every winter.",
    ],
    localContext: {
      heading: "Built for Rensselaer's Hillside Driveways",
      body:
        "Steep grades, decades of road salt exposure, and older unsealed concrete make Rensselaer a different kind of concrete-cleaning job than flatter suburban towns. We clean and seal with winter durability specifically in mind.",
      bullets: [
        {
          title: "Steep Driveways Off Hillside Streets",
          desc: "Homes near Forbes Avenue and the waterfront hills see salt and runoff pool at driveway bottoms — we target these high-staining zones first.",
        },
        {
          title: "Older, Never-Sealed Concrete",
          desc: "Many Rensselaer driveways and walkways have never been sealed. Sealing now dramatically slows future salt and oil absorption.",
        },
        {
          title: "Rail-Corridor Grime",
          desc: "Concrete near the CSX line and Amtrak station picks up diesel soot film in addition to salt staining — we treat both in one pass.",
        },
        {
          title: "Two-Family Home Walkways",
          desc: "Narrow shared walkways between Rensselaer's two-family homes need careful edge work to avoid overspray onto neighboring property.",
        },
      ],
    },
    neighborhoods: [
      "Downtown Rensselaer",
      "Fort Crailo",
      "Riverside",
      "Forbes Avenue area",
      "East Greenbush",
      "North Greenbush",
      "Defreestville",
      "Wynantskill",
      "Castleton-on-Hudson",
      "Bath-on-Hudson",
      "Rensselaer waterfront",
      "Partition Street corridor",
    ],
    benefits: [
      {
        title: "Strips Years of Road-Salt Staining",
        desc: "Our hot-water cleaning process lifts the chalky white salt residue that builds up on Rensselaer's steep hillside driveways every winter.",
      },
      {
        title: "Sealing Slows Future Salt Damage",
        desc: "A penetrating sealer helps prevent the concrete spalling and cracking that unsealed surfaces suffer after repeated freeze-thaw and salt cycles.",
      },
      {
        title: "Removes Rail-Corridor Soot",
        desc: "We treat diesel and soot grime alongside salt staining for driveways and walkways near the CSX line and Amtrak station.",
      },
      {
        title: "Even, Streak-Free Results",
        desc: "No blotchy patches or wand marks — just uniform, restored concrete across the whole driveway or walkway.",
      },
      {
        title: "10+ Years Local, Fully Insured",
        desc: "Veteran owned and family run, we understand Rensselaer's hillside terrain and older housing stock better than any national franchise.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Rensselaer",
        desc: "We assess grade, staining severity, and whether the concrete has ever been sealed before quoting a firm price.",
      },
      {
        title: "Hot-Water Surface Cleaning",
        desc: "A rotary surface cleaner with hot water lifts salt staining and grime evenly, with spot treatment for heavy oil or soot areas.",
      },
      {
        title: "Seal & Protect",
        desc: "Once fully dry, we apply a penetrating sealer designed to resist salt absorption through the coming winter season.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Rensselaer?",
        a: "Most driveways run $199–$399 depending on length, grade, and staining severity; sealing is quoted separately by square footage.",
      },
      {
        q: "Can you actually remove old road-salt staining?",
        a: "In most cases, yes — hot-water cleaning lifts the majority of salt residue, though very old, deeply absorbed staining may only lighten significantly.",
      },
      {
        q: "Should I seal my driveway if it's never been sealed?",
        a: "Yes, especially in Rensselaer — sealing dramatically slows future salt and freeze-thaw damage on older, unsealed concrete.",
      },
      {
        q: "Do you clean shared walkways between two-family homes?",
        a: "Yes, we regularly work on narrow shared walkways and take care to avoid overspray onto neighboring properties.",
      },
      {
        q: "How often should hillside driveways be cleaned?",
        a: "Annually is ideal given the salt exposure Rensselaer's steep driveways see every winter.",
      },
      {
        q: "Can you remove diesel soot near the rail corridor?",
        a: "Yes — we treat soot and diesel film separately from salt staining to fully restore concrete near the CSX line and Amtrak station.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Rensselaer, NY | Capital Pro",
      description:
        "Driveway and walkway cleaning & sealing in Rensselaer, NY. Removes road-salt staining and soot buildup. Free quotes, 10+ years local.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Complete the exterior refresh with a soft-wash of your siding.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Specialty cleaning for paver walkways and entryways.",
      },
      {
        name: "Deck & Patio Cleaning",
        to: "/$service",
        slug: "deck-patio-cleaning",
        blurb: "Restore wood decks and porches alongside your concrete driveway.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Rensselaer, NY",
        to: "/house-washing-rensselaer-ny",
        blurb: "Soft-wash siding cleaning for Rensselaer homes.",
      },
      {
        name: "Roof Washing in Rensselaer, NY",
        to: "/roof-washing-rensselaer-ny",
        blurb: "Shingle-safe soft-wash for Rensselaer rooflines.",
      },
    ],
  },
];
