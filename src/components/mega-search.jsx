"use client"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import {
    Search,
    X,
    Newspaper,
    Package,
    Building2,
    Image as ImageIcon,
    ArrowRight,
    Loader2
} from "lucide-react"
import {
    productsData,
    projectsData,
    newsData,
    galleryData
} from "@/system"
import { slugify } from "@/lib/slugify"
import Image from "next/image"

export const MegaSearch = ({ isOpen, onClose, expandedId, setExpandedId }) => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState({
        products: [],
        projects: [],
        news: [],
        gallery: []
    })
    const [isSearching, setIsSearching] = useState(false)
    const [activeTab, setActiveTab] = useState("all")
    const inputRef = useRef(null)
    const router = useRouter()

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Search function
    useEffect(() => {
        if (!query.trim()) {
            setResults({
                products: [],
                projects: [],
                news: [],
                gallery: []
            })
            return
        }

        setIsSearching(true)
        const searchQuery = query.toLowerCase()

        // Debounce search
        const timeoutId = setTimeout(() => {
            // Search Products
            const foundProducts = productsData
                .filter(item =>
                    item.isPublished && (
                        item.productName.toLowerCase().includes(searchQuery) ||
                        item.division.toLowerCase().includes(searchQuery) ||
                        item.descriptions.toLowerCase().includes(searchQuery)
                    )
                )
                .slice(0, 5)

            // Search Projects
            const foundProjects = projectsData
                .filter(item =>
                    item.title.toLowerCase().includes(searchQuery) ||
                    item.category.toLowerCase().includes(searchQuery) ||
                    item.location.toLowerCase().includes(searchQuery) ||
                    item.description.toLowerCase().includes(searchQuery) ||
                    item.tags.some(tag => tag.toLowerCase().includes(searchQuery))
                )
                .slice(0, 5)

            // Search News
            const foundNews = newsData
                .filter(item =>
                    item.title.toLowerCase().includes(searchQuery) ||
                    item.excerpt.toLowerCase().includes(searchQuery) ||
                    item.category.toLowerCase().includes(searchQuery) ||
                    item.tags.some(tag => tag.toLowerCase().includes(searchQuery))
                )
                .slice(0, 5)

            // Search Gallery
            const foundGallery = galleryData
                .filter(item =>
                    item.title.toLowerCase().includes(searchQuery) ||
                    item.shortDesc.toLowerCase().includes(searchQuery)
                )
                .slice(0, 5)

            setResults({
                products: foundProducts,
                projects: foundProjects,
                news: foundNews,
                gallery: foundGallery
            })
            setIsSearching(false)
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [query])

    // Calculate total results
    const totalResults =
        results.products.length +
        results.projects.length +
        results.news.length +
        results.gallery.length

    // Handle navigation
    const handleNavigate = (type, item) => {
        let url = ""

        switch (type) {
            case "product":
                url = `/products?q=${encodeURIComponent(item.productName)}`
                break
            case "project":
                url = `/projects/${slugify(item.title)}`
                break
            case "news":
                url = `/news/${item.category.toLowerCase()}/${slugify(item.title)}`
                break
            case "gallery":
                url = `/gallery`
                break
            default:
                return
        }

        router.push(url)
        setExpandedId("")
        setQuery("")
    }

    // Handle view all
    const handleViewAll = (type) => {
        let url = ""

        switch (type) {
            case "products":
                url = `/products?q=${encodeURIComponent(query)}`
                break
            case "projects":
                url = `/projects?q=${encodeURIComponent(query)}`
                break
            case "news":
                url = `/news?q=${encodeURIComponent(query)}`
                break
            case "gallery":
                url = `projects/gallery`
                break
            default:
                return
        }

        router.push(url)
        setExpandedId("")
        setQuery("")
    }

    // Filter results by tab
    const getFilteredResults = () => {
        if (activeTab === "all") return results
        return {
            products: activeTab === "products" ? results.products : [],
            projects: activeTab === "projects" ? results.projects : [],
            news: activeTab === "news" ? results.news : [],
            gallery: activeTab === "gallery" ? results.gallery : []
        }
    }

    const filteredResults = getFilteredResults()


    return (
        <>
            <div className="w-full max-h-[90vh] flex flex-col">
                {/* Search Input */}
                <div className="">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Cari produk, proyek, berita, atau galeri..."
                            className="w-full pl-12 pr-12 py-4 text-lg bg-secondary/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {isSearching && (
                            <Loader2 className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground animate-spin" />
                        )}
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    {query && (
                        <p className="mt-3 text-sm text-muted-foreground">
                            {totalResults > 0 ? (
                                <>Ditemukan <span className="font-semibold text-foreground">{totalResults}</span> hasil</>
                            ) : (
                                <>Tidak ada hasil untuk "{query}"</>
                            )}
                        </p>
                    )}
                </div>

                {/* Tabs */}
                {query && totalResults > 0 && (
                    <div className="py-3 border-b">
                        <div className="flex gap-2 min-w-max">
                            <TabButton
                                active={activeTab === "all"}
                                onClick={() => setActiveTab("all")}
                                count={totalResults}
                            >
                                Semua
                            </TabButton>
                            {results.products.length > 0 && (
                                <TabButton
                                    active={activeTab === "products"}
                                    onClick={() => setActiveTab("products")}
                                    count={results.products.length}
                                    icon={<Package className="w-4 h-4" />}
                                >
                                    Produk
                                </TabButton>
                            )}
                            {results.projects.length > 0 && (
                                <TabButton
                                    active={activeTab === "projects"}
                                    onClick={() => setActiveTab("projects")}
                                    count={results.projects.length}
                                    icon={<Building2 className="w-4 h-4" />}
                                >
                                    Proyek
                                </TabButton>
                            )}
                            {results.news.length > 0 && (
                                <TabButton
                                    active={activeTab === "news"}
                                    onClick={() => setActiveTab("news")}
                                    count={results.news.length}
                                    icon={<Newspaper className="w-4 h-4" />}
                                >
                                    Berita
                                </TabButton>
                            )}
                            {results.gallery.length > 0 && (
                                <TabButton
                                    active={activeTab === "gallery"}
                                    onClick={() => setActiveTab("gallery")}
                                    count={results.gallery.length}
                                    icon={<ImageIcon className="w-4 h-4" />}
                                >
                                    Galeri
                                </TabButton>
                            )}
                        </div>
                    </div>
                )}

                {/* Results */}
                <div className={`flex-1 overflow-y-auto p-6 space-y-6 ${query && totalResults >= 1 && "pb-50"}`}>
                    {!query && (
                        <div className="text-center py-12">
                            <Search className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                            <p className="text-muted-foreground">
                                Mulai mengetik untuk mencari produk, proyek, berita, atau galeri
                            </p>
                        </div>
                    )}

                    {query && totalResults === 0 && !isSearching && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground mb-4">
                                Tidak ditemukan hasil untuk "{query}"
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Coba kata kunci yang berbeda atau lebih umum
                            </p>
                        </div>
                    )}

                    {/* Products Results */}
                    {filteredResults.products.length > 0 && (
                        <ResultSection
                            title="Produk"
                            icon={<Package className="w-5 h-5" />}
                            count={results.products.length}
                            onViewAll={() => handleViewAll("products")}
                        >
                            {filteredResults.products.map((product) => (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                    onClick={() => handleNavigate("product", product)}
                                    query={query}
                                />
                            ))}
                        </ResultSection>
                    )}

                    {/* Projects Results */}
                    {filteredResults.projects.length > 0 && (
                        <ResultSection
                            title="Proyek"
                            icon={<Building2 className="w-5 h-5" />}
                            count={results.projects.length}
                            onViewAll={() => handleViewAll("projects")}
                        >
                            {filteredResults.projects.map((project) => (
                                <ProjectItem
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleNavigate("project", project)}
                                    query={query}
                                />
                            ))}
                        </ResultSection>
                    )}

                    {/* News Results */}
                    {filteredResults.news.length > 0 && (
                        <ResultSection
                            title="Berita"
                            icon={<Newspaper className="w-5 h-5" />}
                            count={results.news.length}
                            onViewAll={() => handleViewAll("news")}
                        >
                            {filteredResults.news.map((news) => (
                                <NewsItem
                                    key={news.id}
                                    news={news}
                                    onClick={() => handleNavigate("news", news)}
                                    query={query}
                                />
                            ))}
                        </ResultSection>
                    )}

                    {/* Gallery Results */}
                    {filteredResults.gallery.length > 0 && (
                        <ResultSection
                            title="Galeri"
                            icon={<ImageIcon className="w-5 h-5" />}
                            count={results.gallery.length}
                            onViewAll={() => handleViewAll("gallery")}
                        >
                            {filteredResults.gallery.map((item) => (
                                <GalleryItem
                                    key={item.id}
                                    item={item}
                                    onClick={() => handleNavigate("gallery", item)}
                                    query={query}
                                />
                            ))}
                        </ResultSection>
                    )}
                </div>
            </div>
        </>
    )
}

