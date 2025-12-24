// app/news/page.jsx
import { CardNews } from "@/components/card-news";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { ReusablePagination } from "@/components/reusable-pagination";
import { newsData } from "@/system";
import { HighlightedNews } from "@/components/highlighted-news";
import { FilterSelect } from "@/components/filter-select";

// Helper function untuk format category name
const formatCategoryName = (category) => {
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Generate dynamic metadata
export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const category = params?.category || "";
    const q = params?.q || "";
    const currentPage = parseInt(params?.page) || 1;

    // Get statistics
    const totalArticles = newsData.length;
    const uniqueCategories = [...new Set(newsData.map(item => item.category))];
    const latestNews = newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

    // Build dynamic title
    let title = "Berita & Artikel Industri Mineral";
    if (category && category !== "all") {
        title = `Berita ${formatCategoryName(category)}`;
    }
    if (q) {
        title = `Hasil Pencarian: ${q}`;
    }
    if (currentPage > 1) {
        title += ` - Halaman ${currentPage}`;
    }
    title += " | PT GAB MATTIRO FLORESIND";

    // Build dynamic description
    let description = `Baca ${totalArticles}+ artikel dan berita terbaru seputar industri mineral, konstruksi, engineering, dan material industri dari PT GAB MATTIRO FLORESIND. `;
    if (category && category !== "all") {
        description += `Fokus pada kategori ${formatCategoryName(category)}. `;
    }
    description += `Dapatkan insight tentang ${uniqueCategories.map(formatCategoryName).join(", ")}.`;

    // Build keywords
    const keywords = [
        "berita industri mineral",
        "artikel konstruksi",
        "news engineering",
        "PT GAB MATTIRO FLORESIND",
        ...uniqueCategories.map(cat => `berita ${cat.toLowerCase()}`),
        ...latestNews.map(news => news.title.toLowerCase()),
        "quicklime news",
        "silica industry",
        "zeolite updates",
        "material industri Indonesia",
    ];

    if (category && category !== "all") {
        keywords.unshift(`berita ${category.toLowerCase()}`);
    }

    return {
        title,
        description,
        keywords,

        openGraph: {
            type: "website",
            title,
            description,
            url: `https://www.gab.co.id/news${category ? `?category=${category}` : ''}${currentPage > 1 ? `${category ? '&' : '?'}page=${currentPage}` : ''}`,
            images: [
                {
                    url: latestNews[0]?.image || "https://www.gab.co.id/images/og-news.jpg",
                    width: 1200,
                    height: 630,
                    alt: "PT GAB MATTIRO FLORESIND News",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [latestNews[0]?.image || "https://www.gab.co.id/images/twitter-news.jpg"],
        },

        alternates: {
            canonical: category || q
                ? `https://www.gab.co.id/news${category ? `?category=${category}` : ''}${q ? `${category ? '&' : '?'}q=${q}` : ''}${currentPage > 1 ? `&page=${currentPage}` : ''}`
                : `https://www.gab.co.id/news${currentPage > 1 ? `?page=${currentPage}` : ''}`,
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

// Generate structured data
const generateNewsStructuredData = (newsItems, category) => {
    const uniqueCategories = [...new Set(newsData.map(item => item.category))];

    return {
        "@context": "https://schema.org",
        "@graph": [
            // Blog Schema
            {
                "@type": "Blog",
                "@id": "https://www.gab.co.id/news#blog",
                url: "https://www.gab.co.id/news",
                name: "PT GAB MATTIRO FLORESIND News & Articles",
                description: "Berita dan artikel seputar industri mineral, konstruksi, dan engineering dari PT GAB MATTIRO FLORESIND",
                publisher: {
                    "@type": "Organization",
                    "@id": "https://www.gab.co.id/#organization",
                    name: "PT GAB MATTIRO FLORESIND",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
                    },
                },
                inLanguage: "id-ID",
                blogPost: newsItems.slice(0, 10).map(article => ({
                    "@type": "BlogPosting",
                    "@id": `https://www.gab.co.id/news/${article.slug}`,
                    headline: article.title,
                    description: article.excerpt,
                    image: article.image,
                    datePublished: article.date,
                    author: {
                        "@type": "Person",
                        name: article.author,
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "PT GAB MATTIRO FLORESIND",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
                        },
                    },
                    articleSection: article.category,
                    keywords: article.tags.join(", "),
                    url: `https://www.gab.co.id/news/${article.slug}`,
                })),
            },

            // CollectionPage Schema
            {
                "@type": "CollectionPage",
                "@id": "https://www.gab.co.id/news#collection",
                url: "https://www.gab.co.id/news",
                name: category ? `${formatCategoryName(category)} News` : "All News & Articles",
                description: `Browse ${newsItems.length} articles about ${category ? formatCategoryName(category) : "industrial minerals, construction, and engineering"}`,
                isPartOf: {
                    "@id": "https://www.gab.co.id/#website",
                },
            },

            // BreadcrumbList Schema
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.gab.co.id/news#breadcrumb",
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
                        name: "News",
                        item: "https://www.gab.co.id/news",
                    },
                    ...(category && category !== "all" ? [{
                        "@type": "ListItem",
                        position: 3,
                        name: formatCategoryName(category),
                        item: `https://www.gab.co.id/news?category=${category}`,
                    }] : []),
                ],
            },

            // ItemList for Categories
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/news#categories",
                name: "News Categories",
                numberOfItems: uniqueCategories.length,
                itemListElement: uniqueCategories.map((cat, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: formatCategoryName(cat),
                    url: `https://www.gab.co.id/news?category=${cat}`,
                })),
            },
        ],
    };
};

