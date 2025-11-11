"use client";
import Image from "next/image";
import { Button } from "./ui/button"
import { BsSoundwave } from "react-icons/bs";
import { motion } from "framer-motion";

export const HomeBanner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
            }
        }
    };

    const dotVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.6,
                type: "spring",
                stiffness: 200
            }
        }
    };

    return (
        <>
            <div className="py-20 margin">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-[15vw] sm:text-[12vw] lg:text-[10vw] uppercase font-bold flex items-end text-secondaryDark dark:text-neutral-300 tracking-tighter leading-none md:leading-35"
                        variants={titleVariants}
                    >
                        <span className="flex flex-col">
                            <span>Rise</span>
                            <span className="flex items-end">
                                Beyond
                                <motion.span 
                                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-orange-400 block rounded-full ml-1.5 lg:mb-5 mb-2"
                                    variants={dotVariants}
                                />
                            </span>
                        </span>
                    </motion.h1>
                    
                    <motion.div 
                        className="flex flex-col items-start justify-start lg:justify-end gap-3 lg:gap-4"
                        variants={itemVariants}
                    >
                        <p className="text-base leading-tight tracking-wide">
                            Where Innovation Meets Responsibility — Shaping a Better Tomorrow <br /> for All.
                        </p>
                        <Button
                            size={"sm"}
                            className="text-xs sm:text-sm"
                        >
                            <BsSoundwave /> Get Connected
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="mt-8 lg:mt-10 px-0 sm:px-2"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <Image
                            width={1000}
                            height={1000}
                            src="https://images.unsplash.com/photo-1576675924745-9a8eb5fdcb40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548"
                            alt="Banner Image" 
                            className="w-full object-cover saturate-0 hover:saturate-150 hue-rotate-190 duration-300 ease-in-out h-[40vh] sm:h-[50vh] lg:h-[60vh] max-h-[60vh]"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </>
    )
}