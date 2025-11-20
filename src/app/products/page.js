import { CardProduct } from "@/components/card-product";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { FilterSelect } from "@/components/filter-select";
import { ReusablePagination } from "@/components/reusable-pagination";
import { productsData } from "@/system";

export default async function Products({ searchParams }) {
    const params = await searchParams;
    const q = params?.q?.toLowerCase() || "";
    const division = params?.division || "";
    const currentPage = parseInt(params?.page) || 1;
    const itemsPerPage = 9;

    // Extract unique divisions
    const uniqueDivisions = [...new Set(productsData.map(item => item.division))];

    // Build division items for FilterSelect
    const divisionItems = [
        { label: "All Divisions", value: "all" },
        ...uniqueDivisions.map(div => ({
            label: div,
            value: div
        }))
    ];

    // Filter products
    const filtered = productsData.filter((item) => {
        if (!item.isPublished) return false;

        const matchesSearch =
            item.productName.toLowerCase().includes(q) ||
            item.division.toLowerCase().includes(q) ||
            (item.descriptions && item.descriptions.toLowerCase().includes(q)) ||
            (item.productCategory && item.productCategory.toLowerCase().includes(q));

        const matchesDivision = division ? item.division === division : true;

        return matchesSearch && matchesDivision;
    });

    // Pagination
    const totalItems = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filtered.slice(startIndex, endIndex);

    return (
        <>
            <ReBanner
                title="Our"
                highlightText="Expertise"
                description="Crafting Quality Solutions — Built to Support Every Requirement."
                buttonText="Explore!"
                imageSrc="https://images.unsplash.com/photo-1685233503234-0c56fd142ac7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3132"
                imageAlt="Products Banner"
                onButtonClick={null}
            />

            <section className="spacing margin space-y-10">
                {/* Search and Filter */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <SearchBar
                        className="w-full max-w-2xl"
                        placeholder="Product name, division, category..."
                        defaultValue={q}
                        showClearButton={true}
                        showClearAllButton={true}
                    />
                    <FilterSelect
                        placeholder="Filter Division"
                        defaultValue={division}
                        items={divisionItems}
                        paramName="division" 
                        className="w-[200px]"
                    />
                </div>

                {/* Products Grid */}
                {paginatedProducts.length > 0 ? (
                    <>
                        <CardProduct
                            data={paginatedProducts}
                            useSpacing={false}
                            useMargin={false}
                        />

                        <ReusablePagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            minItemsForPagination={itemsPerPage}
                            showInfo={true}
                            scrollOnChange={false}
                        />
                    </>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground mb-4">
                            No products found
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}