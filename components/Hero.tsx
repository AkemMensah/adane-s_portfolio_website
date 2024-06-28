// import HeroSVG from "@/public/svg/hero.svg";
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
          className="absolute bottom-0 right-0 top-0 h-full w-2/12 bg-purple-700 lg:w-1/6"
          data-aos="slide-left"
          data-aos-delay="1200"
        >
          <div className="flex h-full flex-col justify-center">
            <h1 className="absolute right-[-50%] top-[50%] rotate-90 space-x-4 md:right-0">
              <span className="text-white">Akem</span>
              <span className="text-gray-950">Mensah</span>
            </h1>
          </div>
        </div>
        <div className="flex w-10/12 flex-col-reverse items-center justify-center md:flex-row md:items-end">
          <div className="px-6 pb-16 pt-5" data-aos="fade-down">
            <h2 className="text-purple-500">Full Stack Developer</h2>
            <br />
            <div className="flex justify-end">
              <a href="#contact">
              <button className="btn border-purple-900 bg-purple-700 text-gray-200 hover:bg-purple-500">
                Hire Me
              </button>
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-10">
              <div
                className="flex w-80 items-center gap-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <h3 className="text-gray-100">Experienced In</h3>
                <p className="text-gray-200">What I Do</p>
              </div>
              <div
                className="flex w-80 items-center gap-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <h3 className="text-gray-100">100+</h3>
                <p className="text-gray-200">Projects created</p>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-16 h-96 md:-mb-16 md:h-full">
            <Image
              src={HeroSVG}
              alt="Hero"
              className="h-full rounded-xl bg-gray-950 object-cover"
              // style={{color:"purple"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;