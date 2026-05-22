import React from "react";

export function Home() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 overflow-hidden">

      {/* LEFT IMAGE CONTAINER */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 min-h-screen">

        {/* Image Box */}
        <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-[40px] overflow-hidden shadow-2xl bg-gray-800 group border border-gray-700">

          <img
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
            src="/images/anjana.png"
            alt="Anjana Profile"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600";
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white/5 backdrop-blur-xl min-h-screen">

        <div className="text-center md:text-left space-y-8 max-w-xl">

          {/* Heading */}
          <div className="space-y-3">

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-wide drop-shadow-lg">
              ANJANA
            </h1>

            <p className="text-xl md:text-3xl font-bold text-gray-300">
              Computer Engineering Student
            </p>

          </div>

          {/* Tag */}
          <div className="inline-block bg-gray-800/80 text-red-400 font-semibold px-5 py-2 rounded-full text-sm md:text-base border border-gray-700 shadow-lg">
           💻 Web Developer
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-base md:text-lg font-medium">
            Passionate about blending the rhythmic elegance of traditional
            dance with modern tech innovations to create beautiful,
            creative web experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">

            {/* CV Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transform duration-300">
              View CV
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold px-8 py-3 rounded-full transition text-center shadow-md hover:-translate-y-1 duration-300"
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