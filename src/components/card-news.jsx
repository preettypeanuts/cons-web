'use client';
import { slugify } from "@/lib/slugify"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CardNews = ({
    data = [],
    mode = "grid",
    useSpacing = true,
    useMargin = true,
}) => {
    const [carouselRef, setCarouselRef] = useState(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateCarouselPosition = () => {
        if (carouselRef) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
        }
    };
    return (
        <>
            {mode === "carousel" && (
                <section className={`${useSpacing === true && "spacing"}`}>
                    <div className="flex items-center justify-between margin">
                        <div>
                            <h1 className="uppercase font-light text-xs">
                                Insight
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-light">
                                Newest Update
                            </h2>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button
                                variant={'outline'}
                                size="icon"
                                onClick={() => carouselRef?.scrollBy({ left: -700, behavior: "smooth" })}
                                className={`transition-opacity duration-300 ${isAtStart ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                                disabled={isAtStart}
                            >
                                <ChevronLeft />
                            </Button>
                            <Button
                                variant={'outline'}
                                size="icon"
                                onClick={() => carouselRef?.scrollBy({ left: 700, behavior: "smooth" })}
                                className={`transition-opacity duration-300 ${isAtEnd ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                                disabled={isAtEnd}
                            >
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>
                    <section
                        ref={ref => setCarouselRef(ref)}
                        onScroll={updateCarouselPosition}
                        className="carousel w-full gap-3 py-10">
                        {data.map((el, idx) => (
                            <Link
                                key={idx}
                                href={`/news/${slugify(el.category)}/${slugify(el.title)}`}
                                className={`flex flex-col group min-w-90
                                            ${idx === 0 && "md:ml-10 ml-4"}
                                            ${idx === data.length - 1 && "md:mr-10 mr-4"}
                                    `}
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
                    </section>
                </section>
            )}

            {mode === "grid" && (
                <section className={`${useSpacing === true && "spacing"} ${useMargin === true && "margin"}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {data.map((el, idx) => (
                            <Link
                                key={idx}
                                href={`/news/${slugify(el.category)}/${slugify(el.title)}`}
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
            )}
        </>
    )
}