import React from "react";

function Project() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-6 py-14">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-5xl bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
                        Featured Work
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                        My <span className="text-purple-600">Project</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mt-5 rounded-full"></div>

                </div>

                {/* Project Card */}
                <div className="bg-white/70 rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition duration-500">

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-4xl shadow-lg">
                            🏥
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-6">
                        Doctor Appointment Booking App
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
                        A healthcare management application that allows patients
                        to book appointments with doctors online quickly and conveniently.
                        Users can search doctors by specialization, view available schedules,
                        book appointments, and receive confirmations easily.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed text-center">
                        The system also helps doctors manage schedules, appointment requests,
                        and patient information efficiently, creating a smooth healthcare
                        experience for both doctors and patients.
                    </p>

                </div>

                {/* Bottom Quote */}
                <div className="mt-14 text-center">

                    <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-white/50 rounded-3xl p-6 shadow-lg">

                        <p className="text-lg italic text-gray-700 leading-relaxed">
                            "Creating technology that improves people's lives inspires me to learn and build more."
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Project;