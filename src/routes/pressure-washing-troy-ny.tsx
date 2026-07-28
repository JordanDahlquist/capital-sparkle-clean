import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "../components/city-page";
import { getCity } from "../data/cities";

const SITE = "https://capitalpropressurewashing.com";
const SLUG = "pressure-washing-troy-ny";

export const Route = createFileRoute("/pressure-washing-troy-ny")({
  head: () => {
    const c = getCity(SLUG)!;
    const url = `${SITE}/${SLUG}`;
    const image = c.heroImage.startsWith("http") ? c.heroImage : `${SITE}${c.heroImage}`;
    return {
      meta: [
        { title: c.meta.title },
        { name: "description", content: c.meta.description },
        { property: "og:title", content: c.meta.title },
        { property: "og:description", content: c.meta.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.meta.title },
        { name: "twitter:description", content: c.meta.description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Capital Pro Pressure Washing — ${c.city}, NY`,
            url,
            image,
            telephone: "+15189001913",
            areaServed: {
              "@type": "City",
              name: c.city,
              containedInPlace: { "@type": "AdministrativeArea", name: "New York" },
            },
            description: c.meta.description,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: `${c.city}, NY`, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: () => <CityPage content={getCity(SLUG)!} />,
});