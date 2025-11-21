import Link from "next/link";
import { X } from "lucide-react";
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
                                <div className={iconClassName}><X className="text-xl" /></div>
                            </div>
                        </label>
                    )}
                </div>

                {/* Mega Menu */}
                <div
                    onMouseEnter={() => setExpandedId(id)}
                    className={`fixed backdrop-blur-xl top-0 left-0 w-full bg-white/85 dark:bg-darkColor/85 transition-all duration-450 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] overflow-hidden border-b border-b-neutral-600/20 dark:border-neutral-300/20
                             ${isExpanded
                            ? 'pointer-events-auto opacity-100 translate-y-0 max-h-[90vh]'
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
        </>
    )
}