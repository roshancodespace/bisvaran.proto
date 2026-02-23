"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            type: "dropdown",
            children: [
                { name: "Home Nursing", href: "/services/home-nursing" },
                { name: "Elderly Care", href: "/services/elderly-care" }
            ]
        },
        { name: "Hospitals", href: "/hospitals" },
        { name: "Doctors", href: "/doctors" },
        { name: "Nurses", href: "/nurses" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="relative">
            <nav className="backdrop-blur-sm bg-white/70 border-b border-zinc-200/50 py-3 px-4 lg:px-8 w-full fixed z-60 flex items-center justify-between transition-all duration-300">
                <div id="brand_logo" className="flex items-end leading-none font-bold text-xl tracking-tight text-teal-900">
                    <span style={{ fontFamily: "var(--font-grotesk)" }}>BISVARAN</span>
                    <div className="size-1.5 bg-teal-500 mb-1 ml-0.5 rounded-full"></div>
                </div>

                {/* Desktop Nav */}
                <div id="nav_links" className="items-center font-medium text-sm hidden lg:flex space-x-1">
                    {navLinks.map((link) => {
                        if (link.type === 'dropdown') {
                            const isChildActive = link.children?.some(child => pathname === child.href);
                            return (
                                <div key={link.name} className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        className={`flex items-center gap-1 px-4 py-2 rounded-full transition-colors ${isServicesOpen || isChildActive ? "text-teal-600 bg-teal-50" : "text-zinc-600 hover:text-teal-600 hover:bg-teal-50"}`}
                                    >
                                        <span>{link.name}</span>
                                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                    </button>

                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-12 left-0 w-48 bg-white border border-zinc-100 rounded-2xl shadow-xl shadow-zinc-200/50 py-2 flex flex-col z-70 origin-top-left"
                                            >
                                                {link.children?.map(child => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        onClick={() => setIsServicesOpen(false)}
                                                        className={`px-4 py-2.5 mx-2 rounded-xl text-sm transition-colors ${pathname === child.href ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-zinc-600 hover:bg-zinc-50 hover:text-teal-600'}`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        }

                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href!}
                                className={`px-4 py-2 rounded-full transition-colors ${isActive ? "text-teal-600 bg-teal-50" : "text-zinc-600 hover:text-teal-600 hover:bg-teal-50"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#request-callback" className="hidden sm:flex px-5 py-2.5 bg-teal-600 text-white cursor-pointer hover:bg-teal-700 transition-colors rounded-full items-center gap-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                        <span>Request Callback</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-65 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-5 border-b border-zinc-100 flex justify-between items-center">
                    <div id="brand_logo_mobile" className="flex items-end leading-none font-bold text-xl tracking-tight text-teal-900">
                        <span style={{ fontFamily: "var(--font-grotesk)" }}>BISVARAN</span>
                        <div className="size-1.5 bg-teal-500 mb-1 ml-0.5 rounded-full"></div>
                    </div>
                    <button
                        className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col p-4 space-y-2 font-medium overflow-y-auto">
                    {navLinks.map((link) => {
                        if (link.type === 'dropdown') {
                            const isChildActive = link.children?.some(child => pathname === child.href);
                            return (
                                <div key={link.name} className="flex flex-col">
                                    <button
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${isChildActive ? "text-teal-600 bg-teal-50" : "text-zinc-700 hover:bg-zinc-50"}`}
                                    >
                                        <span>{link.name}</span>
                                        <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    <AnimatePresence>
                                        {isMobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="flex flex-col gap-1 ml-4 mt-1 border-l-2 border-zinc-100 pl-2 overflow-hidden"
                                            >
                                                {link.children?.map(child => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className={`px-4 py-2.5 rounded-xl transition-colors ${pathname === child.href ? 'text-teal-700 font-semibold' : 'text-zinc-500 hover:text-teal-600'}`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        }

                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href!}
                                className={`px-4 py-3 rounded-xl transition-colors ${isActive ? "text-teal-600 bg-teal-50" : "text-zinc-700 hover:text-teal-600 hover:bg-teal-50"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-auto p-5 border-t border-zinc-100">
                    <Link href="#request-callback" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-teal-600 cursor-pointer text-white hover:bg-teal-700 transition-colors rounded-xl flex items-center justify-center gap-2 text-sm font-medium shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                        <span>Request Callback</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
