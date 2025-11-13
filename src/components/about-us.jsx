"use client"
import { companyStats } from "@/system"
import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const AboutUs = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-10 margin spacing">
                <div className="md:col-span-2 md:ml-3 mb-4 md:mb-0">
                    <h1 className="uppercase font-light text-xs">
                        About
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-light">
                       Know Us Better
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-lg sm:text-2xl md:text-3xl leading-tight tracking-wider font-normal text-justify">
                        PT. GAB DIG JAYA adalah perusahaan manufaktur dan distributor yang memfokuskan pada material industri: milk lime, limestone, powder lime, calcium carbonate, clay, zeolit, bentonite, pasir kuarsa, silica sand, dan pembenah tanah. Kami berkomitmen menyediakan produk berkualitas tinggi, siap pakai, dan layanan profesional untuk mitra kerja dan pelanggan.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-8 md:mt-10 gap-6 sm:gap-8 md:gap-10">
                        {companyStats.map((el, idx) => (
                            <StatCard key={idx} stat={el} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const StatCard = ({ stat, delay }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    useEffect(() => {
        if (!isInView) return

        const targetValue = parseInt(stat.value)
        const duration = 2000 // 2 detik
        const steps = 60
        const increment = targetValue / steps
        const stepDuration = duration / steps

        let currentStep = 0

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                currentStep++

                if (currentStep >= steps) {
                    setCount(targetValue)
                    clearInterval(interval)
                } else {
                    // Tambahkan random variation untuk efek lebih natural
                    const randomVariation = Math.random() * 0.2 - 0.1
                    const nextValue = Math.floor(increment * currentStep * (1 + randomVariation))
                    setCount(Math.min(nextValue, targetValue))
                }
            }, stepDuration)

            return () => clearInterval(interval)
        }, delay * 1000)

        return () => clearTimeout(timer)
    }, [isInView, stat.value, delay])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
        >
            <div className="flex items-center text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 sm:mb-8 md:mb-10">
                <p className="text-mainColor tabular-nums">
                    {count}
                    {stat.suffix}
                </p>
            </div>

            <div>
                <h1 className="text-base sm:text-lg">
                    {stat.label}
                </h1>
                <p className="text-xs opacity-70">
                    {stat.desc}
                </p>
            </div>
        </motion.div>
    )
}