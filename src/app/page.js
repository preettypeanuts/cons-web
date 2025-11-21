import { AboutUsComponent } from "@/components/about-us-component";
import { CardNews } from "@/components/card-news";
import { CardProduct } from "@/components/card-product";
import { CardProjects } from "@/components/card-projects";
import { CTA } from "@/components/cta";
import { CustomerReviews } from "@/components/customer-ratings";
import { HomeBanner } from "@/components/home-banner";
import { WhyUs } from "@/components/why-us";
import { newsData, productsData, projectsData, customerRatings, faqs } from "@/system";

// Generate dynamic keywords from products
const generateProductKeywords = () => {
  const divisions = [...new Set(productsData.map(p => p.division))];
  const productNames = productsData.map(p => p.productName.toLowerCase());

  return [
    "PT GAB DIG JAYA",
    "distributor mineral Indonesia",
    ...divisions.map(d => d.toLowerCase()),
    ...productNames,
    "quicklime Indonesia",
    "calcium carbonate",
    "silica sand Indonesia",
    "zeolite bentonite",
    "manganese greensand",
    "kaolin clay",
    "pembenah tanah",
    "soil stabilizer",
    "water treatment",
    "Jakarta Selatan",
  ];
};

// SEO Metadata dengan data dinamis
export const metadata = {
  title: "PT GAB DIG JAYA - Distributor Produk Mineral Indonesia | Quicklime, Silica Sand, Zeolite",
  description: `PT GAB DIG JAYA adalah perusahaan manufaktur dan distributor produk mineral berkualitas tinggi. Menyediakan ${productsData.length}+ produk mineral untuk industri termasuk Quicklime, Calcium Carbonate, Silica Sand, Zeolite, Bentonite, Manganese, dan Clay. Dipercaya oleh ${customerRatings.length}+ perusahaan industri terkemuka di Indonesia.`,
  keywords: generateProductKeywords(),
  authors: [{ name: "PT GAB DIG JAYA" }],
  creator: "PT GAB DIG JAYA",
  publisher: "PT GAB DIG JAYA",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.gab.co.id",
    siteName: "PT GAB DIG JAYA",
    title: "PT GAB DIG JAYA - Distributor Produk Mineral & Material Industri Terpercaya",
    description: `Perusahaan manufaktur dan distributor terpercaya dengan ${productsData.length}+ produk mineral berkualitas tinggi untuk berbagai kebutuhan industri di Indonesia.`,
    images: [
      {
        url: "https://www.gab.co.id/images/og-gab-home.jpg",
        width: 1200,
        height: 630,
        alt: "PT GAB DIG JAYA - Distributor Produk Mineral Indonesia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PT GAB DIG JAYA - Distributor Produk Mineral Indonesia",
    description: `Manufaktur dan distributor ${productsData.length}+ produk mineral berkualitas tinggi untuk industri Indonesia.`,
    images: ["https://www.gab.co.id/images/twitter-gab-home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.gab.co.id",
    languages: {
      "id-ID": "https://www.gab.co.id",
      "en-US": "https://www.gab.co.id/en",
    },
  },

  category: "Manufacturing & Distribution",
};

// Generate dynamic structured data
const generateStructuredData = () => {
  // Calculate average rating
  const avgRating = (
    customerRatings.reduce((sum, r) => sum + r.rating, 0) / customerRatings.length
  ).toFixed(1);

  // Get unique customers
  const uniqueCustomers = [...new Set(customerRatings.map(r => r.company))];

  // Get divisions
  const divisions = [...new Set(productsData.filter(p => p.isPublished).map(p => p.division))];

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://www.gab.co.id/#organization",
        name: "PT GAB DIG JAYA",
        alternateName: "PT GAB MATTIRO FLORESIND",
        url: "https://www.gab.co.id",
        logo: {
          "@type": "ImageObject",
          url: "https://www.gab.co.id/logo.png",
          width: 250,
          height: 60,
        },
        description: "PT GAB DIG JAYA adalah perusahaan manufaktur dan distributor yang memfokuskan pada material industri: quicklime, limestone, calcium carbonate, silica sand, zeolite, bentonite, manganese, clay, dan pembenah tanah.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gedung Fancy Mampang, Mampang Prapatan Raya No.151 Lantai 4 Unit A7, RT.3/RW.1, Duren Tiga",
          addressLocality: "Pancoran",
          addressRegion: "Jakarta Selatan",
          postalCode: "12760",
          addressCountry: "ID",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-21-xxxx-xxxx",
          contactType: "Customer Service",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: avgRating,
          reviewCount: customerRatings.length,
          bestRating: "5",
          worstRating: "1",
        },
      },

      // WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://www.gab.co.id/#website",
        url: "https://www.gab.co.id",
        name: "PT GAB DIG JAYA",
        description: `Distributor dan manufaktur ${productsData.length}+ produk mineral berkualitas tinggi untuk industri di Indonesia`,
        publisher: {
          "@id": "https://www.gab.co.id/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.gab.co.id/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      // Product Catalog Schema (Dynamic)
      {
        "@type": "ItemList",
        "@id": "https://www.gab.co.id/#products",
        name: "Produk PT GAB DIG JAYA",
        description: `Katalog lengkap ${productsData.length}+ produk mineral dan material industri`,
        numberOfItems: divisions.length,
        itemListElement: divisions.map((division, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: division,
          description: productsData
            .filter(p => p.division === division && p.isPublished)
            .map(p => p.productName)
            .join(", "),
          url: `https://www.gab.co.id/products/${division.toLowerCase().replace(/\s+/g, "-")}`,
        })),
      },

      // Reviews Schema (Dynamic)
      ...customerRatings.map((review, index) => ({
        "@type": "Review",
        "@id": `https://www.gab.co.id/#review${index + 1}`,
        itemReviewed: {
          "@id": "https://www.gab.co.id/#organization",
        },
        author: {
          "@type": "Person",
          name: review.name,
          worksFor: {
            "@type": "Organization",
            name: review.company,
          },
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: review.comment,
      })),

      // FAQPage Schema (Dynamic)
      {
        "@type": "FAQPage",
        "@id": "https://www.gab.co.id/#faq",
        mainEntity: faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      // Service Schema
      {
        "@type": "Service",
        "@id": "https://www.gab.co.id/#services",
        serviceType: "Manufacturing and Distribution of Industrial Minerals",
        provider: {
          "@id": "https://www.gab.co.id/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Industrial Mineral Products",
          itemListElement: productsData
            .filter(p => p.isPublished)
            .slice(0, 10) // Top 10 products
            .map(product => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: product.productName,
                description: product.descriptions,
                category: product.division,
                image: product.imageUrl,
              },
            })),
        },
      },
    ],
  };
};

export default function Home() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main Content */}
      <main>
        <section aria-label="Hero Banner">
          <HomeBanner />
        </section>

        <section aria-label="Tentang PT GAB DIG JAYA">
          <AboutUsComponent />
        </section>

        <section aria-label="Mengapa Memilih PT GAB DIG JAYA">
          <WhyUs />
        </section>

        <section aria-label="Proyek dan Portfolio Kami">
          <CardProjects projects={projectsData} mode="carousel" />
        </section>

        <section aria-label="Produk Mineral dan Material Industri">
          <CardProduct data={productsData} mode="carousel" />
        </section>

        <section aria-label="Berita dan Artikel Industri">
          <CardNews data={newsData} mode="carousel" />
        </section>

        <section aria-label="Testimoni Pelanggan">
          <CustomerReviews />
        </section>

        <section aria-label="Hubungi Kami">
          <CTA />
        </section>
      </main>
    </>
  );
}