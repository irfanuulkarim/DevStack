import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Technologies", href: "#technologies" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
            <nav className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex h-16 items-center justify-between md:hidden">
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="text-xl text-slate-700"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <a href="#home">
                        <img
                            src="/images/logo-text.png"
                            alt="Dev Stack"
                            className="w-24"
                        />
                    </a>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="text-xs font-medium text-slate-600"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="rounded-full bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="border-t border-slate-100 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <div className="hidden h-16 items-center justify-between md:flex">

                    {/* Logo */}
                    <a href="#home" className="shrink-0">
                        <img
                            src="/images/logo-text.png"
                            alt="Dev Stack"
                            className="w-28"
                        />
                    </a>

                    <div className="flex items-center gap-7">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${index === 0
                                    ? "text-pink-600"
                                    : "text-slate-500 hover:text-pink-600"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="rounded-full bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                
            </nav>
        </header>
    );
};

export default Navbar;