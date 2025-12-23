import { AutoPlayImage } from "@/components/auto-play-image";
import { CardProjects } from "@/components/card-projects";
import { GalleryImage } from "@/components/gallery-image";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { ReusablePagination } from "@/components/reusable-pagination";
import { galleryData, projectsData } from "@/system";
import { FilterSelect } from "@/components/filter-select";

// Generate dynamic metadata
export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const category = params?.category || "";
    const q = params?.q || "";
    const currentPage = parseInt(params?.page) || 1;

    // Get statistics
    const totalProjects = projectsData.length;
    const uniqueCategories = [...new Set(projectsData.map(item => item.category))];
    const uniqueLocations = [...new Set(projectsData.map(item => item.location))];

    // Build dynamic title
    let title = "Portfolio Proyek Konstruksi & Infrastruktur";
    if (category && category !== "all") {
        const categoryProjects = projectsData.filter(p => p.category === category);
        title = `Proyek ${category} - ${categoryProjects.length} Portfolio`;
    }
    if (q) {
        title = `Hasil Pencarian: ${q}`;
    }
    if (currentPage > 1) {
        title += ` - Halaman ${currentPage}`;
    }
    title += " | PT GAB DIG JAYA";

    // Build dynamic description
    let description = `Jelajahi ${totalProjects} proyek konstruksi dan infrastruktur yang telah diselesaikan PT GAB DIG JAYA di seluruh Indonesia. `;
    if (category && category !== "all") {
        const categoryProjects = projectsData.filter(p => p.category === category);
        const locations = [...new Set(categoryProjects.map(p => p.location))].slice(0, 3).join(", ");
        description += `Portfolio ${category} mencakup proyek di ${locations}. `;
    } else {
        description += `Mencakup ${uniqueCategories.length} kategori proyek di ${uniqueLocations.length}+ lokasi. `;
    }
    description += "Pengalaman terpercaya dalam pembangunan infrastruktur berkualitas tinggi.";

    // Build keywords
    const allTags = projectsData.flatMap(p => p.tags);
    const uniqueTags = [...new Set(allTags)];
    const keywords = [
        "proyek konstruksi Indonesia",
        "portfolio infrastruktur",
        "PT GAB DIG JAYA projects",
        ...uniqueCategories.map(cat => `proyek ${cat.toLowerCase()}`),
        ...uniqueLocations.slice(0, 5).map(loc => `konstruksi ${loc}`),
        ...uniqueTags.slice(0, 10),
        "kontraktor terpercaya",
        "pembangunan gedung",
        "infrastruktur jalan",
    ];

    if (category && category !== "all") {
        keywords.unshift(`proyek ${category.toLowerCase()}`);
    }

    // Get featured project image
    const featuredProject = projectsData[0];

    return {
        title,
        description,
        keywords,

        openGraph: {
            type: "website",
            title,
            description,
            url: `https://www.gab.co.id/projects${category ? `?category=${category}` : ''}${currentPage > 1 ? `${category ? '&' : '?'}page=${currentPage}` : ''}`,
            images: [
                {
                    url: featuredProject?.image || "https://www.gab.co.id/images/og-projects.jpg",
                    width: 1200,
                    height: 630,
                    alt: "PT GAB DIG JAYA Projects Portfolio",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [featuredProject?.image || "https://www.gab.co.id/images/twitter-projects.jpg"],
        },

        alternates: {
            canonical: category || q
                ? `https://www.gab.co.id/projects${category ? `?category=${category}` : ''}${q ? `${category ? '&' : '?'}q=${q}` : ''}${currentPage > 1 ? `&page=${currentPage}` : ''}`
                : `https://www.gab.co.id/projects${currentPage > 1 ? `?page=${currentPage}` : ''}`,
        },

        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    };
}

// Generate structured data
const generateProjectsStructuredData = (projects, category) => {
    const uniqueCategories = [...new Set(projectsData.map(item => item.category))];

    return {
        "@context": "https://schema.org",
        "@graph": [
            // CollectionPage Schema
            {
                "@type": "CollectionPage",
                "@id": "https://www.gab.co.id/projects#collection",
                url: "https://www.gab.co.id/projects",
                name: category ? `${category} Projects Portfolio` : "All Projects Portfolio",
                description: `Browse ${projects.length} construction and infrastructure projects from PT GAB DIG JAYA`,
                isPartOf: {
                    "@id": "https://www.gab.co.id/#website",
                },
                publisher: {
                    "@id": "https://www.gab.co.id/#organization",
                },
            },

            // ItemList for Projects
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/projects#portfolio",
                name: "PT GAB DIG JAYA Projects Portfolio",
                description: "Complete portfolio of construction and infrastructure projects",
                numberOfItems: projects.length,
                itemListElement: projects.slice(0, 10).map((project, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@type": "Project",
                        "@id": `https://www.gab.co.id/projects/${project.slug}`,
                        name: project.title,
                        description: project.description,
                        image: [project.image, ...project.gallery],
                        startDate: `${project.year}-01-01`,
                        category: project.category,
                        location: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: project.location,
                                addressCountry: "ID",
                            },
                        },
                        creator: {
                            "@type": "Organization",
                            name: "PT GAB DIG JAYA",
                        },
                        client: {
                            "@type": "Organization",
                            name: project.client,
                        },
                        url: `https://www.gab.co.id/projects/${project.slug}`,
                    },
                })),
            },

            // BreadcrumbList Schema
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.gab.co.id/projects#breadcrumb",
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
                    ...(category && category !== "all" ? [{
                        "@type": "ListItem",
                        position: 3,
                        name: category,
                        item: `https://www.gab.co.id/projects?category=${category}`,
                    }] : []),
                ],
            },

            // Project Categories
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/projects#categories",
                name: "Project Categories",
                description: "Construction and infrastructure project categories",
                numberOfItems: uniqueCategories.length,
                itemListElement: uniqueCategories.map((cat, index) => {
                    const catProjects = projectsData.filter(p => p.category === cat);
                    return {
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                            "@type": "CreativeWorkSeries",
                            name: cat,
                            description: `${catProjects.length} projects in ${cat}`,
                            url: `https://www.gab.co.id/projects?category=${cat}`,
                        },
                    };
                }),
            },

            // ImageGallery Schema
            {
                "@type": "ImageGallery",
                "@id": "https://www.gab.co.id/projects#gallery",
                name: "Project Gallery",
                description: "Photo gallery of completed projects",
                image: galleryData.slice(0, 10).map((item, index) => ({
                    "@type": "ImageObject",
                    "@id": `https://www.gab.co.id/projects#gallery-image${index + 1}`,
                    url: item.image,
                    caption: item.title,
                    description: item.shortDesc,
                })),
            },
        ],
    };
};