// Tab Button Component
const TabButton = ({ active, onClick, count, icon, children }) => (
    <button
        onClick={onClick}
        className={`
            px-4 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2
            ${active
                ? 'bg-orange-500 text-white'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
            }
        `}
    >
        {icon}
        {children}
        <span className={`
            px-2 py-0.5 rounded-full text-xs
            ${active ? 'bg-white/20' : 'bg-foreground/10'}
        `}>
            {count}
        </span>
    </button>
)

// Result Section Component
const ResultSection = ({ title, icon, count, onViewAll, children }) => (
    <div className="space-y-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold">
                {icon}
                <span>{title}</span>
                <span className="text-muted-foreground">({count})</span>
            </div>
            <button
                onClick={onViewAll}
                className="cursor-pointer text-sm text-orange-500 hover:text-orange-600 flex items-center gap-1"
            >
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
        <div className="space-y-2">
            {children}
        </div>
    </div>
)

// Product Item Component
const ProductItem = ({ product, onClick, query }) => (
    <button
        onClick={onClick}
        className="w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left group"
    >
        <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary shrink-0">
                <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-medium group-hover:text-orange-500 transition-colors line-clamp-1">
                    {product.productName}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-1">
                    {product.division}
                </p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 transition-colors shrink-0" />
        </div>
    </button>
)

