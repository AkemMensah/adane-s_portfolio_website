import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-hero-pattern inset-0 bg-cover bg-center bg-fixed relative h-screen w-full  mx-auto max-w-7xl overflow-hidden">
      
      <div className="relative flex min-h-screen flex-row">
        <div
          className="absolute bottom-0 right-0 top-0 h-full w-2/12 bg-purple-700 lg:w-1/6 "
          data-aos="slide-left"
          data-aos-delay="1200"
        >
          <div className="flex relative h-full flex-col justify-center md:w-12 max-640:w-12">
            <h1 className=" ml-6  rotate-90  mb-20 md:ml-12 md:text-5xl">
              <span className="text-white mr-0 text-5xl">Akem</span>
              <span className="text-gray-950 text-5xl">Mensah</span>
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-70"></div>

        
      </div>
      <div className="absolute bottom-0 flex w-10/12 h-screen flex-col-reverse items-center justify-center md:flex-row md:items-end max-768:flex-col-reverse max-920:flex-col-reverse max-1024:flex-col-reverse ">
          <div className=" relative px-6 pb-16 pt-15 sm:w-full max-640:ml-4 mt-12 " data-aos="fade-down">
            <h3 className="text-purple-500 mt-[-10]">Full Stack Developer</h3>
            <br />
            <div className="flex justify-end absolute left-60 bottom-4 max-640:left-10 max-640:bottom-0">
              <a href="https://drive.google.com/file/d/1CBiWVBAErG9nTADw0bnH_vZZWu4EOL7J/view?usp=sharing">

              <button className="btn text-2xl bg-purple-700 text-gray-200 px-0 hover:bg-purple-900 max-640:ml-4 max-640:text-lg">
                See Resume
              </button>
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-10">
              <div
                className="flex justify-around w-80 items-center gap-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <h3 className="text-gray-100">Experienced In</h3> 
                <h5 className="text-purple-400">What I Do</h5>
              </div>
              <div
                className="flex w-80 items-center gap-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <h3 className="text-gray-100">40+</h3>
                <p className="text-gray-200">Projects created</p>
              </div>
            </div>
          </div>
          
        </div>
    </section>
  );
};

export default Hero;