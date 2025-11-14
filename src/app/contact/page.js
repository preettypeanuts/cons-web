import { ReBanner } from "@/components/re-banner";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
    return (
        <>
            <ReBanner
                title="Contact"
                highlightText="Us"
                description="Connecting With Purpose — Reach Out and Start a Meaningful Dialogue."
                buttonText="Call Us!"
                buttonIcon={<FaPhone />}
                imageSrc="https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />
        </>
    )
}