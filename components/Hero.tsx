const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full mx-auto overflow-hidden bg-hero-pattern bg-cover bg-center bg-fixed"
    >
      {/* 1. Background Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      <div className="relative flex h-full w-full max-w-7xl mx-auto">
        
        {/* 2. Left Side: Content Area */}
        <div 
          className="flex flex-col justify-center w-full md:w-10/12 px-6 lg:px-12 z-10"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="space-y-2">
            <h3 className="font-paprika text-purple-400 tracking-wider">
              Full Stack Developer
            </h3>
            <h2 className="text-white max-w-2xl">
              Building digital experiences that scale.
            </h2>
          </div>

          {/* Stats / Focus area */}
          <div className="mt-12 space-y-8">
            <div 
              className="flex items-center gap-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="h-[2px] w-12 bg-purple-500" />
              <p className="text-gray-300 uppercase tracking-widest text-sm font-bold">
                Committed To <span className="text-purple-400 ml-2">Quality</span>
              </p>
            </div>

            <div 
              className="flex items-center gap-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-white">40+</span>
                <span className="text-gray-400 text-sm italic">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12" data-aos="zoom-in" data-aos-delay="800">
            <a 
              href="https://docs.google.com/document/d/1_dPwEacvtiGNDBD92EWEoH-nT3IeLqDz/edit?usp=sharing&ouid=103475265721559371163&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-purple-700 text-white border-purple-700 hover:bg-transparent hover:text-purple-400 transition-all duration-300 text-lg px-12 py-4">
                View My Resume
              </button>
            </a>
          </div>
        </div>

        {/* 3. Right Side: Vertical Name Panel */}
        <div
          className="absolute bottom-0 right-0 top-0 hidden md:flex w-2/12 lg:w-1/6 bg-purple-700 items-center justify-center z-20 shadow-2xl"
          data-aos="slide-left"
          data-aos-delay="1000"
        >
          <h1 className="whitespace-nowrap -rotate-90 flex gap-4 uppercase tracking-[0.2em]">
            <span className="text-white font-inria">Akem</span>
            <span className="text-black/40 font-inria">Mensah</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;