import AdvancedFeatures from "@/components/AdvancedFeatures";
import Blogs from "@/components/Blogs";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import FreeTrail from "@/components/FreeTrail";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Hero from "@/components/Hero";
import Sisyphus from "@/components/Sisyphus";

export default function Home() {
  return (
    <div className="w-full h-full xl:px-16 lg:px-12 md:px-10 px-5">
      <Hero />
      <Companies />
      <Features />
      <Sisyphus />
      <AdvancedFeatures />
      <FrequentlyAsked />
      <Blogs />
      <FreeTrail />
    </div>
  );
}
