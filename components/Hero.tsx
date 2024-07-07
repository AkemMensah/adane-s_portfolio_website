import HeroSVG from "@/public/svg/programming-animate.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl overflow-hidden bg-gray-950"
    >
      <div className="relative flex min-h-screen flex-row">
        <div
          className="absolute bottom-0 right-0 top-0 h-full w-2/12 bg-purple-700 lg:w-1/6 "
          data-aos="slide-left"
          data-aos-delay="1200"
        >
          <div className="flex h-full flex-col justify-center md:w-12 max-640:w-12">
            <h1 className=" rotate-90 ml-6 mb-20 md:ml-12 md:text-5xl">
              <span className="text-white mr-0 text-5xl">Akem</span>
              <span className="text-gray-950 text-5xl">Mensah</span>
            </h1>
          </div>
        </div>
        <div className="flex w-10/12 flex-col-reverse items-center justify-center md:flex-row md:items-end max-768:flex-col-reverse max-920:flex-col-reverse max-1024:flex-col-reverse ">
          <div className="px-6 pb-16 pt-15 sm:w-full max-640:ml-4 mt-12 " data-aos="fade-down">
            <h2 className="text-purple-500">Full Stack Developer</h2>
            <br />
            <div className="flex justify-end">
              <a href="#contact">
              <button className="btn border-purple-900 bg-purple-700 text-gray-200 hover:bg-purple-500 max-640:mr-6">
                Hire Me
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
          <div className="heroImage mb-4 mt-16 sm:mt-28 h-96 md:-mb-16 md:h-full max-640:pt-8">
            <Image
              src={HeroSVG}
              alt="Hero"
              className="h-full w-full rounded-xl bg-gray-950 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;