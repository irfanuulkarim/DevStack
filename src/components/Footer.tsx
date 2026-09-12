const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white px-6 py-14 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    <div className="lg:col-span-1">
                        <a href="/" className="inline-flex items-center gap-2">
                            <img
                                src="/images/logo-text.png"
                                alt="Dev Stack"
                                className="h-8 w-auto"
                            />
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-5 flex items-center gap-5 text-xs font-medium text-slate-600">
                            <a href="#" className="transition-colors hover:text-pink-500">
                                GitHub
                            </a>

                            <a href="#" className="transition-colors hover:text-pink-500">
                                Twitter
                            </a>

                            <a href="#" className="transition-colors hover:text-pink-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#home" className="hover:text-pink-500">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#technologies" className="hover:text-pink-500">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#projects" className="hover:text-pink-500">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#about" className="hover:text-pink-500">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="hover:text-pink-500">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-pink-500">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-pink-500">
                            Terms
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;