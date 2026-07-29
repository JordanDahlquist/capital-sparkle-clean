import { Home, CloudRain, Layers } from "lucide-react";
import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";
import roofWashingHero from "../assets/service-heroes/service-roof-washing-custom.jpg.asset.json";
import concreteCleaningHero from "../assets/service-heroes/service-concrete-cleaning-sealing.png.asset.json";
import type { CityServiceContent } from "./city-services";

export const CITY_SERVICES_GUILDERLAND_DELMAR: CityServiceContent[] = [
  {
    slug: "house-washing-guilderland-ny",
    service: "House Washing",
    city: "Guilderland",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Guilderland, NY · Soft Wash Specialists",
      headline: "House Washing in Guilderland, NY",
      subhead:
        "Between the Helderberg escarpment's shade and the humidity rolling off the Watervliet Reservoir, Guilderland's colonials and raised ranches grow mildew fast. Our soft-wash kills it at the root — safe on vinyl, cedar, and stucco.",
    },
    intro: [
      "Guilderland is a town of big wooded lots — Westmere, McKownville, and the stretch out past Guilderland Center all sit under heavy tree canopy that blocks sun and traps moisture against siding for days after a storm. Add the cooling breeze that spills down off the Helderberg escarpment and the humid air pooling near the Normanskill and Watervliet Reservoir, and you get siding that never fully dries out.",
      "That combination shows up as green-black streaking on the shaded sides of 1970s-90s colonials and raised ranches, especially where mature oaks and pines crowd right up to the foundation. High-pressure blasting knocks the color off for a week or two, but the algae's root structure survives in the siding's texture and comes right back.",
      "Our soft-wash process uses low-pressure application of professional-grade biocides that kill mildew and algae at the root, then a gentle rinse that won't strip paint or drive water behind old aluminum siding. We've been washing homes throughout Guilderland and the Route 20 corridor for over 10 years, and we know exactly which walls in which neighborhoods need extra dwell time.",
    ],
    localContext: {
      heading: "Built for Guilderland Homes",
      body:
        "From the raised ranches near Fort Hunter to the older colonials off Western Avenue near Crossgates, Guilderland's housing stock spans decades of siding materials. We adjust detergent strength and pressure for vinyl, aluminum, stucco, and painted wood so every home gets the right treatment.",
      bullets: [
        {
          title: "Westmere & McKownville",
          desc: "Dense tree cover near the university corridor keeps north walls shaded and damp — we target these first and extend dwell time for stubborn algae.",
        },
        {
          title: "Route 20 / Western Ave Corridor",
          desc: "Older colonials with painted wood trim near the commercial strip get a gentler detergent mix so we lift grime without touching the paint.",
        },
        {
          title: "Altamont & Guilderland Center",
          desc: "Rural properties near the escarpment often have well water staining and hard mineral streaks on top of algae — we treat both in the same visit.",
        },
        {
          title: "Fort Hunter & Crossgates Area",
          desc: "Newer vinyl-sided homes near the commercial corridor wash up bright and even with our low-pressure system — ideal before a listing.",
        },
      ],
    },
    neighborhoods: [
      "Westmere",
      "McKownville",
      "Altamont",
      "Guilderland Center",
      "Fort Hunter",
      "Western Avenue Corridor",
      "Crossgates Area",
      "Guilderland Hamlet",
      "Dunnsville",
      "Meadowdale",
      "Hamilton Square",
      "Fuller Station",
    ],
    benefits: [
      {
        title: "Kills the Escarpment Shade Algae",
        desc: "Wind and shade rolling off the Helderberg escarpment keep siding damp for days. Our biocides kill algae at the root instead of just bleaching the color out.",
      },
      {
        title: "Safe for Older Siding",
        desc: "Many Guilderland colonials still carry original aluminum or early vinyl siding. Our soft-wash pressure is lower than a garden hose — no dents, no stripped finish.",
      },
      {
        title: "Great Before Listing Near Crossgates",
        desc: "Homes near the Crossgates commercial corridor turn over fast. A soft-washed exterior is one of the cheapest ways to boost curb appeal before showings.",
      },
      {
        title: "10+ Years Local",
        desc: "We know which streets in Westmere and Altamont need extra attention on the north walls — not a guess, a routine.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Guilderland",
        desc: "We measure the home, check siding type, and give you a firm price — usually within 24 hours of your call.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "We cover landscaping, apply eco-safe detergent, let it work into the algae, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-scrub porches, sills, and garage doors. We walk the property with you before we consider the job done.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Guilderland?",
        a: "Most Guilderland single-family homes run $349–$649. Larger properties near Altamont with wraparound porches or extra stories run higher. We quote firm on-site, no surprises.",
      },
      {
        q: "Will the soft-wash damage my landscaping?",
        a: "No. We pre-rinse shrubs and beds before, during, and after — your Westmere hostas and foundation plantings are safe.",
      },
      {
        q: "Do you service my part of Guilderland?",
        a: "Yes — Westmere, McKownville, Altamont, Guilderland Center, Fort Hunter, the Western Avenue corridor, and everywhere in between.",
      },
      {
        q: "Why does the north side of my house look worse than the rest?",
        a: "Shade from mature trees and the escarpment wind keeps that side damp longer than sun-exposed walls, giving algae more time to take hold.",
      },
      {
        q: "How often should I wash my Guilderland home?",
        a: "Once a year is ideal, especially for homes tucked under heavy tree cover near Westmere or Guilderland Center.",
      },
      {
        q: "Do you clean stucco and aluminum siding?",
        a: "Yes. Both are common on older Guilderland homes, and we adjust pressure and detergent specifically for each material.",
      },
    ],
    meta: {
      title: "House Washing in Guilderland, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Guilderland, NY — Westmere, Altamont, McKownville & more. Kills algae at the root, safe on siding. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Remove black streak algae from Guilderland roofs without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear leaf debris from under the Guilderland tree canopy and whiten gutter faces.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Even, streak-free driveway cleaning for long Guilderland asphalt and concrete drives.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Guilderland, NY",
        to: "/roof-washing-guilderland-ny",
        blurb: "Shingle-safe soft-wash for Guilderland rooflines.",
      },
      {
        name: "Concrete Cleaning in Guilderland, NY",
        to: "/concrete-cleaning-guilderland-ny",
        blurb: "Restore long Guilderland driveways after winter salt damage.",
      },
    ],
  },
  {
    slug: "roof-washing-guilderland-ny",
    service: "Roof Washing",
    city: "Guilderland",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Guilderland, NY · Shingle-Safe Soft Wash",
      headline: "Roof Washing in Guilderland, NY",
      subhead:
        "The wooded lots and reservoir humidity around Guilderland keep rooflines damp long after storms pass — perfect conditions for the black-streak algae eating your shingles. We soft-wash it away without a drop of high pressure.",
    },
    intro: [
      "Drive through Westmere or out past Guilderland Center and you'll notice the same pattern on roof after roof: dark streaking creeping down the north-facing slope. That's gloeocapsa magma, a living algae that feeds on the limestone filler in asphalt shingles — and Guilderland's big wooded lots give it everything it needs to thrive.",
      "The shade thrown by mature oaks and pines, combined with humid air settling near the Normanskill and Watervliet Reservoir, keeps roofs damp for days after rain. Homes tucked closer to the Helderberg escarpment get less direct afternoon sun to dry things out, so the algae gets a longer growing season than roofs in more open parts of town.",
      "High pressure will strip those streaks, but it also strips granules and can void your shingle warranty. Our soft-wash treatment kills the algae at the root using ARMA-approved solutions applied from the ground or ladder — no walking on brittle shingles, no pressure damage, just a clean roofline that stays that way.",
    ],
    localContext: {
      heading: "Why Guilderland Roofs Streak So Fast",
      body:
        "Guilderland sits between the Helderberg escarpment and the reservoir system, creating pockets of shade and humidity that don't dry out quickly. Combined with the town's older housing stock, that's a recipe for algae growth on north and east-facing slopes.",
      bullets: [
        {
          title: "Escarpment Shade & Wind",
          desc: "The Helderberg escarpment blocks late-day sun on many Guilderland properties, keeping roofs damp longer than surrounding towns.",
        },
        {
          title: "Reservoir Humidity",
          desc: "Moist air off the Normanskill and Watervliet Reservoir settles into low-lying lots, especially around Guilderland Center and Fort Hunter.",
        },
        {
          title: "Heavy Tree Canopy",
          desc: "Big wooded lots throughout Westmere and Altamont mean constant leaf litter and shade — ideal algae breeding ground.",
        },
        {
          title: "Aging Shingle Roofs",
          desc: "Many raised ranches and colonials from the 1970s-90s are due for their first proper roof cleaning after decades of growth.",
        },
      ],
    },
    neighborhoods: [
      "Westmere",
      "McKownville",
      "Altamont",
      "Guilderland Center",
      "Fort Hunter",
      "Western Avenue Corridor",
      "Crossgates Area",
      "Guilderland Hamlet",
      "Dunnsville",
      "Meadowdale",
      "Hamilton Square",
      "Fuller Station",
    ],
    benefits: [
      {
        title: "Protects Roof Lifespan",
        desc: "Killing the algae stops granule loss, which is the leading cause of early shingle failure under Guilderland's shade and humidity.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "Our ARMA-approved soft wash never uses high pressure, so your shingle warranty stays intact.",
      },
      {
        title: "Kills Algae, Not Just Color",
        desc: "Surface bleaching fades the streaks temporarily. Our treatment targets the organism itself for longer-lasting results.",
      },
      {
        title: "Curb Appeal for Route 20 Listings",
        desc: "A clean roofline reads as 'new roof' to buyers browsing homes near the Western Avenue corridor.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We check shingle condition, flashing, and drainage before quoting so you know exactly what you're working with.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied from the ground or ladder — never walking directly on wet shingles.",
      },
      {
        title: "Gentle Rinse & Gutter Check",
        desc: "Low-pressure rinse followed by a quick gutter flush so debris doesn't sit and clog downspouts.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Guilderland?",
        a: "Most Guilderland roofs run $499–$1,199 depending on pitch, size, and access. We give firm on-site quotes.",
      },
      {
        q: "Will pressure washing damage my roof?",
        a: "Yes, which is why we never use it. High pressure blasts granules loose and can void your shingle warranty. We soft-wash exclusively.",
      },
      {
        q: "Why is the north slope of my roof worse than the south?",
        a: "Shade from mature trees and less direct sun keeps the north slope damp longer, giving algae more time to establish.",
      },
      {
        q: "Do you service my part of Guilderland?",
        a: "Yes — Westmere, McKownville, Altamont, Guilderland Center, Fort Hunter, and the Western Avenue corridor.",
      },
      {
        q: "How long will my roof stay clean?",
        a: "Because we kill the algae at the root, results last significantly longer than a bleach-only rinse. Shade and humidity levels affect regrowth timing.",
      },
      {
        q: "Do you clean metal or cedar shake roofs too?",
        a: "Yes, we adjust our mix and technique for asphalt, metal, and cedar shake roofs found throughout Guilderland's older neighborhoods.",
      },
    ],
    meta: {
      title: "Roof Washing in Guilderland, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Guilderland, NY. Removes black-streak algae without high pressure. ARMA-approved. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash your Guilderland siding in the same visit — bundle pricing available.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush debris after a roof wash and whiten stained gutter faces.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "Restore flexibility to aging Guilderland shingles and extend usable roof life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Guilderland, NY",
        to: "/house-washing-guilderland-ny",
        blurb: "Full soft-wash for Guilderland colonials and raised ranches.",
      },
      {
        name: "Concrete Cleaning in Guilderland, NY",
        to: "/concrete-cleaning-guilderland-ny",
        blurb: "Restore long Guilderland driveways damaged by winter salt.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-guilderland-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Guilderland",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Guilderland, NY · Surface-Cleaner Finish",
      headline: "Concrete Cleaning & Sealing in Guilderland, NY",
      subhead:
        "Guilderland's long asphalt and concrete driveways take a beating from salt, sap, and winter freeze-thaw. Our commercial surface cleaner delivers an even, streak-free finish, then sealing locks it in.",
    },
    intro: [
      "Guilderland properties tend to sit on big wooded lots, which means long driveways — often stretching well back from Western Avenue or tucked into Altamont's hillier terrain. Those long runs of concrete and asphalt collect sap and leaf tannin stains from overhanging trees, plus the usual oil drips and tire marks, all baked in by seasons of Capital Region sun and salt.",
      "Winter is the biggest culprit. Plows push salt-laden slush across driveways all season, and water works its way into hairline cracks before freezing and expanding. By spring, a lot of Guilderland driveways look blotchy and gray, with dark patches near the garage and lighter halos where a homeowner tried scrubbing with a garden hose.",
      "We clean Guilderland concrete and asphalt with a commercial rotary surface cleaner — the same equipment used on shopping plaza lots — for even coverage with no wand-mark stripes. After cleaning, we recommend sealing, which is especially important here given how many long driveways sit exposed to sap, salt, and shade year-round.",
    ],
    localContext: {
      heading: "Guilderland Concrete Faces Long Winters and Long Driveways",
      body:
        "Between the heavier snowfall near the escarpment and the sheer length of many Guilderland driveways, concrete and asphalt surfaces here need more frequent attention than in denser, flatter parts of the Capital Region.",
      bullets: [
        {
          title: "Road Salt & Plow Damage",
          desc: "Long driveways near Altamont and Guilderland Center see heavy salt buildup each winter — sealing after cleaning helps block penetration.",
        },
        {
          title: "Sap and Tannin Staining",
          desc: "Big wooded lots mean overhanging trees drip sap and tannin-rich leaf residue onto concrete year-round.",
        },
        {
          title: "Freeze/Thaw Cracking",
          desc: "Water trapped in hairline cracks expands during Guilderland's cold snaps, widening cracks each winter if left unsealed.",
        },
        {
          title: "Oil & Rust Stains",
          desc: "Long driveways near garages accumulate oil drips and rust rings from equipment — we treat these before the surface clean.",
        },
      ],
    },
    neighborhoods: [
      "Westmere",
      "McKownville",
      "Altamont",
      "Guilderland Center",
      "Fort Hunter",
      "Western Avenue Corridor",
      "Crossgates Area",
      "Guilderland Hamlet",
      "Dunnsville",
      "Meadowdale",
      "Hamilton Square",
      "Fuller Station",
    ],
    benefits: [
      {
        title: "No Wand-Mark Streaks",
        desc: "Our rotary surface cleaner covers evenly across long Guilderland driveways — no zebra stripes or overlap marks.",
      },
      {
        title: "Blocks Winter Salt Damage",
        desc: "Sealing after cleaning keeps deicing salt from soaking into the concrete before the next winter hits.",
      },
      {
        title: "Removes Sap & Tannin Stains",
        desc: "We pre-treat sap and leaf staining common under Guilderland's heavy tree canopy before running the surface cleaner.",
      },
      {
        title: "Extends Driveway Life",
        desc: "Sealing after cleaning slows freeze/thaw cracking, which is common on Guilderland's longer, more exposed driveways.",
      },
      {
        title: "Great Curb Appeal Boost",
        desc: "A freshly cleaned and sealed driveway is one of the most noticeable upgrades for homes near the Western Avenue corridor.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote",
        desc: "We measure the driveway or patio, check for cracks or stains, and give a firm price on the spot.",
      },
      {
        title: "Pre-Treat & Surface Clean",
        desc: "Spot-treat oil, rust, and sap stains, then run the commercial rotary surface cleaner for even, edge-to-edge coverage.",
      },
      {
        title: "Seal & Walk-Through",
        desc: "Once dry, we apply a penetrating sealer to protect against salt and freeze/thaw damage, then walk the job with you.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Guilderland?",
        a: "Pricing depends on driveway length and condition — Guilderland's longer driveways typically run a bit higher than average. We quote firm on-site.",
      },
      {
        q: "Do you seal driveways too?",
        a: "Yes, and we strongly recommend it here given how much salt and sap Guilderland driveways are exposed to each year.",
      },
      {
        q: "Can you remove oil stains from my garage apron?",
        a: "Yes, we pre-treat oil and rust stains before running the surface cleaner for the best possible result.",
      },
      {
        q: "Will the surface cleaner leave streaks?",
        a: "No — that's the whole point of using a commercial rotary surface cleaner instead of a wand. Coverage is even across the entire surface.",
      },
      {
        q: "Do you clean paver patios too?",
        a: "Yes, we clean and seal paver patios and walkways throughout Guilderland, adjusting pressure for the joint sand.",
      },
      {
        q: "How often should I clean and seal my driveway?",
        a: "Every 2–3 years is typical for Guilderland, though heavily shaded or long driveways may benefit from more frequent cleaning.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Guilderland, NY | Capital Pro",
      description:
        "Streak-free concrete and driveway cleaning in Guilderland, NY. Removes salt, sap, and stains, then seals to protect through winter. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash house cleaning with your Guilderland driveway service.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore paver patios and walkways common on larger Guilderland lots.",
      },
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Pair a roofline soft-wash with your driveway cleaning visit.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Guilderland, NY",
        to: "/house-washing-guilderland-ny",
        blurb: "Soft-wash siding cleaning for Guilderland homes.",
      },
      {
        name: "Roof Washing in Guilderland, NY",
        to: "/roof-washing-guilderland-ny",
        blurb: "Shingle-safe algae removal for Guilderland rooflines.",
      },
    ],
  },
  {
    slug: "house-washing-delmar-ny",
    service: "House Washing",
    city: "Delmar",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Delmar, NY · Soft Wash Specialists",
      headline: "House Washing in Delmar, NY",
      subhead:
        "Delmar's mature street trees and Hudson bluff humidity turn painted trim and cedar shakes dark with mildew fast. Our soft-wash restores the crisp look of Delaware Avenue and Kenwood Avenue homes without harming the wood.",
    },
    intro: [
      "Delmar's tree-lined streets are one of its biggest selling points, but that same mature canopy along Delaware Avenue and Kenwood Avenue traps humidity against the older Colonials and Capes that make up so much of the Town of Bethlehem's housing stock. Painted wood trim and cedar shake siding hold moisture longer than vinyl, giving mildew a head start on the north-facing walls.",
      "Down toward the Hudson bluffs in Glenmont and Normansville, the humidity runs even heavier, and homes there often show the darkest staining under gutters and around window trim. Slingerlands and Elsmere homeowners see similar buildup on shaded porches and under overhangs where sun rarely reaches.",
      "Our soft-wash process is built for exactly this kind of housing stock — low-pressure application that lifts mildew from painted wood trim and cedar shakes without stripping paint or splitting shingles. We've spent over 10 years cleaning homes throughout Bethlehem, and we know which Delmar streets need extra dwell time on the north side.",
    ],
    localContext: {
      heading: "Built for Delmar's Older Homes",
      body:
        "From upscale Colonials on Delaware Avenue to Capes tucked into Slingerlands and Elsmere, Delmar's housing stock leans older and more detailed than much of the Capital Region — painted wood trim, cedar shakes, and mature landscaping that all require a gentler touch.",
      bullets: [
        {
          title: "Delaware Avenue & Kenwood Avenue",
          desc: "Upscale Colonials with painted wood trim need a gentler detergent mix so we don't strip finish while lifting mildew.",
        },
        {
          title: "Glenmont & Normansville",
          desc: "Closer to the Hudson bluffs, humidity runs heaviest here — we extend dwell time on north walls prone to darker staining.",
        },
        {
          title: "Slingerlands & Elsmere",
          desc: "Mature tree cover shades porches and overhangs most of the day, so mildew builds up in spots that never fully dry.",
        },
        {
          title: "Cedar Shake Siding",
          desc: "Common on older Bethlehem homes — we adjust pressure specifically for shakes to avoid splitting or lifting them.",
        },
      ],
    },
    neighborhoods: [
      "Delmar Hamlet",
      "Slingerlands",
      "Glenmont",
      "Elsmere",
      "Normansville",
      "Delaware Avenue Corridor",
      "Kenwood Avenue",
      "Bethlehem Center",
      "Cedar Hill",
      "South Bethlehem",
      "Selkirk",
      "Corning Hill",
    ],
    benefits: [
      {
        title: "Kills Bluff-Humidity Mildew",
        desc: "Homes near Glenmont and Normansville sit closer to the Hudson bluffs where humidity runs heavy — our biocide kills mildew at the root instead of just fading it.",
      },
      {
        title: "Safe for Painted Trim & Cedar Shakes",
        desc: "We use pressure lower than a garden hose, protecting the painted wood trim and cedar shake siding common on Delmar's older Colonials and Capes.",
      },
      {
        title: "Restores Curb Appeal on Tree-Lined Streets",
        desc: "A soft-washed exterior stands out on Delaware Avenue and Kenwood Avenue, where mature landscaping is already a strong selling point.",
      },
      {
        title: "10+ Years Local",
        desc: "We know exactly which shaded corners in Slingerlands and Elsmere need extra attention every visit.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Delmar",
        desc: "We inspect siding type — cedar shake, painted trim, or vinyl — and give you a firm price, usually within 24 hours.",
      },
      {
        title: "Pre-Treat, Dwell, Soft-Wash Rinse",
        desc: "We cover mature landscaping, apply eco-safe detergent, let it work, then rinse at low pressure top-to-bottom.",
      },
      {
        title: "Detail Pass & Walk-Through",
        desc: "Hand-scrub porches, brick walkways, and entryways, then walk the property with you before wrapping up.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Delmar?",
        a: "Most Delmar Colonials and Capes run $349–$699 depending on size and siding material. Larger homes on Delaware Avenue with more trim detail run higher. We quote firm on-site.",
      },
      {
        q: "Is soft-wash safe for cedar shake siding?",
        a: "Yes — we specifically adjust pressure and detergent strength for cedar shakes, which are common throughout Bethlehem's older neighborhoods.",
      },
      {
        q: "Will you damage my landscaping or brick walkway?",
        a: "No. We pre-rinse plantings before, during, and after, and we're careful around the brick walkways common in Slingerlands and Normansville.",
      },
      {
        q: "Do you service my part of Delmar?",
        a: "Yes — Delmar Hamlet, Slingerlands, Glenmont, Elsmere, Normansville, and the Delaware Avenue and Kenwood Avenue corridors.",
      },
      {
        q: "Why is the mildew worse near Glenmont and Normansville?",
        a: "Those neighborhoods sit closer to the Hudson bluffs, where humidity runs heavier and lingers longer against north-facing siding.",
      },
      {
        q: "How often should I wash my Delmar home?",
        a: "Once a year is typical, though homes under heavy tree cover in Slingerlands or Elsmere may benefit from more frequent washing.",
      },
    ],
    meta: {
      title: "House Washing in Delmar, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Delmar, NY — Slingerlands, Glenmont, Elsmere & more. Safe on painted trim and cedar shakes. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Remove black streak algae from Delmar rooflines without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear leaf litter from Delmar's mature street trees and whiten gutter faces.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Restore brick walkways and stamped patios common throughout Delmar.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Delmar, NY",
        to: "/roof-washing-delmar-ny",
        blurb: "Shingle-safe soft-wash for Delmar rooflines.",
      },
      {
        name: "Concrete Cleaning in Delmar, NY",
        to: "/concrete-cleaning-delmar-ny",
        blurb: "Brick walkway and stamped patio cleaning for Delmar properties.",
      },
    ],
  },
  {
    slug: "roof-washing-delmar-ny",
    service: "Roof Washing",
    city: "Delmar",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Delmar, NY · Shingle-Safe Soft Wash",
      headline: "Roof Washing in Delmar, NY",
      subhead:
        "Mature street trees and Hudson bluff humidity keep Delmar rooflines damp long after storms — perfect for the black-streak algae eating your shingles. We soft-wash it away without a drop of high pressure.",
    },
    intro: [
      "Walk down Delaware Avenue or Kenwood Avenue and look up: many of Delmar's roofs carry dark streaking on the north slope, especially on the Colonials and Capes tucked under the town's signature mature street trees. That's gloeocapsa magma, an algae that feeds on the limestone filler in asphalt shingles and thrives wherever roofs stay damp.",
      "Delmar's proximity to the Hudson bluffs near Glenmont and Normansville adds extra humidity to the mix, while the heavy tree cover throughout Slingerlands and Elsmere blocks the sun that would otherwise dry shingles out quickly after rain. Older homes with north-facing dormers and gables are especially prone to the buildup.",
      "High pressure strips the streaks temporarily but also strips shingle granules and can void your roof's warranty. Our soft-wash treatment uses ARMA-approved solutions applied from the ground or ladder to kill the algae at the root — restoring the clean rooflines that match Delmar's well-kept streets.",
    ],
    localContext: {
      heading: "Why Delmar Roofs Streak So Fast",
      body:
        "Sitting near the Hudson bluffs and under some of the Capital Region's most mature tree canopy, Delmar roofs stay damp longer than roofs in more open, sunnier towns — giving algae a longer growing season.",
      bullets: [
        {
          title: "Hudson Bluff Humidity",
          desc: "Glenmont and Normansville sit closest to the bluffs, where humid air lingers and keeps rooflines damp after storms.",
        },
        {
          title: "Mature Street Tree Canopy",
          desc: "Delaware Avenue, Kenwood Avenue, and Slingerlands all have dense, decades-old tree cover that shades roofs for much of the day.",
        },
        {
          title: "Older Colonial Rooflines",
          desc: "Many Delmar Colonials and Capes have dormers and gables that trap moisture and debris longer than simple roof shapes.",
        },
        {
          title: "North-Side Shade",
          desc: "Homes with north-facing slopes under tree cover in Elsmere often show streaking years before the sunnier south-facing side.",
        },
      ],
    },
    neighborhoods: [
      "Delmar Hamlet",
      "Slingerlands",
      "Glenmont",
      "Elsmere",
      "Normansville",
      "Delaware Avenue Corridor",
      "Kenwood Avenue",
      "Bethlehem Center",
      "Cedar Hill",
      "South Bethlehem",
      "Selkirk",
      "Corning Hill",
    ],
    benefits: [
      {
        title: "Protects Older Roof Investments",
        desc: "Killing algae at the root stops granule loss, protecting the value of Delmar's often well-maintained, upscale roofs.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "ARMA-approved soft wash means no high pressure and no voided warranties — important for newer roofs on Delaware Avenue Colonials.",
      },
      {
        title: "Longer-Lasting Results Near the Bluffs",
        desc: "Because we target the algae itself rather than just bleaching the streaks, results hold up longer even in Glenmont and Normansville's higher humidity.",
      },
      {
        title: "Matches Delmar's Well-Kept Curb Appeal",
        desc: "A streak-free roof completes the look on well-manicured Delaware Avenue and Kenwood Avenue properties.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We inspect shingles, flashing, and drainage before quoting, especially around dormers and valleys common on Delmar Colonials.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied from the ground or ladder — no walking on wet or brittle shingles.",
      },
      {
        title: "Gentle Rinse & Gutter Flush",
        desc: "Low-pressure rinse followed by a gutter flush to clear the leaf litter common under Delmar's mature trees.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Delmar?",
        a: "Most Delmar roofs run $499–$1,199 depending on pitch, dormers, and square footage. We give firm, on-site quotes.",
      },
      {
        q: "Will pressure washing damage my roof?",
        a: "Yes — it strips granules and can void your warranty. We only soft-wash Delmar roofs.",
      },
      {
        q: "Why is my roof worse near Glenmont than other parts of town?",
        a: "Proximity to the Hudson bluffs keeps humidity higher there, giving algae more time to establish on north-facing slopes.",
      },
      {
        q: "Do you service my part of Delmar?",
        a: "Yes — Delmar Hamlet, Slingerlands, Glenmont, Elsmere, Normansville, and the Delaware Avenue and Kenwood Avenue corridors.",
      },
      {
        q: "How long will the results last?",
        a: "Because we kill the algae at the root, results typically outlast a bleach-only rinse by a wide margin. Shade and humidity levels affect regrowth speed.",
      },
      {
        q: "Do you clean cedar shake or metal roofs too?",
        a: "Yes, we adjust our approach for cedar shake, metal, and asphalt shingle roofs found throughout Bethlehem's older neighborhoods.",
      },
    ],
    meta: {
      title: "Roof Washing in Delmar, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Delmar, NY. Removes black-streak algae without high pressure. ARMA-approved. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Soft-wash your Delmar siding in the same visit as your roof cleaning.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Clear debris from Delmar's mature tree canopy after a roof wash.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "Restore flexibility to older Delmar shingles and extend usable roof life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Delmar, NY",
        to: "/house-washing-delmar-ny",
        blurb: "Soft-wash siding cleaning for Delmar Colonials and Capes.",
      },
      {
        name: "Concrete Cleaning in Delmar, NY",
        to: "/concrete-cleaning-delmar-ny",
        blurb: "Brick walkway and stamped patio cleaning for Delmar properties.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-delmar-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Delmar",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Delmar, NY · Surface-Cleaner Finish",
      headline: "Concrete, Brick & Paver Cleaning in Delmar, NY",
      subhead:
        "From brick walkways in Slingerlands to stamped patios near the Hudson bluffs, Delmar's upscale hardscaping needs a gentler, more even clean. Our commercial surface cleaner delivers streak-free results, then sealing locks it in.",
    },
    intro: [
      "Delmar's upscale older Colonials and Capes are often paired with equally detailed hardscaping — brick walkways winding through Slingerlands, stamped concrete patios in Glenmont, and driveways shaded most of the day by mature street trees along Delaware Avenue and Kenwood Avenue. That shade keeps moss and dark mildew staining alive on surfaces that never fully dry.",
      "Closer to the Hudson bluffs in Normansville and Glenmont, higher humidity accelerates staining on brick and stamped concrete alike, while winter deicing salt eats away at unsealed surfaces throughout Bethlehem. The result is often blotchy, moss-streaked walkways and patios that don't match the well-kept look of the rest of the property.",
      "We clean Delmar's driveways, brick walkways, and stamped patios with a commercial rotary surface cleaner for even, streak-free results — no wand marks, no zebra stripes. Given how much shade and humidity these surfaces deal with, we strongly recommend sealing afterward to block moss regrowth and salt penetration through the next winter.",
    ],
    localContext: {
      heading: "Delmar Hardscaping Needs a Gentler, More Even Clean",
      body:
        "Between the mature tree shade, Hudson bluff humidity, and the prevalence of brick and stamped concrete rather than plain slab driveways, Delmar's hardscaping requires more careful, detail-oriented cleaning than typical suburban driveways.",
      bullets: [
        {
          title: "Moss & Mildew in Shaded Areas",
          desc: "Brick walkways in Slingerlands and patios tucked under tree canopy stay damp enough for moss to take hold between joints.",
        },
        {
          title: "Hudson Bluff Humidity",
          desc: "Glenmont and Normansville properties see heavier humidity, accelerating dark staining on stamped concrete and brick alike.",
        },
        {
          title: "Winter Salt on Unsealed Surfaces",
          desc: "Bethlehem's winter deicing routine drives salt into unsealed driveways and walkways year after year without protection.",
        },
        {
          title: "Delicate Brick & Stamped Finishes",
          desc: "Unlike plain concrete, brick and stamped patios need adjusted pressure to avoid disturbing joint sand or wearing down decorative texture.",
        },
      ],
    },
    neighborhoods: [
      "Delmar Hamlet",
      "Slingerlands",
      "Glenmont",
      "Elsmere",
      "Normansville",
      "Delaware Avenue Corridor",
      "Kenwood Avenue",
      "Bethlehem Center",
      "Cedar Hill",
      "South Bethlehem",
      "Selkirk",
      "Corning Hill",
    ],
    benefits: [
      {
        title: "No Wand-Mark Streaks",
        desc: "Our rotary surface cleaner covers driveways and patios evenly, avoiding the streaks a standard wand leaves behind.",
      },
      {
        title: "Safe on Brick & Stamped Concrete",
        desc: "We adjust pressure specifically for the brick walkways and stamped patios common throughout Slingerlands and Glenmont.",
      },
      {
        title: "Removes Moss From Shaded Joints",
        desc: "Our treatment lifts moss and mildew from between brick pavers and control joints that stay damp under Delmar's tree canopy.",
      },
      {
        title: "Blocks Salt Damage",
        desc: "Sealing after cleaning helps protect Bethlehem driveways from another season of deicing salt penetration.",
      },
      {
        title: "Matches Delmar's Upscale Look",
        desc: "A freshly cleaned and sealed walkway or patio complements the detailed landscaping typical of Delaware Avenue and Kenwood Avenue homes.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote",
        desc: "We assess the surface type — brick, stamped concrete, or plain slab — and give a firm price on the spot.",
      },
      {
        title: "Pre-Treat & Surface Clean",
        desc: "Spot-treat moss, mildew, and stains, then run the commercial rotary surface cleaner for even coverage without disturbing joint sand.",
      },
      {
        title: "Seal & Walk-Through",
        desc: "Once dry, we apply a sealer suited to brick, stamped concrete, or plain slab, then walk the finished job with you.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Delmar?",
        a: "Pricing depends on surface type and square footage — brick and stamped patios take more time than plain slab. We give firm, on-site quotes.",
      },
      {
        q: "Can you clean brick walkways without disturbing the joint sand?",
        a: "Yes, we adjust pressure specifically for brick and paver joints so we don't blow out the sand between them.",
      },
      {
        q: "Do you seal stamped concrete patios?",
        a: "Yes, and we recommend it given how much shade and humidity Delmar patios deal with, especially near the Hudson bluffs.",
      },
      {
        q: "How do you remove moss from between pavers?",
        a: "We pre-treat with a targeted solution before the surface clean, lifting moss from joints without damaging the brick or sand.",
      },
      {
        q: "Do you service my part of Delmar?",
        a: "Yes — Delmar Hamlet, Slingerlands, Glenmont, Elsmere, Normansville, and the Delaware Avenue and Kenwood Avenue corridors.",
      },
      {
        q: "How often should I clean and seal my Delmar driveway or patio?",
        a: "Every 2–3 years is typical, though heavily shaded brick walkways may need attention more often to keep moss from returning.",
      },
    ],
    meta: {
      title: "Concrete & Brick Cleaning in Delmar, NY | Capital Pro",
      description:
        "Streak-free concrete, brick, and paver cleaning in Delmar, NY. Removes moss, salt stains, and grime, then seals for protection. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash house cleaning with your Delmar hardscape service.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Dedicated cleaning and sealing for the brick and paver walkways common in Slingerlands.",
      },
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Pair a roofline soft-wash with your driveway or patio cleaning visit.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Delmar, NY",
        to: "/house-washing-delmar-ny",
        blurb: "Soft-wash siding cleaning for Delmar Colonials and Capes.",
      },
      {
        name: "Roof Washing in Delmar, NY",
        to: "/roof-washing-delmar-ny",
        blurb: "Shingle-safe algae removal for Delmar rooflines.",
      },
    ],
  },
];
