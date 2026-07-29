import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "../components/city-service-page";
import { getCityService } from "../data/city-services";

const SITE = "https://capitalpropressurewashing.com";
const SLUG = "roof-washing-ballston-spa-ny";

export const Route = createFileRoute("/roof-washing-ballston-spa-ny")({
  head: () => {
    const c = getCityService(SLUG)!;
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
            "@type": "Service",
            name: `${c.service} in ${c.city}, NY`,
            serviceType: c.service,
            provider: { "@id": `${SITE}/#business` },
            areaServed: {
              "@type": "City",
              name: "Ballston Spa",
              containedInPlace: { "@type": "AdministrativeArea", name: "New York" },
            },
            url,
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
              { "@type": "ListItem", position: 2, name: c.service, item: `${SITE}/roof-washing` },
              { "@type": "ListItem", position: 3, name: `${c.city}, NY`, item: url },
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
  component: () => <CityServicePage content={getCityService(SLUG)!} />,
});