export default async function Projects({ searchParams }) {
    const params = await searchParams;
    const q = params?.q?.toLowerCase() || "";
    const category = params?.category || "";
    const currentPage = parseInt(params?.page) || 1;
    const itemsPerPage = 9;

    // Extract unique categories
    const uniqueCategories = [...new Set(projectsData.map(item => item.category))];

    // Build category items for FilterSelect
    const categoryItems = [
        { label: "Semua Kategori", value: "all" },
        ...uniqueCategories.map(cat => ({
            label: cat,
            value: cat
        }))
    ];

    // Filter projects
    const filtered = projectsData.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.location.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tags.some(tag => tag.toLowerCase().includes(q));

        const matchesCategory = category && category !== "all" ? item.category === category : true;

        return matchesSearch && matchesCategory;
    });

    // Pagination
    const totalItems = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = filtered.slice(startIndex, endIndex);

    // Generate structured data
    const structuredData = generateProjectsStructuredData(filtered, category);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <ReBanner
                title="Our"
                highlightText="Projects"
                description="Where Vision Turns Into Impact — Showcasing Our Proven Excellence."
                buttonText="Explore!"
                imageAlt="Portfolio Proyek PT GAB DIG JAYA - Konstruksi & Infrastruktur"
                onButtonClick={null}
                children={<AutoPlayImage />}
            />

            <section className="">

                {/* Search and Filter */}
                <div className="flex items-center justify-between gap-4 flex-wrap margin">
                    <SearchBar
                        className="w-full max-w-2xl"
                        placeholder="Cari nama proyek, lokasi, atau kategori..."
                        defaultValue={q}
                        showClearButton={true}
                        showClearAllButton={true}
                        aria-label="Cari proyek"
                    />
                    <FilterSelect
                        placeholder="Filter Kategori"
                        defaultValue={category}
                        items={categoryItems}
                        paramName="category"
                        className="w-[200px]"
                        aria-label="Filter proyek berdasarkan kategori"
                    />
                </div>

                {/* Projects Grid */}
                {paginatedProjects.length > 0 ? (
                    <>
                        <CardProjects
                            projects={paginatedProjects}
                            useSpacing={false}
                            useMargin={false}
                        />

                        <ReusablePagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            minItemsForPagination={itemsPerPage}
                            showInfo={true}
                            scrollOnChange={true}
                            aria-label="Navigasi halaman proyek"
                        />
                    </>
                ) : (
                    <div className="text-center py-20 space-y-4">
                        <h2 className="text-2xl font-semibold text-muted-foreground">
                            Tidak ada proyek ditemukan
                        </h2>
                        <p className="text-muted-foreground">
                            {q
                                ? `Tidak ada proyek yang cocok dengan pencarian "${q}"`
                                : "Silakan coba kategori atau kata kunci lain"
                            }
                        </p>
                    </div>
                )}
            </section>

            {/* Gallery Section */}
            <GalleryImage
                mode="carousel"
                data={galleryData}
            />
        </>
    );
}