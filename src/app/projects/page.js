import { AutoPlayImage } from "@/components/auto-play-image";
import { CardProjects } from "@/components/card-projects";
import { GalleryImage } from "@/components/gallery-image";
import { ReBanner } from "@/components/re-banner";
import { galleryData, projectsData } from "@/system";

export default function Projects() {
    return (
        <>
            <ReBanner
                title="Our"
                highlightText="Projects"
                description="Where Vision Turns Into Impact — Showcasing Our Proven Excellence."
                buttonText="Explore!"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
                children={<AutoPlayImage />}
            />
            <CardProjects
                projects={projectsData}
            />
            <GalleryImage
                mode="carousel"
                data={galleryData}
            />
        </>
    )
}