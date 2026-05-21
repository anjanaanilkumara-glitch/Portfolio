import React from "react";

function About() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-green-100 px-6 py-14">

            {/* Background Effects (UNCHANGED) */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-5xl bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
                        Introduction
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                        About <span className="text-green-600">Me</span>
                    </h1>

                    <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-green-400 mx-auto mt-5 rounded-full"></div>
                </div>

                {/* About Card */}
                <div className="bg-white/70 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 mb-8">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                        I am a passionate Bharatanatyam classical dancer who
                        expresses emotions, culture, and storytelling through
                        graceful performances. Dance is not only my talent —
                        it is my identity, creativity, and connection to tradition.
                    </p>
                </div>

                {/* Journey Section */}
                <div className="bg-gradient-to-r from-green-50 to-pink-50 border border-green-100 rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition duration-500">
                    <h2 className="text-3xl font-bold text-green-700 mb-5">
                        My Journey
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Along with dance, I am pursuing a Diploma in Computer Engineering and exploring programming, web development, and creative technology.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        I believe in blending artistic expression with modern innovation, creating a balance between culture and technology while continuously learning and growing.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default About;