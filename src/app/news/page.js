import { ReBanner } from "@/components/re-banner";

export default function News() {
    return (
        <>
            <ReBanner
                title="Today"
                highlightText="Updates"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi? Voluptatum cumque sequi expedita inventore."
                buttonText="Explore!"
                imageSrc="https://images.unsplash.com/photo-1712331575206-25c417208db5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />
        </>
    )
}