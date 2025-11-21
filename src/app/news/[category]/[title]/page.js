import { NewsDetailComponent } from "@/components/news-detail-component";
import { newsData } from "@/system";
import { notFound } from "next/navigation";
import { slugify } from "@/lib/slugify";

// Generate static params untuk SSG
export async function generateStaticParams() {
    return newsData.map((news) => ({
        category: slugify(news.category),
        title: slugify(news.title),
    }));
}

// Generate metadata untuk SEO
export async function generateMetadata({ params }) {
    const { category, title } = await params;
    
    // Find news by slugified category and title
    const news = newsData.find(
        (item) => 
            slugify(item.category) === category && 
            slugify(item.title) === title
    );

    if (!news) {
        return {
            title: "News Not Found",
        };
    }

    const formatCategoryName = (cat) => {
        return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return {
        title: `${news.title} | PT GAB DIG JAYA`,
        description: news.excerpt || news.title,
        keywords: [
            ...news.tags,
            news.category,
            news.author,
            "PT GAB DIG JAYA",
            "industri mineral",
            "berita konstruksi",
            news.title.toLowerCase(),
        ],
        authors: [{ name: news.author }],
        category: news.category,
        
        openGraph: {
            title: news.title,
            description: news.excerpt || news.title,
            images: [
                {
                    url: news.image,
                    width: 1200,
                    height: 630,
                    alt: news.title,
                }
            ],
            type: "article",
            publishedTime: news.date,
            authors: [news.author],
            tags: news.tags,
            section: formatCategoryName(news.category),
            url: `https://www.gab.co.id/news/${category}/${title}`,
        },
        
        twitter: {
            card: "summary_large_image",
            title: news.title,
            description: news.excerpt || news.title,
            images: [news.image],
            creator: `@${news.author.toLowerCase().replace(/\s+/g, '')}`,
        },
        
        alternates: {
            canonical: `https://www.gab.co.id/news/${category}/${title}`,
        },
        
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    };
}

export default async function NewsDetailPage({ params }) {
    const { category, title } = await params;
    
    // Find news by slugified category and title
    const news = newsData.find(
        (item) => 
            slugify(item.category) === category && 
            slugify(item.title) === title
    );

    // Handle 404
    if (!news) {
        notFound();
    }

    // Get related news (same category, exclude current)
    const relatedNews = newsData
        .filter((item) => item.category === news.category && item.id !== news.id)
        .slice(0, 3);

    // Generate Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://www.gab.co.id/news/${category}/${title}#article`,
        headline: news.title,
        description: news.excerpt,
        image: {
            "@type": "ImageObject",
            url: news.image,
            width: 1200,
            height: 630,
        },
        datePublished: news.date,
        dateModified: news.date,
        author: {
            "@type": "Person",
            name: news.author,
        },
        publisher: {
            "@type": "Organization",
            name: "PT GAB DIG JAYA",
            logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
            },
        },
        articleSection: news.category,
        keywords: news.tags.join(", "),
        articleBody: news.content,
        url: `https://www.gab.co.id/news/${category}/${title}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.gab.co.id/news/${category}/${title}`,
        },
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
                name: "News",
                item: "https://www.gab.co.id/news",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: news.category,
                item: `https://www.gab.co.id/news?category=${news.category}`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: news.title,
                item: `https://www.gab.co.id/news/${category}/${title}`,
            },
        ],
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <NewsDetailComponent 
                data={news} 
                relatedNews={relatedNews}
            />
        </>
    );
}