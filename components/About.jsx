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
            <span className="text-white">Emmanuel Adane </span>
            <br />
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
                  <h4 className="font-bold font-Poppins text-gray-100 text-center">
                    Curious, Adaptable & Resilient
                  </h4>
                  <p className=" text-gray-500 text-lg">
                  I am a versatile Full Stack Software Engineer with a passion for tackling complex problems and continuously expanding my knowledge. Proficient in JavaScript, React, Node.js, Python, Django, and various databases, I excel in developing and optimizing web applications. My analytical mindset and problem-solving skills enable me to deliver efficient and scalable solutions. I thrive in agile team environments, consistently collaborating to achieve project goals. Committed to innovation and excellence, I am dedicated to advancing my expertise and contributing to impactful software development projects. I actively embrace emerging technologies and best practices to ensure the creation of modern, user-focused applications. With a drive for continuous improvement, I aim to not only build robust software but also contribute to shaping processes that enhance team productivity and project success.                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className=" rounded-3xl p-5 border-b-8 border-purple-800 h-fit"
              >
                <div className="flex flex-col gap-1 mt-2">
                <h4 className=" font-Poppins text-gray-300">
                  Certification & Training
                </h4>
                <ul className="text-lg text-gray-400 text-center">
                  <li>
                    <span className="font-bold text-gray-300">
                      African Leadership X (ALX)
                    </span>{" "}
                    <br />
                    <span className="text-gray-500">
                      FullStack software Engineering with specialization in the
                      backend
                    </span>
                    <br />
                    <span className="text-gray-500">
                       May 2024
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-300">
                      Cousera Meta Software Developer
                    </span>
                    <br />
                    <span className="text-gray-400">
                      Meta Frontend Developer and UX/UI Designer{" "}
                    </span>
                    <br />
                    <span className="text-gray-500">
                       Nov 30, 2023
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-300">
                      African Leadership X (ALX)
                    </span>
                    <br />
                    <span className="text-gray-400">
                      ALX AiCE - AI Career Essentials
                    </span>
                    <br />
                    <span className="text-gray-500">
                       August 28,2024
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-300">
                      ITExperience IBM SkillBuild
                    </span>
                    <br />
                    <span className="text-gray-400">IBM Cloud Computing</span>
                    <br />
                    <span className="text-gray-500">September 2024 </span>
                  </li>
                  <li>
                    <span className="font-bold text-gray-300">
                     Ideation Axis 
                    </span>
                    <br />
                    <span className="text-gray-400">Backend Development Intern</span>
                    <br />
                    <span className="text-gray-500"> Nov.30, 2024 </span>
                  </li>
                </ul>
                {/* <br className="border border-black" /> */}
                <p className="text-lg text-gray-500">
                  I am a dedicated software developer passionate about learning
                  and delivering innovative solutions while staying current with
                  industry trends.
                </p>
              </div>
              </SwiperSlide>
              <SwiperSlide
                className=" rounded-3xl p-5 border-b-8 border-purple-800 h-fit"
              >
                 <div className="flex flex-col gap-1 mt-2">
                <h4 className="font-bold font-Poppins text-gray-100">
                  Skilss & Competencies
                </h4>
                <p className=" text-gray-500 text-lg ">
                With my experience in the industry, I am eager to apply my technical skills and knowledge in a role where I can contribute to impactful projects and collaborate with experienced professionals. Driven by a passion for technology, I continuously learn and adapt in the rapidly evolving industry. With a solid foundation in programming, problem-solving, and software design, I am ready to take on challenges and grow within a dynamic team. My goal is to gain hands-on experience, contribute to innovative solutions, and become a valuable team member while fostering personal and professional growth. I am particularly motivated by opportunities that allow me to tackle real-world problems through creative and efficient solutions. Ultimately, I aim to build a career that combines continuous learning with meaningful contributions to the success of both my team and organization.
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
