import { ContactUs } from "@/components/contact-form";
import { ReBanner } from "@/components/re-banner";
import { FaPhone } from "react-icons/fa6";

// SEO Metadata
export const metadata = {
    title: "Hubungi Kami - PT GAB MATTIRO FLORESIND | Konsultasi Produk Mineral Industri",
    description: "Hubungi PT GAB MATTIRO FLORESIND untuk konsultasi produk mineral industri, penawaran harga, dan informasi lebih lanjut. Alamat: Gedung Fancy Mampang, Jakarta Selatan. Siap melayani kebutuhan industri Anda.",
    keywords: [
        "kontak PT GAB MATTIRO FLORESIND",
        "hubungi GAB MATTIRO FLORESIND",
        "alamat PT GAB MATTIRO FLORESIND",
        "konsultasi mineral industri",
        "contact mineral supplier",
        "distributor mineral Jakarta",
        "penawaran quicklime",
        "konsultasi silica sand",
        "layanan pelanggan GAB",
    ],

    openGraph: {
        title: "Hubungi Kami - PT GAB MATTIRO FLORESIND",
        description: "Konsultasi produk mineral industri dan dapatkan penawaran terbaik. Hubungi tim kami untuk informasi lebih lanjut.",
        url: "https://www.gab.co.id/contact",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
                width: 1200,
                height: 630,
                alt: "Hubungi PT GAB MATTIRO FLORESIND",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Hubungi Kami - PT GAB MATTIRO FLORESIND",
        description: "Konsultasi produk mineral industri dan dapatkan penawaran terbaik.",
        images: ["https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"],
    },

    alternates: {
        canonical: "https://www.gab.co.id/contact",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Contact() {
    // ContactPage Schema dengan informasi lengkap
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://www.gab.co.id/contact#contactpage",
        url: "https://www.gab.co.id/contact",
        name: "Contact PT GAB MATTIRO FLORESIND",
        description: "Hubungi kami untuk konsultasi produk mineral industri dan informasi lebih lanjut",
        mainEntity: {
            "@type": "Organization",
            "@id": "https://www.gab.co.id/#organization",
            name: "PT GAB MATTIRO FLORESIND",
            url: "https://www.gab.co.id",
            logo: "https://res.cloudinary.com/dr5dlofvv/image/upload/v1763699326/GAB/assets/gab_olxssp.jpg",
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: "+62 857-7904-7739",
                    contactType: "Customer Service",
                    areaServed: "ID",
                    availableLanguage: ["Indonesian", "English"],
                    contactOption: "TollFree",
                },
                {
                    "@type": "ContactPoint",
                    telephone: "+62 857-7904-7739",
                    contactType: "Sales",
                    areaServed: "ID",
                    availableLanguage: ["Indonesian", "English"],
                },
            ],
            address: {
                "@type": "PostalAddress",
                streetAddress: "Gedung Fancy Mampang, Mampang Prapatan Raya No.151 Lantai 4 Unit A7, RT.3/RW.1, Duren Tiga",
                addressLocality: "Pancoran",
                addressRegion: "Jakarta Selatan",
                postalCode: "12760",
                addressCountry: "ID",
            },
            email: "info@gab.co.id",
        },
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
                name: "Contact",
                item: "https://www.gab.co.id/contact",
            },
        ],
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <ReBanner
                title="Contact"
                highlightText="Us"
                description="Connecting With Purpose — Reach Out and Start a Meaningful Dialogue."
                buttonText="Call Us!"
                buttonIcon={<FaPhone />}
                imageSrc="https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                imageAlt="Hubungi PT GAB MATTIRO FLORESIND - Konsultasi Produk Mineral Industri"
                href="https://api.whatsapp.com/send/?phone=6285779047739"
            />

            <ContactUs />
        </>
    );
}