import React from "react";

function Education() {
    return (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black">

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl bg-gray-900/70 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-10">

                    <p className="uppercase tracking-[6px] text-purple-400 font-semibold mb-3">
                        Academic Journey
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        My <span className="text-blue-400">Education</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Education Card */}
                <div className="bg-white/10 rounded-3xl shadow-xl p-8 md:p-10 border border-white/10">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* Icon */}
                        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-5xl shadow-lg">
                            🎓
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left">

                            <h2 className="text-3xl font-bold text-white mb-2">
                                Diploma in Computer Engineering
                            </h2>

                            <p className="text-lg text-gray-300 mb-2">
                                Government Women's Polytechnic College, TVM
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                Learning programming, web development, software engineering,
                                and modern technologies with creativity and innovation.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-10 text-center">

                    <h2 className="text-xl font-bold text-white mb-4">
                        Learning Areas
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">

                        <span className="px-5 py-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/20">
                            Programming
                        </span>

                        <span className="px-5 py-2 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-400/20">
                            Web Development
                        </span>

                        <span className="px-5 py-2 rounded-full bg-pink-500/20 text-pink-300 font-semibold border border-pink-400/20">
                            Creativity
                        </span>

                    </div>
                </div>

                {/* Quote */}
                <div className="mt-8 text-center">

                    <p className="italic text-gray-300">
                        “Education is the bridge between creativity and innovation.”
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Education;