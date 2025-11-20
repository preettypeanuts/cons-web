import Link from "next/link";
import { CardNews } from "@/components/card-news";
import { ReusablePagination } from "@/components/reusable-pagination";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const CategoryNewsComponent = ({
    category,
    newsData,
    totalItems,
    currentPage,
    itemsPerPage
}) => {
    return (
        <>
            <section className="spacing margin space-y-10">
                {/* Back Button */}
                <div>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/news" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to All News
                        </Link>
                    </Button>
                </div>

                {/* Category Info */}
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold mb-2 uppercase">
                        <span className="text-mainColor">
                            {category} {" "}
                        </span>
                        Articles
                    </h2>
                    <p className="text-muted-foreground">
                        Showing {totalItems} {totalItems === 1 ? 'article' : 'articles'} in this category
                    </p>
                </div>

                {/* News Grid */}
                {newsData.length > 0 ? (
                    <>
                        <CardNews
                            data={newsData}
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
                        />
                    </>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground mb-4">
                            No articles found in this category
                        </p>
                        <Button asChild>
                            <Link href="/news">Browse All News</Link>
                        </Button>
                    </div>
                )}
            </section>
        </>
    );
};