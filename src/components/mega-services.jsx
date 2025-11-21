"use client"
import { plusfy, slugify } from "@/lib/slugify"
import { productsData } from "@/system"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export const MegaServices = ({ expandedId }) => {
    const divisions = [...new Set(productsData.map(item => item.division))]

    // State untuk random product
    const [randomProduct, setRandomProduct] = useState(null)

    // Get random product setiap kali menu dibuka
    useEffect(() => {
        // Hanya random kalau menu products sedang terbuka
        if (expandedId === 'products') {
            const productsWithImages = productsData.filter(
                item => item.imageUrl || item.imageUrl?.length > 0
            )
            
            if (productsWithImages.length > 0) {
                const random = productsWithImages[Math.floor(Math.random() * productsWithImages.length)]
                setRandomProduct(random)
            }
        }
    }, [expandedId]) // Re-run setiap expandedId berubah
    
    // Get image URL - bisa dari field image atau images array
    const getProductImage = (product) => {
        if (!product) return "/placeholder-product.jpg" // Fallback image
        
        if (product.imageUrl) return product.imageUrl
        if (product.imageUrl && product.imageUrl.length > 0) return product.imageUrl[0]
        
        return "/placeholder-product.jpg" // Fallback
    }

    const productImage = randomProduct ? getProductImage(randomProduct) : "/placeholder-product.jpg"

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
                                href={`/products/?division=${plusfy(division)}`}
                                className={`dark:bg-black bg-white border p-5 duration-300 hover:invert group rounded-lg`}
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
                    
                    {/* Tampilkan random product atau placeholder */}
                    {randomProduct ? (
                        <Link
                            href={`/products/${slugify(randomProduct.division)}/${slugify(randomProduct.productName)}`}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                                    src={productImage}
                                    alt={randomProduct.productName}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            <div className="mt-3 space-y-1">
                                <div className="text-xs text-muted-foreground uppercase">
                                    {randomProduct.division}
                                </div>
                                <div className="text-sm font-medium line-clamp-2 group-hover:text-sky-600 transition-colors">
                                    {randomProduct.productName}
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div className="animate-pulse">
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square" />
                            <div className="mt-3 space-y-2">
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    )
}