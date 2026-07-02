import {
  Home,
  CloudRain,
  Grid3x3,
  Layers,
  Rows3,
  Droplets,
  Shield,
  AppWindow,
  Fence,
  Snowflake,
  Lightbulb,
  Building2,
  type LucideIcon,
} from "lucide-react";
import houseWashingHero from "../assets/service-heroes/service-house-washing.png.asset.json";
import roofWashingHero from "../assets/service-heroes/service-roof-washing.png.asset.json";
import paverCleaningHero from "../assets/service-heroes/service-paver-cleaning-sealing.png.asset.json";
import concreteCleaningHero from "../assets/service-heroes/service-concrete-cleaning-sealing.png.asset.json";
import deckPatioHero from "../assets/service-heroes/service-deck-patio-cleaning.png.asset.json";
import gutterCleaningHero from "../assets/service-heroes/service-gutter-cleaning.png.asset.json";
import gutterGuardsHero from "../assets/service-heroes/service-gutter-guards.png.asset.json";
import windowCleaningHero from "../assets/service-heroes/service-window-cleaning.png.asset.json";
import fenceCleaningHero from "../assets/service-heroes/service-fence-cleaning.png.asset.json";
import holidayLightingHero from "../assets/service-heroes/service-holiday-lighting.png.asset.json";
import permanentLightingHero from "../assets/service-heroes/service-permanent-lighting.png.asset.json";
import commercialWashingHero from "../assets/service-heroes/service-commercial-pressure-washing.png.asset.json";

export type ServiceContent = {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroImage: string;
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
  };
  intro: string;
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  meta: { title: string; description: string };
};

