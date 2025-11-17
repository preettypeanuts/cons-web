'use client';
import { slugify } from "@/lib/slugify";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const CardProjects = ({
    projects = [],
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
                                Showcase
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-light">
                                Our Recent Projects
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
                        className="carousel w-full gap-3 py-10"
                    >
                        {projects.map((el, idx) => (
                            <Link
                                key={idx}
                                href={`/projects/${slugify(el.title)}`}
                                className={`min-w-90 min-h-120 
                                ${idx === 0 && "md:ml-10 ml-4"}
                                ${idx === projects.length - 1 && "md:mr-10 mr-4"}
                                `}
                            >
                                <div
                                    className="h-full p-4 border rounded-xl border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 duration-300 group"
                                >
                                    <div className="w-full max-h-80 h-80 rounded-lg overflow-hidden relative group">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={el.image}
                                            alt=""
                                            className="max-h-80  min-h-80 h-full w-full object-cover rounded-lg group-hover:scale-105 duration-300 ease-in-out"
                                        />
                                        <div className="absolute top-0 left-0 dark:bg-black bg-white text-mainColor px-3 py-1 rounded-br-lg text-sm font-medium ">
                                            <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-lg"></div>
                                            <div className="bg-white dark:bg-black dark:text-white rounded-out-tr-lg"></div>
                                            {el.category}
                                        </div>
                                    </div>
                                    <div className="pt-3 space-y-3">
                                        <h1 className="font-semibold text-xl group-hover:text-mainColor duration-300">
                                            {el.title}
                                        </h1>
                                        <p className="line-clamp-2 opacity-80 leading-tight">
                                            {el.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </section>
                </section>
            )}

            {mode === "grid" && (
                <section className="margin spacing">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {projects.map((el, idx) => (
                            <Link
                                key={idx}
                                href={`/projects/${slugify(el.title)}`}
                            >
                                <div
                                    className="p-4 border rounded-xl border-neutral-200 dark:border-neutral-600 hover:-translate-y-1 duration-300 group"
                                >
                                    <div className="w-full max-h-80 h-80 rounded-lg overflow-hidden relative group">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={el.image}
                                            alt=""
                                            className="max-h-80  min-h-80 h-full w-full object-cover rounded-lg group-hover:scale-105 duration-300 ease-in-out"
                                        />
                                        <div className="absolute top-0 left-0 dark:bg-black bg-white text-mainColor px-3 py-1 rounded-br-lg text-sm font-medium ">
                                            <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-lg"></div>
                                            <div className="bg-white dark:bg-black dark:text-white rounded-out-tr-lg"></div>
                                            {el.category}
                                        </div>
                                    </div>
                                    <div className="pt-3 space-y-3">
                                        <h1 className="font-semibold text-xl group-hover:text-mainColor duration-300">
                                            {el.title}
                                        </h1>
                                        <p className="line-clamp-2 opacity-80 leading-tight">
                                            {el.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

        </>
    )
}