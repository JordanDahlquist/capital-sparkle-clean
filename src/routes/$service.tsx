import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getService } from "../data/services";
import { ServicePage } from "../components/service-page";

const SITE = "https://capitalpropressurewashing.com";

export const Route = createFileRoute("/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return {
      slug: service.slug,
      name: service.name,
      heroImage: service.heroImage,
      meta: service.meta,
      faqs: service.faqs,
    };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service Not Found | Capital Pro Pressure Washing" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `${SITE}/${params.service}`;
    const image = loaderData.heroImage.startsWith("http")
      ? loaderData.heroImage
      : `${SITE}${loaderData.heroImage}`;
    return {
      meta: [
        { title: loaderData.meta.title },
        { name: "description", content: loaderData.meta.description },
        { property: "og:title", content: loaderData.meta.title },
        { property: "og:description", content: loaderData.meta.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: image },
        { name: "twitter:title", content: loaderData.meta.title },
        { name: "twitter:description", content: loaderData.meta.description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.name,
            serviceType: loaderData.name,
            provider: { "@id": `${SITE}/#business` },
            areaServed: [
              "Albany, NY",
              "Schenectady, NY",
              "Clifton Park, NY",
              "Saratoga Springs, NY",
              "Troy, NY",
              "Rensselaer, NY",
            ],
            url,
            description: loaderData.meta.description,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: loaderData.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loaderData.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-[var(--brand-deep-blue)]">Something went wrong</h1>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button onClick={reset} className="mt-6 px-4 py-2 bg-[var(--brand-red)] text-white rounded">Try again</button>
    </div>
  ),
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  return <ServicePage service={service} />;
}

function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1
        className="text-3xl md:text-4xl uppercase text-[var(--brand-deep-blue)]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
      >
        Service not found
      </h1>
      <p className="mt-3 text-[var(--brand-charcoal)]/80">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-3 bg-[var(--brand-red)] text-white font-bold uppercase rounded-md"
      >
        Back to Home
      </Link>
    </main>
  );
}