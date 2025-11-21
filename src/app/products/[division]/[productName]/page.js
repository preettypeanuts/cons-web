import { notFound } from "next/navigation";
import { productsData } from "@/system";
import { ProductDetailComponent } from "@/components/product-detail-component";
import { slugify } from "@/lib/slugify";

// Generate static params untuk SSG
export async function generateStaticParams() {
    const params = productsData
        .filter((product) => product.isPublished)
        .map((product) => ({
            division: slugify(product.division),
            productName: slugify(product.productName),
        }));
    
    console.log('Total static params generated:', params.length);
    return params;
}

// Generate metadata untuk SEO
export async function generateMetadata({ params }) {
    const { division, productName } = await params;
    
    const product = productsData.find(
        (item) =>
            slugify(item.division) === division &&
            slugify(item.productName) === productName
    );

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    const pageTitle = `${product.productName} | PT GAB DIG JAYA`;
    const url = `https://www.gab.co.id/products/${division}/${productName}`;

    return {
        title: pageTitle,
        description: product.descriptions || product.productName,
        keywords: [
            product.productName,
            product.division,
            product.partOf,
            product.productCategory,
            "PT GAB DIG JAYA",
            "produk mineral",
            "bahan industri",
            (product.keywords || "").toLowerCase(),
        ].filter(Boolean),
        category: product.division,
     
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: product.descriptions || product.productName,
            images: [product.imageUrl],
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    };
}

export default async function ProductDetailPage({ params }) {
    const { division, productName } = await params;

    // Debug log
    console.log('Received params:', { division, productName });

    // Find product by slugified division & productName
    const product = productsData.find(
        (item) =>
            slugify(item.division) === division &&
            slugify(item.productName) === productName
    );

    if (!product) {
        console.log('❌ Product not found');
        notFound();
    }

    console.log('✅ Product found:', product.productName);

    // Definisikan url di sini, setelah product ditemukan
    const url = `https://www.gab.co.id/products/${division}/${productName}`;

    // Related products: same division, exclude current
    const relatedProducts = productsData
        .filter(
            (item) =>
                item.division === product.division && 
                item.id !== product.id &&
                item.isPublished
        )
        .slice(0, 3);

    // Product Schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${url}#product`,
        name: product.productName,
        description: product.descriptions,
        image: product.imageUrl,
        brand: {
            "@type": "Organization",
            name: "PT GAB DIG JAYA",
            logo: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
        },
        category: product.productCategory || product.division,
        url,
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
                name: "Products",
                item: "https://www.gab.co.id/products",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: product.division,
                item: `https://www.gab.co.id/products/${division}`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: product.productName,
                item: url,
            },
        ],
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <ProductDetailComponent data={product} />

            {/* Optional: Related Products */}
            {/* <RelatedProductsComponent products={relatedProducts} /> */}
        </>
    );
}