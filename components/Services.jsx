"use client";
import Image from "next/image";
import { servicesItems } from "@/data";

const Services = () => {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-16">
          <h2 className="font-inria text-purple-500 tracking-tighter" data-aos="fade-right">
            03. SERVICES
          </h2>
          <h4 className="font-paprika text-3xl text-white uppercase tracking-wide" data-aos="fade-right" data-aos-delay="200">
            Solutions I Provide
          </h4>
        </div>

        {/* The 'group' is placed here to trigger the blur effect on siblings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {servicesItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-500 cursor-pointer 
                         border border-white/10 rounded-2xl bg-slate-900/40 p-8 
                         flex flex-col items-center text-center
                         group-hover:blur-[2px] hover:!blur-none hover:!scale-[1.02] 
                         hover:border-purple-500/50 hover:bg-slate-800/60"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Faster delay for better UX
            >
              {/* Decorative background glow on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl group-hover:bg-purple-600/20 transition-colors" />

              <div className="mb-6 p-4 rounded-2xl bg-slate-950 shadow-inner border border-white/5">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>

              <h6 className="text-xl font-bold text-gray-100 mb-4 font-poppins">
                {item.title}
              </h6>

              <p className="leading-relaxed text-gray-400 text-sm md:text-base">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;