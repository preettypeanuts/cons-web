import { slugify } from "@/lib/slugify"
import Image from "next/image"
import Link from "next/link"

export const CardProduct = ({ data }) => {
    return (
        <>
            <section>
                <div className="grid grid-cols-4 gap-6 margin spacing">
                    {data.map((el, idx) => (
                        <Link
                            key={idx}
                            href={`/products/${slugify(el.division)}/${slugify(el.productName)}`}
                            className="flex flex-col group"
                        >
                            <div className="rounded-lg overflow-hidden relative">
                                <Image
                                    width={500}
                                    height={500}
                                    src={el.imageUrl}
                                    alt={el.productName}
                                    className="rounded-lg z-20 group-hover:scale-105 duration-300"
                                />
                                <div className="absolute top-0 left-0 dark:bg-black bg-white text-mainColor pr-1 pb-1 rounded-br-lg text-xs font-medium ">
                                    <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-lg"></div>
                                    <div className="bg-white dark:bg-black dark:text-white rounded-out-tr-lg"></div>
                                    <div className="px-2 py-0.5 rounded-sm  bg-lightColor dark:bg-darkColor">
                                        {el.division}
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 -mt-4 shadow-mainShadow space-y-2 p-4 bg-lightColor/30 backdrop-blur-md dark:bg-secondaryDark/50 rounded-lg grow">
                                <h1 className="font-medium">
                                    {el.productName}
                                </h1>
                                <p className="leading-tight line-clamp-2 text-sm opacity-80">
                                    {el.descriptions}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}