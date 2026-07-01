import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getService } from "../data/services";
import { ServicePage } from "../components/service-page";

export const Route = createFileRoute("/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: loaderData.service.meta.title },
            { name: "description", content: loaderData.service.meta.description },
            { property: "og:title", content: loaderData.service.meta.title },
            { property: "og:description", content: loaderData.service.meta.description },
          ],
        }
      : { meta: [{ title: "Service | Capital Pro Pressure Washing" }] },
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
  const { service } = Route.useLoaderData();
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