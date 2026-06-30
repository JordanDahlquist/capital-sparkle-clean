import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "../components/home-hero";
import { HomeServices } from "../components/home-services";
import { HomeGallery } from "../components/home-gallery";
import { HomeWhy } from "../components/home-why";
import { HomeReviews } from "../components/home-reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your App" },
      { name: "description", content: "Replace this with a one-sentence description of your app." },
      { property: "og:title", content: "Your App" },
      { property: "og:description", content: "Replace this with a one-sentence description of your app." },
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
      <HomeWhy />
      <HomeReviews />
    </main>
  );
}
