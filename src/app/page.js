import { AboutUs } from "@/components/about-us";
import { ContactUs } from "@/components/contact-form";
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
      <AboutUs />
      <VisionMission />
      <WhyUs />
      <CustomerReviews />
      <FaqsAccordion />
      <ContactUs />
      <CTA />
    </>
  );
}
