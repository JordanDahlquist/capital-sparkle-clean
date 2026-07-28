import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "../data/services";
import { CITIES } from "../data/cities";
import { CITY_SERVICES } from "../data/city-services";

export const Route = createFileRoute("/site-index")({
  head: () => ({
    meta: [
      { title: "Internal Site Index — Capital Pro" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
      { name: "googlebot", content: "noindex, nofollow" },
    ],
  }),
  component: SiteIndexPage,
});

function SiteIndexPage() {
  const corePages: { to: string; label: string }[] = [
    { to: "/", label: "Home" },
    { to: "/thank-you", label: "Thank You" },
  ];

  const cityPages = CITIES.map((c) => ({
    to: `/${c.slug}`,
    label: `${c.city}, NY`,
  }));

  const cityServicePages = CITY_SERVICES.map((c) => ({
    to: `/${c.slug}`,
    label: `${c.service} — ${c.city}, NY`,
  }));

  return (
    <main className="min-h-screen bg-[#F4F6F8] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#C8102E]">
          Internal — Not Indexed
        </p>
        <h1 className="mb-3 font-oswald text-3xl font-bold uppercase tracking-tight text-[#0B3D7A] md:text-4xl">
          Capital Pro Site Index
        </h1>
        <p className="mb-10 text-sm text-[#1A1A1A]/70">
          Hidden internal directory of every live page. This page is excluded from
          search engines and the public sitemap.
        </p>

        <Section title="Core Pages">
          <ul className="grid gap-2 sm:grid-cols-2">
            {corePages.map((p) => (
              <LinkItem key={p.to} to={p.to} label={p.label} />
            ))}
          </ul>
        </Section>

        <Section title="Service Pages">
          <ul className="grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/$service"
                  params={{ service: s.slug }}
                  className="block rounded-md border border-[#0B3D7A]/10 bg-white px-3 py-2 text-sm text-[#1E6FD9] hover:border-[#1E6FD9] hover:bg-[#1E6FD9]/5"
                >
                  {s.name}
                  <span className="ml-1 text-xs text-[#1A1A1A]/50">/{s.slug}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="City Landing Pages">
          <ul className="grid gap-2 sm:grid-cols-2">
            {cityPages.map((p) => (
              <LinkItem key={p.to} to={p.to} label={p.label} />
            ))}
          </ul>
        </Section>

        <Section title="City + Service Landing Pages">
          <ul className="grid gap-2 sm:grid-cols-2">
            {cityServicePages.map((p) => (
              <LinkItem key={p.to} to={p.to} label={p.label} />
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-oswald text-xl font-bold uppercase tracking-wide text-[#0B3D7A]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function LinkItem({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <a
        href={to}
        className="block rounded-md border border-[#0B3D7A]/10 bg-white px-3 py-2 text-sm text-[#1E6FD9] hover:border-[#1E6FD9] hover:bg-[#1E6FD9]/5"
      >
        {label}
        <span className="ml-1 text-xs text-[#1A1A1A]/50">{to}</span>
      </a>
    </li>
  );
}