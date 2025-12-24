
import Image from "next/image"
import Link from "next/link"
import { BsLinkedin, BsInstagram, BsTwitterX, BsFacebook, BsWhatsapp, BsMailbox } from "react-icons/bs"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { label: "About Us", href: "/about-us" },
            { label: "Products", href: "/products" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" }
        ],
        division: [
            { label: "Material & Mineral", href: "/products/material-kimia-mineral" },
            { label: "Instalasi", href: "/products/instalasi" },
            { label: "Erosion Control", href: "/products/erosion-control" },
            { label: "Infrastruktur", href: "/products/infrastruktur" }
        ],
        social: [
            { icon: <BsWhatsapp />, href: "https://api.whatsapp.com/send/?phone=6285779047739", label: "Whatsapp" },
            { icon: <BsMailbox />, href: "mailto:gab.system2025", label: "Gmail" },
        ]
    }

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
            <div className="margin spacing">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12">
                    {/* Brand Section */}
                    <div className="md:col-span-5">
                        <Image
                            width={50}
                            height={50}
                            src="/icon.png"
                            className={`w-15 h-15 object-cover`}
                            alt="Logo" />
                        <h2 className="text-2xl font-bold mb-4">GAB</h2>
                        <p className="text-sm opacity-70 leading-relaxed max-w-md">
                            Perusahaan manufaktur dan distributor material industri berkualitas tinggi untuk kebutuhan industri Indonesia.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-sm opacity-70 hover:opacity-100 duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                      <div className="md:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">
                            Division
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.division.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-sm opacity-70 hover:opacity-100 duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Social Media */}
                    <div className="md:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">
                            Connect With Us
                        </h3>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 dark:hover:bg-orange-400 dark:hover:border-orange-400 hover:text-white duration-200"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs opacity-60">
                            © {currentYear} GAB. All rights reserved.
                        </p>
                        <p className="text-xs opacity-60">
                            Rise Beyond.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
