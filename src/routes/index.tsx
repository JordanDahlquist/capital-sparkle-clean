import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "../components/home-hero";
import { HomeServices } from "../components/home-services";
import { HomeGallery } from "../components/home-gallery";
import { WaterJetDivider } from "../components/water-jet-divider";
import { HomeWhy } from "../components/home-why";
import { HomeReviews } from "../components/home-reviews";
import { HomeServiceArea } from "../components/home-service-area";
import { HomeFinalCta } from "../components/home-final-cta";
import { InlineQuoteSection } from "../components/inline-quote-section";
import { HomeFaq } from "../components/home-faq";
import { faqJsonLd } from "../data/faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your App" },
      { name: "description", content: "Replace this with a one-sentence description of your app." },
      { property: "og:title", content: "Your App" },
      { property: "og:description", content: "Replace this with a one-sentence description of your app." },
    ],
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
      <HomeGallery />
      <WaterJetDivider />
      <HomeWhy />
      <HomeReviews />
      <HomeServiceArea />
      <HomeFaq />
      <HomeFinalCta />
      <InlineQuoteSection />
    </main>
  );
}
