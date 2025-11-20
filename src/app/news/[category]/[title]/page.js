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

    return {
        title: `${news.title} | ${news.category} News`,
        description: news.excerpt || news.title,
        openGraph: {
            title: news.title,
            description: news.excerpt || news.title,
            images: [news.image],
            type: "article",
            publishedTime: news.date,
            authors: [news.author],
            tags: news.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: news.title,
            description: news.excerpt || news.title,
            images: [news.image],
        },
        alternates: {
            canonical: `/news/${category}/${title}`,
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

    return (
        <NewsDetailComponent 
            data={news} 
            relatedNews={relatedNews}
        />
    );
}