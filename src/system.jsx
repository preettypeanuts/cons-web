import { HiArchive, HiHome, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";

export const NavbarItems = [
  {
    label: "Home",
    href: "/",
    icon: <HiHome />,
    isMegaMenu: false,
    isHome: true
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <HiHome />,
    isMegaMenu: true,
    isHome: false
  },
  {
    label: "Products",
    href: "/products",
    icon: <HiHome />,
    isMegaMenu: true,
    isHome: false
  },
  {
    label: "News",
    href: "/news",
    icon: <HiHome />,
    isMegaMenu: true,
    isHome: false
  },
  {
    label: "About",
    href: "/about-us",
    icon: <HiHome />,
    isMegaMenu: false,
    isHome: false
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <HiHome />,
    isMegaMenu: false,
    isHome: false
  },
];

export const whyUs = [
  {
    title: "Proven Expertise",
    desc: "With years of experience across multi-sector projects, we deliver reliable and high-quality engineering solutions that meet national and international standards.",
    icon: <HiShieldCheck />,
  },
  {
    title: "Innovative Approach",
    desc: "We integrate smart, efficient, and sustainable practices to ensure every project supports long-term industrial and environmental growth.",
    icon: <HiLightBulb />,
  },
  {
    title: "Commitment to Quality",
    desc: "Every process is guided by precision, safety, and continuous improvement — ensuring excellence from planning to execution.",
    icon: <HiArchive />,
  },
  {
    title: "Collaborative Partnership",
    desc: "We believe in transparent and long-term partnerships, building trust with clients, contractors, and local communities alike.",
    icon: <FaHandshakeSimple />,
  },
];

export const companyStats = [
  {
    label: "Diverse Industrial Divisions",
    value: 6,
    suffix: "+",
    desc: "Integrated operations across Calcia, Silica, Zeolite, Manganese, Clay, and Civil Engineering — serving global industry needs.",
  },
  {
    label: "Premium Mineral Products",
    value: 20,
    suffix: "+",
    desc: "High-quality materials such as Quicklime, Silica Sand, and Calcium Carbonate, ensuring performance and consistency.",
  },
  {
    label: "Advanced R&D Innovation",
    value: 4,
    suffix: "",
    desc: "Research across Electronics, Automotive, Environment & Energy, and Infrastructure — driving sustainable progress.",
  },
  {
    label: "Trusted by Leading Industries",
    value: 4,
    suffix: "+",
    desc: "Proudly partnering with major manufacturers like PT Cikarang Listrindo, PT Riken Indonesia, and PT Sika Indonesia.",
  },
];

export const faqs = [
  {
    question: "Apa fokus utama PT. GAB DIG JAYA?",
    answer: "Kami bergerak di bidang manufaktur dan distribusi material industri, termasuk Quicklime, Calcium Carbonate, Silica, Zeolite, Bentonite, Manganese, dan Clay untuk berbagai aplikasi industri."
  },
  {
    question: "Produk apa saja yang tersedia?",
    answer: "Produk kami meliputi Quicklime, Calcium Hydroxide, Calcium Carbonate, Silica Sand & Gravel, Zeolite, Bentonite, Manganese Greensand, White & Brown Clay, serta solusi stabilisasi tanah untuk civil engineering."
  },
  {
    question: "Bagaimana jaminan kualitas produk?",
    answer: "Kami memastikan kualitas produk prima dengan sumber daya manusia profesional, tingkat ketersediaan produk tinggi, dan proses produksi modern, termasuk R&D yang fokus pada inovasi berkelanjutan."
  },
  {
    question: "Siapa saja klien dan mitra perusahaan?",
    answer: "Kami telah bekerja sama dengan industri besar seperti PT. Cikarang Listrindo, PT. Riken Indonesia, PT. Walbric Indonesia, dan PT. Sika Indonesia, memberikan kepercayaan sebagai pemasok material berkualitas."
  },
  {
    question: "Apakah PT. GAB DIG JAYA berkomitmen pada keberlanjutan?",
    answer: "Ya, melalui R&D dan produk ramah lingkungan seperti Green Lime Series dan produk kontrol debu & erosi, kami mendukung praktik industri yang berkelanjutan."
  }
]

export const customerRatings = [
  {
    name: "Andi Pratama",
    company: "PT. Cikarang Listrindo",
    rating: 5,
    comment: "Produk berkualitas tinggi dan pengiriman selalu tepat waktu. Sangat puas dengan layanan GAB DIG JAYA!"
  },
  {
    name: "Siti Rahmawati",
    company: "PT. Riken Indonesia",
    rating: 4.5,
    comment: "Tim profesional dan responsif. Material yang diterima sesuai standar dan membantu proses produksi kami."
  },
  {
    name: "Budi Santoso",
    company: "PT. Walbric Indonesia",
    rating: 5,
    comment: "Kualitas produk konsisten dan support teknisnya sangat membantu. Recommended!"
  },
  {
    name: "Dewi Lestari",
    company: "PT. Sika Indonesia",
    rating: 4,
    comment: "Kerja sama yang menyenangkan, produk lengkap, dan perusahaan selalu berusaha memenuhi kebutuhan kami."
  },
  {
    name: "Rizky Firmansyah",
    company: "PT. ABC Industri",
    rating: 4.8,
    comment: "Pengalaman terbaik bekerja sama dengan GAB DIG JAYA. Profesional dan cepat tanggap."
  }
];


export const projectsData = [
  {
    id: 1,
    title: "Pembangunan Gedung Kantor Pemerintahan",
    slug: "gedung-kantor-pemerintahan",
    category: "Infrastruktur",
    location: "Jakarta Selatan, DKI Jakarta",
    year: 2024,
    client: "Kementerian PUPR",
    description:
      "Proyek pembangunan gedung kantor pemerintahan berstandar green building dengan sistem struktur baja ringan dan panel modular. Mencakup pekerjaan arsitektur, mekanikal, dan elektrikal.",
    image: "https://images.unsplash.com/photo-1637590109303-eca77d3f044b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
    gallery: [
      "https://source.unsplash.com/random/800x600?building-site",
      "https://source.unsplash.com/random/800x600?modern-architecture",
      "https://source.unsplash.com/random/800x600?construction"
    ],
    tags: ["Gedung", "Green Building", "Struktur Baja"]
  },
  {
    id: 2,
    title: "Pembangunan Jembatan Sungai Cimanuk",
    slug: "jembatan-sungai-cimanuk",
    category: "Infrastruktur Jalan & Jembatan",
    location: "Majalengka, Jawa Barat",
    year: 2023,
    client: "Dinas Bina Marga Jawa Barat",
    description:
      "Pembangunan jembatan sepanjang 120 meter menggunakan sistem precast girder beton bertulang, dilengkapi dengan penerangan dan trotoar ramah pejalan kaki.",
    image: "https://images.unsplash.com/photo-1623002891503-fd1274ea9800?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
    gallery: [
      "https://source.unsplash.com/random/800x600?bridge-engineering",
      "https://source.unsplash.com/random/800x600?civil-engineering",
      "https://source.unsplash.com/random/800x600?bridge-night"
    ],
    tags: ["Jembatan", "Beton Bertulang", "Infrastruktur"]
  },
  {
    id: 3,
    title: "Instalasi Sistem Mekanikal Pabrik",
    slug: "instalasi-sistem-mekanikal-pabrik",
    category: "Instalasi Pabrik",
    location: "Bekasi, Jawa Barat",
    year: 2024,
    client: "PT Indo Steel",
    description:
      "Pekerjaan instalasi sistem mekanikal pabrik, meliputi pemasangan conveyor, motor penggerak, dan sistem pendingin industri dengan standar internasional ISO 9001.",
    image: "https://images.unsplash.com/photo-1587691602451-f3cba3dadc7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
    gallery: [
      "https://source.unsplash.com/random/800x600?industrial-equipment",
      "https://source.unsplash.com/random/800x600?mechanical-system",
      "https://source.unsplash.com/random/800x600?factory-engineering"
    ],
    tags: ["Instalasi", "Mekanikal", "ISO 9001"]
  },
  {
    id: 4,
    title: "Proyek Reklamasi Pasca Tambang",
    slug: "rekalamasi-pasca-tambang",
    category: "Reklamasi & Lingkungan",
    location: "Samarinda, Kalimantan Timur",
    year: 2022,
    client: "PT Borneo Mining",
    description:
      "Pelaksanaan reklamasi area bekas tambang batu bara dengan sistem vegetasi berlapis, drainase ramah lingkungan, dan pengembalian kontur alami.",
    image: "https://images.unsplash.com/photo-1636923730272-a09a7b63bffe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900",
    gallery: [
      "https://source.unsplash.com/random/800x600?green-landscape",
      "https://source.unsplash.com/random/800x600?ecology",
      "https://source.unsplash.com/random/800x600?reforestation"
    ],
    tags: ["Reklamasi", "Lingkungan", "Vegetasi"]
  },
  {
    id: 5,
    title: "Pengadaan Sistem CCTV & Kontrol Elektronik",
    slug: "pengadaan-cctv-kontrol-elektronik",
    category: "Pengadaan Elektronik",
    location: "Surabaya, Jawa Timur",
    year: 2024,
    client: "PT Sinar Global",
    description:
      "Pengadaan dan instalasi sistem keamanan berbasis IP camera dan kontrol elektronik terintegrasi untuk area industri dan komersial.",
    image: "https://images.unsplash.com/photo-1745242655225-c57c15f04da5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900",
    gallery: [
      "https://source.unsplash.com/random/800x600?electronics",
      "https://source.unsplash.com/random/800x600?control-room",
      "https://source.unsplash.com/random/800x600?cctv-camera"
    ],
    tags: ["CCTV", "Elektronik", "Keamanan"]
  },
  {
    id: 6,
    title: "Desain & Pembangunan Kantor Site Project",
    slug: "kantor-site-project",
    category: "Infrastruktur & Arsitektur",
    location: "Bali, Indonesia",
    year: 2023,
    client: "PT Artha Konstruksi",
    description:
      "Desain modular dan pembangunan kantor proyek dengan konsep efisiensi energi, material daur ulang, serta sistem ventilasi alami.",
    image: "https://images.unsplash.com/photo-1646611162568-55073e75897b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900",
    gallery: [
      "https://source.unsplash.com/random/800x600?architecture-design",
      "https://source.unsplash.com/random/800x600?office-interior",
      "https://source.unsplash.com/random/800x600?building-construction"
    ],
    tags: ["Modular", "Desain Arsitektur", "Efisiensi Energi"]
  }
];


export const galleryData = [
  {
    id: 1,
    title: "Proyek Pembangunan Gedung Bertingkat",
    shortDesc: "Struktur beton bertulang dengan standar keamanan tinggi dan efisiensi material.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Pembangunan Jembatan Baja",
    shortDesc: "Pemasangan rangka baja untuk jembatan antar wilayah industri.",
    image: "https://images.unsplash.com/photo-1516176966905-58371240ba28?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Pengaspalan Jalan Raya",
    shortDesc: "Perataan dan pelapisan aspal hotmix untuk infrastruktur transportasi regional.",
    image: "https://images.unsplash.com/photo-1494233892892-84542a694e72?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Instalasi Pabrik Industri",
    shortDesc: "Pemasangan sistem mekanikal & elektrikal di area industri terpadu.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Reklamasi Area Pasca Tambang",
    shortDesc: "Pemulihan lahan bekas tambang dengan pendekatan lingkungan berkelanjutan.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Proyek Pengadaan Mekanikal",
    shortDesc: "Perakitan dan distribusi peralatan mekanik untuk fasilitas produksi.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Konstruksi Drainase dan Irigasi",
    shortDesc: "Pengerjaan sistem drainase untuk mencegah genangan di area proyek.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Proyek Penerangan Jalan Umum",
    shortDesc: "Instalasi sistem penerangan LED hemat energi untuk kawasan perkotaan.",
    image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    title: "Renovasi Bangunan Pemerintahan",
    shortDesc: "Perbaikan fasad dan interior dengan material ramah lingkungan.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 10,
    title: "Pembangunan Fasilitas Umum",
    shortDesc: "Pengerjaan taman kota dan area publik dengan konsep urban green space.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
  }
];

export const productsData = [

  /* ------------------- CALCIA DIVISION ------------------- */
  {
    category: "Products",
    division: "Calcia Division",
    item: "Quicklime",
    description:
      "Manufactured by calcining high-quality limestone at ≥900°C in Ulbe-Beckenbach vertical kilns.",
    applications: [
      "Steelmaking",
      "Pig iron manufacture",
      "Magnesium hydroxide feed",
      "Soil stabilizers",
      "Water treatment",
      "Calcium compounds",
      "Pulp & paper",
      "Desiccants",
      "Other industrial chemicals"
    ],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Calcia Division",
    item: "Calcium hydroxide",
    description:
      "Produced by slaking quicklime with water, graded by particle size.",
    applications: [
      "Wastewater neutralization",
      "Flue gas dechlorination",
      "Fertilizer",
      "Water & sewage treatment",
      "Soil stabilizers",
      "Other industrial chemical applications"
    ],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Calcia Division",
    item: "Calcium carbonate",
    description: "Produced by grinding limestone to various grades.",
    applications: [
      "Asphalt filler",
      "Flue gas desulfurization",
      "Wastewater neutralization",
      "Steelmaking",
      "Pig iron",
      "Fertilizer",
      "Animal feed",
      "Aggregate",
      "Rubber/paper fillers",
      "Other industrial chemicals"
    ],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Calcia Division",
    item: "Limestone",
    description: "Extracted from high-quality mines in Japan.",
    applications: [
      "Cement",
      "Quicklime",
      "Flue gas desulfurization",
      "Coated paper",
      "Aggregate",
      "Steelmaking",
      "Glass"
    ],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Calcia Division",
    item: "Environmental Products",
    description: "Calbreed: Highly reactive flue gas treatment agent.",
    applications: ["Treatment of toxic gases (HCl, SOx, dioxins)"],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- SILICA DIVISION ------------------- */
  {
    category: "Products",
    division: "Silica Division",
    item: "Silica sand",
    description: "High-purity SiO2 sand.",
    applications: [
      "Glass production",
      "Foundry casting",
      "Construction",
      "Filtration",
      "Fracking",
      "Manufacturing"
    ],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Silica Division",
    item: "Silica gravel",
    description: "Silica gravel used industrially and in construction.",
    applications: [
      "Filtration",
      "Drainage",
      "Landscaping",
      "Construction",
      "Epoxy flooring"
    ],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Silica Division",
    item: "Silica stones",
    description: "High-silica rocks for refractory applications.",
    applications: ["Filtration", "Drainage", "Landscaping", "Construction"],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Silica Division",
    item: "Environmental Products",
    description:
      "Dust & Erosion control products for mining and transport.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- ZEOLITE & BENTONITE DIVISION ------------------- */
  {
    category: "Products",
    division: "Zeolite & Bentonite Division",
    item: "Zeolite",
    description:
      "Naturally occurring minerals with porous framework, used in industrial, commercial, and environmental applications.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Zeolite & Bentonite Division",
    item: "Bentonite",
    description:
      "Highly absorbent clay for drilling, cat litter, foundry binder, sealing, civil engineering, wine clarification, medicinal & cosmetic products.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Zeolite & Bentonite Division",
    item: "Clinoptilolite",
    description:
      "Porous zeolite mineral. Composition: Na2/K2/Ca 3–4 [Al3Al2Si10O30]·12H2O",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Zeolite & Bentonite Division",
    item: "Mordenite",
    description:
      "Selective adsorbent zeolite. Composition: (Ca, Na2, K2)Al2Si10O24·7H2O",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Zeolite & Bentonite Division",
    item: "Environmental Products",
    description: "Water treatment using Zeolite & Bentonite.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- MANGANESE DIVISION ------------------- */
  {
    category: "Products",
    division: "Manganese Division",
    item: "Manganese greensand",
    description:
      "Filter media for iron, manganese, and hydrogen sulfide removal from water.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Manganese Division",
    item: "Manganese",
    description:
      "Element Mn, used in steel production to remove impurities and improve properties.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Manganese Division",
    item: "Manganese sand",
    description:
      "Filter media composed of glauconite + MnO2, removes contaminants from drinking water.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- CLAY DIVISION ------------------- */
  {
    category: "Products",
    division: "Clay Division",
    item: "White clay",
    description:
      "Kaolin for paper, ceramics, paints, cosmetics, pharmaceuticals, plastics & rubber.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Clay Division",
    item: "Brown clay",
    description:
      "Clay soil for agriculture, gardening, construction, pottery, soil amendments.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- CIVIL ENGINEERING ------------------- */
  {
    category: "Products",
    division: "Civil Engineering Products",
    item: "Ground Improvement Materials",
    description: "Green Lime LS & LC-E: Lime-based soil stabilization agents.",
    applications: ["Stabilization of sludge", "Soft soils", "Mixed soils"],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "Civil Engineering Products",
    item: "Environmental Products",
    description:
      "Neutral soil stabilization (NP Series), Low-dust agent (LG), Heavy metal insolubilizing (MP Series, Super MAG).",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- MANUFACTURING PROCESSES ------------------- */
  {
    category: "Products",
    division: "Manufacturing Processes",
    item: "Flow Chart",
    description:
      "Limestone → Pulverizer → Calcium carbonate; Limestone → Ulbe-Beckenbach kiln → Quicklime; Limestone → Ulbe-Beckenbach kiln → Slaker → Calcium hydroxide.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- R&D & ENGINEERING ------------------- */
  {
    category: "Products",
    division: "R&D & Engineering",
    item: "Production engineering",
    description:
      "Cost calculation, equipment management, operational reforms, digitalization, carbon-neutral initiatives.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D & Engineering",
    item: "Corporate research",
    description:
      "Medium- & long-term R&D for new products & technologies.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D & Engineering",
    item: "Divisional research",
    description:
      "Collaboration across Magnesia, Calcia, and Fine Material Divisions.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D & Engineering",
    item: "Planning & IP",
    description:
      "R&D strategy, intellectual property, material informatics utilization.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D & Engineering",
    item: "ICT Initiatives",
    description:
      "Fuel optimization & automatic operation assistance for lime kiln.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D & Engineering",
    item: "Orientation",
    description: "Focus on environmentally sustainable products.",
    applications: [],
    examples: [],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },

  /* ------------------- R&D AREAS ------------------- */
  {
    category: "Products",
    division: "R&D Areas",
    item: "Electronics",
    description: "Focus: Next-gen development, heat-conductive fillers, capacitors.",
    applications: [],
    examples: ["Materials for power devices", "Dielectric materials"],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D Areas",
    item: "Automotive",
    description: "Focus: Next-gen development.",
    applications: [],
    examples: ["Heat-conductive fillers", "Heat-resistant coatings"],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D Areas",
    item: "Environment & Energy",
    description: "Focus: Carbon-free fuels, Synthesis/decomposition.",
    applications: [],
    examples: [
      "Carbon recycling",
      "Biodegradable materials",
      "Batteries & energy storage"
    ],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  },
  {
    category: "Products",
    division: "R&D Areas",
    item: "Industry & Infrastructure",
    description: "Focus: Material recovery, Neutral substrates.",
    applications: [],
    examples: [
      "Adsorbent materials",
      "Low-impact purification",
      "Exhaust treatment",
      "Soil improvement",
      "Flue gas desulfurization",
      "Refractory raw materials"
    ],
    clients: [],
    image: "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGEC%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75"
  }
]