export const SERVICES: ServiceContent[] = [
  {
    slug: "house-washing",
    name: "House Washing",
    icon: Home,
    heroImage: houseWashingHero.url,
    hero: {
      eyebrow: "Soft Wash Specialists",
      headline: "House Washing That Actually Lifts the Grime",
      subhead:
        "Low-pressure soft wash cleans siding, brick, stucco, and trim without damage — killing mold, mildew, algae, and cobwebs at the root.",
    },
    intro:
      "A dirty house isn't just cosmetic — mildew and algae eat away at siding and paint. Our soft-wash system uses professional detergents and low pressure to safely restore your home's curb appeal in a single afternoon.",
    benefits: [
      { title: "Kills Mold & Algae at the Root", desc: "Professional biocides clean deeper than pressure alone — results last 3–5× longer." },
      { title: "Safe on Every Surface", desc: "Vinyl, wood, brick, stucco, painted trim — we adjust pressure and mix for each material." },
      { title: "Boosts Curb Appeal Instantly", desc: "One of the highest-ROI upgrades before listing a home. Neighbors notice." },
      { title: "Protects Your Investment", desc: "Removes contaminants that eat siding, shingles, and paint over time." },
    ],
    process: [
      { title: "Free On-Site Quote", desc: "We measure, inspect, and give a firm price — no surprises." },
      { title: "Pre-Treat & Rinse", desc: "Cover plants, apply eco-safe detergent, dwell, then low-pressure rinse top to bottom." },
      { title: "Detail Pass", desc: "Hand-scrub high-traffic spots, sills, and doors. Walk the home with you before we leave." },
    ],
    faqs: [
      { q: "Will it damage my siding or plants?", a: "No. We use soft-wash pressure (lower than a garden hose) and rinse landscaping before, during, and after." },
      { q: "How long does it take?", a: "Most single-family homes take 2–4 hours start to finish." },
      { q: "How often should I have it done?", a: "Once a year is ideal in the Capital Region — every 18 months minimum for shaded sides." },
    ],
    meta: {
      title: "House Washing in Albany, NY | Capital Pro Pressure Washing",
      description: "Professional soft-wash house washing in Albany, Schenectady, Saratoga & the Capital Region. Kills mold and mildew safely. Free quote.",
    },
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    icon: CloudRain,
    heroImage: roofWashingHero.url,
    hero: {
      eyebrow: "Soft Wash — Shingle Safe",
      headline: "Roof Washing That Kills Black Streaks for Good",
      subhead:
        "Those black stains are gloeocapsa magma — a living algae eating your shingles. We kill it at the root without high pressure.",
    },
    intro:
      "High-pressure roof cleaning voids most shingle warranties. Our ARMA-approved soft wash follows manufacturer guidelines, kills algae and moss on contact, and leaves your roof safely renewed for years.",
    benefits: [
      { title: "Extends Roof Life 5–15 Years", desc: "Removing algae stops shingle granule loss — the #1 cause of premature roof failure." },
      { title: "Shingle-Warranty Safe", desc: "ARMA-approved soft wash. No high pressure, no walking on wet shingles." },
      { title: "Instant Curb Appeal", desc: "Streak-free rooflines look brand new — a huge win before selling." },
      { title: "Lower Cooling Bills", desc: "A clean roof reflects more heat than a stained one." },
    ],
    process: [
      { title: "Roof Inspection", desc: "We check flashing, shingles, and drainage before ever spraying." },
      { title: "Soft Wash Application", desc: "Apply approved cleaning solution from the ground — it kills algae on contact." },
      { title: "Gentle Rinse & Cleanup", desc: "Low-pressure rinse, then flush your gutters and downspouts." },
    ],
    faqs: [
      { q: "Do you walk on my roof?", a: "Only when absolutely necessary and always with fall protection. Most cleans are done from ladders and the ground." },
      { q: "Will the black streaks come back?", a: "Not for years. Our treatment kills the algae at the root — not just bleaches it." },
      { q: "Is it safe for metal roofs?", a: "Yes. We adjust the mix for metal, tile, cedar, and asphalt separately." },
    ],
    meta: {
      title: "Roof Cleaning & Soft Wash in Albany, NY | Capital Pro",
      description: "Shingle-safe soft wash roof cleaning across the Capital Region. Removes black streaks, moss, and algae. Free quote today.",
    },
  },
  {
    slug: "paver-cleaning-sealing",
    name: "Paver Cleaning & Sealing",
    icon: Grid3x3,
    heroImage: paverCleaningHero.url,
    hero: {
      eyebrow: "Deep Clean · Re-Sand · Seal",
      headline: "Paver Restoration That Locks Out Weeds and Stains",
      subhead:
        "Deep-clean pavers, replace joint sand with polymeric, and seal to protect against weeds, ants, and fading for 3–5 years.",
    },
    intro:
      "Pavers are an investment. Without periodic cleaning and sealing, joint sand washes out, weeds take over, and the color fades. Our multi-step restoration brings them back and protects them for years.",
    benefits: [
      { title: "Stops Weeds & Ants", desc: "Polymeric sand locks joints — no more weeding every weekend." },
      { title: "Enhances Color", desc: "Optional color-enhancing sealer brings pavers back to day-one saturation." },
      { title: "Prevents Staining", desc: "Seals against oil, wine, grease, and Capital Region freeze/thaw damage." },
      { title: "3–5 Year Protection", desc: "Our sealers hold up to snow shovels, salt, and NY winters." },
    ],
    process: [
      { title: "Surface Cleaning", desc: "Rotary surface cleaner deep-cleans without gouging the pavers." },
      { title: "Joint Re-Sand", desc: "Sweep in fresh polymeric sand and activate it for a rock-hard bond." },
      { title: "Seal & Cure", desc: "Apply premium sealer (natural, wet-look, or color-enhancing) and let it cure." },
    ],
    faqs: [
      { q: "Can I walk on it right after?", a: "Foot traffic in 24 hours, vehicle traffic in 72 hours." },
      { q: "Natural or wet look?", a: "Both. We'll show you samples on your actual pavers before deciding." },
      { q: "How long does the seal last?", a: "3–5 years depending on traffic and sun exposure." },
    ],
    meta: {
      title: "Paver Cleaning & Sealing in Albany, NY | Capital Pro",
      description: "Restore and seal paver patios, driveways, and walkways across the Capital Region. Polymeric sand + premium sealer.",
    },
  },
  {
    slug: "concrete-cleaning-sealing",
    name: "Concrete & Driveway Cleaning",
    icon: Layers,
    heroImage: concreteCleaningHero.url,
    hero: {
      eyebrow: "Driveways · Sidewalks · Patios",
      headline: "Concrete That Looks Poured Yesterday",
      subhead:
        "Surface-cleaner concrete washing lifts oil, rust, algae, and years of grime — leaves an even, streak-free finish.",
    },
    intro:
      "A dirty driveway drags down the entire front of your home. Our commercial-grade surface cleaners produce even, streak-free results — with no wand marks or zebra stripes.",
    benefits: [
      { title: "Even, Streak-Free Finish", desc: "Rotary surface cleaners avoid the wand-mark 'tiger stripes' DIY jobs leave behind." },
      { title: "Removes Oil & Rust", desc: "Specialty degreasers and rust removers included when needed." },
      { title: "Optional Concrete Sealing", desc: "Extend cleaning life 3–4×, prevent salt damage, and enhance color." },
      { title: "Boosts Curb Appeal", desc: "Often the single biggest visible improvement to your home's exterior." },
    ],
    process: [
      { title: "Pre-Treat Stains", desc: "Spot-treat oil, rust, and organic staining first." },
      { title: "Surface Clean", desc: "Even pass with a commercial rotary surface cleaner." },
      { title: "Rinse & Optional Seal", desc: "Final rinse, then apply densifier or sealer if selected." },
    ],
    faqs: [
      { q: "Will it remove old oil stains?", a: "Most of them — we set expectations before starting. Deep, old stains may lighten but not vanish." },
      { q: "Should I seal my driveway?", a: "In the Capital Region, yes. Salt and freeze/thaw cycles chew unsealed concrete." },
      { q: "How often?", a: "Annual cleaning, sealer every 2–3 years." },
    ],
    meta: {
      title: "Concrete & Driveway Cleaning in Albany, NY | Capital Pro",
      description: "Professional concrete and driveway pressure washing across the Capital Region. Even, streak-free results. Optional sealing.",
    },
  },
  {
    slug: "deck-patio-cleaning",
    name: "Deck & Patio Cleaning",
    icon: Rows3,
    heroImage: deckPatioHero.url,
    hero: {
      eyebrow: "Wood · Composite · Trex",
      headline: "Bring Your Deck Back to Life",
      subhead:
        "Strip years of graying, mildew, and pollen. Restore an even, clean finish ready for staining or entertaining.",
    },
    intro:
      "Decks take a beating in the Capital Region. Our low-pressure cleaning method removes years of graying and mildew without splintering the wood, prepping it perfectly for stain or sealer.",
    benefits: [
      { title: "No Splintering or Etching", desc: "We use proper detergents and pressure — never gouge the wood." },
      { title: "Composite & Trex Safe", desc: "Manufacturer-approved cleaning for composites that stains simply won't fix." },
      { title: "Ready for Staining", desc: "Perfect prep for a fresh stain or sealer coat." },
      { title: "Restores Even Tone", desc: "Removes shade lines, planter rings, and gray patches." },
    ],
    process: [
      { title: "Clear & Protect", desc: "Move furniture, cover plants, protect the house." },
      { title: "Apply Wood Cleaner", desc: "Dwell time with a wood-safe cleaner lifts embedded dirt." },
      { title: "Rinse & Brighten", desc: "Optional brightener neutralizes pH — the deck is stain-ready." },
    ],
    faqs: [
      { q: "When can I stain?", a: "Wait 24–72 hours for the wood to fully dry before staining." },
      { q: "Do you also stain?", a: "We can quote a stain add-on with your cleaning estimate." },
      { q: "Composite decks too?", a: "Yes — different mix, gentler pressure, same clean result." },
    ],
    meta: {
      title: "Deck & Patio Cleaning in Albany, NY | Capital Pro",
      description: "Professional deck and patio cleaning across the Capital Region. Wood-safe, composite-safe, stain-ready.",
    },
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning & Whitening",
    icon: Droplets,
    heroImage: gutterCleaningHero.url,
    hero: {
      eyebrow: "Interior + Exterior",
      headline: "Gutters That Flow — and Look Brand New",
      subhead:
        "Hand-clean interiors, flush downspouts, and remove the black 'tiger stripes' on the exterior face.",
    },
    intro:
      "Clogged gutters cause fascia rot, basement leaks, and ice dams. And those black stripes on the outside? They're oxidized aluminum — a garden hose won't touch them. We do both, in one visit.",
    benefits: [
      { title: "Prevents Water Damage", desc: "Overflowing gutters ruin fascia, siding, and foundations." },
      { title: "Removes Tiger Stripes", desc: "Specialty gutter brightener removes the black exterior staining pressure alone can't." },
      { title: "Flow-Tested Downspouts", desc: "We flush and confirm every downspout drains freely." },
      { title: "Before/After Photos", desc: "Interior photos of every section — you know exactly what we did." },
    ],
    process: [
      { title: "Hand-Clean Interior", desc: "Remove leaves, sludge, and debris by hand — bagged and hauled away." },
      { title: "Flush Downspouts", desc: "Water-test every downspout, clear clogs, confirm flow." },
      { title: "Whiten Exterior Face", desc: "Apply gutter brightener and rinse — like-new gutter faces." },
    ],
    faqs: [
      { q: "How often should gutters be cleaned?", a: "Twice a year in the Capital Region — spring and after leaf drop." },
      { q: "Do you take the debris?", a: "Yes. We bag and remove everything." },
      { q: "Whitening on any gutter?", a: "Aluminum, yes. Vinyl and copper — we'll advise on-site." },
    ],
    meta: {
      title: "Gutter Cleaning & Whitening in Albany, NY | Capital Pro",
      description: "Interior gutter cleaning plus exterior brightening across the Capital Region. Removes black tiger stripes.",
    },
  },
  {
    slug: "gutter-guards",
    name: "Gutter Guards",
    icon: Shield,
    heroImage: gutterGuardsHero.url,
    hero: {
      eyebrow: "Installed by Professionals",
      headline: "Gutter Guards That Actually Work",
      subhead:
        "Professional-grade micro-mesh gutter guards installed to stop clogs before they start — backed by a manufacturer warranty.",
    },
    intro:
      "Not all gutter guards are equal — the hardware-store versions clog worse than open gutters. We install professional micro-mesh systems designed for oak leaves, pine needles, and Capital Region storms.",
    benefits: [
      { title: "Never Clean Gutters Again", desc: "Micro-mesh stops even pine needles and shingle grit." },
      { title: "Manufacturer Warranty", desc: "Real, transferable warranty — not a hardware-store 'guarantee.'" },
      { title: "Retrofits Existing Gutters", desc: "Fits 5\" and 6\" K-style gutters, half-round, and custom profiles." },
      { title: "Handles Heavy Rain", desc: "Rated for extreme downpours — no overshoot at the eaves." },
    ],
    process: [
      { title: "Free Assessment", desc: "We inspect your gutters, pitch, and tree cover to spec the right system." },
      { title: "Clean & Prep", desc: "Full gutter cleaning before install — start with a clean slate." },
      { title: "Install & Verify", desc: "Guards installed with stainless fasteners, flow-tested with water." },
    ],
    faqs: [
      { q: "Do I still need to clean my gutters?", a: "No interior cleaning. Occasional light brushing off the top mesh in heavy pine areas — that's it." },
      { q: "Will it void my roof warranty?", a: "No. Our guards install into the gutter, not under the shingles." },
      { q: "How long do they last?", a: "20+ years with the systems we install." },
    ],
    meta: {
      title: "Gutter Guard Installation in Albany, NY | Capital Pro",
      description: "Professional micro-mesh gutter guards installed across the Capital Region. Stop clogs for good.",
    },
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    icon: AppWindow,
    heroImage: windowCleaningHero.url,
    hero: {
      eyebrow: "Exterior Only",
      headline: "Streak-Free Exterior Windows",
      subhead:
        "Purified-water pole cleaning for every exterior window, screen, and sill. Let the light back in.",
    },
    intro:
      "The difference between clean windows and streaky ones is technique and water. We use pure-water pole systems on every exterior window — no soap residue, no ladders on your landscaping, no streaks. Screens and sills included. We do not offer interior window cleaning.",
    benefits: [
      { title: "Streak-Free Guaranteed", desc: "If a window streaks, we come back — no charge." },
      { title: "Screens + Sills Included", desc: "We remove, wash, and reinstall screens. Wipe sills." },
      { title: "Two- and Three-Story Safe", desc: "Water-fed poles let us safely reach high windows without ladders on landscaping." },
      { title: "Pairs with Any Wash", desc: "Bundle with a house wash and save." },
    ],
    process: [
      { title: "Screen Removal", desc: "Take down every screen, rinse, and set aside to dry." },
      { title: "Pure-Water Pole Clean", desc: "Scrub and rinse every exterior pane, frame, and sill with purified water — no soap, no streaks." },
      { title: "Reinstall & Walk-Through", desc: "Screens back in, final walkthrough with you." },
    ],
    faqs: [
      { q: "Do you clean interior windows?", a: "No — we're exterior-only. Every window, screen, and sill on the outside of the house gets cleaned." },
      { q: "Do you clean screens?", a: "Yes — screens are removed, washed, and reinstalled as part of every job." },
      { q: "Post-construction windows?", a: "Yes — we handle stucco splatter and paint overspray on exterior glass as an add-on." },
      { q: "How often?", a: "Twice a year for most homes. Once a year minimum." },
    ],
    meta: {
      title: "Exterior Window Cleaning in Albany, NY | Capital Pro Pressure Washing",
      description: "Streak-free exterior window cleaning across the Capital Region. Pure-water pole system, screens and sills included.",
    },
  },
  {
    slug: "fence-cleaning",
    name: "Fence Cleaning",
    icon: Fence,
    heroImage: fenceCleaningHero.url,
    hero: {
      eyebrow: "Wood · Vinyl · Chain-Link",
      headline: "Fences Restored, Not Just Sprayed",
      subhead:
        "Remove years of algae, mildew, and dirt from any fence material. Ready for staining or just to look great again.",
    },
    intro:
      "A dirty fence is the backdrop of every backyard photo. Our fence cleaning safely restores wood, vinyl, aluminum, and chain-link — no damage, no fuzz, no green stains.",
    benefits: [
      { title: "Restores Wood Grain", desc: "Removes graying without splintering — great pre-stain prep." },
      { title: "Vinyl Like New", desc: "Removes the green algae film without damaging the finish." },
      { title: "Both Sides", desc: "We clean both sides — including the neighbor-facing side if accessible." },
      { title: "Bundles with Deck & House", desc: "Combine services and save on trip time." },
    ],
    process: [
      { title: "Pre-Rinse & Protect", desc: "Cover plants, pre-rinse landscaping." },
      { title: "Apply Cleaner", desc: "Detergent dwells to lift mildew and dirt." },
      { title: "Rinse & Detail", desc: "Even rinse, hand-scrub high-visibility panels." },
    ],
    faqs: [
      { q: "Can you clean pressure-treated wood?", a: "Yes. We use lower pressure and wood-safe cleaner." },
      { q: "Will vinyl fade?", a: "No — our detergents are safe on vinyl and won't strip pigment." },
      { q: "Chain link?", a: "Absolutely — cleaner spray followed by a rinse." },
    ],
    meta: {
      title: "Fence Cleaning in Albany, NY | Capital Pro Pressure Washing",
      description: "Wood, vinyl, and chain-link fence cleaning across the Capital Region. Both sides. Free quote.",
    },
  },
  {
    slug: "holiday-lighting",
    name: "Holiday Lighting",
    icon: Snowflake,
    heroImage: holidayLightingHero.url,
    hero: {
      eyebrow: "Design · Install · Take-Down · Storage",
      headline: "Turn-Key Christmas Lighting for Your Home",
      subhead:
        "Professional-grade lights, designed and installed for your rooflines and trees. We take them down and store them for you.",
    },
    intro:
      "Skip the ladder, the tangled lights, and the January take-down. We design custom holiday displays with commercial-grade LEDs, install them safely, and handle removal and storage until next year.",
    benefits: [
      { title: "Fully Custom Design", desc: "Rooflines, trees, walkways, wreaths — we design to your home." },
      { title: "Commercial-Grade LEDs", desc: "Bright, warm, and reliable — not the flimsy big-box stuff." },
      { title: "We Handle Everything", desc: "Design, install, mid-season service calls, take-down, and storage." },
      { title: "Book Early Saves", desc: "Reserve by September for best pricing and install dates." },
    ],
    process: [
      { title: "Design Consult", desc: "Walk your home, pick colors and coverage, get a firm quote." },
      { title: "Install", desc: "We install between mid-October and Thanksgiving — no ladders for you." },
      { title: "Take-Down & Store", desc: "Removed after the holidays, labeled, and stored for next season." },
    ],
    faqs: [
      { q: "Do I buy the lights?", a: "We provide commercial-grade lights and reuse yours if you prefer." },
      { q: "What if a strand goes out?", a: "Free mid-season service — one call and we fix it." },
      { q: "When should I book?", a: "By September or October. Slots fill fast." },
    ],
    meta: {
      title: "Christmas & Holiday Lighting in Albany, NY | Capital Pro",
      description: "Turn-key holiday lighting design, install, take-down, and storage across the Capital Region.",
    },
  },
  {
    slug: "permanent-lighting",
    name: "Permanent Outdoor Lighting",
    icon: Lightbulb,
    heroImage: permanentLightingHero.url,
    hero: {
      eyebrow: "Programmable · Year-Round",
      headline: "Permanent Outdoor Lighting for Every Occasion",
      subhead:
        "Programmable rooflines and accent lighting — holidays, birthdays, game days, and everyday warm white. All from an app.",
    },
    intro:
      "Installed once, controlled forever. Our permanent lighting systems tuck cleanly under your eaves and give you millions of color combinations, static or animated — for the holidays or a warm accent every night.",
    benefits: [
      { title: "No More Ladders — Ever", desc: "Set every scene from your phone." },
      { title: "Millions of Colors", desc: "Every holiday, every team, every mood." },
      { title: "Clean Daytime Look", desc: "Tucked under the eave — you barely see it in daylight." },
      { title: "Warranty-Backed", desc: "Professional-grade fixtures, multi-year warranty." },
    ],
    process: [
      { title: "In-Home Design", desc: "Layout, coverage, controller placement — we spec it all." },
      { title: "Professional Install", desc: "Clean install with proper wire runs and hidden power." },
      { title: "App Setup & Training", desc: "We hand you the app, walk you through presets, and you own the lights." },
    ],
    faqs: [
      { q: "Can I use it year-round?", a: "Yes — that's the whole point. Warm white daily, colors for events." },
      { q: "Roof warranty?", a: "Our install method preserves your roof and gutter warranties." },
      { q: "Financing?", a: "We can point you to financing options at quote time." },
    ],
    meta: {
      title: "Permanent Outdoor Lighting in Albany, NY | Capital Pro",
      description: "Programmable permanent outdoor lighting for holidays and everyday use across the Capital Region.",
    },
  },
  {
    slug: "commercial-pressure-washing",
    name: "Commercial Pressure Washing",
    icon: Building2,
    heroImage: commercialWashingHero.url,
    hero: {
      eyebrow: "Storefronts · HOAs · Facilities",
      headline: "Commercial Pressure Washing on Your Schedule",
      subhead:
        "Storefronts, sidewalks, dumpster pads, brick, and building exteriors — kept clean on a recurring schedule with COI on file.",
    },
    intro:
      "Curb appeal moves customers through your doors. We service Capital Region businesses, HOAs, and property managers with recurring cleaning contracts, after-hours availability, and Certificates of Insurance on file.",
    benefits: [
      { title: "Recurring Contracts", desc: "Monthly, quarterly, or seasonal — set it and forget it." },
      { title: "COI on File", desc: "Certificate of Insurance to your risk manager before we start." },
      { title: "After-Hours Work", desc: "We work early, late, or overnight to avoid disrupting customers." },
      { title: "Multi-Site Discount", desc: "Manage multiple properties? Volume pricing available." },
    ],
    process: [
      { title: "Site Walk & Bid", desc: "Free on-site assessment and firm bid with scope of work." },
      { title: "Schedule & COI", desc: "Recurring calendar, insurance documents to your risk team." },
      { title: "Clean & Report", desc: "Each service completed with before/after photos and a service ticket." },
    ],
    faqs: [
      { q: "Do you handle graffiti and gum?", a: "Yes — specialty removal available as add-ons." },
      { q: "Insurance?", a: "Fully insured — COI issued to your specifications." },
      { q: "Net-30 billing?", a: "Yes, on approved commercial accounts." },
    ],
    meta: {
      title: "Commercial Pressure Washing in Albany, NY | Capital Pro",
      description: "Commercial pressure washing, storefront cleaning, and facility services across the Capital Region. COI on file.",
    },
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}