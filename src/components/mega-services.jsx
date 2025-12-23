"use client"

import { slugify } from "@/lib/slugify"
import { useProductsByDivision } from "@/hooks/useProducts"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

/* -----------------------------
 * Helpers
 * ---------------------------- */

const safeSlug = (value) => {
    if (!value || typeof value !== "string") return ""
    return slugify(value)
}

const getProductImage = (product) => {
    if (!product) return "/placeholder-product.jpg"

    if (Array.isArray(product.imageUrl) && product.imageUrl.length > 0) {
        return product.imageUrl[0]
    }

    if (typeof product.imageUrl === "string") {
        return product.imageUrl
    }

    return "/placeholder-product.jpg"
}

/* -----------------------------
 * Component
 * ---------------------------- */

export const MegaServices = ({ expandedId }) => {
    const { data: divisionsData, loading, error } = useProductsByDivision({
        published: true,
    })

    const [randomProduct, setRandomProduct] = useState(null)

    /* -----------------------------
     * Derived Data
     * ---------------------------- */

    const divisions = useMemo(() => {
        if (!divisionsData) return []
        return divisionsData
            .map((item) => item.division)
            .filter(Boolean)
    }, [divisionsData])

    const allProducts = useMemo(() => {
        if (!divisionsData) return []
        return divisionsData.flatMap((item) => item.products || [])
    }, [divisionsData])

    /* -----------------------------
     * Random Product
     * ---------------------------- */

    useEffect(() => {
        if (expandedId !== "products") return
        if (!allProducts.length) return

        const productsWithImages = allProducts.filter(
            (item) =>
                typeof item?.imageUrl === "string" ||
                (Array.isArray(item?.imageUrl) && item.imageUrl.length > 0)
        )

        if (!productsWithImages.length) return

        const random =
            productsWithImages[
            Math.floor(Math.random() * productsWithImages.length)
            ]

        setRandomProduct(random)
    }, [expandedId, allProducts])

    const productImage = getProductImage(randomProduct)

    /* -----------------------------
     * States
     * ---------------------------- */

    if (loading) {
        return (
            <div className="grid grid-cols-10 gap-3 mb-5">
                <section className="col-span-8 space-y-3">
                    <div className="uppercase text-xs font-bold opacity-50">Products</div>
                    <div className="grid grid-cols-4 pb-10 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="dark:bg-black bg-white border p-5 rounded-lg animate-pulse"
                            >
                                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-10" />
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="col-span-2 space-y-3">
                    <div className="uppercase text-xs font-bold opacity-50">Related</div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square" />
                        <div className="mt-3 space-y-2">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-10 text-red-500">
                Failed to load products
            </div>
        )
    }

    /* -----------------------------
     * Render
     * ---------------------------- */

    return (
        <div className="grid grid-cols-10 gap-2">
            {/* Products */}
            <section className="col-span-8 space-y-3">
                <div className="uppercase text-xs font-bold opacity-50">Products</div>

                <div className="grid grid-cols-4 pb-10 gap-2">
                    {divisionsData?.map((group, idx) => {
                        const divisionSlug = safeSlug(group?.division)
                        if (!divisionSlug) return null

                        return (
                            <Link
                                key={group.division}
                                href={`/products/${divisionSlug}`}
                                className="aspect-square dark:bg-black bg-white border p-5 duration-300 hover:invert group rounded-lg h-full flex flex-col justify-between"
                            >
                                <div className="text-2xl text-mainColor font-light leading-tight group-hover:text-sky-600">
                                    {group.division}
                                </div>
                                <div>
                                    <div className="overflow-y-scroll max-h-20">
                                        {group.products.map((el, idx) => (
                                            <div key={idx} className="text-xs">
                                                {el.productName}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <p className="p-1 w-fit h-fit aspect-square dark:bg-white dark:text-darkColor bg-black text-lightColor rounded-full text-xs">
                                    0{idx + 1}.
                                </p>
                            </Link>
                        )
                    })}
                    <a href="/products">
                        <div
                            className="aspect-square dark:bg-black bg-white border p-5 duration-300 hover:invert group rounded-lg h-full flex items-center justify-center"
                        >
                            <div className="text-2xl text-mainColor font-light leading-tight group-hover:text-sky-600">
                                All Products

                            </div>
                        </div>
                    </a>
                </div>

                {/* Quick Access */}
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                    <span className="text-xs uppercase font-bold opacity-50 self-center mr-2">
                        Quick Access:
                    </span>

                    {divisions.map((division) => {
                        const slug = safeSlug(division)
                        if (!slug) return null

                        return (
                            <Link
                                key={division}
                                href={`/products/${slug}`}
                                className="px-3 py-1.5 text-xs font-medium rounded-full border 
                  bg-white dark:bg-black hover:bg-sky-600 hover:text-white 
                  hover:border-sky-600 transition-colors duration-200"
                            >
                                {division}
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* Related */}
            <section className="col-span-2 space-y-3">
                <div className="uppercase text-xs font-bold opacity-50">Related</div>

                {(() => {
                    const divisionSlug = safeSlug(randomProduct?.division)
                    const productSlug = safeSlug(randomProduct?.productName)

                    if (!divisionSlug || !productSlug) {
                        return (
                            <div className="animate-pulse">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square" />
                                <div className="mt-3 space-y-2">
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                                </div>
                            </div>
                        )
                    }

                    return (
                        <Link
                            href={`/products/${divisionSlug}/${productSlug}`}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    width={500}
                                    height={500}
                                    src={productImage}
                                    alt={randomProduct.productName}
                                    className="rounded-lg object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
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
                    )
                })()}
            </section>
        </div>
    )
}
