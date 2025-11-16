"use client";
import Link from "next/link"
import Image from "next/image";
import ThemeSwitch from "./theme-switch";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";
import { MegaMenu } from "./mega-menu";
import { MegaServices } from "./mega-services";

const PageLinks = ({ href, children, isHome = false }) => {
    const path = usePathname();
    return (
        <>
            {isHome === true ? (
                <>
                    <li className='relative flex flex-col items-center group z-100'>
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
                    <li className='relative flex flex-col items-center group z-100'>
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
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className={`${isScrolled ? "translate-y-0 opacity-100" : "-translate-100 opacity-0"} md:flex hidden duration-200 ease-in-out fixed top-0 left-0 right-0 h-20 z-40 w-auto pointer-events-none linear-blur-navbar bg-linear-to-b from-lightColor/40 dark:from-darkColor/50 to-transparent`} />

            <nav className={`${isScrolled && !expandedId ? "bg-lightColor/40 dark:bg-darkColor/25 border-b border-b-neutral-600/20 dark:border-neutral-300/20" : ""}  ${isScrolled ? "lg:left-0 lg:right-0 left-4 right-4 top-0" : "left-1.5 right-1.5 lg:left-0 lg:right-0 top-1"} px-10  hidden duration-300 fixed md:flex items-center justify-center z-555`}>

                <div className={`flex items-center justify-between gap-15 px-0 py-2 w-full duration-300 ease-in-out`}>

                    <div className="z-100 text-lg max-w-10 max-h-5 overflow-hidden flex items-center justify-center w-full">
                        <Image
                            width={50}
                            height={50}
                            src="/icon.png"
                            className={`${isScrolled && "grayscale"} w-12 h-12 object-cover`}
                            alt="Logo" />
                    </div>

                    <PageLinks
                        href={"/"}
                        isHome={true}
                    >
                        Home
                    </PageLinks>

                    <PageLinks
                        href={"/projects"}
                        isHome={false}
                    >
                        Projects
                    </PageLinks>

                    <MegaMenu
                        id={"products"}
                        label={"Products"}
                        expandedId={expandedId}
                        setExpandedId={setExpandedId}
                        href={"/products"}
                    >
                        <MegaServices />
                    </MegaMenu>

                    <PageLinks
                        href={"/news"}
                        isHome={false}
                    >
                        News
                    </PageLinks>

                    <PageLinks
                        href={"/about-us"}
                        isHome={false}
                    >
                        About
                    </PageLinks>

                    <PageLinks
                        href={"/contact"}
                        isHome={false}
                    >
                        Contact
                    </PageLinks>

                    <ThemeSwitch />

                    <HiMagnifyingGlass className="text-lg z-100" />
                </div>

                <div
                    onClick={scrollToTop}
                    className={`${isScrolled && "hover:bg-lightColor/50 dark:hover:bg-darkColor/50"} flex items-center justify-between gap-15 px-2 py-2 w-fit duration-300 ease-in-out ml-2 active:scale-90`}>
                    <button
                        className={`${isScrolled ? "scale-100 translate-y-0" : "scale-0 -translate-y-full"} duration-300 origin-top hover:text-mainColor cursor-pointer`}
                    >
                        <IoArrowUp className="text-lg" />
                    </button>
                </div>

            </nav>

            {/* Background Layer & Effect */}
            <div className={`hidden md:block fixed top-0 z-80 ${expandedId ? "opacity-100 backdrop-blur-xl md:backdrop-blur-[5px] w-screen h-screen grayscale" : "opacity-0"} noBar bg-lightColor/30 dark:bg-darkColor/20 transition-opacity duration-300`} />
            <div className={`${expandedId ? "md:scale-103" : "md:scale-100"} noBar overflow-hidden md:transform md:origin-top md:transition-transform md:duration-500 md:ease-in-out`}>
                {children}
            </div>
        </>
    )
}