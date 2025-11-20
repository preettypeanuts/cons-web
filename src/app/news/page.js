import { CardNews } from "@/components/card-news";
import { FilterSelect } from "@/components/filter-select";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { ReusablePagination } from "@/components/reusable-pagination";
import { newsData } from "@/system";
import { HighlightedNews } from "@/components/highlighted-news";

export default async function News({ searchParams }) {
    // Await searchParams untuk Next.js 15+
    const params = await searchParams;
    const q = params?.q?.toLowerCase() || "";
    const category = params?.category || "";
    const currentPage = parseInt(params?.page) || 1;
    const itemsPerPage = 6;

    // Extract unique categories dari newsData
    const uniqueCategories = [...new Set(newsData.map(item => item.category))];

    // Fungsi helper untuk format category name
    const formatCategoryName = (category) => {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

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
            item.category.toLowerCase().includes(q);

        const matchesCategory = category ? item.category === category : true;

        return matchesSearch && matchesCategory;
    });

    // Pagination logic
    const totalItems = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filtered.slice(startIndex, endIndex);

    // Fallback jika tidak ada hasil
    const highlightedNews = newsData.find(item => item.highlight === true) || {};

    return (
        <>
            <ReBanner
                title="Today"
                highlightText="Updates"
                titleClassName="text-3xl! md:text-4xl! flex-row! gap-1"
                buttonClassName="hidden"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />

            <HighlightedNews data={highlightedNews} />

            <section className="spacing margin space-y-10">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <SearchBar
                        className="w-full max-w-lg"
                        placeholder="Judul, kategori..."
                        defaultValue={q}
                        showClearButton={true}
                        showClearAllButton={true}
                    />
                    <FilterSelect
                        placeholder="Filter Kategori"
                        defaultValue={category}
                        items={categoryItems}
                        className="w-[200px]"
                    />
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
                            showInfo={false}
                            scrollOnChange={false}
                            pageParamName="page"
                        />
                    </>
                ) : (
                    <p className="text-center text-muted-foreground py-10">
                        Tidak ada berita ditemukan
                    </p>
                )}
            </section>
        </>
    );
}