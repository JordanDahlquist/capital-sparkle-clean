import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "../components/home-hero";
import { HomeServices } from "../components/home-services";
import { HomeGallery } from "../components/home-gallery";
import { HomeInAction } from "../components/home-in-action";
import { WaterJetDivider } from "../components/water-jet-divider";
import { HomeWhy } from "../components/home-why";
import { HomeReviews } from "../components/home-reviews";
import { HomeServiceArea } from "../components/home-service-area";
import { HomeFinalCta } from "../components/home-final-cta";
import { InlineQuoteSection } from "../components/inline-quote-section";
import { HomeFaq } from "../components/home-faq";
import { faqJsonLd } from "../data/faq";

const SITE = "https://capitalpropressurewashing.com";
const HOME_TITLE = "Pressure Washing Albany NY | Capital Pro Pressure Washing";
const HOME_DESC =
  "Pressure washing in Albany & the Capital Region — house washing, roof washing, gutters, concrete, and more. 10+ years local. Free quotes.";
const HOME_OG_IMAGE = `${SITE}/__l5e/assets-v1/17b2d795-9b55-4907-9a7d-7857aeba64f0/hero-pressure-sprayer.webp`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: HOME_OG_IMAGE },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      { name: "twitter:image", content: HOME_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeInAction />
      <HomeReviews />
      <HomeGallery />
      <WaterJetDivider />
      <HomeWhy />
      <HomeServiceArea />
      <HomeFaq />
      <HomeFinalCta />
      <InlineQuoteSection />
    </main>
  );
}
