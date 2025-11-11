import { AboutUs } from "@/components/about-us";
import { HomeBanner } from "@/components/home-banner";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutUs />
      <WhyUs />
    </>
  );
}
