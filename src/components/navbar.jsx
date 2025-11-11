"use client";
import Link from "next/link"
import ThemeSwitch from "./theme-switch";
import { NavbarItems } from "@/system"
import { GiTwirlyFlower } from "react-icons/gi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Image from "next/image";

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedId, setExpandedId] = useState(null);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <>
            <div className={`${isScrolled ? "translate-y-0 opacity-100" : "-translate-100 opacity-0"} duration-200 ease-in-out fixed top-0 left-0 right-0 h-20 z-40 w-auto pointer-events-none linear-blur-navbar bg-linear-to-b from-lightColor/40 dark:from-darkColor/50 to-transparent`} />

            <nav className={`${isScrolled ? "lg:left-12 lg:right-12 left-4 right-4" : "left-1.5 right-1.5 lg:left-9 lg:right-9"} duration-300 fixed top-2  flex items-center justify-center z-555`}>
                <div className={`${isScrolled && "bg-lightColor/50 dark:bg-darkColor/50"} grid grid-cols-2 lg:grid-cols-3 gap-15 px-3 py-2 w-full rounded-full duration-300 ease-in-out`}>

                    <div className="text-lg max-w-12 max-h-8 overflow-hidden flex items-center justify-center">
                        <Image
                            width={50}
                            height={50}
                            src="/icon.png"
                            className={`${!isScrolled && "grayscale"} w-15 h-15 object-cover`}
                            alt="Logo" />
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        {NavbarItems.map((el, idx) => (
                            <Link
                                key={idx}
                                className={`bg-lightColor/0 rounded-full`}
                                href=""
                            >
                                <div className="text-[13px]">
                                    {el.label}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-row items-center justify-end gap-6" >
                        <ThemeSwitch />
                        <HiMagnifyingGlass className="text-lg" />
                    </div>
                </div>

            </nav>
            <div>
                {children}
            </div>
        </>
    )
}