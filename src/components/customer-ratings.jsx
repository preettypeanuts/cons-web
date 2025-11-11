"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsStarFill, BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { customerRatings } from "@/system"

export const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % customerRatings.length)
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? customerRatings.length - 1 : prev - 1
        )
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    // Auto play
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, 3000)
            return () => clearInterval(interval)
        }
    }, [isPaused, nextSlide])

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <BsStarFill key={i} className="text-orange-400" />
            )
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative">
                    <BsStarFill className="text-neutral-300 dark:text-neutral-700" />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                        <BsStarFill className="text-orange-400" />
                    </div>
                </div>
            )
        }

        const remainingStars = 5 - Math.ceil(rating)
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <BsStarFill
                    key={`empty-${i}`}
                    className="text-neutral-300 dark:text-neutral-700"
                />
            )
        }

        return stars
    }

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    return (
        <div className="spacing margin">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-xs uppercase tracking-wider opacity-60 mb-2">
                        Testimonials
                    </h3>
                    <h2 className="text-3xl lg:text-4xl font-light">
                        What Our Clients Say
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Review Card */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait" custom={currentIndex}>
                            <motion.div
                                key={currentIndex}
                                custom={currentIndex}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 md:p-12"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6 justify-center">
                                    {renderStars(customerRatings[currentIndex].rating)}
                                </div>

                                {/* Comment */}
                                <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-center leading-relaxed mb-8 opacity-90">
                                    "{customerRatings[currentIndex].comment}"
                                </blockquote>

                                {/* Customer Info */}
                                <div className="text-center">
                                    <p className="font-semibold text-base md:text-lg mb-1">
                                        {customerRatings[currentIndex].name}
                                    </p>
                                    <p className="text-sm opacity-60">
                                        {customerRatings[currentIndex].company}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-orange-400 hover:border-orange-400 dark:hover:bg-orange-400 dark:hover:border-orange-400 hover:text-white duration-200 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"
                        aria-label="Previous review"
                    >
                        <BsChevronLeft className="text-lg" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-orange-400 hover:border-orange-400 dark:hover:bg-orange-400 dark:hover:border-orange-400 hover:text-white duration-200 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"
                        aria-label="Next review"
                    >
                        <BsChevronRight className="text-lg" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {customerRatings.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-8 bg-orange-400'
                                : 'w-1.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-orange-400/50'
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}