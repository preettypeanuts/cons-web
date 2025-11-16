import { slugify } from "@/lib/slugify"
import { productsData } from "@/system"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export const MegaServices = () => {
    const divisions = [...new Set(productsData.map(item => item.division))]

    return (
        <>
            <div className="grid grid-cols-10">
                <section className="col-span-8 grid grid-cols-4 pb-10 gap-2">
                    {divisions.map(division => (
                        <div
                            className="border border-neutral-500/20 rounded-lg px-1 py-1"
                            key={division}
                        >
                            <Link
                                href={`/${slugify(division)}`}
                                className="flex items-center justify-between bg-darkColor/5 dark:bg-lightColor/5 rounded-sm px-3 py-2 text-mainColor hover:bg-mainColor/20 dark:hover:bg-mainColor/20 duration-300">
                                <h2 className="font-bold text-sm uppercase ">
                                    {division}
                                </h2>
                                <ChevronRight className="size-5.5 opacity-70" />
                            </Link>
                            <div className="opacity-70 text-sm py-2 px-3 space-y-1">
                                {productsData
                                    .filter(item => item.division === division)
                                    .map(product => (
                                        <div
                                            key={product.id}
                                            className="border-b border-neutral-500/20 pb-1.5"
                                        >
                                            {product.productName}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </section>
                <section className="col-span-2">

                </section>
            </div>
        </>
    )
}