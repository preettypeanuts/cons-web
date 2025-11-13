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
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi? Voluptatum cumque sequi expedita inventore."
                buttonText="Explore!"
                imageSrc="https://images.unsplash.com/photo-1762335799349-c7c4c8487432?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />
            <CardProjects projects={projectsData} />
            <GalleryImage 
            mode="carousel"
            data={galleryData}/>
        </>
    )
}