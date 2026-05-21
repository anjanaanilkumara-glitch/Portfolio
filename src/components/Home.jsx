import React from "react";

export function Home() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 overflow-hidden pt-24 md:pt-0">
      
      {/* LEFT IMAGE CONTAINER */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 min-h-[40vh] md:min-h-screen">
        {/* Aspect-square wrapper ensures a perfect, un-skewed box shape */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-2xl bg-purple-200 group">
          <img
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
            src="/images/Pasted image.png"
            alt="Anjana Profile"
            onError={(e) => {
              // Fallback placeholder if your local image isn't rendering yet
              e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600";
            }}
          />
          {/* Subtle elegant glass overlay on hover */}
          <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
        </div>
      </div>

      {/* RIGHT CONTENT CONTAINER */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white/30 backdrop-blur-xl min-h-[60vh] md:min-h-screen">
        <div className="text-center md:text-left space-y-6 max-w-xl">
          
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black text-purple-700 tracking-wide drop-shadow-sm">
              ANJANA
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-800">
              Computer Engineering Student
            </p>
          </div>

          <div className="inline-block bg-purple-100/80 text-purple-700 font-semibold px-4 py-1.5 rounded-full text-sm md:text-base border border-purple-200">
            💃 Classical Bharatanatyam Dancer & 💻 Web Developer
          </div>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
            Passionate about blending the rhythmic elegance of traditional dance with modern tech innovations to create beautiful, creative web experiences.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200">
              View CV
            </button>

            <a 
              href="#contact" 
              className="border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-full transition text-center shadow-sm duration-200"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;