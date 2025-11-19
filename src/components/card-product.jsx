'use client';
import { slugify } from "@/lib/slugify"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CardProduct = ({
    data,
    mode = "grid",
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
                <section className="spacing">
                    <div className="flex items-center justify-between margin">
                        <div className="">
                            <h1 className="uppercase font-light text-xs">
                                Explore
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-light">
                                Our Products
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
                                href={`/products/${slugify(el.division)}/${slugify(el.productName)}`}
                                className={`flex flex-col group min-w-90
                                                ${idx === 0 && "md:ml-10 ml-4"}
                                                ${idx === data.length - 1 && "md:mr-10 mr-4"}
                                        `}
                            >
                                <div className="aspect-square rounded-lg overflow-hidden relative">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={el.imageUrl}
                                        alt={el.productName}
                                        className="aspect-square rounded-lg z-20 group-hover:scale-105 duration-300"
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
                    </section>
                </section>
            )}
            {mode === "grid" && (
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 margin spacing">
                        {data.map((el, idx) => (
                            <Link
                                key={idx}
                                href={`/products/${slugify(el.division)}/${slugify(el.productName)}`}
                                className="flex flex-col group"
                            >
                                <div className="aspect-square rounded-lg overflow-hidden relative">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={el.imageUrl}
                                        alt={el.productName}
                                        className="aspect-square rounded-lg z-20 group-hover:scale-105 duration-300"
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
            )}
        </>
    )
}