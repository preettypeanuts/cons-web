import { CardProduct } from "@/components/card-product";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { DivisionChips } from "@/components/division-chips";
import { ReusablePagination } from "@/components/reusable-pagination";
import { FilterSelect } from "@/components/filter-select";
import { ClientHomeProducts } from "@/components/client-home-products";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Fungsi untuk fetch products dari API
async function getProducts({
    search = '',
    division = '',
    page = 1,
    limit = 12,
    sortBy = 'id',
    order = 'asc'
}) {
    const params = new URLSearchParams();

    params.append('published', 'true');
    params.append('page', page.toString());
    params.append('limit', limit.toString());
    params.append('sortBy', sortBy);
    params.append('order', order);

    if (search) params.append('search', search);
    if (division && division !== 'all') params.append('division', division);

    try {
        const res = await fetch(`${BASE_URL}/api/products?${params}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return { success: false, data: [], pagination: null };
    }
}

// Fungsi untuk fetch products grouped by division
async function getProductsByDivision() {
    try {
        const res = await fetch(`${BASE_URL}/api/products/division?published=true`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            return { success: false, data: [] };
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching divisions:', error);
        return { success: false, data: [] };
    }
}

// Generate dynamic metadata
export async function generateMetadata({ searchParams }) {
    const params = await searchParams;
    const division = params?.division || "";
    const q = params?.q || "";
    const currentPage = parseInt(params?.page) || 1;

    // Fetch divisions untuk metadata
    const divisionsResponse = await getProductsByDivision();
    const divisionsData = divisionsResponse.data || [];
    const uniqueDivisions = divisionsData.map(d => d.division) || [];

    // Fetch total products
    const productsResponse = await getProducts({
        search: q,
        division,
        page: 1,
        limit: 1
    });
    const totalProducts = productsResponse.pagination?.total || 0;

    // Build dynamic title
    let title = "Produk Mineral Industri";
    if (division && division !== "all") {
        title = `${division} - Produk`;
    }
    if (q) {
        title = `Hasil Pencarian: ${q}`;
    }
    if (currentPage > 1) {
        title += ` - Halaman ${currentPage}`;
    }
    title += " | PT GAB MATTIRO FLORESIND";

    // Build dynamic description
    let description = `Jelajahi ${totalProducts} produk mineral berkualitas tinggi dari PT GAB MATTIRO FLORESIND. `;
    if (division && division !== "all") {
        description += `Produk ${division}. `;
    } else {
        description += `Tersedia dalam ${uniqueDivisions.length} divisi: ${uniqueDivisions.slice(0, 3).join(", ")}. `;
    }
    description += "Solusi lengkap untuk kebutuhan industri Anda.";

    // Build keywords
    const keywords = [
        "produk mineral industri",
        "material industri Indonesia",
        "PT GAB MATTIRO FLORESIND products",
        ...uniqueDivisions.map(div => div.toLowerCase()),
        "quicklime Indonesia",
        "silica sand",
        "zeolite bentonite",
        "manganese greensand",
        "kaolin clay",
    ];

    if (division && division !== "all") {
        keywords.unshift(`${division.toLowerCase()} products`);
    }

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
                    url: "https://www.gab.co.id/images/og-products.jpg",
                    width: 1200,
                    height: 630,
                    alt: "PT GAB MATTIRO FLORESIND Products",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://www.gab.co.id/images/twitter-products.jpg"],
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
const generateProductsStructuredData = (products, pagination, division, uniqueDivisions) => {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.gab.co.id/products#collection",
                url: "https://www.gab.co.id/products",
                name: division ? `${division} Products` : "All Products",
                description: `Browse ${pagination?.total || products.length} mineral products from PT GAB MATTIRO FLORESIND`,
                isPartOf: {
                    "@id": "https://www.gab.co.id/#website",
                },
                publisher: {
                    "@id": "https://www.gab.co.id/#organization",
                },
            },
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/products#catalog",
                name: "PT GAB MATTIRO FLORESIND Product Catalog",
                description: "Complete catalog of industrial mineral products",
                numberOfItems: pagination?.total || products.length,
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
                            name: "PT GAB MATTIRO FLORESIND",
                        },
                        manufacturer: {
                            "@type": "Organization",
                            name: "PT GAB MATTIRO FLORESIND",
                        },
                        category: product.division,
                        offers: {
                            "@type": "Offer",
                            availability: "https://schema.org/InStock",
                            priceCurrency: "IDR",
                            seller: {
                                "@type": "Organization",
                                name: "PT GAB MATTIRO FLORESIND",
                            },
                        },
                    },
                })),
            },
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
            {
                "@type": "ItemList",
                "@id": "https://www.gab.co.id/products#divisions",
                name: "Product Divisions",
                description: "Industrial mineral product divisions",
                numberOfItems: uniqueDivisions.length,
                itemListElement: uniqueDivisions.map((div, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@type": "ProductGroup",
                        name: div,
                        url: `https://www.gab.co.id/products?division=${encodeURIComponent(div)}`,
                    },
                })),
            },
        ],
    };
};

export default async function Products({ searchParams }) {
    const params = await searchParams;
    const q = params?.q || "";
    const division = params?.division || "";
    const currentPage = parseInt(params?.page) || 1;
    const sortBy = params?.sortBy || "id";
    const order = params?.order || "asc";
    const itemsPerPage = 12;

    // Fetch products dari API
    const productsResponse = await getProducts({
        search: q,
        division,
        page: currentPage,
        limit: itemsPerPage,
        sortBy,
        order
    });

    // Fetch divisions dari API
    const divisionsResponse = await getProductsByDivision();

    // Extract data
    const products = productsResponse.data || [];
    const pagination = productsResponse.pagination || null;
    const error = productsResponse.success === false ? 'Gagal memuat produk' : null;

    // Extract unique divisions
    const divisionsData = divisionsResponse.data || [];
    const uniqueDivisions = divisionsData.map(d => d.division) || [];

    // Generate structured data
    const structuredData = generateProductsStructuredData(
        products,
        pagination,
        division,
        uniqueDivisions
    );

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
                imageAlt="PT GAB MATTIRO FLORESIND Industrial Mineral Products"
                onButtonClick={null}
            />

            <ClientHomeProducts/>

            <section className="margin space-y-6">

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                        <p className="text-red-600 dark:text-red-400">{error}</p>
                    </div>
                )}

                {/* Search and Sort */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <SearchBar
                        className="w-full max-w-2xl"
                        placeholder="Cari nama produk, divisi, atau kategori..."
                        defaultValue={q}
                        showClearButton={true}
                        showClearAllButton={true}
                        searchStats={{
                            totalResults: pagination?.total || 0
                        }}
                        aria-label="Cari produk mineral"
                    />
                    {/* <FilterSelect className="w-[180px]" /> */}
                </div>

                {/* Division Chips */}
                <DivisionChips 
                    divisions={uniqueDivisions} 
                    className="pb-2"
                />

                {/* Products Grid */}
                {products.length > 0 ? (
                    <>
                        <CardProduct
                            data={products}
                            mode="grid"
                        />

                        {pagination && pagination.totalPages > 1 && (
                            <ReusablePagination
                                totalItems={pagination.total}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                minItemsForPagination={itemsPerPage}
                                showInfo={true}
                                scrollOnChange={true}
                                aria-label="Navigasi halaman produk"
                            />
                        )}
                    </>
                ) : !error && (
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