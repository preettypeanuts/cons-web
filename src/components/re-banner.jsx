"use client";
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export const ReBanner = ({
  title,
  highlightText,
  description,
  buttonText,
  buttonIcon,
  imageSrc,
  imageAlt = "Banner Image",
  onButtonClick,
  buttonClassName = "",
  titleClassName = "",
  highlightClassName = "text-mainColor",
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animasi jika komponen sudah terlihat minimal 10% atau sudah ada di viewport saat mount
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Lebih rendah dari sebelumnya (0.3)
        rootMargin: "0px 0px -50px 0px" // Trigger sedikit lebih awal
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)

      // Check langsung saat mount jika sudah visible
      const rect = currentRef.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true)
      }
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Animation variants
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

  const titleVariants = {
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

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

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
    <section className="margin spacing" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="space-y-4 md:space-y-10"
      >
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 md:py-10">
          {/* Title Section */}
          <motion.h1
            variants={titleVariants}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-bold flex flex-col sm:flex-col items-start sm:items-start text-secondaryDark dark:text-neutral-300 tracking-tighter leading-none ${titleClassName}`}
          >
            <span>{title}</span>
            <motion.span
              className={`flex items-end ${highlightClassName}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {highlightText}
            </motion.span>
          </motion.h1>

          {/* Content Section */}
          <motion.div
            variants={contentVariants}
            className="flex flex-col gap-4 md:gap-5 justify-start md:justify-end"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                className={`w-fit gap-2 ${buttonClassName}`}
                onClick={onButtonClick}
              >
                {buttonIcon}
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {imageSrc ? (
          <>
            {/* Image Section */}
            <motion.div
              variants={imageVariants}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-xl group"
            >
              <Image
                width={1920}
                height={1080}
                src={imageSrc}
                alt={imageAlt}
                className="w-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500 ease-in-out h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] max-h-[60vh]"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </>
        ) : (
          <>
            {children}
          </>
        )}


      </motion.div>
    </section>
  )
}