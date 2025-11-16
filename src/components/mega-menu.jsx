import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";

export const MegaMenu = ({
    id,
    label,
    expandedId,
    setExpandedId,
    children,
    arrowVisibility,
    icon,
    iconClassName,
    mobile,
    href
}) => {
    const isExpanded = expandedId === id;
    const path = usePathname();

    const handleToggleExpand = () => {
        setExpandedId(isExpanded ? null : id);
    };
    return (
        <>
            {/* PC */}
            <div
                className="relative md:inline-flex hidden"
                onMouseEnter={() => setExpandedId(id)}
                onMouseLeave={() => setExpandedId(null)}
            >
                {/* Trigger */}
                <div className="z-500 relative">
                    {label ? (
                        <Link
                            href={href}
                            className="cursor-pointer flex items-center gap-1 relative text-[13px] rounded-full group-hover:not-[&:hover]:opacity-30 hover:scale-102 hover:font-medium hover:text-mainColor duration-300"
                            onClick={handleToggleExpand}
                        >
                            <span className={`${arrowVisibility} ${isExpanded ? 'rotate-360' : 'rotate-45'} duration-300 ease-in-out`}>
                                <IoArrowDownOutline />
                            </span>

                            {label}
                            <span className={`${path.startsWith(href) ? 'scale-100 bg-black dark:bg-white' : 'scale-0  bg-orange-400'} aspect-square absolute -right-3 top-[55%] transform -translate-y-1/2 w-2 h-2 ease-in-out duration-300 group-hover:scale-100 scale-0 rounded-full`}></span>
                        </Link>
                    ) : (
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={handleToggleExpand} checked={isExpanded} readOnly />
                            <div className="swap-off">
                                <div className={iconClassName}>{icon}</div>
                            </div>
                            <div className="swap-on">
                                <div className={iconClassName}><RxCross2 className="text-xl" /></div>
                            </div>
                        </label>
                    )}
                </div>

                {/* Mega Menu */}
                <div
                    onMouseEnter={() => setExpandedId(id)}
                    className={`fixed top-0 left-0 w-full bg-white/85 dark:bg-darkColor/95 transition-all duration-450 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] overflow-hidden border-b border-b-neutral-600/20 dark:border-neutral-300/20
                             ${isExpanded
                            ? 'pointer-events-auto opacity-100 translate-y-0 max-h-[80vh]'
                            : 'pointer-events-none opacity-0 -translate-y-5 max-h-0'}`}
                    style={{
                        minHeight: isExpanded ? '30vh' : '0',
                    }}
                >
                    <div className={`md:mx-10 mt-20`}>
                        {children}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="relative md:hidden inline-flex">
                {/* Trigger */}
                <div className="z-500 relative">
                    {label ? (
                        <div
                            className="cursor-pointer gap-1 py-0.5 px-3 flex items-center text-gray-800 dark:text-white rounded-full hover:bg-darkColor/5 dark:hover:bg-lightColor/5 duration-200 ease-in-out"
                            onClick={handleToggleExpand}
                        >
                            {label}
                            <span className={`${arrowVisibility} ${isExpanded ? 'rotate-180' : ''} duration-300 ease-in-out`}>
                                <IoIosArrowDown />
                            </span>
                        </div>
                    ) : (
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={handleToggleExpand} checked={isExpanded} readOnly />
                            <div className="swap-off">
                                <div className={iconClassName}>{icon}</div>
                            </div>
                            <div className="swap-on">
                                <div className={iconClassName}><RxCross2 className="text-xl" /></div>
                            </div>
                        </label>
                    )}
                </div>

                {/* Mega Menu */}
                <div
                    className={`fixed inset-0 top-0 left-0 w-screen pt-16 pb-24 transition-all duration-300 ease-in-out transform noBar
                         ${isExpanded ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                    <div className="2xl:px-80 md:px-24 min-h-[50lvh] pt-5 noBar">
                        {children}
                    </div>
                </div>

                {mobile && (
                    <div
                        className={`fixed inset-0 w-full bg-secondaryDark/20 dark:bg-secondaryLight/10 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${isExpanded ? 'pointer-events-auto max-h-screen opacity-100 translate-y-0 overflow-y-scroll noBar' : 'pointer-events-none max-h-0 opacity-0 -translate-y-5'} overflow-hidden`}
                    >
                        <div
                            className={`transition-transform duration-700 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                        >
                            {mobile}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}