"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "./ui/button"
import { BsArrowRight, BsWhatsapp, BsEnvelope } from "react-icons/bs"
import Link from "next/link"

export const CTA = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

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
    }

    return (
        <div className="spacing margin" ref={ref}>
            <motion.div
                className="relative overflow-hidden rounded-lg bg-linear-to-br from-lightColor via-lightColor to-orange-500/50 dark:from-darkColor dark:via-darkColor dark:to-orange-900"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Content */}
                <div className="relative z-10 py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-light  mb-4"
                            variants={itemVariants}
                        >
                            Ready to Get Started?
                        </motion.h2>

                        <motion.p
                            className="text-base md:text-lg lg:text-xl opacity-80 mb-8 md:mb-10 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Partner with us for high-quality industrial materials and professional service. Let's build something great together.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            variants={itemVariants}
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white text-orange-500 hover:bg-white/90 dark:bg-white dark:text-orange-600 dark:hover:bg-white/90 w-full sm:w-auto"
                                >
                                    Get in Touch <BsArrowRight />
                                </Button>
                            </Link>

                            <Link href="https://wa.me/6281234567890" target="_blank">
                                <Button
                                    size="lg"
                                    variant="outline"
                                >
                                    <BsWhatsapp /> WhatsApp Us
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="mt-12 pt-8 border-t border-white/20"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-80 text-sm">
                                <div className="flex items-center gap-2">
                                    <BsEnvelope className="text-base" />
                                    <span>info@gab.co.id</span>
                                </div>
                                <div className="hidden md:block w-1 h-1 rounded-full bg-white/40" />
                                <div className="flex items-center gap-2">
                                    <BsWhatsapp className="text-base" />
                                    <span>+62 857-7904-7739</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}