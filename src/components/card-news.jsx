import Image from "next/image"
import Link from "next/link"

export const CardNews = ({ data }) => {
    return (
        <>
            <section className="margin spacing">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {data.map((el, idx) => (
                        <Link
                            key={idx}
                            href=""
                            className="flex flex-col group"
                        >
                            <div className="max-h-[40lvh] md:max-h-[50lvh] min-h-[40lvh] md:min-h-[50lvh] rounded-t-lg overflow-hidden relative">
                                <Image
                                    width={500}
                                    height={500}
                                    src={el.image}
                                    alt={el.title}
                                    className="max-h-[40lvh] md:max-h-[50lvh] min-h-[40lvh] md:min-h-[50lvh] object-cover rounded-t-lg z-20 group-hover:scale-105 duration-300"
                                />
                                <div className="absolute top-0 left-0 dark:bg-black bg-white text-mainColor pr-2 pb-2 rounded-br-lg text-xs font-medium ">
                                    <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-lg"></div>
                                    <div className="bg-white dark:bg-black dark:text-white rounded-out-tr-lg"></div>
                                    <div className="px-2 py-1 rounded-sm  bg-lightColor dark:bg-darkColor">
                                        {el.category}
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 space-y-2 p-4 bg-lightColor dark:bg-secondaryDark rounded-b-lg grow">
                                <h1 className="font-medium text-lg group-hover:text-mainColor duration-300">
                                    {el.title}
                                </h1>
                                <p className="leading-tight line-clamp-2 text-sm opacity-80">
                                    {el.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}