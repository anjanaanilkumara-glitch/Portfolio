import React from "react";

function Skills() {
    const skills = [
        { name: "C", color: "from-gray-800 to-gray-900" },
        { name: "Python", color: "from-gray-700 to-gray-800" },
        { name: "HTML", color: "from-orange-700 to-red-800" },
        { name: "CSS", color: "from-blue-800 to-blue-900" },
    ];

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-14 bg-black">

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="uppercase tracking-[6px] text-gray-400 font-semibold mb-4">
                        My Expertise
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        Technical <span className="text-red-400">Skills</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-gray-700 to-red-600 mx-auto mt-5 rounded-full"></div>

                </div>

                {/* Description */}
                <div className="border border-white/10 rounded-3xl p-8 shadow-lg mb-12 text-center">

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        I enjoy learning modern technologies and continuously improving my programming and web development skills. I love building creative and responsive websites.
                    </p>

                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-r ${skill.color} text-white rounded-3xl py-8 shadow-lg hover:scale-105 transition duration-300 cursor-pointer border border-white/10`}
                        >
                            <h2 className="text-2xl font-bold text-center">
                                {skill.name}
                            </h2>
                        </div>
                    ))}

                </div>

                {/* Bottom Quote */}
                <div className="mt-14 text-center">

                    <div className="border border-white/10 rounded-3xl p-6 shadow-lg">

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