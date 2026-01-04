"use client"
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";
import { MegaSearch } from "./mega-search";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { mainWhatsapp } from "@/system";


export const FloatingButtons = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleWhatsApp = () => {
        // Ganti dengan nomor WhatsApp Anda
        window.open('https://wa.me/6281234567890', '_blank');
    };

    const openSearch = () => {
        setIsSearchOpen(true);
    };

    const closeSearch = () => {
        setIsSearchOpen(false);
    };

    return (
        <>
            <div className="hidden md:block fixed bottom-15 md:bottom-5 right-4 md:right-5 z-100">
                <section className="flex flex-col gap-2 md:gap-3 duration-300">
                    <Link
                        href={mainWhatsapp}
                        target="_blank"
                    >
                        <button className="bg-[#28b642] hover:bg-[#35a549] hover:scale-95 duration-300 ease-in-out text-white text-2xl font-bold md:p-3 rounded-full shadow-lg">
                            <FaWhatsapp />
                        </button>
                    </Link>
                </section>
            </div>

            <section className="lg:hidden fixed top-2 right-2 z-50">
                <div className="flex flex-row gap-1 p-1 bg-lightColor/10 rounded-full border border-neutral-500/20 backdrop-blur-xs transition-all duration-300">
                    <button
                        onClick={scrollToTop}
                        className={`
                            bg-lightColor/20 dark:bg-darkColor/30 backdrop-blur-sm rounded-full border border-neutral-500/10
                            hover:text-mainColor cursor-pointer transition-all duration-300 ease-in-out overflow-hidden origin-right
                            ${isScrolled
                                ? "opacity-100 p-2 mb-0 scale-100"
                                : "opacity-0 h-0 w-0 p-0 mb-0 scale-x-75 pointer-events-none"
                            }
                        `}
                        aria-label="Scroll to top"
                    >
                        <IoArrowUp className="text-lg" />
                    </button>

                    <button
                        onClick={handleWhatsApp}
                        className={`
                            ${!isScrolled && "-ml-1.5"}
                            bg-lightColor/20 dark:bg-darkColor/30 backdrop-blur-sm rounded-full p-2 border border-neutral-500/10
                            hover:text-mainColor cursor-pointer transition-all duration-300`}
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="text-lg" />
                    </button>

                    <button
                        onClick={openSearch}
                        className="
                            bg-lightColor/20 dark:bg-darkColor/30 backdrop-blur-sm rounded-full p-2 border border-neutral-500/10
                            hover:text-mainColor cursor-pointer transition-all duration-300"
                        aria-label="Search"
                    >
                        <HiMagnifyingGlass className="text-lg" />
                    </button>
                </div>
            </section>

            {/* Search Overlay */}
            {isSearchOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/0 backdrop-blur-3xl z-100 animate-in fade-in duration-200"
                        onClick={closeSearch}
                    />
                    <div className="z-105 fixed top-4 right-4 lg:hidden">
                        <Button
                            size={""}
                            onClick={closeSearch}
                        >
                            <X /> Close
                        </Button>
                    </div>

                    {/* Search Modal */}
                    <div className="fixed inset-0 z-101 flex items-start justify-center pt-20 px-4">
                        <MegaSearch
                            isOpen={isSearchOpen}
                            onClose={closeSearch}
                        />
                    </div>
                </>
            )}
        </>
    );
}