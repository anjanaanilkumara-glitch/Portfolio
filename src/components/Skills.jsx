import React from "react";

function Skills() {
    const skills = [
        { name: "C", color: "from-gray-600 to-gray-800" },
        { name: "Python", color: "from-gray-500 to-gray-700" },
        { name: "HTML", color: "from-gray-700 to-black" },
        { name: "CSS", color: "from-gray-600 to-gray-900" },
    ];

    return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-gray-700 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-gray-700/40 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="uppercase tracking-[6px] text-gray-400 font-semibold mb-4">
                        My Expertise
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        Technical <span className="text-red-400">Skills</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-gray-600 to-red-500 mx-auto mt-5 rounded-full"></div>

                </div>

                {/* Description */}
                <div className="bg-white/5 border border-gray-700/40 rounded-3xl p-8 shadow-lg mb-12 text-center hover:shadow-2xl transition duration-500">

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        I enjoy learning modern technologies and continuously
                        improving my programming and web development skills.
                        I love building creative and responsive websites.
                    </p>

                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-r ${skill.color} text-white rounded-3xl py-8 shadow-lg hover:scale-105 hover:rotate-1 transition duration-300 cursor-pointer`}
                        >
                            <h2 className="text-2xl font-bold text-center">
                                {skill.name}
                            </h2>
                        </div>
                    ))}

                </div>

                {/* Bottom Quote */}
                <div className="mt-14 text-center">

                    <div className="bg-white/5 border border-gray-700/40 rounded-3xl p-6 shadow-lg">

                        <p className="text-lg italic text-gray-300 leading-relaxed">
                            "Technology and creativity together build endless possibilities."
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;