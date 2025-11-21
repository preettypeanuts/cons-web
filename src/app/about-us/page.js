import { AboutUsComponent } from "@/components/about-us-component";
import { FaqsAccordion } from "@/components/faqs-accordion";
import { ReBanner } from "@/components/re-banner";
import { VisionMission } from "@/components/vision-mission";
import { WhyUs } from "@/components/why-us";
import { FaCompass } from "react-icons/fa6";
import { companyStats, faqs } from "@/system";

// SEO Metadata
export const metadata = {
    title: "Tentang Kami - PT GAB DIG JAYA | Manufaktur & Distributor Mineral Industri Terpercaya",
    description: "PT GAB DIG JAYA adalah perusahaan manufaktur dan distributor produk mineral berkualitas tinggi sejak [tahun]. Dengan 6+ divisi industri dan 20+ produk premium, kami melayani kebutuhan material industri di seluruh Indonesia dengan integritas dan profesionalisme.",
    keywords: [
        "tentang PT GAB DIG JAYA",
        "profil perusahaan mineral",
        "sejarah GAB DIG JAYA",
        "visi misi perusahaan",
        "manufaktur mineral Indonesia",
        "distributor quicklime terpercaya",
        "perusahaan silica sand",
        "supplier zeolite Indonesia", 
        "about mineral company",
        "company profile GAB",
    ],

    openGraph: {
        title: "Tentang Kami - PT GAB DIG JAYA",
        description: "Manufaktur dan distributor produk mineral berkualitas tinggi dengan 6+ divisi industri dan 20+ produk premium untuk kebutuhan industri Indonesia.",
        url: "https://www.gab.co.id/about-us",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1653273760914-a83a14062bbe?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200",
                width: 1200,
                height: 630,
                alt: "PT GAB DIG JAYA - Perusahaan Mineral Industri Terpercaya",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Tentang Kami - PT GAB DIG JAYA",
        description: "Manufaktur dan distributor produk mineral berkualitas tinggi untuk industri Indonesia.",
        images: ["https://images.unsplash.com/photo-1653273760914-a83a14062bbe?auto=format&fit=crop&q=80&w=1200"],
    },

    alternates: {
        canonical: "https://www.gab.co.id/about-us",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutUs() {
    // AboutPage Schema
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://www.gab.co.id/about-us#aboutpage",
        url: "https://www.gab.co.id/about-us",
        name: "About PT GAB DIG JAYA",
        description: "Informasi lengkap tentang PT GAB DIG JAYA, visi misi, dan komitmen kami dalam menyediakan produk mineral berkualitas tinggi",
        mainEntity: {
            "@type": "Organization",
            "@id": "https://www.gab.co.id/#organization",
            name: "PT GAB DIG JAYA",
            alternateName: "PT GAB MATTIRO FLORESIND",
            url: "https://www.gab.co.id",
            logo: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
            description: "PT GAB DIG JAYA adalah perusahaan manufaktur dan distributor yang memfokuskan pada material industri: milk lime, limestone, powder lime, calcium carbonate, clay, zeolit, bentonite, pasir kuarsa, silica sand, dan pembenah tanah.",
            foundingDate: "YYYY",
            slogan: "BECOMING GLOBAL PLAYER FOR VALUE ADDED MINERAL PRODUCT",
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
            numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "100+",
            },
            knowsAbout: [
                "Mineral Manufacturing",
                "Industrial Distribution",
                "Quicklime Production",
                "Silica Sand Processing",
                "Zeolite Distribution",
                "Water Treatment Solutions",
            ],
        },
    };

    // Organization Statistics
    const statsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://www.gab.co.id/about-us#statistics",
        name: "PT GAB DIG JAYA Company Statistics",
        itemListElement: companyStats.map((stat, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: stat.label,
            description: stat.desc,
        })),
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
                name: "About Us",
                item: "https://www.gab.co.id/about-us",
            },
        ],
    };

    // FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.gab.co.id/about-us#faq",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ReBanner
                title="About"
                highlightText="Us"
                description="Driven by Values — Discover the Story Behind Our Commitment."
                buttonText="Explore!"
                buttonIcon={<FaCompass />}
                imageSrc="https://images.unsplash.com/photo-1653273760914-a83a14062bbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                imageAlt="Tentang PT GAB DIG JAYA - Perusahaan Manufaktur Mineral Terpercaya"
                onButtonClick={null}
            />

            <AboutUsComponent />
            <VisionMission />
            <WhyUs />
            <FaqsAccordion />
        </>
    );
}