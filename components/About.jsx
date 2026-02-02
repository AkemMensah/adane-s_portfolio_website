"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Akem from "@/public/img/Akem.jpg";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  return (
    <section className="bg-slate-950 pb-20 pt-16" id="about">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-12">
          <h2 className="font-inria text-purple-500 tracking-tighter" data-aos="fade-right">
            01. ABOUT ME
          </h2>
          <div className="flex items-baseline gap-4" data-aos="fade-right" data-aos-delay="200">
            <h4 className="font-paprika text-3xl text-white">Emmanuel Adane</h4>
            <span className="text-purple-400/60 font-mono text-sm">@AkemMensah</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image with Decorative Border */}
          <div className="relative group" data-aos="zoom-in">
            <div className="absolute -inset-2 bg-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <Image
              src={Akem}
              alt="Emmanuel Adane Portfolio Headshot"
              priority
              className="relative w-full max-w-[320px] md:max-w-[400px] rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover shadow-2xl"
            />
          </div>

          {/* About Content Swiper */}
          <div className="w-full max-w-2xl" data-aos="fade-left">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              modules={[Pagination, Autoplay]}
              className="about-swiper rounded-3xl pb-12"
            >
              {/* Slide 1: Professional Bio */}
              <SwiperSlide className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 border-b-4 border-b-purple-600 min-h-[400px]">
                <h3 className="text-white font-poppins mb-4 text-2xl font-bold">The Persona</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  I am a versatile Full Stack Software Engineer driven by the challenge of turning complex problems into elegant, scalable digital solutions. With a core foundation in <span className="text-purple-400">React, Node.js, and Python</span>, I bridge the gap between robust backend architecture and seamless user experiences.
                  <br /><br />
                  I don&apos;t just write code; I build tools that solve real-world problems. Whether collaborating in agile teams or leading a solo sprint, I stay committed to clean architecture and innovative thinking.
                </p>
              </SwiperSlide>

              {/* Slide 2: Certifications */}
              <SwiperSlide className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 border-b-4 border-b-purple-600 min-h-[400px]">
                <h3 className="text-white font-poppins mb-6 text-2xl font-bold">Growth & Credentials</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                    <div>
                      <p className="font-bold text-gray-200">ALX Software Engineering</p>
                      <p className="text-sm text-gray-500">FullStack Specialization (Backend focus) • May 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                    <div>
                      <p className="font-bold text-gray-200">Meta Professional Certifications</p>
                      <p className="text-sm text-gray-500">Frontend Development & UX/UI Design • Nov 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2" />
                    <div>
                      <p className="font-bold text-gray-200">IBM SkillBuild</p>
                      <p className="text-sm text-gray-500">Cloud Computing Fundamentals • Nov 2025</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3: Philosophy */}
              <SwiperSlide className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 border-b-4 border-b-purple-600 min-h-[400px]">
                <h3 className="text-white font-poppins mb-4 text-2xl font-bold">My Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg italic">
                  "Technology is a rapidly evolving landscape, and I make it my mission to never stop being a student of the craft."
                </p>
                <p className="text-gray-400 leading-relaxed text-lg mt-4">
                  My goal is to contribute to impactful projects that push the boundaries of what&apos;s possible on the web. I&apos;m currently looking for opportunities to collaborate with forward-thinking teams where I can apply my expertise in modern stacks to create value-driven software.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;