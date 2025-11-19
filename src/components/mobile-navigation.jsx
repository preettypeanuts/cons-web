'use client';

import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiDotsHorizontal, HiX } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavbarItems } from "@/system";

export const MobileNavigation = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (link) => {
        if (link === "/") {
            return pathname === link;
        }
        return pathname.startsWith(link);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Mega Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/20 z-886 animate-in fade-in duration-200"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mega Menu Content */}
            <div
                className={`md:hidden fixed left-4 right-4 z-887 transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'bottom-20 opacity-100 translate-y-0'
                    : '-bottom-full opacity-0 -translate-y-8 pointer-events-none'
                    }`}
                style={{ maxHeight: "calc(100vh - 8rem)" }}
            >
                <div className=" h-full overflow-y-auto no-scrollbar">
                    {/* Header */}
                    <div className="sticky top-0 mb-2 z-10">
                        <div className="bg-lightColor/50 dark:bg-darkColor/50 backdrop-blur-sm px-4 sm:px-5 py-3 sm:py-4 border-b border-darkColor/10 dark:border-lightColor/10 flex items-center justify-between rounded-xl border">
                            <h3 className="font-semibold text-base sm:text-lg">Menu</h3>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-darkColor/10 dark:hover:bg-lightColor/10 transition-colors"
                                >
                                    <FaInstagram className="text-lg sm:text-xl" />
                                </Link>
                                <Link
                                    href="https://api.whatsapp.com/send?phone=000"
                                    target="_blank"
                                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-darkColor/10 dark:hover:bg-lightColor/10 transition-colors"
                                >
                                    <FaWhatsapp className="text-lg sm:text-xl" />
                                </Link>
                                <ThemeSwitch />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-3 gap-2">
                            {NavbarItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className={` backdrop-blur-sm border border-darkColor/15 dark:border-lightColor/15 aspect-square flex flex-col justify-center items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl transition-all ${isActive(item.href)
                                        ? 'bg-lightColor dark:bg-darkColor'
                                        : 'hover:bg-darkColor/5 dark:hover:bg-lightColor/5 bg-lightColor/50 dark:bg-darkColor/50'
                                        }`}
                                >
                                    <div className={`text-2xl shrink-0 ${isActive(item.href)
                                        ? ''
                                        : 'text-neutral-600 dark:text-neutral-400'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="md:hidden fixed bottom-4 left-4 right-4 z-888 flex items-center justify-between gap-1.5 sm:gap-2">
                {/* Navigation Items Container */}
                <div className={`flex flex-1 items-center justify-around bg-lightColor/40 dark:bg-darkColor/20 backdrop-blur-sm pl-1.5 pr-1 py-1 border border-darkColor/15 dark:border-lightColor/15 overflow-hidden rounded-full`}>
                    {NavbarItems.filter(el => el.mobileNav === true).map((el, idx) => (
                        <Link
                            key={idx}
                            href={el.href}
                            onClick={handleLinkClick}
                            className={`flex flex-col items-center justify-center relative transition-all duration-200 py-2 rounded-full flex-1 min-w-0 ${isActive(el.href)
                                ? " text-darkColor dark:text-lightColor bg-lightColor dark:bg-darkColor flex flex-row items-center pl-5 pr-6 py-3 h-full"
                                : "text-darkColor/50 dark:text-lightColor/50"
                                }`}
                        >
                            <div className="w-fit text-[20px] relative">
                                {el.icon}
                            </div>
                            {isActive(el.href) && (
                                <p className={`text-sm font-medium transition-all px-1 max-w-full ${isActive(el.href) ? "font-bold" : ""}`}>
                                    {el.label}
                                </p>
                            )}
                        </Link>
                    ))}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="shrink-0"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <div className={`ml-1 flex items-center rounded-full justify-center text-[29px] sm:text-[29px] shadow-inner bg-lightColor/40 dark:bg-white/0 backdrop-blur-sm p-2 aspect-square  border-darkColor/15 dark:border-lightColor/15 transition-all ${isMenuOpen
                            ? 'bg-mainColorLight/20 dark:bg-mainColorDark/20'
                            : 'text-darkColor/60 dark:text-lightColor/60 hover:scale-105'
                            }`}>
                            <HiDotsHorizontal className={`transition-transform duration-300 ${!isMenuOpen ? 'block' : 'hidden'}`} />
                            <HiX className={`${isMenuOpen ? 'block rotate-90' : 'hidden'}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Bottom Blur Effect */}
            <div className={`${isMenuOpen ? "h-screen" : "h-[17lvh]"} md:hidden z-885 fixed -bottom-5 left-0 right-0 linear-blur-to-t w-full bg-darkColor/25 pointer-events-none   `}></div>
        </>
    );
};