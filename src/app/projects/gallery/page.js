import { GalleryImage } from "@/components/gallery-image";
import { galleryData } from "@/system";

export default function Gallery() {
    return (
        <section className="spacing">
            <GalleryImage
                mode="grid"
                showViewAll={false}
                data={galleryData} 
                imageClassName={"w-full object-cover h-[50lvh] min-h-[50lvh] "}
                />

        </section>
    )
}