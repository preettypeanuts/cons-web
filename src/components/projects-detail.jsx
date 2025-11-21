import Image from "next/image"
import { Calendar, MapPin, Building2, Tag } from "lucide-react"
import { CardProjects } from "./card-projects"

export const ProjectDetail = ({ data, relatedProjects = [] }) => {
    return (
        <>
            {/* Hero Section */}
            <section className="margin spacing">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2">
                            <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider rounded-full">
                                {data.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {data.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{data.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{data.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                <span>{data.client}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                        <Image
                            width={1200}
                            height={675}
                            src={data.image}
                            className="w-full h-full object-cover"
                            alt={`${data.title} - ${data.category}`}
                            priority
                        />
                    </div>

                    {/* Description */}
                    <article className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed">
                            {data.description}
                        </p>
                    </article>

                    {/* Tags */}
                    {data.tags && data.tags.length > 0 && (
                        <div className="pt-6 border-t">
                            <div className="flex items-start gap-3">
                                <Tag className="w-5 h-5 text-muted-foreground mt-1" />
                                <div className="flex flex-wrap gap-2">
                                    {data.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Gallery */}
                    {data.gallery && data.gallery.length > 0 && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Galeri Proyek</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {data.gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                                    >
                                        <Image
                                            width={800}
                                            height={600}
                                            src={image}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            alt={`${data.title} - Gallery ${index + 1}`}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Project Info Card */}
                    <div className="bg-secondary/50 rounded-xl p-6 md:p-8 space-y-4">
                        <h3 className="text-xl font-bold">Informasi Proyek</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Kategori</p>
                                <p className="font-semibold">{data.category}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Lokasi</p>
                                <p className="font-semibold">{data.location}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Tahun</p>
                                <p className="font-semibold">{data.year}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Klien</p>
                                <p className="font-semibold">{data.client}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects && relatedProjects.length > 0 && (
                <section className="margin spacing bg-secondary/30 py-16">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl font-bold">Proyek Terkait</h2>
                            <p className="text-muted-foreground">
                                Proyek lainnya dalam kategori {data.category}
                            </p>
                        </div>
                        <CardProjects
                            projects={relatedProjects}
                            mode="grid"
                            useSpacing={false}
                            useMargin={false}
                        />
                    </div>
                </section>
            )}
        </>
    )
}