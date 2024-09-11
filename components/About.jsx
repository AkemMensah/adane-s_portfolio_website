"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Akem from "@/public/img/Akem.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="bg-gray-900 pb-4" id="projects">
      <div className=" px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
        <div>
          <h2 className="title text-purple-500" data-aos="fade-down">
            ABOUT ME
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            <span className="text-white">Emmanuel Adane </span><br />
            <span className="text-sm text-white">(AkemMensah)</span>
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse max-1024:flex-col max-1024:gap-10 gap-4">
          <Image
            src={Akem}
            alt="MyImage"
            data-aos="fade-left"
            className="max-w-[35vw] min-w-[22rem]  rounded-3xl text-purple-800"
          />
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-md max-640:w-5/6 shadow-lg shadow-purple-700 self-start "
          >
              <SwiperSlide
                className=" rounded-3xl p-5 border-b-8 border-purple-800 h-fit"
              >
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className="font-bold font-Poppins text-gray-100">
                    Curious,Adaptable & Resilient
                  </h4>
                  <p className=" text-gray-500 text-lg">
                  I am a versatile Full Stack Software Engineer with a strong foundation in mathematics and economics. My adaptability, curiosity, and resilience drive me to tackle complex problems and continuously expand my knowledge. Proficient in JavaScript, React, Node.js, and various databases, I excel in developing and optimizing web applications. My background in mathematics and economics enhances my analytical and problem-solving skills, enabling me to deliver efficient and scalable solutions. I thrive in agile team environments, consistently collaborating to achieve project goals. Committed to innovation and excellence, I am dedicated to advancing my expertise and contributing to impactful software development projects.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className=" rounded-3xl p-5 border-b-8 border-purple-800 h-fit"
              >
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className=" font-Poppins text-gray-100">
                    Certification & Training
                  </h4>
                  <ul className="text-lg text-gray-500 text-center">
                    <li>
                        <span className="font-bold text-gray-500">African Leadership X (ALX)</span> <br />
                        <span className="text-gray-500">FullStack software Engineering with specialization in the backend</span><br />
                        <span className="text-gray-500">February 2023 - May 2024</span>
                    </li>
                    <li>
                        <span className="font-bold text-gray-500">Cousera Meta Software Developer</span><br />
                        <span className="text-gray-500">Meta Frontend Developer and UX/UI Designer </span><br />
                        <span className="text-gray-500">February 2023 - Nov 30, 2023</span>
                    </li>
                    <li>
                        <span className="font-bold text-gray-500">African Leadership X (ALX)</span><br />
                        <span className="text-gray-500">ALX AiCE - AI Career Essentials</span><br />
                        <span className="text-gray-500">July 8, 2024 - August 28,2024</span>
                    </li>

                  </ul>
                  {/* <br className="border border-black" /> */}
                  <p className="text-lg text-gray-500">As a dedicated software developer, I thrive in the fast-paced tech world, continuously enhancing my skills and staying current with industry trends. My passion for learning drives me to explore new technologies, enabling me to deliver innovative solutions and contribute effectively to dynamic development teams.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className=" rounded-3xl p-5 border-b-8 border-purple-800 h-fit"
              >
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className="font-bold font-Poppins text-gray-100">
                    Experience
                  </h4>
                  <p className=" text-gray-500 text-lg ">
                  As a recent software engineering graduate, I am eager to apply my academic knowledge and technical skills in an entry-level role or internship. My passion for technology drives me to continuously learn and adapt in a rapidly evolving industry. I am committed to building strong foundations in software development, contributing effectively to projects, and collaborating with experienced professionals. With a solid grounding in programming, problem-solving, and software design, I am ready to take on challenges and grow within a dynamic team. My goal is to gain hands-on experience and make meaningful contributions to impactful projects, fostering both personal and professional growth. I aim to leverage my enthusiasm and adaptability to contribute to innovative solutions and become a valuable team member.
                  </p>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
