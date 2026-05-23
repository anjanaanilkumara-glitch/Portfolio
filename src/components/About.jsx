import React from "react";

function About() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 py-14">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-5xl bg-gray-900/70 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[6px] text-pink-400 font-semibold mb-4">
                        Introduction
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        About <span className="text-green-400">Me</span>
                    </h1>

                    <div style={{ width: "8rem", height: "4px", background: "linear-gradient(to right, #52525b, #ef4444)", margin: "1.25rem auto 0", borderRadius: "9999px" }}></div>
                </div>

                {/* About Card */}
                <div className="bg-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 mb-8 border border-white/10">
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center">
                        I am a passionate Bharatanatyam classical dancer who
                        expresses emotions, culture, and storytelling through
                        graceful performances. Dance is not only my talent —
                        it is my identity, creativity, and connection to tradition.
                    </p>
                </div>

                {/* Journey Section */}
                <div className="bg-gradient-to-r from-green-900/30 to-pink-900/30 border border-green-400/20 rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition duration-500">
                    <h2 className="text-3xl font-bold text-green-400 mb-5">
                        My Journey
                    </h2>

                    <p className="text-gray-200 text-lg leading-relaxed mb-4">
                        Along with dance, I am pursuing a Diploma in Computer Engineering and exploring programming, web development, and creative technology.
                    </p>

                    <p className="text-gray-200 text-lg leading-relaxed">
                        I believe in blending artistic expression with modern innovation, creating a balance between culture and technology while continuously learning and growing.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default About;