import { HighligtedNews } from "@/components/highlighted-news";
import { ReBanner } from "@/components/re-banner";
import { newsData } from "@/system";

export default function News() {
    return (
        <>
            <ReBanner
                title="Today"
                highlightText="Updates"
                // description="Insights That Move Forward — Stay Updated with Our Latest Stories."
                titleClassName="text-3xl! md:text-4xl! flex-row! gap-1"
                buttonClassName="hidden"
                // buttonText="Explore!"
                // imageSrc="https://images.unsplash.com/photo-1712331575206-25c417208db5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />
            <HighligtedNews data={newsData[0]} />
        </>
    )
}