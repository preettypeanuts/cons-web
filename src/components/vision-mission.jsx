"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export const VisionMission = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="spacing margin" ref={ref}>
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Section Header */}
                <motion.div 
                    className="lg:col-span-3"
                    variants={itemVariants}
                >
                    <h3 className="text-xs uppercase tracking-wider opacity-60 mb-2">
                        Our Direction
                    </h3>
                    <h2 className="text-2xl lg:text-3xl font-light">
                        Vision & Mission
                    </h2>
                </motion.div>

                {/* Content Area */}
                <div className="lg:col-span-9 space-y-12 lg:space-y-16">
                    {/* Vision */}
                    <motion.div 
                        className="group"
                        variants={itemVariants}
                    >
                        <div className="flex items-start gap-4 lg:gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-orange-400 dark:border-orange-400 flex items-center justify-center group-hover:bg-orange-400 dark:group-hover:bg-orange-400 duration-300">
                                    <span className="text-xl lg:text-2xl font-light group-hover:text-white duration-300">
                                        V
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4 opacity-80">
                                    Vision
                                </h3>
                                <p className="text-2xl lg:text-3xl xl:text-4xl font-light leading-tight tracking-wide">
                                    "BECOMING GLOBAL PLAYER FOR VALUE ADDED MINERAL PRODUCT."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div 
                        className="border-t border-neutral-200 dark:border-neutral-800"
                        variants={itemVariants}
                    />

                    {/* Mission */}
                    <motion.div 
                        className="group"
                        variants={itemVariants}
                    >
                        <div className="flex items-start gap-4 lg:gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-orange-400 dark:border-orange-400 flex items-center justify-center group-hover:bg-orange-400 dark:group-hover:bg-orange-400 duration-300">
                                    <span className="text-xl lg:text-2xl font-light group-hover:text-white duration-300">
                                        M
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4 opacity-80">
                                    Mission
                                </h3>
                                <p className="text-base lg:text-lg xl:text-xl font-light leading-relaxed tracking-wide opacity-80">
                                    Menjalankan usaha dengan integritas, sikap profesional & komitmen melalui produk berkualitas dan dukungan pelayanan terhadap kepuasan & kepercayaan konsumen.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}