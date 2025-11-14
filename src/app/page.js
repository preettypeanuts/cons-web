import { AboutUsComponent } from "@/components/about-us-component";
import { CTA } from "@/components/cta";
import { CustomerReviews } from "@/components/customer-ratings";
import { FaqsAccordion } from "@/components/faqs-accordion";
import { HomeBanner } from "@/components/home-banner";
import { VisionMission } from "@/components/vision-mission";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutUsComponent />
      <WhyUs />
      <CustomerReviews />
      <CTA />
    </>
  );
}
