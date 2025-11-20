import { newsData } from "@/system";
import { notFound } from "next/navigation";
import { slugify } from "@/lib/slugify";
import { CategoryNewsComponent } from "@/components/category-news-component";

export async function generateStaticParams() {
    const categories = [...new Set(newsData.map(item => item.category))];
    
    return categories.map((category) => ({
        category: slugify(category),
    }));
}

export default async function CategoryNewsPage({ params, searchParams }) {
    const { category } = await params;
    const currentParams = await searchParams;
    const currentPage = parseInt(currentParams?.page) || 1;
    const itemsPerPage = 6;
    
    // Find original category name
    const originalCategory = newsData.find(
        item => slugify(item.category) === category
    )?.category;
    
    if (!originalCategory) {
        notFound();
    }
    
    // Filter news by category
    const filteredNews = newsData.filter(
        item => item.category === originalCategory
    );
    
    // Pagination
    const totalItems = filteredNews.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);
    
    return (
        <CategoryNewsComponent 
            category={originalCategory}
            newsData={paginatedNews}
            totalItems={totalItems}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
        />
    );
}