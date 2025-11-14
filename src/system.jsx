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
  {
    "id": 1,
    "division": "Calcia Division",
    "productName": "Quicklime",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Diproduksi dengan kalsinasi batu kapur berkualitas tinggi pada suhu ≥900°C di tanur vertikal Ulbe-Beckenbach.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 2,
    "division": "Calcia Division",
    "productName": "Calcium hydroxide",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Diproduksi dengan menyiram quicklime dengan air (slaking), digradasikan berdasarkan ukuran partikel.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 3,
    "division": "Calcia Division",
    "productName": "Calcium carbonate",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Diproduksi dengan menggiling batu kapur ke berbagai tingkatan (grade).",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 4,
    "division": "Calcia Division",
    "productName": "Limestone",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Ditambang dari tambang berkualitas tinggi di Jepang.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 5,
    "division": "Calcia Division",
    "productName": "Environmental Products (Calbreed)",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Agen pengolahan gas buang yang sangat reaktif.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },

  /* Silica Division */
  {
    "id": 6,
    "division": "Silica Division",
    "productName": "Silica sand",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Pasir SiO₂ dengan kemurnian tinggi.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 7,
    "division": "Silica Division",
    "productName": "Silica gravel",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Kerikil silika yang digunakan dalam industri dan konstruksi.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 8,
    "division": "Silica Division",
    "productName": "Silica stones",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Batuan silika tinggi untuk aplikasi tahan api (refractory).",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 9,
    "division": "Silica Division",
    "productName": "Environmental Products",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Produk pengendali debu dan erosi untuk penambangan dan transportasi.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },

  /* Zeolite & Bentonite Division */
  {
    "id": 10,
    "division": "Zeolite & Bentonite Division",
    "productName": "Zeolite",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Mineral alami dengan kerangka berpori.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 11,
    "division": "Zeolite & Bentonite Division",
    "productName": "Bentonite",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Tanah liat yang sangat mudah menyerap (highly absorbent).",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 12,
    "division": "Zeolite & Bentonite Division",
    "productName": "Clinoptilolite",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Mineral zeolit berpori dengan komposisi Na₂/K₂/Ca 3–4 [Al₃Al₂Si₁₀O₃₀]·12H₂O.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 13,
    "division": "Zeolite & Bentonite Division",
    "productName": "Mordenite",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Zeolit adsorben selektif dengan komposisi (Ca, Na₂, K₂)Al₂Si₁₀O₂₄·7H₂O.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 14,
    "division": "Zeolite & Bentonite Division",
    "productName": "Environmental Products",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Produk untuk pengolahan air.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },

  /* Manganese Division */
  {
    "id": 15,
    "division": "Manganese Division",
    "productName": "Manganese greensand",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Media filter untuk penghilangan besi, mangan, dan hidrogen sulfida dari air.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 16,
    "division": "Manganese Division",
    "productName": "Manganese (Element Mn)",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Elemen Mn digunakan dalam produksi baja untuk menghilangkan kotoran dan meningkatkan sifat.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 17,
    "division": "Manganese Division",
    "productName": "Manganese sand",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Media filter yang terdiri dari glaukonit + MnO₂ untuk menghilangkan kontaminan dari air minum.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },

  /* Clay Division */
  {
    "id": 18,
    "division": "Clay Division",
    "productName": "White clay (Kaolin)",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Kaolin untuk kertas, keramik, cat, kosmetik, farmasi, plastik & karet.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 19,
    "division": "Clay Division",
    "productName": "Brown clay",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Tanah liat untuk pertanian, berkebun, konstruksi, tembikar, dan soil amendments.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },

  /* Civil Engineering Division */
  {
    "id": 20,
    "division": "Civil Engineering Products",
    "productName": "Ground Improvement Materials (Green Lime LS & LC-E)",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Agen stabilisasi tanah berbasis kapur untuk lumpur, tanah lunak, dan tanah campuran.",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  },
  {
    "id": 21,
    "division": "Civil Engineering Products",
    "productName": "Environmental Products",
    "partOf": "",
    "productCategory": "",
    "descriptions": "Stabilisasi tanah netral (NP Series), agen rendah debu (LG), dan penginsolubilisasi logam berat (MP Series, Super MAG).",
    "keywords": "",
    "isPublished": true,
    "isPriority": false,
    "price": "",
    "imageUrl": "https://www.ganeshaec.co.id/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1759919688%2FGAB%2520Products%2FTerramesh_Green_Terramesh__60.webp&w=1920&q=75",
    "detailType": ""
  }
]

