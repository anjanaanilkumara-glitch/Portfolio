import React from "react";

function About() {
    return (  
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 overflow-hidden">
            style={{ 
                backgroundColor: "#27272a", // Dark Zinc Gray background
                minHeight: "100vh",
                color: "#ffffff",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
            }}
        

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-zinc-700 opacity-20 blur-3xl rounded-full animate-pulse" style={{ position: "absolute", borderRadius: "50%", filter: "blur(64px)" }}></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-900 opacity-15 blur-3xl rounded-full animate-pulse" style={{ position: "absolute", borderRadius: "50%", filter: "blur(64px)" }}></div>

            {/* Main Container */}
            <div 
                className="relative z-10 w-full max-w-5xl backdrop-blur-2xl border border-zinc-800/60 rounded-[40px] shadow-2xl p-10 md:p-16"
                style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Translucent overlay
                    backdropFilter: "blur(40px)",
                    border: "1px solid rgba(63, 63, 70, 0.6)",
                    borderRadius: "40px",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: "64rem"
                }}
            >

                {/* Heading */}
                <div className="text-center mb-12" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p className="uppercase tracking-[6px] font-semibold mb-4" style={{ textTransform: "uppercase", letterSpacing: "6px", color: "#a1a1aa", marginBottom: "1rem" }}>
                        Introduction
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold" style={{ fontSize: "3.5rem", fontWeight: 800, margin: 0 }}>
                        About <span style={{ color: "#f87171" }}>Me</span>
                    </h1>

                    <div style={{ width: "8rem", height: "4px", background: "linear-gradient(to right, #52525b, #ef4444)", margin: "1.25rem auto 0", borderRadius: "9999px" }}></div>
                </div>

                {/* About Card */}
                <div 
                    className="border rounded-3xl p-8 shadow-lg transition duration-500 mb-8"
                    style={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.2)", 
                        border: "1px solid rgba(63, 63, 70, 0.5)", 
                        borderRadius: "24px", 
                        padding: "2rem",
                        marginBottom: "2rem"
                    }}
                >
                    <p className="text-lg md:text-xl leading-relaxed text-center" style={{ color: "#d4d4d8", textAlign: "center", lineHeight: 1.625, margin: 0 }}>
                        I am a passionate Bharatanatyam classical dancer who
                        expresses emotions, culture, and storytelling through
                        graceful performances. Dance is not only my talent —
                        it is my identity, creativity, and connection to tradition.
                    </p>
                </div>

                {/* Journey Section */}
                <div 
                    className="border rounded-3xl p-8 shadow-lg transition duration-500"
                    style={{ 
                        backgroundColor: "rgba(0, 0, 0, 0.2)", 
                        border: "1px solid rgba(63, 63, 70, 0.5)", 
                        borderRadius: "24px", 
                        padding: "2rem"
                    }}
                >
                    <h2 className="text-3xl font-bold mb-5" style={{ fontSize: "1.875rem", fontWeight: 700, marginTop: 0, marginBottom: "1.25rem" }}>
                        My Journey
                    </h2>

                    <p style={{ color: "#d4d4d8", lineHeight: 1.625, marginBottom: "1rem" }}>
                        Along with dance, I am pursuing a Diploma in Computer Engineering and exploring programming, web development, and creative technology.
                    </p>

                    <p style={{ color: "#d4d4d8", lineHeight: 1.625, margin: 0 }}>
                        I believe in blending artistic expression with modern innovation,
                        creating a balance between culture and technology while continuously learning and growing.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default About;