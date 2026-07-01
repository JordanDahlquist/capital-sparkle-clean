import { Star, Quote } from "lucide-react";
import { Reveal } from "./reveal";

// Toggle ON only after the Google Business Profile link is confirmed.
const SHOW_VERIFIED_LINE = false;

type Review = { name: string; text: string; when: string };

// Real Google reviews for Capital Pro Pressure Washing. Verbatim (light trims marked with …).
const featured: Review[] = [
  {
    name: "Kathy Valason",
    when: "a month ago",
    text: "I just want to thank Capital Pro for doing such a phenomenal job power washing my house. It's like I have a new house! I would recommend them to anyone. And the workers are there to please you. Cause they care!",
  },
  {
    name: "Leslie Kaufman",
    when: "3 weeks ago",
    text: "The guys did a great job and the house looks beautiful. My sister drove by and said the same thing — it looks beautiful. They were so nice to talk to and deal with. I have recommended them to my family and friends.",
  },
  {
    name: "Islah Umar",
    when: "3 weeks ago",
    text: "In a state of bereavement we reached out and got an earlier date. When we returned from funeral proceedings the house was impeccable. Even areas we had no time to prep for were done. Nice work for sure. Call them — you won't be disappointed!",
  },
];

const marquee: Review[] = [
  {
    name: "Bonnie Delaney",
    when: "4 days ago",
    text: "Capital Pro is a wonderful company! Luis and Miller came to my house today and soft washed the exterior and it looks like a brand new house!",
  },
  {
    name: "Lori Barnett",
    when: "a week ago",
    text: "Just had my home pressure washed and I am very pleased with the outcome. I have an older home with original siding. Miller took his time and was sure to cover everything.",
  },
  {
    name: "Rosemary Trusso",
    when: "a month ago",
    text: "Excellent job cleaning and sealing our stamped concrete patio. Professional and pleasant to deal with. I would recommend Capital Pro to get the job done right!",
  },
  {
    name: "Carol Molino",
    when: "2 months ago",
    text: "I highly recommend Capital Pro Pressure Washing! Communication, professionalism, the house and window cleaning were all outstanding.",
  },
  {
    name: "Karissa Desofi",
    when: "a month ago",
    text: "This company did a fantastic job at power washing our home! Luis was great at communicating and scheduling. Him and his team were extremely professional.",
  },
  {
    name: "Charles Ellis",
    when: "2 months ago",
    text: "Can't say enough good things! From the moment the team showed up, the crew was friendly, professional, and just easy to work with. They cleaned our pavers and everything looked amazing.",
  },
  {
    name: "Mark Younger",
    when: "a month ago",
    text: "Excellent cleaning job. The siding, decks, and front porch are all refreshed. It is looking like a new house.",
  },
  {
    name: "Nikii Narváez",
    when: "11 months ago",
    text: "Our siding was looking dull and had green algae on the north side — it was embarrassing! Luis and his team came out and made the entire house look brand new.",
  },
  {
    name: "Ronni Edwards",
    when: "a month ago",
    text: "Very happy with the work Luis and his team did. Communication was great. Very professional. Fair pricing. We would definitely recommend Capital Pro.",
  },
  {
    name: "Linda Hayen",
    when: "a week ago",
    text: "Very professional, great service, and great contact regarding when they would come. My house and windows are sparkling. Highly recommend for anyone looking for power washing.",
  },
  {
    name: "Tony Felt",
    when: "10 hours ago",
    text: "We had a great experience with Capital Pro Pressure Washing. The team was very professional, pleasant to work with, and offered fair pricing. Our house came out looking great.",
  },
  {
    name: "Sil Young",
    when: "a week ago",
    text: "Capital Pro Pressure Washing did an excellent job washing our home. We have had it washed before but the job Capital Pro did far surpassed what was done previously.",
  },
  {
    name: "Michael Worden",
    when: "a month ago",
    text: "They did an excellent job washing my house. Very knowledgeable and friendly to work with. I would highly recommend them.",
  },
  {
    name: "Pamela DeMarco",
    when: "2 months ago",
    text: "This company is great! We just had our house pressure washed. The crew was friendly, efficient and neat. The job wasn't finished until they got every spot.",
  },
  {
    name: "Colleen Malloy",
    when: "2 months ago",
    text: "This company did a great job taking extra care not to hurt my tulips. Highly recommend for their excellence and cost. Thank you Capital Pro!",
  },
  {
    name: "Dana Bowen",
    when: "9 months ago",
    text: "Great communication, showed up right on schedule, house came out looking better than I thought was possible. Also was done for a great price! Will definitely be using Luis again!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} className="text-[#F5A623]" fill="#F5A623" strokeWidth={0} />
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B3D7A] text-white text-sm font-bold"
      style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em" }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function ReviewCard({ r, minimal = false }: { r: Review; minimal?: boolean }) {
  return (
    <article
      className={
        "flex h-full flex-col bg-white border border-gray-200 rounded-lg p-6 shadow-sm " +
        (minimal ? "w-[320px] sm:w-[360px] shrink-0" : "")
      }
    >
      <div className="flex items-center justify-between mb-4">
        <Stars />
        <Quote size={22} className="text-[#0B3D7A]/15" />
      </div>
      <p className="text-[#1A1A1A] text-[15px] leading-relaxed flex-1 mb-5">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <Initials name={r.name} />
        <div className="min-w-0">
          <p
            className="text-[#0B3D7A] uppercase text-sm tracking-wide truncate"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            {r.name}
          </p>
          <p className="text-[#1A1A1A]/60 text-xs">Google Review · {r.when}</p>
        </div>
      </div>
    </article>
  );
}

export function HomeReviews() {
  const track = [...marquee, ...marquee]; // duplicate for seamless loop
  return (
    <section id="reviews" className="bg-[#F4F6F8] py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            What Customers Say
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Reviews From Capital Region Homeowners
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white border border-gray-200 px-5 py-2 shadow-sm">
            <Stars />
            <span className="text-[#1A1A1A] font-semibold text-sm">
              5.0 average · 70+ Google reviews
            </span>
          </div>
        </div>

        {/* Featured reviews */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {featured.map((r, i) => (
            <Reveal as="div" key={r.name} delayMs={i * 90} variant="flap" className="h-full">
              <ReviewCard r={r} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Auto-scrolling marquee — full width so it bleeds off the edges */}
      <div className="mt-12 relative reviews-marquee" aria-label="More customer reviews">
        <div className="reviews-marquee-track flex gap-6 py-2">
          {track.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} minimal />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F6F8] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F6F8] to-transparent" />
      </div>

      {SHOW_VERIFIED_LINE && (
        <p className="text-center text-sm text-[#1A1A1A]/70 mt-8">
          Verified reviews from our Google Business Profile
        </p>
      )}
    </section>
  );
}