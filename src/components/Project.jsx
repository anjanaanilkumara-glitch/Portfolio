import React from "react";

function Project() {
    return (
    
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 overflow-hidden"> 

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-gray-700 opacity-30 blur-3xl rounded-full animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-gray-700/40 rounded-[40px] shadow-2xl p-10 md:p-16">

                {/* Heading */}
                <div className="text-center mb-12">

                    <p className="uppercase tracking-[6px] text-gray-400 font-semibold mb-4">
                        Featured Work
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        My <span className="text-red-400">Project</span>
                    </h1>

                    <div className="w-36 h-1 bg-gradient-to-r from-gray-600 to-red-500 mx-auto mt-5 rounded-full"></div>

                </div>

                {/* Project Card */}
                <div className="bg-white/10 rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition duration-500 border border-gray-700/40">

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-700 to-red-500 flex items-center justify-center text-4xl shadow-lg">
                            🏥
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
                        Doctor Appointment Booking App
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                        A healthcare management application that allows patients
                        to book appointments with doctors online quickly and conveniently.
                        Users can search doctors by specialization, view available schedules,
                        book appointments, and receive confirmations easily.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                        The system also helps doctors manage schedules, appointment requests,
                        and patient information efficiently, creating a smooth healthcare
                        experience for both doctors and patients.
                    </p>

                </div>

                {/* Bottom Quote */}
                <div className="mt-14 text-center">

                    <div className="bg-white/5 border border-gray-700/40 rounded-3xl p-6 shadow-lg">

                        <p className="text-lg italic text-gray-300 leading-relaxed">
                            "Creating technology that improves people's lives inspires me to learn and build more."
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Project;