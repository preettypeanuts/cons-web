"use client";
import Link from "next/link"
import ThemeSwitch from "./theme-switch";
import { NavbarItems } from "@/system"
import { GiTwirlyFlower } from "react-icons/gi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";
import { IoArrowUp } from "react-icons/io5";

const PageLinks = ({ href, children, isHome = false }) => {
    const path = usePathname();
    return (
        <>
            {isHome === true ? (
                <>
                    <li className='relative flex flex-col items-center group'>
                        <Link
                            href={href}
                            className={`${path === "/" ? 'opacity-100' : 'opacity-60 dark:opacity-80 hover:opacity-100'} relative text-[13px] rounded-full group-hover:not-[&:hover]:opacity-30 hover:scale-102 hover:font-medium hover:text-mainColor duration-300`}
                            aria-current="page"
                        >
                            {children}
                        </Link>
                        <span className={`${path === "/" ? 'scale-100 bg-black dark:bg-white' : 'scale-0  bg-orange-400'} aspect-square absolute -right-3 top-[55%] transform -translate-y-1/2 w-2 h-2 ease-in-out duration-300 group-hover:scale-100 scale-0 rounded-full`}></span>
                    </li>
                </>
            ) : (
                <>
                    <li className='relative flex flex-col items-center group'>
                        <Link
                            href={href}
                            className={`${path.startsWith(href) ? 'opacity-100' : 'opacity-60 dark:opacity-80 hover:opacity-100'} relative text-[13px] rounded-full group-hover:not-[&:hover]:opacity-30 hover:scale-102 hover:font-medium hover:text-mainColor duration-300`}
                            aria-current="page"
                        >
                            {children}
                        </Link>
                        <span className={`${path.startsWith(href) ? 'scale-100 bg-black dark:bg-white' : 'scale-0  bg-orange-400'} aspect-square absolute -right-3 top-[55%] transform -translate-y-1/2 w-2 h-2 ease-in-out duration-300 group-hover:scale-100 scale-0 rounded-full`}></span>
                    </li>
                </>
            )}

        </>
    )
}

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedId, setExpandedId] = useState(null);

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll ke atas
        });
    };
    return (
        <>
            <div className={`${isScrolled ? "translate-y-0 opacity-100" : "-translate-100 opacity-0"} md:flex hidden duration-200 ease-in-out fixed top-0 left-0 right-0 h-20 z-40 w-auto pointer-events-none linear-blur-navbar bg-linear-to-b from-lightColor/40 dark:from-darkColor/50 to-transparent`} />

            <nav className={`${isScrolled ? "lg:left-10 lg:right-10 left-4 right-4" : "left-1.5 right-1.5 lg:left-9 lg:right-9"} hidden duration-300 fixed top-2  md:flex items-center justify-center z-555`}>
                <div className={`${isScrolled && "bg-lightColor/50 dark:bg-darkColor/50"} flex items-center justify-between gap-15 px-3 py-2 w-full rounded-full duration-300 ease-in-out`}>
                    <div className="text-lg max-w-10 max-h-5 overflow-hidden flex items-center justify-center w-full">
                        <Image
                            width={50}
                            height={50}
                            src="/icon.png"
                            className={`${isScrolled && "grayscale"} w-12 h-12 object-cover`}
                            alt="Logo" />
                    </div>
                    {/* <GiTwirlyFlower className="text-lg" /> */}
                    {NavbarItems.map((el, idx) => (
                        <PageLinks
                            key={idx}
                            href={el.href}
                            isHome={el.isHome}
                        >
                            {el.label}
                        </PageLinks>
                    ))}
                    <ThemeSwitch />
                    <HiMagnifyingGlass className="text-lg" />
                </div>
                <div
                    onClick={scrollToTop}
                    className={`${isScrolled && "bg-lightColor/50 dark:bg-darkColor/50"} flex items-center justify-between gap-15 px-2 py-2 w-fit rounded-full duration-300 ease-in-out ml-2 active:scale-90`}>
                    <button
                        className={`${isScrolled ? "scale-100 translate-y-0" : "scale-0 -translate-y-full"} duration-300 origin-top hover:text-mainColor cursor-pointer`}
                    >
                        <IoArrowUp className="text-lg" />
                    </button>
                </div>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}

{/* <div className={`${isScrolled && "bg-lightColor/50 dark:bg-darkColor/50"} grid grid-cols-2 lg:grid-cols-3 gap-15 px-3 py-2 w-full rounded-full duration-300 ease-in-out`}>

    <div className="text-lg max-w-12 max-h-8 overflow-hidden flex items-center justify-center w-full">
        <Image
                            width={50}
                            height={50}
                            src="/icon.png"
                            className={`${!isScrolled && "grayscale"} w-15 h-15 object-cover`}
                            alt="Logo" />
        <GiTwirlyFlower className="text-lg" />
    </div>

    <div className="hidden lg:flex items-center justify-center gap-10">
        {NavbarItems.map((el, idx) => (
            <PageLinks
                key={idx}
                href={el.href}
            >
                {el.label}
            </PageLinks>
        ))}
    </div>

    <div className="flex flex-row items-center justify-end gap-6" >
        <ThemeSwitch />
        <HiMagnifyingGlass className="text-lg" />
    </div>
</div> */}