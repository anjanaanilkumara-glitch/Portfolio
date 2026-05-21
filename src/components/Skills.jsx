import React from "react";

function Skills() {
    const skills = [
        { name: "C", color: "from-purple-500 to-purple-700" },
        { name: "Python", color: "from-pink-500 to-pink-700" },
        { name: "HTML", color: "from-blue-500 to-blue-700" },
        { name: "CSS", color: "from-green-500 to-green-700" },
       
    
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-6 py-14">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
                        My Expertise
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                        Technical <span className="text-purple-600">Skills</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-5 rounded-full"></div>

                </div>

                {/* Description */}
                <div className="bg-white/70 rounded-3xl p-8 shadow-lg mb-12 text-center hover:shadow-2xl transition duration-500">

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
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

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-white/50 rounded-3xl p-6 shadow-lg">

                        <p className="text-lg italic text-gray-700 leading-relaxed">
                            "Technology and creativity together build endless possibilities."
                        </p>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;