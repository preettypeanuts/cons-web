import { slugify } from "@/lib/slugify"
import { productsData } from "@/system"
import { ChevronRight, Circle, Dot, Flower2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const MegaServices = () => {
    const divisions = [...new Set(productsData.map(item => item.division))]

    return (
        <>
            <div className="grid grid-cols-10 gap-2">
                <section className="col-span-8 space-y-3">
                    <div className="uppercase text-xs font-bold opacity-50">
                        Products
                    </div>
                    <div className="grid grid-cols-4 pb-10 gap-2">
                        {divisions.map((division, idx) => (
                            <Link
                                href={`/products/${slugify(division)}`}
                                className={`dark:bg-black bg-white border p-5  duration-300 hover:invert group rounded-lg`}
                                key={division}
                            >
                                <div className="flex items-start justify-between mb-10 gap-20">
                                    <div className="text-2xl text-mainColor font-light leading-tight group-hover:text-sky-600">
                                        {division}
                                    </div>
                                    <p className="text-xs p-1">
                                        0{idx + 1}.
                                    </p>
                                </div>

                                <div className="space-y-0.5">
                                    {productsData
                                        .filter(item => item.division === division)
                                        .map(product => (
                                            <div
                                                className="text-xs line-clamp-1"
                                                key={product.id}
                                            >
                                                {product.productName}
                                            </div>
                                        ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
                <section className="col-span-2 space-y-3">
                    <div className="uppercase text-xs font-bold opacity-50">
                        Related
                    </div>
                    <Image
                        width={500}
                        height={500}
                        className="rounded-lg"
                        src="https://images.unsplash.com/photo-1637590109303-eca77d3f044b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900"
                        alt="nav img" />
                </section>
            </div>
        </>
    )
}