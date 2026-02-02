"use client";
import Image from "next/image";
import { approachItems } from "@/data";

const Approach = () => {
  return (
    <section id="approach" className="bg-slate-950 py-24 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-inria text-purple-500 tracking-tighter uppercase" data-aos="fade-right">
            04. MY PROCESS
          </h2>
          <h4 className="font-paprika text-3xl md:text-4xl text-white mt-2" data-aos="fade-right" data-aos-delay="200">
            How I Bring <span className="text-purple-500">Ideas to Life</span>
          </h4>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className="relative group/card overflow-hidden transition-all duration-500 
                         border border-white/10 rounded-3xl bg-slate-900/30 p-8 
                         hover:border-purple-500/50 hover:bg-slate-900/60
                         group-hover:blur-[1px] hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Step Number Indicator */}
              <div className="absolute top-6 right-8 font-mono text-5xl font-black text-white/5 group-hover/card:text-purple-500/10 transition-colors">
                0{index + 1}
              </div>

              {/* Illustration Container */}
              <div className="flex justify-center mb-8 relative">
                {/* Subtle glow behind image */}
                <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full scale-0 group-hover/card:scale-100 transition-transform duration-700" />
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-48 h-48 object-contain relative z-10 duration-500 group-hover/card:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left">
                <h5 className="font-poppins text-xl font-bold text-purple-400 mb-4 uppercase tracking-wide">
                  {item.title}
                </h5>
                <p className="leading-relaxed text-gray-400 font-poppins">
                  {item.des}
                </p>
              </div>

              {/* Decorative side accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-purple-500 transition-all duration-500 group-hover/card:h-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;