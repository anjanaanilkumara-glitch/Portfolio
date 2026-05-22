import React from "react";

function Education() {
    return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 overflow-hidden">

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-gray-700 opacity-30 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-gray-700/40 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-10">

                    <p className="uppercase tracking-[6px] text-gray-400 font-semibold mb-3">
                        Academic Journey
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        My <span className="text-red-400">Education</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-gray-600 to-red-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Education Card */}
                <div className="bg-white/5 border border-gray-700/40 rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition duration-500">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* Icon */}
                        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-gray-700 to-red-500 text-white text-5xl shadow-lg">
                            🎓
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left">

                            <h2 className="text-3xl font-bold text-white mb-2">
                                Diploma in Computer Engineering
                            </h2>

                            <p className="text-gray-300 text-lg mb-2">
                                Government Women's Polytechnic College, TVM
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                Learning programming, web development, software engineering,
                                and modern technologies with creativity and innovation.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Learning Areas */}
                <div className="mt-10 text-center">

                    <h2 className="text-xl font-bold text-white mb-4">
                        Learning Areas
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">

                        <span className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700 font-semibold">
                            Programming
                        </span>

                        <span className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700 font-semibold">
                            Web Development
                        </span>

                        <span className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700 font-semibold">
                            Creativity
                        </span>

                    </div>
                </div>

                {/* Quote */}
                <div className="mt-8 text-center">

                    <p className="italic text-gray-400">
                        “Education is the bridge between creativity and innovation.”
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Education;