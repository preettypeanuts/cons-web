import { CardProduct } from "@/components/card-product";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { FilterSelect } from "@/components/filter-select";
import { ReusablePagination } from "@/components/reusable-pagination";
import { productsData } from "@/system";

// Generate dynamic metadata
export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const division = params?.division || "";
    const q = params?.q || "";
    const currentPage = parseInt(params?.page) || 1;

    // Get statistics
    const totalProducts = productsData.filter(p => p.isPublished).length;
    const uniqueDivisions = [...new Set(productsData.filter(p => p.isPublished).map(item => item.division))];

    // Build dynamic title
    let title = "Produk Mineral Industri";
    if (division && division !== "all") {
        const divisionProducts = productsData.filter(p => p.division === division && p.isPublished);
        title = `${division} - ${divisionProducts.length} Produk`;
    }
    if (q) {
        title = `Hasil Pencarian: ${q}`;
    }
    if (currentPage > 1) {
        title += ` - Halaman ${currentPage}`;
    }
    title += " | PT GAB DIG JAYA";

    // Build dynamic description
    let description = `Jelajahi ${totalProducts} produk mineral berkualitas tinggi dari PT GAB DIG JAYA. `;
    if (division && division !== "all") {
        const divisionProducts = productsData.filter(p => p.division === division && p.isPublished);
        const productNames = divisionProducts.slice(0, 3).map(p => p.productName).join(", ");
        description += `${division} meliputi: ${productNames}. `;
    } else {
        description += `Tersedia dalam ${uniqueDivisions.length} divisi: ${uniqueDivisions.slice(0, 3).join(", ")}. `;
    }
    description += "Solusi lengkap untuk kebutuhan industri Anda.";

    // Build keywords
    const allProductNames = productsData.filter(p => p.isPublished).map(p => p.productName.toLowerCase());
    const keywords = [
        "produk mineral industri",
        "material industri Indonesia",
        "PT GAB DIG JAYA products",
        ...uniqueDivisions.map(div => div.toLowerCase()),
        ...allProductNames.slice(0, 10),
        "quicklime Indonesia",
        "silica sand",
        "zeolite bentonite",
        "manganese greensand",
        "kaolin clay",
    ];

    if (division && division !== "all") {
        keywords.unshift(`${division.toLowerCase()} products`);
    }

    // Get featured product image
    const featuredProduct = productsData.find(p => p.isPriority && p.isPublished) || productsData.find(p => p.isPublished);

    return {
        title,
        description,
        keywords,

        openGraph: {
            type: "website",
            title,
            description,
            url: `https://www.gab.co.id/products${division ? `?division=${division}` : ''}${currentPage > 1 ? `${division ? '&' : '?'}page=${currentPage}` : ''}`,
            images: [
                {
                    url: featuredProduct?.imageUrl || "https://www.gab.co.id/images/og-products.jpg",
                    width: 1200,
                    height: 630,
                    alt: "PT GAB DIG JAYA Products",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [featuredProduct?.imageUrl || "https://www.gab.co.id/images/twitter-products.jpg"],
        },

        alternates: {
            canonical: division || q
                ? `https://www.gab.co.id/products${division ? `?division=${division}` : ''}${q ? `${division ? '&' : '?'}q=${q}` : ''}${currentPage > 1 ? `&page=${currentPage}` : ''}`
                : `https://www.gab.co.id/products${currentPage > 1 ? `?page=${currentPage}` : ''}`,
        },

        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    };
}

// Generate structured data
const generateProductsStructuredData = (products, division) => {
    const uniqueDivisions = [...new Set(productsData.filter(p => p.isPublished).map(item => item.division))];

    return {
        "@context": "https://schema.org",
        "@graph": [
            // CollectionPage Schema
            {
                "@type": "CollectionPage",
                "@id": "https://www.gab.co.id/products#collection",
                url: "https://www.gab.co.id/products",
                name: division ? `${division} Products` : "All Products",
                description: `Browse ${products.length} mineral products from PT GAB DIG JAYA`,
                isPartOf: {
                    "@id": "https://www.gab.co.id/#website",
                },
                publisher: {
                    "@id": "https://www.gab.co.id/#organization",
                },
            },

            // Product Catalog
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/products#catalog",
                name: "PT GAB DIG JAYA Product Catalog",
                description: "Complete catalog of industrial mineral products",
                numberOfItems: products.length,
                itemListElement: products.slice(0, 10).map((product, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@type": "Product",
                        "@id": `https://www.gab.co.id/products/${product.id}`,
                        name: product.productName,
                        description: product.descriptions,
                        image: product.imageUrl,
                        brand: {
                            "@type": "Brand",
                            name: "PT GAB DIG JAYA",
                        },
                        manufacturer: {
                            "@type": "Organization",
                            name: "PT GAB DIG JAYA",
                        },
                        category: product.division,
                        offers: {
                            "@type": "Offer",
                            availability: "https://schema.org/InStock",
                            priceCurrency: "IDR",
                            seller: {
                                "@type": "Organization",
                                name: "PT GAB DIG JAYA",
                            },
                        },
                    },
                })),
            },

            // BreadcrumbList Schema
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.gab.co.id/products#breadcrumb",
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
                        name: "Products",
                        item: "https://www.gab.co.id/products",
                    },
                    ...(division && division !== "all" ? [{
                        "@type": "ListItem",
                        position: 3,
                        name: division,
                        item: `https://www.gab.co.id/products?division=${division}`,
                    }] : []),
                ],
            },

            // Division Categories
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/products#divisions",
                name: "Product Divisions",
                description: "Industrial mineral product divisions",
                numberOfItems: uniqueDivisions.length,
                itemListElement: uniqueDivisions.map((div, index) => {
                    const divProducts = productsData.filter(p => p.division === div && p.isPublished);
                    return {
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                            "@type": "ProductGroup",
                            name: div,
                            description: `${divProducts.length} products in ${div}`,
                            url: `https://www.gab.co.id/products?division=${div}`,
                            hasVariant: divProducts.map(p => ({
                                "@type": "Product",
                                name: p.productName,
                                image: p.imageUrl,
                            })),
                        },
                    };
                }),
            },
        ],
    };
};

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

        const matchesDivision = division && division !== "all" ? item.division === division : true;

        return matchesSearch && matchesDivision;
    });

    // Pagination
    const totalItems = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filtered.slice(startIndex, endIndex);

    // Generate structured data
    const structuredData = generateProductsStructuredData(filtered, division);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <ReBanner
                title="Our"
                highlightText="Expertise"
                description="Crafting Quality Solutions — Built to Support Every Requirement."
                buttonText="Explore!"
                imageAlt="PT GAB DIG JAYA Industrial Mineral Products"
                onButtonClick={null}
            />

            <section className="margin space-y-10">

                {/* Search and Filter */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <SearchBar
                        className="w-full max-w-2xl"
                        placeholder="Cari nama produk, divisi, atau kategori..."
                        defaultValue={q}
                        showClearButton={true}
                        showClearAllButton={true}
                        aria-label="Cari produk mineral"
                    />
                    <FilterSelect
                        placeholder="Filter Division"
                        defaultValue={division}
                        items={divisionItems}
                        paramName="division"
                        className="w-[200px]"
                        aria-label="Filter produk berdasarkan divisi"
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
                            scrollOnChange={true}
                            aria-label="Navigasi halaman produk"
                        />
                    </>
                ) : (
                    <div className="text-center py-20 space-y-4">
                        <h2 className="text-2xl font-semibold text-muted-foreground">
                            Tidak ada produk ditemukan
                        </h2>
                        <p className="text-muted-foreground">
                            {q
                                ? `Tidak ada produk yang cocok dengan pencarian "${q}"`
                                : "Silakan coba divisi atau kata kunci lain"
                            }
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}