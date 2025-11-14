"use client";
import { galleryData } from "@/system";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion"

export const AutoPlayImage = () => {
    const data = galleryData;
    const delay = 6000;
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const isHovering = useRef(false);

    const nextSlide = () => {
        setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (data.length <= 1) return;

        intervalRef.current = setInterval(() => {
            if (!isHovering.current) nextSlide();
        }, delay);

        return () => clearInterval(intervalRef.current);
    }, []);

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            variants={imageVariants}
            transition={{ duration: 0.3 }}
            className="relative group overflow-hidden rounded-lg"
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
        >
            {/* Track */}
            <div
                className="flex transition-transform ease-in-out duration-700"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {data.map((el, idx) => (
                    <div key={idx} className="min-w-full relative">
                        <Image
                            width={500}
                            height={500}
                            src={el.image}
                            alt={el.title}
                            className="w-full h-[60lvh] object-cover rounded-lg bg-mainColor grayscale group-hover:grayscale-0 duration-300"
                        />
                        {(el.title) && (
                            <>
                                <div className="absolute top-0 left-0 dark:bg-black bg-white pr-2 pb-2 rounded-br-lg">
                                    <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-lg"></div>
                                    <div className="bg-white dark:bg-black dark:text-white rounded-out-tr-lg"></div>
                                    <div className="px-2 py-0.5 rounded-sm dark:bg-darkColor bg-lightColor">
                                        <span className="bg-linear-to-br from-mainColor via-black to-black dark:via-white dark:to-white bg-clip-text text-transparent text-lg font-medium">
                                            {el.title}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Buttons */}
            {data.length >= 2 && (
                <section className="absolute bottom-0 right-0 dark:bg-black bg-white pr-0 pb-0 rounded-tl-lg flex items-center gap-1">
                    <div className="bg-white dark:bg-black dark:text-white rounded-out-bl-lg"></div>
                    <div className="bg-white dark:bg-black dark:text-white rounded-out-rt-lg "></div>
                    <div className="space-x-0  pt-2">
                        <button
                            onClick={prevSlide}
                            className="p-2 text-mainColor cursor-pointer bg-lightColor dark:bg-darkColor hover:scale-105 duration-300 rounded-l-sm"
                        >
                            <IoIosArrowBack />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="p-2 text-mainColor cursor-pointer bg-lightColor dark:bg-darkColor hover:scale-105 duration-300 rounded-r-sm"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </section>
            )}
        </motion.div>
    );
};
