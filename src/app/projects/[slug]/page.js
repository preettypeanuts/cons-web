import { ProjectDetail } from "@/components/projects-detail";
import { projectsData } from "@/system";
import { notFound } from "next/navigation";
import { slugify } from "@/lib/slugify";

// Generate static params untuk SSG
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: slugify(project.title), // Konversi title ke slug
    }));
}

// Generate metadata untuk SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;

    // Find project by slugified title
    const project = projectsData.find((item) => slugify(item.title) === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} - ${project.category} | PT GAB MATTIRO FLORESIND`,
        description: project.description,
        keywords: [
            ...project.tags,
            project.category,
            project.location,
            project.year.toString(),
            project.client,
            "proyek konstruksi",
            "PT GAB MATTIRO FLORESIND projects",
            "infrastruktur Indonesia",
        ],

        openGraph: {
            type: "article",
            title: project.title,
            description: project.description,
            url: `https://www.gab.co.id/projects/${slugify(project.title)}`,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
                ...(project.gallery || []).map(img => ({
                    url: img,
                    width: 800,
                    height: 600,
                    alt: `${project.title} - Gallery`,
                })),
            ],
            article: {
                publishedTime: `${project.year}-01-01`,
                tags: project.tags,
            },
        },

        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [project.image],
        },

        alternates: {
            canonical: `https://www.gab.co.id/projects/${slugify(project.title)}`,
        },

        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    };
}

export default async function ProjectsDetailPage({ params }) {
    const { slug } = await params;

    // Find project by slugified title
    const project = projectsData.find((item) => slugify(item.title) === slug);

    // Handle 404
    if (!project) {
        notFound();
    }

    // Get related projects (same category, exclude current)
    const relatedProjects = projectsData
        .filter((item) => item.category === project.category && item.id !== project.id)
        .slice(0, 3);

    // Project Schema
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "Project",
        "@id": `https://www.gab.co.id/projects/${slugify(project.title)}#project`,
        name: project.title,
        description: project.description,
        image: [
            project.image,
            ...(project.gallery || []),
        ],
        startDate: `${project.year}-01-01`,
        category: project.category,
        location: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: project.location,
                addressCountry: "ID",
            },
            name: project.location,
        },
        creator: {
            "@type": "Organization",
            "@id": "https://www.gab.co.id/#organization",
            name: "PT GAB MATTIRO FLORESIND",
            logo: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
        },
        client: {
            "@type": "Organization",
            name: project.client,
        },
        keywords: project.tags.join(", "),
        url: `https://www.gab.co.id/projects/${slugify(project.title)}`,
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
                name: "Projects",
                item: "https://www.gab.co.id/projects",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: project.category,
                item: `https://www.gab.co.id/projects?category=${encodeURIComponent(project.category)}`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: project.title,
                item: `https://www.gab.co.id/projects/${slugify(project.title)}`,
            },
        ],
    };

    // ImageGallery Schema
    const gallerySchema = project.gallery && project.gallery.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "@id": `https://www.gab.co.id/projects/${slugify(project.title)}#gallery`,
        name: `${project.title} - Gallery`,
        description: `Photo gallery of ${project.title}`,
        image: project.gallery.map((img, index) => ({
            "@type": "ImageObject",
            "@id": `https://www.gab.co.id/projects/${slugify(project.title)}#image${index + 1}`,
            url: img,
            caption: `${project.title} - Image ${index + 1}`,
            contentUrl: img,
        })),
    } : null;

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {gallerySchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
                />
            )}

            <ProjectDetail
                data={project}
                relatedProjects={relatedProjects}
            />
        </>
    );
}