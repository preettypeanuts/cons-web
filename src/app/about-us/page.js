import { AboutUsComponent } from "@/components/about-us-component";
import { FaqsAccordion } from "@/components/faqs-accordion";
import { ReBanner } from "@/components/re-banner";
import { VisionMission } from "@/components/vision-mission";
import { WhyUs } from "@/components/why-us";
import { FaCompass } from "react-icons/fa6";

export default function AboutUs() {
    return (
        <>
            <ReBanner
                title="About"
                highlightText="Us"
                description="Driven by Values — Discover the Story Behind Our Commitment."
                buttonText="Explore!"
                buttonIcon={<FaCompass />}
                imageSrc="https://images.unsplash.com/photo-1653273760914-a83a14062bbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />
            <AboutUsComponent />
            <VisionMission />
            <WhyUs />
            <FaqsAccordion />
        </>
    )
}