const Hero = () => {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 lg:px-8 lg:py-24">
                <div className="max-w-xl">

                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-5xl">
                        Build Your Ideal
                        <span
                            className="block bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">

                        <a
                            href="#technologies"
                            className="rounded-lg bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition duration-200 hover:border-pink-300 hover:text-pink-600"
                        >
                            Learn More
                        </a>

                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img
                        src="/images/banner-stack.png"
                        alt="Development technology stack"
                        className="w-full max-w-md object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;