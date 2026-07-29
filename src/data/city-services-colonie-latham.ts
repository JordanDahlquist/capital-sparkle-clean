import { Home, CloudRain, Layers } from "lucide-react";
import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";
import roofWashingHero from "../assets/service-heroes/service-roof-washing-custom.jpg.asset.json";
import concreteCleaningHero from "../assets/service-heroes/service-concrete-cleaning-sealing.png.asset.json";
import type { CityServiceContent } from "./city-services";

export const CITY_SERVICES_COLONIE_LATHAM: CityServiceContent[] = [
  {
    slug: "house-washing-colonie-ny",
    service: "House Washing",
    city: "Colonie",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Colonie, NY · Soft Wash Specialists",
      headline: "House Washing in Colonie, NY",
      subhead:
        "From Loudonville's mature maples to the ranches lining Albany Shaker Road, Colonie's tree canopy and airport corridor grime team up to stain siding fast. Our soft wash resets it without a scratch.",
    },
    intro: [
      "Colonie is the biggest suburb in the Capital Region, and it shows in the variety of housing stock: mid-century ranches and split-levels off Central Ave, brick colonials tucked into Loudonville, and newer vinyl-sided builds near Boght Corners. Every one of them fights the same enemy — shade from decades-old maples and oaks that keeps siding damp long after a summer storm rolls through.",
      "Add in the flight path from Albany International Airport, and homes near Albany Shaker Road and Osborne Road pick up a faint, sticky jet-exhaust film that regular rain never fully rinses off. Combine that residue with mildew growing in the shadow of a mature tree line, and vinyl and aluminum siding in Newtonville and Shaker Heights can look dingy within a year or two of the last cleaning.",
      "Our Colonie soft-wash treatment uses low-pressure application and professional-grade biocide to break down mildew, algae, and airborne grime at the source — not just blast the surface. It's safe on the aluminum siding common in Roessleville's older homes and the newer vinyl and Hardie board going up along the Route 5 corridor, and it lasts far longer than a pressure-only rinse.",
    ],
    localContext: {
      heading: "Built for Colonie's Housing Stock",
      body:
        "Colonie stretches from the Latham border to the edge of Guilderland, and the housing mix reflects decades of suburban growth. We adjust our detergent blend and dwell time based on siding age, shade cover, and proximity to the airport corridor — not a one-size-fits-all treatment.",
      bullets: [
        {
          title: "Loudonville & Shaker Heights",
          desc: "Large lots with heavy tree canopy trap moisture against brick and painted wood. We treat shaded walls first and extend dwell time to fully kill mildew roots.",
        },
        {
          title: "Newtonville & Roessleville Ranches",
          desc: "Classic mid-century aluminum and vinyl siding responds fast to soft-wash — we dial pressure down to avoid denting older aluminum panels.",
        },
        {
          title: "Albany Shaker Road & Airport Corridor",
          desc: "Homes near the flight path collect a fine exhaust film mixed with pollen. Our detergent cuts through it without staining trim or gutters.",
        },
        {
          title: "Boght Corners & Central Ave Corridor",
          desc: "Busier roads mean more road film and dust settling on siding. We pre-rinse thoroughly before treatment so grit doesn't scratch the surface.",
        },
      ],
    },
    neighborhoods: [
      "Loudonville",
      "Newtonville",
      "Roessleville",
      "Shaker Heights",
      "Boght Corners",
      "Maplewood",
      "Latham Corners",
      "Menands border",
      "Central Ave corridor",
      "Albany Shaker Road",
      "Wolf Road area",
      "Cohoes border",
    ],
    benefits: [
      {
        title: "Cuts Through Airport Corridor Film",
        desc: "Homes near Albany Shaker Road and Albany International Airport collect a fine sticky residue that plain rain won't remove. Our soft-wash detergent breaks it down completely.",
      },
      {
        title: "Safe for Aluminum & Vinyl Alike",
        desc: "Colonie's housing stock spans 1950s aluminum-sided ranches to modern vinyl colonials. We calibrate pressure and chemical strength for each.",
      },
      {
        title: "Kills Shade-Grown Mildew for Good",
        desc: "Loudonville and Shaker Heights lots with mature tree cover grow mildew in the shadows year-round. Our biocide kills it at the root, not just the surface color.",
      },
      {
        title: "10+ Years Serving Colonie Homeowners",
        desc: "We know the difference between a Newtonville ranch and a Loudonville colonial, and we quote and clean accordingly — no guesswork, no franchise script.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Colonie",
        desc: "We walk the exterior, check siding type and shade exposure, and give a firm price — most calls get a same-day response.",
      },
      {
        title: "Pre-Rinse, Treat, Soft-Wash",
        desc: "Cover landscaping, pre-rinse road grime, apply biocide detergent, let it dwell, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walkthrough",
        desc: "Hand-scrub entryways, light fixtures, and porch columns, then walk the property with you before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Colonie?",
        a: "Most Colonie single-family homes run $349–$649 depending on size and siding condition. Larger Loudonville colonials may run higher. We always quote firm, on-site.",
      },
      {
        q: "Will the soft-wash damage my aluminum siding?",
        a: "No. Many Roessleville and Newtonville homes still have original aluminum siding. We use low pressure and siding-safe detergent that won't dent or discolor it.",
      },
      {
        q: "Do you clean homes near the airport?",
        a: "Yes — we regularly clean the exhaust film buildup on homes near Albany Shaker Road and the airport corridor. It's one of the most common jobs we get in that area.",
      },
      {
        q: "How long does a Colonie house wash take?",
        a: "Most homes take 2–4 hours. Larger properties in Loudonville or Shaker Heights with more square footage can take longer.",
      },
      {
        q: "Do you service all of Colonie?",
        a: "Yes — Loudonville, Newtonville, Roessleville, Shaker Heights, Boght Corners, the Central Ave corridor, and everywhere in between.",
      },
      {
        q: "How often should I wash my house in Colonie?",
        a: "Once a year is typical. Homes under heavy tree cover in Loudonville or Shaker Heights often benefit from annual cleaning to stay ahead of shaded mildew growth.",
      },
    ],
    meta: {
      title: "House Washing in Colonie, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Colonie, NY — Loudonville, Newtonville, Shaker Heights & more. Removes mildew and airport corridor film. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Clear black streaks from Colonie rooflines without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Remove leaves and black streaking common under Colonie's tree canopy.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Even, streak-free driveway cleaning for Colonie's large blacktop and concrete drives.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Colonie, NY",
        to: "/roof-washing-colonie-ny",
        blurb: "Shingle-safe soft-wash for Colonie rooflines.",
      },
      {
        name: "Concrete Cleaning in Colonie, NY",
        to: "/concrete-cleaning-colonie-ny",
        blurb: "Driveways and walkways cleaned evenly, wand-mark free.",
      },
    ],
  },
  {
    slug: "roof-washing-colonie-ny",
    service: "Roof Washing",
    city: "Colonie",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Colonie, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Colonie, NY",
      subhead:
        "Black streaks on Colonie roofs are a living algae feeding on your shingles — common on shaded rooflines throughout Loudonville and Shaker Heights. We kill it with a shingle-safe soft wash.",
    },
    intro: [
      "Drive through Loudonville or the older sections of Newtonville and you'll see it on nearly every third roof: dark streaking running down the north-facing slope, usually worse under a canopy of mature maples. That's gloeocapsa magma, a algae that feeds on the limestone filler in asphalt shingles and spreads fastest where shade keeps the roof damp.",
      "Colonie's tree-heavy residential streets — especially around Shaker Heights and the older ranch neighborhoods off Central Ave — create exactly the shaded, slow-drying conditions this algae needs. Add in humid summers pushed up from the Hudson and Mohawk river valleys, and a roof that goes unwashed for five or six years can end up losing shingle granules well before its time.",
      "Pressure washing strips the stains but also strips warranty coverage and granules right along with it. Our ARMA-approved soft wash applies a professional cleaning solution from the ground or ladder, kills the algae on contact, and rinses at low pressure — no foot traffic on brittle shingles, no voided warranty, and streaks that stay gone far longer than a pressure rinse.",
    ],
    localContext: {
      heading: "Why Colonie Roofs Streak So Fast",
      body:
        "Colonie sits between the Mohawk and Hudson river valleys, and its mature suburban tree canopy — especially in Loudonville and Shaker Heights — keeps rooflines shaded and damp well after a rain. That combination is a near-perfect algae incubator.",
      bullets: [
        {
          title: "Heavy Suburban Tree Canopy",
          desc: "Decades-old maples and oaks in Loudonville and Shaker Heights shade north-facing roof slopes for most of the day, slowing dry-out time.",
        },
        {
          title: "River Valley Humidity",
          desc: "Colonie sits between the Hudson and Mohawk valleys, keeping summer air damp enough for algae to thrive on asphalt shingles.",
        },
        {
          title: "Aging Ranch & Split-Level Roofs",
          desc: "Many mid-century homes off Central Ave and in Newtonville still carry original or first-replacement shingles now well past the algae-resistant window.",
        },
        {
          title: "Airport Corridor Grime",
          desc: "Homes near Albany Shaker Road pick up a fine airborne film that mixes with algae growth, darkening rooflines faster than untreated shingles nearby.",
        },
      ],
    },
    neighborhoods: [
      "Loudonville",
      "Newtonville",
      "Roessleville",
      "Shaker Heights",
      "Boght Corners",
      "Maplewood",
      "Latham Corners",
      "Central Ave corridor",
      "Albany Shaker Road",
      "Wolf Road area",
      "Menands border",
      "Cohoes border",
    ],
    benefits: [
      {
        title: "Stops Granule Loss Before It Starts",
        desc: "Killing algae at the root protects shingle granules — the layer that actually shields your roof from UV and weather damage.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "ARMA-approved, low-pressure soft wash. No pressure washing, no walking on brittle shingles, no voided manufacturer warranty.",
      },
      {
        title: "Built for Colonie's Shaded Roofs",
        desc: "We know which streets — Loudonville, Shaker Heights, the ranch blocks off Central Ave — need extra dwell time because of tree cover.",
      },
      {
        title: "Boosts Curb Appeal Fast",
        desc: "A streaked roof reads as 'old roof' to buyers and neighbors alike. Cleaning it often looks like a full roof replacement at a fraction of the cost.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We check shingle condition, flashing, and drainage before quoting so you know exactly what you're paying for.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied from ladder or ground — never walking on wet or brittle shingles.",
      },
      {
        title: "Low-Pressure Rinse & Gutter Check",
        desc: "Gentle rinse followed by a quick gutter and downspout flush so runoff doesn't clog after the wash.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Colonie?",
        a: "Most Colonie roofs run $499–$1,199 depending on pitch, height, and square footage. We give a firm, on-site quote before any work starts.",
      },
      {
        q: "Is pressure washing bad for my roof?",
        a: "Yes — it strips granules and often voids shingle warranties. We use ARMA-approved soft-wash exclusively on every Colonie roof.",
      },
      {
        q: "Why do Loudonville roofs streak more than others?",
        a: "Mature tree canopy keeps those rooflines shaded and damp longer after rain, which is exactly what roof algae needs to spread.",
      },
      {
        q: "Will you walk on my roof?",
        a: "Rarely, and only with fall protection when necessary. Most Colonie roofs are cleaned entirely from the ground or ladder.",
      },
      {
        q: "Do you service all of Colonie?",
        a: "Yes — Loudonville, Newtonville, Roessleville, Shaker Heights, Boght Corners, the Central Ave corridor, and the areas near Albany Shaker Road.",
      },
      {
        q: "How often should I have my roof washed?",
        a: "Every 2-3 years is typical for Colonie roofs, sooner for heavily shaded properties in Loudonville or Shaker Heights.",
      },
    ],
    meta: {
      title: "Roof Washing in Colonie, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Colonie, NY. Removes black-streak algae common under Loudonville and Shaker Heights tree cover. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding clean with your Colonie roof wash.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush granules and debris out after your roof wash.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "Restore flexibility to older Colonie shingles and extend usable roof life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Colonie, NY",
        to: "/house-washing-colonie-ny",
        blurb: "Full soft-wash siding clean for Colonie homes.",
      },
      {
        name: "Concrete Cleaning in Colonie, NY",
        to: "/concrete-cleaning-colonie-ny",
        blurb: "Restore Colonie driveways and walkways after winter salt damage.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-colonie-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Colonie",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Colonie, NY · Surface-Cleaner Finish",
      headline: "Concrete Cleaning & Sealing in Colonie, NY",
      subhead:
        "Colonie's big blacktop and concrete driveways take a beating from winter road salt and Central Ave corridor grime. Our surface-cleaner leaves an even, streak-free finish — then we seal it to last.",
    },
    intro: [
      "Colonie homes tend to have larger driveways than their city counterparts — long concrete aprons leading to two-car garages on Loudonville lots, wide blacktop drives off Central Ave, and poured patios behind the ranches lining Newtonville and Roessleville. All that extra surface area means more room for oil drips, rust rings, and the gray haze that builds up from years of exposure.",
      "Winters here are hard on concrete. Colonie's town and county crews salt heavily along the Route 5 corridor and residential feeder streets alike, and that salt gets tracked straight onto driveways and walkways. Combined with freeze-thaw cycles, unsealed concrete pits and stains fast — often within just a few winters.",
      "We clean Colonie concrete with commercial rotary surface cleaners, the same equipment used on retail parking lots, so there are no wand streaks or uneven patches. After cleaning, we strongly recommend sealing — it blocks salt penetration before the next winter and keeps the surface looking freshly cleaned 3-4 times longer.",
    ],
    localContext: {
      heading: "Colonie Concrete Faces a Rough Winter",
      body:
        "Between the Central Ave corridor's road salt, the shade from mature trees keeping walkways damp longer, and decades-old driveways throughout Newtonville and Roessleville, Colonie concrete ages faster than it should without regular cleaning and sealing.",
      bullets: [
        {
          title: "Heavy Road Salt Exposure",
          desc: "Colonie's busy corridors, including Central Ave and Route 5, mean more salt tracked onto driveways each winter — sealing after cleaning is critical.",
        },
        {
          title: "Large Driveway Footprints",
          desc: "Loudonville and Shaker Heights properties often have oversized concrete and blacktop drives, which means more surface area collecting oil and grime.",
        },
        {
          title: "Shaded, Slow-Drying Walkways",
          desc: "Mature tree cover throughout Colonie keeps walkways and patios damp longer, encouraging moss and algae growth on concrete.",
        },
        {
          title: "Aging Mid-Century Driveways",
          desc: "Many Newtonville and Roessleville homes still have original poured driveways decades old — prime candidates for restorative cleaning and sealing.",
        },
      ],
    },
    neighborhoods: [
      "Loudonville",
      "Newtonville",
      "Roessleville",
      "Shaker Heights",
      "Boght Corners",
      "Maplewood",
      "Latham Corners",
      "Central Ave corridor",
      "Route 5 corridor",
      "Albany Shaker Road",
      "Wolf Road area",
      "Menands border",
    ],
    benefits: [
      {
        title: "No Wand Streaks or Zebra Marks",
        desc: "Commercial rotary surface cleaners deliver even pressure across your entire Colonie driveway — no tiger stripes from an amateur wand pass.",
      },
      {
        title: "Blocks Next Winter's Salt Damage",
        desc: "Sealing after cleaning protects against Colonie's aggressive road-salt exposure along Central Ave and Route 5.",
      },
      {
        title: "Restores Large Driveways Fast",
        desc: "Loudonville and Shaker Heights' oversized drives are cleaned efficiently with commercial-grade equipment — no all-day DIY project.",
      },
      {
        title: "Extends Concrete Lifespan",
        desc: "Removing trapped moisture, oil, and grime before sealing helps prevent the pitting and spalling common on aging Newtonville driveways.",
      },
    ],
    process: [
      {
        title: "Free On-Site Estimate",
        desc: "We measure your driveway, walkway, or patio and assess staining before quoting a firm price.",
      },
      {
        title: "Commercial Surface Cleaning",
        desc: "Rotary surface cleaner lifts embedded dirt, oil, and salt residue evenly across the entire slab.",
      },
      {
        title: "Optional Sealing",
        desc: "Once fully dry, we apply a penetrating sealer that blocks salt and moisture intrusion through the next Colonie winter.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Colonie?",
        a: "Most driveways run $199–$499 depending on size, with sealing priced separately. Larger Loudonville drives may run higher. We quote on-site, firm price.",
      },
      {
        q: "Do I really need to seal after cleaning?",
        a: "Given Colonie's heavy winter salting along Central Ave and Route 5, yes — sealing dramatically extends how long the clean look lasts and protects against pitting.",
      },
      {
        q: "Can you remove oil stains from my driveway?",
        a: "In most cases, yes. Our commercial detergents and surface cleaners lift the majority of oil, rust, and organic staining common on Colonie driveways.",
      },
      {
        q: "Will the cleaning leave streaks?",
        a: "No. We use rotary surface cleaners for even, edge-to-edge coverage — no wand marks or uneven patches.",
      },
      {
        q: "Do you clean patios and walkways too?",
        a: "Yes — driveways, walkways, pool patios, and pavers throughout Colonie, including Loudonville and Shaker Heights.",
      },
      {
        q: "How often should I clean and seal my Colonie driveway?",
        a: "Cleaning annually and resealing every 2–3 years keeps concrete protected through repeated Capital Region freeze-thaw cycles.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Colonie, NY | Capital Pro",
      description:
        "Concrete driveway, walkway & patio cleaning in Colonie, NY. Removes road salt staining, seals against winter damage. Free on-site quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Combine a full exterior soft-wash with your Colonie driveway cleaning.",
      },
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Clear black-streak algae from Colonie rooflines the same visit.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore paver patios and walkways common in Loudonville backyards.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Colonie, NY",
        to: "/house-washing-colonie-ny",
        blurb: "Full soft-wash siding clean for Colonie homes.",
      },
      {
        name: "Roof Washing in Colonie, NY",
        to: "/roof-washing-colonie-ny",
        blurb: "Shingle-safe soft wash for shaded Colonie rooflines.",
      },
    ],
  },
  {
    slug: "house-washing-latham-ny",
    service: "House Washing",
    city: "Latham",
    region: "Capital Region, NY",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Latham, NY · Soft Wash Specialists",
      headline: "House Washing in Latham, NY",
      subhead:
        "Between the Hudson-Mohawk confluence humidity and Route 9's commercial corridor grime, Latham siding gets hit from two directions. Our soft wash resets it without harming paint or vinyl.",
    },
    intro: [
      "Latham sits right where the Hudson and Mohawk rivers nearly meet, and that geography means one thing for homeowners: humidity that lingers. Colonial-style homes built in the 1990s and 2000s near Latham Circle, along with the older 1960s and 70s ranches tucked into Verdoy and Boght, all deal with the same slow-drying summer air that lets mildew take hold on siding, especially on shaded north walls near mature tree lines.",
      "Add to that the commercial corridor along Route 9, where truck traffic and parking-lot runoff kick up a fine layer of road grime that settles onto nearby homes, and you've got siding that looks dingy well before you'd expect from age alone. Homes backing up to wooded cul-de-sacs near Shaker Road often show a different problem — heavy green algae growth from constant shade rather than road film.",
      "Our soft-wash approach treats both conditions correctly: low-pressure application with a professional biocide breaks down mildew and algae at the root along shaded walls, while a separate detergent cuts through the road film picked up near Route 9 and Latham Circle. It's safe for the vinyl and Hardie siding common on newer colonials, and gentle enough for the older aluminum still found on Verdoy's original ranches.",
    ],
    localContext: {
      heading: "Built for Latham's Mix of Old and New",
      body:
        "Latham blends established 1960s-70s neighborhoods with newer colonial developments, all sitting in a humidity pocket created by the Hudson-Mohawk confluence. We tailor our wash to each — road film near Route 9, shade-grown mildew in wooded cul-de-sacs, and everything in between.",
      bullets: [
        {
          title: "Latham Circle & Route 9 Corridor",
          desc: "Commercial traffic and parking-lot runoff coat nearby siding in a fine grime film. Our detergent cuts through it without staining trim.",
        },
        {
          title: "Verdoy & Boght's Older Ranches",
          desc: "Original aluminum and early vinyl siding from the 1960s-70s needs lower pressure and a gentler chemical mix to avoid damage.",
        },
        {
          title: "Wooded Cul-de-Sacs off Shaker Road",
          desc: "Heavy tree cover creates shaded, damp walls where algae thrives year-round. We extend dwell time on these homes for full root-kill.",
        },
        {
          title: "Newer Colonials Near Newtonville Edge",
          desc: "Vinyl and Hardie board siding responds fast and evenly to soft wash — ideal for pre-listing or seasonal refresh.",
        },
      ],
    },
    neighborhoods: [
      "Latham Circle",
      "Verdoy",
      "Boght",
      "Shaker Road area",
      "Newtonville edge",
      "Maplewood",
      "Boght Corners",
      "Cohoes border",
      "Watervliet border",
      "Wolf Road area",
      "Loudonville border",
      "Vischer Ferry area",
    ],
    benefits: [
      {
        title: "Cuts Through Route 9 Corridor Film",
        desc: "Homes near Latham Circle and the commercial strip pick up road grime that plain rain won't remove. Our detergent breaks it down completely.",
      },
      {
        title: "Kills Shade-Grown Algae in Wooded Areas",
        desc: "Cul-de-sac homes near Shaker Road with heavy tree cover get thorough treatment that kills algae at the root, not just the surface color.",
      },
      {
        title: "Gentle on Older Verdoy Ranches",
        desc: "We calibrate pressure and chemical strength down for 1960s-70s aluminum siding so nothing gets dented or discolored.",
      },
      {
        title: "10+ Years Serving the Latham Area",
        desc: "We know the difference between a Route 9 corridor home and a Verdoy ranch, and we treat each correctly the first time.",
      },
    ],
    process: [
      {
        title: "Free On-Site Quote in Latham",
        desc: "We inspect siding type, shade exposure, and proximity to Route 9 traffic before giving a firm, same-day price.",
      },
      {
        title: "Pre-Rinse, Treat, Soft-Wash",
        desc: "Cover landscaping, pre-rinse road grime, apply biocide detergent, let it dwell, then rinse top-to-bottom at low pressure.",
      },
      {
        title: "Detail Pass & Walkthrough",
        desc: "Hand-scrub entryways and trim, then walk the property with you to confirm everything looks right before we leave.",
      },
    ],
    faqs: [
      {
        q: "How much does house washing cost in Latham?",
        a: "Most Latham single-family homes run $349–$649 depending on size and siding condition. We always give a firm, on-site quote.",
      },
      {
        q: "Will the soft-wash harm my older aluminum siding?",
        a: "No. Many Verdoy and Boght ranches still have original aluminum siding. We use low pressure and siding-safe detergent that won't dent or discolor it.",
      },
      {
        q: "Do you clean homes near the Route 9 corridor?",
        a: "Yes — road film buildup near Latham Circle and Route 9 is one of the most common jobs we handle in this area.",
      },
      {
        q: "How long does a Latham house wash take?",
        a: "Most homes take 2–4 hours depending on size and siding condition.",
      },
      {
        q: "Do you service all of Latham?",
        a: "Yes — Latham Circle, Verdoy, Boght, the Shaker Road area, and everywhere in between.",
      },
      {
        q: "How often should I wash my house in Latham?",
        a: "Once a year is typical. Homes in wooded cul-de-sacs near Shaker Road often benefit from annual cleaning to stay ahead of shade-grown algae.",
      },
    ],
    meta: {
      title: "House Washing in Latham, NY | Capital Pro Pressure Washing",
      description:
        "Soft-wash house washing in Latham, NY — Latham Circle, Verdoy, Boght & more. Removes mildew and Route 9 corridor grime. Free quotes.",
    },
    relatedServices: [
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Clear black streaks from Latham rooflines without damaging shingles.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Remove leaves and streaking common under Latham's tree-lined streets.",
      },
      {
        name: "Concrete Cleaning",
        to: "/$service",
        slug: "concrete-cleaning-sealing",
        blurb: "Even, streak-free cleaning for Latham's concrete aprons and pool patios.",
      },
    ],
    relatedCityLinks: [
      {
        name: "Roof Washing in Latham, NY",
        to: "/roof-washing-latham-ny",
        blurb: "Shingle-safe soft-wash for Latham rooflines.",
      },
      {
        name: "Concrete Cleaning in Latham, NY",
        to: "/concrete-cleaning-latham-ny",
        blurb: "Driveways, walkways, and pool patios cleaned evenly.",
      },
    ],
  },
  {
    slug: "roof-washing-latham-ny",
    service: "Roof Washing",
    city: "Latham",
    region: "Capital Region, NY",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Latham, NY · ARMA-Approved Soft Wash",
      headline: "Roof Washing in Latham, NY",
      subhead:
        "The humidity from the Hudson-Mohawk confluence keeps Latham rooflines damp longer than most of the Capital Region — perfect conditions for the black-streak algae eating your shingles. We remove it safely.",
    },
    intro: [
      "Latham sits almost exactly where the Hudson and Mohawk rivers converge, and that geography traps humidity in a way few other Capital Region towns experience. Drive through the wooded cul-de-sacs off Shaker Road or the older neighborhoods in Verdoy and you'll spot the telltale dark streaking on north-facing roof slopes — gloeocapsa magma, the algae responsible for those stains, feeding on the limestone in asphalt shingles.",
      "The confluence humidity means roofs here simply don't dry out as fast after a storm compared to drier parts of the region. Combine that with mature tree cover throughout Verdoy and the Newtonville-edge neighborhoods, and algae gets a running start on shaded slopes that can spread across an entire roof within a few years if left untreated.",
      "Pressure washing might strip the visible streaks, but it also strips granules and often voids shingle warranties. Our ARMA-approved soft wash applies a professional-grade solution from the ground or ladder, kills the algae at its root, and rinses gently — protecting your roof's lifespan while restoring the clean look homeowners expect throughout Latham.",
    ],
    localContext: {
      heading: "Why Latham Roofs Streak So Fast",
      body:
        "Sitting at the meeting point of the Hudson and Mohawk rivers, Latham holds onto summer humidity longer than most surrounding towns. Paired with heavy tree cover in older neighborhoods, that moisture creates ideal conditions for roof algae to take hold and spread.",
      bullets: [
        {
          title: "Hudson-Mohawk Confluence Humidity",
          desc: "Latham's geography traps moist air, keeping rooflines damp well after storms pass through — prime algae territory.",
        },
        {
          title: "Wooded Cul-de-Sacs Off Shaker Road",
          desc: "Heavy tree canopy shades entire roof slopes for much of the day, slowing dry-out time and accelerating algae growth.",
        },
        {
          title: "Aging Verdoy & Boght Roofs",
          desc: "Many 1960s-70s homes carry shingles well past their algae-resistant window, making them prime candidates for streaking.",
        },
        {
          title: "Route 9 Corridor Grime",
          desc: "Homes closer to the commercial strip pick up airborne particulates that mix with algae growth, darkening roofs faster.",
        },
      ],
    },
    neighborhoods: [
      "Latham Circle",
      "Verdoy",
      "Boght",
      "Shaker Road area",
      "Newtonville edge",
      "Maplewood",
      "Boght Corners",
      "Cohoes border",
      "Watervliet border",
      "Wolf Road area",
      "Loudonville border",
      "Vischer Ferry area",
    ],
    benefits: [
      {
        title: "Protects Against Confluence Humidity",
        desc: "Killing algae at the root stops granule loss before Latham's persistent river-valley moisture can accelerate roof damage.",
      },
      {
        title: "Shingle-Warranty Safe",
        desc: "ARMA-approved, low-pressure soft wash. No pressure washing, no walking on brittle shingles, no voided manufacturer warranty.",
      },
      {
        title: "Built for Latham's Wooded Neighborhoods",
        desc: "We know which streets near Shaker Road and Verdoy need extra dwell time because of dense tree cover.",
      },
      {
        title: "Instant Curb Appeal",
        desc: "A streaked roof reads as old and neglected. Cleaning it restores a like-new appearance at a fraction of replacement cost.",
      },
    ],
    process: [
      {
        title: "Free Roof Inspection",
        desc: "We check shingle condition, flashing, and drainage before quoting, so you know exactly what you're paying for.",
      },
      {
        title: "Soft-Wash Application",
        desc: "ARMA-approved solution applied from ladder or ground — never walking on wet or brittle shingles.",
      },
      {
        title: "Low-Pressure Rinse & Gutter Check",
        desc: "Gentle rinse followed by a quick gutter and downspout flush so runoff doesn't clog after the wash.",
      },
    ],
    faqs: [
      {
        q: "How much does roof washing cost in Latham?",
        a: "Most Latham roofs run $499–$1,199 depending on pitch, height, and square footage. We give a firm, on-site quote before starting any work.",
      },
      {
        q: "Why do Latham roofs streak more than in drier towns?",
        a: "The Hudson-Mohawk confluence keeps humidity higher here, so roofs stay damp longer after rain — exactly what roof algae needs to spread.",
      },
      {
        q: "Is pressure washing bad for my roof?",
        a: "Yes — it strips granules and often voids shingle warranties. We use ARMA-approved soft-wash exclusively on every Latham roof.",
      },
      {
        q: "Will you walk on my roof?",
        a: "Rarely, and only with fall protection when necessary. Most Latham roofs are cleaned entirely from the ground or ladder.",
      },
      {
        q: "Do you service all of Latham?",
        a: "Yes — Latham Circle, Verdoy, Boght, the Shaker Road area, and the neighborhoods near the Newtonville edge.",
      },
      {
        q: "How often should I have my roof washed?",
        a: "Every 2-3 years is typical for Latham roofs, sooner for wooded cul-de-sac properties near Shaker Road.",
      },
    ],
    meta: {
      title: "Roof Washing in Latham, NY | Capital Pro Pressure Washing",
      description:
        "Shingle-safe soft-wash roof cleaning in Latham, NY. Removes black-streak algae fed by Hudson-Mohawk confluence humidity. Free quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Bundle a soft-wash siding clean with your Latham roof wash.",
      },
      {
        name: "Gutter Cleaning & Whitening",
        to: "/$service",
        slug: "gutter-cleaning",
        blurb: "Flush granules and debris out after your roof wash.",
      },
      {
        name: "Roof Rejuvenation",
        to: "/$service",
        slug: "roof-rejuvenation",
        blurb: "Restore flexibility to older Latham shingles and extend usable roof life.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Latham, NY",
        to: "/house-washing-latham-ny",
        blurb: "Full soft-wash siding clean for Latham homes.",
      },
      {
        name: "Concrete Cleaning in Latham, NY",
        to: "/concrete-cleaning-latham-ny",
        blurb: "Restore Latham driveways and pool patios after winter salt damage.",
      },
    ],
  },
  {
    slug: "concrete-cleaning-latham-ny",
    service: "Concrete Cleaning & Sealing",
    city: "Latham",
    region: "Capital Region, NY",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Latham, NY · Surface-Cleaner Finish",
      headline: "Concrete Cleaning & Sealing in Latham, NY",
      subhead:
        "Between Route 9 corridor grime and Hudson-Mohawk confluence humidity, Latham's concrete aprons and pool patios darken fast. Our surface-cleaner leaves an even finish — then we seal it against the next winter.",
    },
    intro: [
      "Latham homes tend to have a distinctive concrete footprint: wide aprons leading into two-car garages on the newer colonials near Latham Circle, and in-ground pool patios common throughout the neighborhoods off Shaker Road and Newtonville's edge. All that surface area collects oil drips, rust rings, and the gray haze of years of exposure to both weather and commercial-corridor traffic.",
      "The humidity from the Hudson-Mohawk confluence doesn't just affect roofs and siding — it keeps concrete surfaces damp longer too, encouraging moss and algae growth in shaded spots along walkways in Verdoy and Boght. Meanwhile, heavy salting along Route 9 and connecting roads tracks straight onto driveways every winter, and freeze-thaw cycles work that salt deep into unsealed concrete.",
      "We clean Latham concrete with commercial rotary surface cleaners for even, streak-free results across driveways, walkways, and pool decks alike. After cleaning, sealing is essential here — it blocks salt penetration before the next winter and keeps pool patios looking fresh through the humid summer months.",
    ],
    localContext: {
      heading: "Latham Concrete Faces Humidity and Salt",
      body:
        "Latham's location at the Hudson-Mohawk confluence and its position along the Route 9 commercial corridor mean concrete here deals with both extra moisture and heavier salt exposure than towns further from the rivers.",
      bullets: [
        {
          title: "Route 9 Corridor Salt & Grime",
          desc: "Heavy commercial traffic near Latham Circle means more salt and road film tracked onto residential driveways each winter.",
        },
        {
          title: "Pool Patios & Decks",
          desc: "In-ground pools are common throughout Latham's newer developments, and surrounding concrete decks need regular cleaning to prevent slip-hazard algae buildup.",
        },
        {
          title: "Confluence Humidity",
          desc: "Extra moisture in the air keeps shaded walkways in Verdoy and Boght damp longer, encouraging moss growth between expansion joints.",
        },
        {
          title: "Aging Driveways in Older Sections",
          desc: "1960s-70s neighborhoods off Shaker Road often have original poured concrete now decades old and due for restorative cleaning and sealing.",
        },
      ],
    },
    neighborhoods: [
      "Latham Circle",
      "Verdoy",
      "Boght",
      "Shaker Road area",
      "Newtonville edge",
      "Maplewood",
      "Boght Corners",
      "Route 9 corridor",
      "Cohoes border",
      "Watervliet border",
      "Wolf Road area",
      "Vischer Ferry area",
    ],
    benefits: [
      {
        title: "No Wand Streaks or Zebra Marks",
        desc: "Commercial rotary surface cleaners deliver even pressure across your entire Latham driveway or pool patio — no tiger stripes.",
      },
      {
        title: "Blocks Next Winter's Salt Damage",
        desc: "Sealing after cleaning protects against Latham's heavy road-salt exposure along the Route 9 corridor.",
      },
      {
        title: "Keeps Pool Decks Slip-Safe",
        desc: "Regular cleaning removes the algae and moss film that builds up on shaded pool patios throughout Latham's humid summers.",
      },
      {
        title: "Extends Concrete Lifespan",
        desc: "Removing trapped moisture and grime before sealing helps prevent the pitting common on aging Verdoy and Boght driveways.",
      },
    ],
    process: [
      {
        title: "Free On-Site Estimate",
        desc: "We measure your driveway, walkway, or pool patio and assess staining before quoting a firm price.",
      },
      {
        title: "Commercial Surface Cleaning",
        desc: "Rotary surface cleaner lifts embedded dirt, oil, and salt residue evenly across the entire slab.",
      },
      {
        title: "Optional Sealing",
        desc: "Once fully dry, we apply a penetrating sealer that blocks salt and moisture intrusion through the next Latham winter.",
      },
    ],
    faqs: [
      {
        q: "How much does concrete cleaning cost in Latham?",
        a: "Most driveways run $199–$499 depending on size, with sealing priced separately. Pool patios are quoted based on square footage.",
      },
      {
        q: "Do I need to seal after cleaning?",
        a: "Given Latham's heavy winter salting along Route 9, yes — sealing dramatically extends how long the clean look lasts and protects against pitting.",
      },
      {
        q: "Can you clean around my pool patio?",
        a: "Yes — pool decks are one of our most common Latham jobs, and we take care around pool equipment and coping during cleaning.",
      },
      {
        q: "Will the cleaning leave streaks?",
        a: "No. We use rotary surface cleaners for even, edge-to-edge coverage — no wand marks or uneven patches.",
      },
      {
        q: "Do you service all of Latham?",
        a: "Yes — Latham Circle, Verdoy, Boght, the Shaker Road area, and the neighborhoods along Route 9.",
      },
      {
        q: "How often should I clean and seal my Latham driveway?",
        a: "Cleaning annually and resealing every 2-3 years keeps concrete protected through repeated freeze-thaw cycles and humidity exposure.",
      },
    ],
    meta: {
      title: "Concrete Cleaning & Sealing in Latham, NY | Capital Pro",
      description:
        "Concrete driveway, walkway & pool patio cleaning in Latham, NY. Removes salt staining, seals against winter damage. Free on-site quotes.",
    },
    relatedServices: [
      {
        name: "House Washing",
        to: "/$service",
        slug: "house-washing",
        blurb: "Combine a full exterior soft-wash with your Latham driveway cleaning.",
      },
      {
        name: "Roof Washing",
        to: "/$service",
        slug: "roof-washing",
        blurb: "Clear black-streak algae from Latham rooflines the same visit.",
      },
      {
        name: "Paver Cleaning & Sealing",
        to: "/$service",
        slug: "paver-cleaning-sealing",
        blurb: "Restore paver patios common in Latham's newer colonial developments.",
      },
    ],
    relatedCityLinks: [
      {
        name: "House Washing in Latham, NY",
        to: "/house-washing-latham-ny",
        blurb: "Full soft-wash siding clean for Latham homes.",
      },
      {
        name: "Roof Washing in Latham, NY",
        to: "/roof-washing-latham-ny",
        blurb: "Shingle-safe soft wash for humidity-prone Latham rooflines.",
      },
    ],
  },
];
