"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { projectsItems } from "@/data";
import ProjectsSVG from "@/public/svg/Innovation-amico.svg";
import { HiExternalLink } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="bg-slate-900 py-24" id="projects">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-12">
          <h2 className="font-inria text-purple-500 tracking-tighter uppercase" data-aos="fade-down">
            05. SELECTED WORKS
          </h2>
          <h4 className="font-paprika text-3xl text-white" data-aos="fade-down" data-aos-delay="100">
            Digital Creations
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Decorative Illustration */}
          <div className="hidden lg:block lg:w-1/2" data-aos="fade-right">
            <Image
              src={ProjectsSVG}
              alt="Innovation Illustration"
              className="w-full max-w-lg h-auto drop-shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            />
          </div>

          {/* Projects Swiper */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={30}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              modules={[Pagination, Autoplay]}
              className="project-swiper pb-14"
            >
              {projectsItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-slate-950 rounded-3xl overflow-hidden border border-white/10 border-b-8 border-b-purple-600 shadow-2xl"
                >
                  {/* Project Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden group">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h5 className="text-xl font-bold text-white font-poppins">
                        {item.title}
                      </h5>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all shadow-lg"
                      >
                        <HiExternalLink size={20} />
                      </a>
                    </div>

                    {/* Tech Stack Tags - Removed TypeScript annotations */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags?.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;