// Project Item Component
const ProjectItem = ({ project, onClick, query }) => (
    <button
        onClick={onClick}
        className="w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left group"
    >
        <div className="flex items-center gap-3">
            <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-secondary shrink-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-medium group-hover:text-orange-500 transition-colors line-clamp-1">
                    {project.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                </div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 transition-colors shrink-0" />
        </div>
    </button>
)

// News Item Component
const NewsItem = ({ news, onClick, query }) => (
    <button
        onClick={onClick}
        className="w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left group"
    >
        <div className="flex items-center gap-3">
            <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-secondary shrink-0">
                <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-medium group-hover:text-orange-500 transition-colors line-clamp-1">
                    {news.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{news.category}</span>
                    <span>•</span>
                    <span>{new Date(news.date).toLocaleDateString('id-ID')}</span>
                </div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 transition-colors shrink-0" />
        </div>
    </button>
)

// Gallery Item Component
const GalleryItem = ({ item, onClick, query }) => (
    <button
        onClick={onClick}
        className="w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left group"
    >
        <div className="flex items-center gap-3">
            <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-secondary shrink-0">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-medium group-hover:text-orange-500 transition-colors line-clamp-1">
                    {item.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-1">
                    {item.shortDesc}
                </p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 transition-colors shrink-0" />
        </div>
    </button>
)