export default async function News({ searchParams }) {
    // Await searchParams untuk Next.js 15+
    const params = await searchParams;
    const q = params?.q?.toLowerCase() || "";
    const category = params?.category || "";
    const currentPage = parseInt(params?.page || "1") || 1;
    const itemsPerPage = 6;

    // Extract unique categories dari newsData
    const uniqueCategories = [...new Set(newsData.map(item => item.category))];

    // Build category items untuk FilterSelect
    const categoryItems = [
        { label: "Semua Kategori", value: "all" },
        ...uniqueCategories.map(cat => ({
            label: formatCategoryName(cat),
            value: cat
        }))
    ];

    // Filter SSR
    const filtered = newsData.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.excerpt.toLowerCase().includes(q) ||
            item.tags.some(tag => tag.toLowerCase().includes(q));
        const matchesCategory = category && category !== "all" ? item.category === category : true;
        return matchesSearch && matchesCategory;
    });

    // Pagination logic
    const totalItems = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filtered.slice(startIndex, endIndex);

    // Fallback jika tidak ada hasil
    const highlightedNews = newsData.find(item => item.highlight === true) || newsData[0];

    // Generate structured data
    const structuredData = generateNewsStructuredData(filtered, category);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <ReBanner
                title="Today"
                highlightText="Updates"
                titleClassName="text-3xl! md:text-4xl! flex-row! gap-1"
                buttonClassName="hidden"
                imageAlt="Latest News and Updates from PT GAB MATTIRO FLORESIND"
                onButtonClick={null}
            />

            <HighlightedNews data={highlightedNews} />

            <section className="spacing margin space-y-10">
                {/* SEO-friendly heading */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">
                        {category && category !== "all"
                            ? `Berita ${formatCategoryName(category)}`
                            : "Berita & Artikel Terbaru"}
                    </h1>
                    <p className="text-muted-foreground">
                        {q
                            ? `Menampilkan hasil pencarian untuk "${q}" (${totalItems} artikel)`
                            : `Jelajahi ${totalItems} artikel tentang industri mineral, konstruksi, dan engineering`
                        }
                    </p>
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <SearchBar
                        className="w-full max-w-lg"
                        placeholder="Cari judul, kategori, atau tag..."
                        defaultValue={q}
                        showClearButton={true}
                        showClearAllButton={true}
                        aria-label="Cari artikel berita"
                    />
                    {/* <FilterSelect
                        placeholder="Filter Kategori"
                        defaultValue={category}
                        items={categoryItems}
                        className="w-[200px]"
                        aria-label="Filter berita berdasarkan kategori"
                    /> */}
                </div>

                {paginatedData.length > 0 ? (
                    <>
                        <CardNews
                            data={paginatedData}
                            useSpacing={false}
                            useMargin={false}
                        />
                        <ReusablePagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            minItemsForPagination={6}
                            showInfo={true}
                            scrollOnChange={true}
                            pageParamName="page"
                            aria-label="Navigasi halaman berita"
                        />
                    </>
                ) : (
                    <div className="text-center py-20 space-y-4">
                        <h2 className="text-2xl font-semibold text-muted-foreground">
                            Tidak ada berita ditemukan
                        </h2>
                        <p className="text-muted-foreground">
                            {q
                                ? `Tidak ada artikel yang cocok dengan pencarian "${q}"`
                                : "Silakan coba kategori atau kata kunci lain"
                            }
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}