import React from "react";

function Contact() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 py-14">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md bg-gray-900/70 backdrop-blur-2xl border border-white/10 rounded-[35px] shadow-2xl p-10 text-center">

                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-red-400 mb-8">
                    Contact Me
                </h2>

                <p className="text-gray-300 mb-10">
                    Feel free to reach out for collaboration, projects, or just a friendly hello ✨
                </p>

                {/* Contact Info Card */}
                <div className="space-y-6">

                    {/* Email */}
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
                        <p className="text-lg text-gray-300">📧 Email</p>
                        <p className="font-semibold text-purple-300 break-all">
                            anjanaanilkumara@gmail.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
                        <p className="text-lg text-gray-300">📞 Phone</p>
                        <p className="font-semibold text-purple-300">
                            7736225227
                        </p>
                    </div>

                    {/* Location (NEW) */}
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
                        <p className="text-lg text-gray-300">📍 Location</p>
                        <p className="font-semibold text-purple-300">
                            Thiruvananthapuram, Kerala, India
                        </p>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="mt-10 text-sm text-gray-400">
                    I usually respond within 24 hours ✨
                </div>

            </div>

        </section>
    );
}

export default Contact;