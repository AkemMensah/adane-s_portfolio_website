"use client";
import Image from "next/image";
import { skillsItems } from "@/data";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import backend from "@/public/img/backend.png";

const Skills = () => {
  const otherSkills = [
    "React Native", "C/C++", "NodeJs", "ExpressJs", "TypeScript",
    "Docker", "Unit Testing", "JQuery", "Figma", "SQL", "MongoDB",
    "PostgreSQL", "Cloud Computing"
  ];

  return (
    <section className="bg-slate-900 py-20" id="skills">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-12">
          <h2 className="font-inria text-purple-500 tracking-tighter" data-aos="fade-down">
            02. SKILLS
          </h2>
          <h4 className="font-paprika text-3xl text-white" data-aos="fade-down" data-aos-delay="100">
            Tech Stack & Competencies
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Skills Grid (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsItems.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-950 p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] sm:cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0 bg-slate-900 p-3 rounded-xl group-hover:bg-purple-900/20 transition-colors">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                <div>
                  <h6 className="text-gray-100 font-bold">{item.name}</h6>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">
                    {item.description}
                  </p>
                </div>

                <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500">
                  <HiOutlineArrowUpRight size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* "More Competencies" Sidebar */}
          <div
            className="bg-slate-950 border border-purple-500/30 rounded-3xl p-8 h-full"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-600/20 p-2 rounded-lg">
                <Image src={backend} alt="backend" width={32} height={32} />
              </div>
              <h4 className="text-xl font-bold text-white font-poppins">Technical Breadth</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium border border-white/10 bg-white/5 text-gray-300 rounded-full hover:border-purple-500 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
              <span className="text-purple-500 animate-pulse">...</span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-500 italic leading-relaxed">
                Regularly exploring new tools like Docker and Cloud Architecture to build more resilient systems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;