export const newsData = [
  {
    id: 1,
    title: "Transforming Construction with Sustainable Materials",
    slug: "transforming-construction-with-sustainable-materials",
    excerpt:
      "Pemanfaatan material ramah lingkungan semakin menjadi standar baru dalam industri konstruksi modern.",
    content: `
      <article>
        <h1>Transforming Construction with Sustainable Materials</h1>
        <p><strong>Oleh GAB Editorial Team — 10 Januari 2025</strong></p>

        <p>Pergeseran menuju material konstruksi yang ramah lingkungan bukan lagi sekadar tren—itu adalah kebutuhan. Tekanan regulasi, tuntutan pemilik proyek untuk dampak lingkungan lebih kecil, dan dorongan biaya total-kepemilikan yang lebih efisien membuat kontraktor dan insinyur menimbang ulang pemilihan material pada setiap tahap proyek.</p>

        <h2>Mengapa material berkelanjutan sekarang penting?</h2>
        <p>Material berkelanjutan membantu mengurangi jejak karbon langsung (mis. emisi dari produksi dan transport) dan jejak lingkungan tidak langsung (mis. konsumsi energi bangunan selama siklus hidup). Selain itu, penggunaan bahan seperti <em>quicklime</em>, silica berkualitas tinggi, dan bahan geosynthetic dapat meningkatkan performa teknis — misalnya stabilitas tanah dan daya tahan struktur — yang pada akhirnya mengurangi kebutuhan perawatan dan perbaikan berkala.</p>

        <h2>Contoh aplikasi nyata</h2>
        <ul>
          <li><strong>Stabilisasi tanah:</strong> Quicklime dan hydrated lime dapat mengubah sifat fisik tanah lembek, meningkatkan bearing capacity, serta mengurangi pengembangan dan plastisitas tanah liat.</li>
          <li><strong>Perbaikan drainase dan filtrasi:</strong> Silica sand dengan kemurnian tinggi sering dipakai sebagai media filtrasi dan sebagai agregat alami yang tahan lama.</li>
          <li><strong>Kontrol emisi:</strong> Produk lingkungan seperti agen pengendali debu dan pengolahan gas buang mampu menurunkan polutan berbahaya sebelum dilepaskan ke atmosfer.</li>
        </ul>

        <h2>Manfaat ekonomi</h2>
        <p>Penerapan material yang tepat dapat mengurangi total biaya proyek. Contohnya, stabilisasi tanah yang efektif menekan kebutuhan pemadatan ulang dan perbaikan pondasi, memperpanjang umur layanan jalan atau struktur, sehingga biaya operasi dan perawatan berkurang.</p>

        <h2>Tantangan dan solusi implementasi</h2>
        <p>Penerapan material baru sering menghadapi hambatan seperti ketersediaan supply chain, kurva belajar pada teknik aplikasi, dan standar teknis yang harus disesuaikan. Solusi praktis meliputi uji lapangan terencana, pilot project kecil, dan kolaborasi awal antara produsen material, kontraktor, dan konsultan desain.</p>

        <h2>Kesimpulan</h2>
        <p>Transformasi industri konstruksi menuju keberlanjutan tidak hanya bergantung pada inovasi material, tetapi juga pada kemampuan industri untuk mengadaptasi praktik desain, konstruksi, dan operasi. Material seperti lime-based stabilizers, silica, serta produk lingkungan memberikan jalur praktis dan terukur untuk mempercepat transisi ini.</p>
      </article>
    `,
    category: "Construction",
    tags: ["sustainability", "materials", "engineering"],
    author: "GAB Editorial Team",
    date: "2025-01-10",
    image:
      "https://images.unsplash.com/photo-1550814669-8d924a4ec743?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 2,
    title: "How Lime Products Improve Soil Stabilization",
    slug: "how-lime-products-improve-soil-stabilization",
    excerpt:
      "Quicklime dan hydrated lime menjadi material utama dalam stabilisasi tanah untuk proyek infrastruktur.",
    content: `
      <article>
        <h1>How Lime Products Improve Soil Stabilization</h1>
        <p><strong>Oleh GAB Engineering Team — 5 Februari 2025</strong></p>

        <p>Stabilisasi tanah merupakan bagian krusial dari pekerjaan prasarana: jalan, landasan, dan area industri. Lime products — termasuk quicklime (CaO) dan hydrated lime (Ca(OH)₂) — telah terbukti meningkatkan sifat mekanik tanah dan mengurangi potensi deformasi yang merugikan.</p>

        <h2>Prinsip kerja lime dalam tanah</h2>
        <p>Quicklime bereaksi secara eksotermik ketika ditambahkan ke tanah yang mengandung kelembapan; reaksi ini mengurangi kadar air dan mengubah struktur partikel tanah melalui proses agrega­tasi. Hydrated lime memberikan efek jangka panjang dengan meningkatkan sisipan ionik dan stabilitas kimia tanah.</p>

        <h3>Manfaat teknis</h3>
        <ol>
          <li><strong>Meningkatkan bearing capacity:</strong> Kapasitas dukung tanah meningkat, memungkinkan pengurangan kedalaman pondasi.</li>
          <li><strong>Menurunkan plastisitas:</strong> Tanah liat menjadi lebih “kaku” dan kurang rentan mengalami perubahan volume akibat kelembapan.</li>
          <li><strong>Mempercepat waktu pemadatan:</strong> Reaksi kimia mengurangi kelembapan in-situ sehingga mesin pemadatan menjadi lebih efektif.</li>
        </ol>

        <h2>Desain aplikasi yang baik</h2>
        <p>Keberhasilan stabilisasi bergantung pada dosis, distribusi material, dan waktu curing. Langkah-langkah umum meliputi:</p>
        <ul>
          <li>Uji karakterisasi tanah awal (sifat fisik dan kimia).</li>
          <li>Penentuan dosis lime melalui uji laboratorium (CBR, plasticity index).</li>
          <li>Pencampuran mekanis, pemadatan, dan curing sesuai spesifikasi proyek.</li>
        </ul>

        <h2>Kasus studi singkat</h2>
        <p>Pada sebuah proyek perbaikan jalan pedesaan, penggunaan quicklime mengurangi kebutuhan pemadatan ulang hingga 35% dan mempercepat jadwal konstruksi sebesar 20%. Hasil ini menurunkan biaya langsung dan meminimalkan gangguan layanan komunitas.</p>

        <h2>Kendala lingkungan & mitigasinya</h2>
        <p>Penanganan kapur harus memperhatikan debu dan reaksi eksotermik. Mitigasi mencakup kontrol debu terintegrasi (air spray), penggunaan bahan baku bermutu, dan SOP keselamatan selama pencampuran.</p>

        <h2>Penutup</h2>
        <p>Lime products tetap menjadi solusi cost-effective untuk stabilisasi tanah bila diaplikasikan dengan desain dan kontrol kualitas yang tepat. Kolaborasi antara peneliti, produsen, dan kontraktor menjadi kunci untuk hasil yang optimal.</p>
      </article>
    `,
    category: "Engineering",
    tags: ["soil", "lime", "civil engineering"],
    author: "GAB Engineering Team",
    date: "2025-02-05",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 3,
    title: "The Role of Silica in Modern Manufacturing",
    slug: "the-role-of-silica-in-modern-manufacturing",
    excerpt:
      "Silica menjadi salah satu bahan utama dalam industri glass, foundry, filtration, hingga energi.",
    content: `
      <article>
        <h1>The Role of Silica in Modern Manufacturing</h1>
        <p><strong>Oleh GAB Research Team — 2 Maret 2025</strong></p>

        <p>Silica (SiO₂) adalah bahan serbaguna yang memainkan peran penting dalam banyak rantai pasok industri: dari produksi kaca berkualitas tinggi hingga material filtrasi untuk pengolahan air. Kualitas silica — terutama kemurnian dan ukuran butir — menentukan kinerja akhir pada aplikasi spesifik.</p>

        <h2>Aplikasi utama silica</h2>
        <ul>
          <li><strong>Produksi kaca:</strong> Silica high-purity menjadi bahan baku utama dalam pembuatan kaca datar dan kemas.</li>
          <li><strong>Foundry casting:</strong> Pasir silica tahan panas digunakan sebagai media cetak dalam penGABoran logam.</li>
          <li><strong>Filtrasi & drainase:</strong> Silica sand dan gravel dipakai untuk menahan partikel dan menyediakan lapisan drainase yang stabil.</li>
          <li><strong>Industri energi & fracking:</strong> sebagai proppant ataupun komponen dalam proses manufaktur terkait.</li>
        </ul>

        <h2>Faktor kualitas</h2>
        <p>Beberapa parameter kualitas silica yang sering diukur termasuk kadar SiO₂ (%), ukuran butir (mesh), dan kandungan logam berat. Untuk aplikasi elektronik atau optik, tingkat kemurnian harus sangat tinggi untuk mencegah cacat produk akhir.</p>

        <h2>Inovasi & optimasi</h2>
        <p>Perkembangan pemurnian dan pemrosesan (seperti milling dan thermal treatment) memungkinkan pembuatan silica dengan dispersi tinggi dan ukuran partikel yang sangat terkendali. Ini membuka peluang penggunaan silica dalam material komposit modern, seperti filler untuk polimer yang meningkatkan sifat mekanik dan termal.</p>

        <h2>Keberlanjutan</h2>
        <p>Pengelolaan tambang, transportasi, dan proses pemurnian menjadi aspek penting dalam rantai nilai silica. Praktik penambangan bertanggung jawab, serta penggunaan material daur ulang bila memungkinkan, membantu menurunkan dampak lingkungan.</p>

        <h2>Kesimpulan</h2>
        <p>Silica tetap menjadi salah satu bahan dasar paling kritis di industri manufaktur. Investasi pada teknologi pemrosesan dan kontrol kualitas akan menentukan bagaimana silica digunakan di generasi produk berikutnya — dari kaca khusus hingga material energi canggih.</p>
      </article>
    `,
    category: "Materials",
    tags: ["silica", "manufacturing", "industry"],
    author: "GAB Research Team",
    date: "2025-03-02",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 4,
    title: "Zeolite & Bentonite: The Natural Solution for Water Treatment",
    slug: "zeolite-bentonite-natural-solution-for-water-treatment",
    excerpt:
      "Zeolite dan bentonite adalah mineral alami yang efektif untuk filtrasi air dan pengolahan limbah.",
    content: `
      <article>
        <h1>Zeolite & Bentonite: The Natural Solution for Water Treatment</h1>
        <p><strong>Oleh GAB Environmental Lab — 28 Januari 2025</strong></p>

        <p>Di tengah meningkatnya kebutuhan air bersih, teknologi sederhana namun efektif seperti zeolite dan bentonite kembali mendapat perhatian. Kedua mineral ini memiliki sifat fisik dan kimia yang mendukung penghilangan ion, adsorpsi zat berbahaya, dan peningkatan kualitas air.</p>

        <h2>Sifat dan mekanisme kerja</h2>
        <p><strong>Zeolite</strong> adalah aluminosilikat berpori dengan kemampuan pertukaran ion yang tinggi — ideal untuk menjerat kation seperti ammonium, heavy metals, dan beberapa organik. <strong>Bentonite</strong>, berupa lempung yang sangat absorben, efektif menyerap partikel halus, minyak, dan membantu flokulasi bahan tersuspensi.</p>

        <h2>Aplikasi praktis</h2>
        <ul>
          <li><strong>Pengolahan air minum:</strong> kombinasi zeolite dan bentonite dapat menurunkan kandungan logam berat dan memperbaiki kejernihan.</li>
          <li><strong>Industri & limbah:</strong> penggunaan dalam kolom adsorpsi, filter bed, dan sebagai media pendukung untuk proses biologis.</li>
          <li><strong>Remediasi lingkungan:</strong> penempatan zeolit pada area kontaminasi untuk menurunkan mobilitas logam berat di tanah dan badan air.</li>
        </ul>

        <h2>Desain sistem dan operasional</h2>
        <p>Perancangan unit filter harus mempertimbangkan ukuran partikel, laju aliran, headloss, dan strategi regenerasi media. Zeolite dapat diregenerasi tergantung jenis kontaminan; bentonite, bila digunakan sebagai media sekali pakai, mudah diganti dan diolah.</p>

        <h2>Keuntungan ekonomi</h2>
        <p>Media alami umumnya lebih terjangkau dibanding adsorben sintetis. Selain itu, umur layanan yang panjang dan potensi regenerasi memberikan pengurangan biaya operasional jangka panjang.</p>

        <h2>Penutup</h2>
        <p>Zeolite dan bentonite menawarkan solusi pragmatis untuk tantangan pengolahan air—efektif, dapat diskalakan, dan relatif sederhana dioperasikan. Integrasi media ini ke dalam desain pengolahan membantu memenuhi standar kualitas air yang ketat dengan biaya yang kompetitif.</p>
      </article>
    `,
    category: "Environmental",
    tags: ["water treatment", "zeolite", "bentonite"],
    author: "GAB Environmental Lab",
    date: "2025-01-28",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 5,
    title: "Understanding Manganese for Industrial Applications",
    slug: "understanding-manganese-for-industrial-applications",
    excerpt:
      "Manganese adalah elemen penting untuk produksi baja, filtrasi air, dan aplikasi industrial.",
    content: `
      <article>
        <h1>Understanding Manganese for Industrial Applications</h1>
        <p><strong>Oleh GAB Minerals Division — 1 April 2025</strong></p>

        <p>Manganese (Mn) adalah unsur logam yang memiliki peran luas dalam industri: dari alloying dalam pembuatan baja hingga aplikasi sebagai media filtrasi (greensand) untuk penghilangan besi dan mangan dalam air. Memahami karakteristik material ini membantu teknisi memilih bentuk dan formulasi yang tepat untuk kebutuhan spesifik.</p>

        <h2>Peran dalam produksi baja</h2>
        <p>Dalam metallurgy, mangan bertindak sebagai agen pengikat belerang, meningkatkan fluiditas, dan memperbaiki sifat mekanik baja. Kandungan Mn yang tepat memberikan kombinasi kekuatan dan keuletan yang diinginkan untuk berbagai aplikasi struktural.</p>

        <h2>Manganese sebagai media filtrasi</h2>
        <p>Manganese greensand dan manganese sand adalah media efektif untuk mengoksidasi dan mengikat besi serta mangan terlarut. Sistem filter yang dirancang dengan benar mampu mengatasi masalah kualitas air yang sering ditemukan pada sumur dan sistem distribusi air permukiman.</p>

        <h3>Keunggulan teknis:</h3>
        <ul>
          <li>Efektif terhadap besi (Fe) dan mangan (Mn) terlarut.</li>
          <li>Bekerja baik pada rentang pH yang wajar setelah penyesuaian pra-treatment.</li>
          <li>Mudah diintegrasikan ke sistem filter bed bertingkat.</li>
        </ul>

        <h2>Pertimbangan lingkungan & kesehatan</h2>
        <p>Pengolahan dan penanganan material mangan harus memperhatikan paparan pekerja dan kontrol limbah. Meski mangan esensial dalam jumlah kecil bagi organisme, kadar tinggi di lingkungan dapat menimbulkan masalah ekotoksisitas.</p>

        <h2>Pengembangan & inovasi</h2>
        <p>Riset saat ini berfokus pada formulasi media filtrasi yang lebih tahan lama, proses regenerasi yang hemat air, dan pengurangan kebutuhan penambahan bahan kimia pendukung. Ada juga minat untuk menggabungkan media mangan dengan adsorben lain untuk performa multi-kontaminan.</p>

        <h2>Kesimpulan</h2>
        <p>Manganese tetap menjadi komponen kunci dalam rangkaian material industri. Dengan desain sistem yang tepat dan praktik lingkungan yang baik, mangan memberikan solusi handal untuk kebutuhan metallurgy dan pengolahan air.</p>
      </article>
    `,
    category: "Industry",
    tags: ["manganese", "steel", "industry"],
    author: "GAB Minerals Division",
    date: "2025-04-01",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
  }
];



