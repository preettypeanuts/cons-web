import { GalleryImage } from "@/components/gallery-image";
import { galleryData } from "@/system";

// SEO Metadata
export const metadata = {
    title: "Galeri Proyek - Dokumentasi Konstruksi & Infrastruktur | PT GAB MATTIRO FLORESIND",
    description: `Lihat ${galleryData.length} foto dokumentasi proyek konstruksi dan infrastruktur yang telah diselesaikan PT GAB MATTIRO FLORESIND. Galeri visual berkualitas tinggi dari berbagai proyek gedung, jembatan, jalan, dan instalasi industri di seluruh Indonesia.`,
    keywords: [
        "galeri proyek konstruksi",
        "foto infrastruktur",
        "dokumentasi proyek",
        "gallery PT GAB MATTIRO FLORESIND",
        "portfolio foto konstruksi",
        "gambar proyek pembangunan",
        ...galleryData.map(item => item.title.toLowerCase()),
        "visual proyek Indonesia",
        "foto gedung bertingkat",
        "dokumentasi jembatan",
    ],

    openGraph: {
        type: "website",
        title: "Galeri Proyek - PT GAB MATTIRO FLORESIND",
        description: `Dokumentasi visual dari ${galleryData.length} proyek konstruksi dan infrastruktur berkualitas tinggi.`,
        url: "https://www.gab.co.id/gallery",
        images: [
            {
                url: galleryData[0]?.image || "https://www.gab.co.id/images/og-gallery.jpg",
                width: 1200,
                height: 630,
                alt: "Galeri Proyek PT GAB MATTIRO FLORESIND",
            },
            ...galleryData.slice(1, 4).map(item => ({
                url: item.image,
                width: 800,
                height: 600,
                alt: item.title,
            })),
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Galeri Proyek - PT GAB MATTIRO FLORESIND",
        description: `Dokumentasi visual dari ${galleryData.length} proyek konstruksi dan infrastruktur.`,
        images: [galleryData[0]?.image || "https://www.gab.co.id/images/twitter-gallery.jpg"],
    },

    alternates: {
        canonical: "https://www.gab.co.id/gallery",
    },

    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
    },
};

export default function Gallery() {
    // ImageGallery Schema
    const gallerySchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "@id": "https://www.gab.co.id/gallery#imagegallery",
        name: "Galeri Proyek PT GAB MATTIRO FLORESIND",
        description: "Dokumentasi foto dari proyek konstruksi dan infrastruktur yang telah diselesaikan",
        url: "https://www.gab.co.id/gallery",
        numberOfItems: galleryData.length,
        image: galleryData.map((item, index) => ({
            "@type": "ImageObject",
            "@id": `https://www.gab.co.id/gallery#image${index + 1}`,
            contentUrl: item.image,
            url: item.image,
            name: item.title,
            description: item.shortDesc,
            caption: item.title,
            thumbnailUrl: item.image,
            creator: {
                "@type": "Organization",
                name: "PT GAB MATTIRO FLORESIND",
            },
        })),
        publisher: {
            "@type": "Organization",
            "@id": "https://www.gab.co.id/#organization",
            name: "PT GAB MATTIRO FLORESIND",
            logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
            },
        },
    };

    // CollectionPage Schema
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.gab.co.id/gallery#collection",
        url: "https://www.gab.co.id/gallery",
        name: "Galeri Proyek PT GAB MATTIRO FLORESIND",
        description: "Koleksi foto dokumentasi proyek konstruksi dan infrastruktur",
        isPartOf: {
            "@id": "https://www.gab.co.id/#website",
        },
        about: {
            "@id": "https://www.gab.co.id/#organization",
        },
        numberOfItems: galleryData.length,
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.gab.co.id",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Gallery",
                item: "https://www.gab.co.id/gallery",
            },
        ],
    };

    // ItemList Schema untuk gallery items
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://www.gab.co.id/gallery#itemlist",
        name: "Project Gallery Items",
        numberOfItems: galleryData.length,
        itemListElement: galleryData.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Photograph",
                name: item.title,
                description: item.shortDesc,
                image: item.image,
                creator: {
                    "@type": "Organization",
                    name: "PT GAB MATTIRO FLORESIND",
                },
            },
        })),
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            {/* Gallery Grid */}
            <section className="spacing">
                <GalleryImage
                    mode="grid"
                    showViewAll={false}
                    data={galleryData}
                    imageClassName="w-full object-cover h-[50lvh] min-h-[50lvh]"
                />
            </section>
        </>
    );
}