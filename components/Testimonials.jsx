"use client";
import Image from "next/image";
import { testimonialsItems } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="bg-slate-950 py-24 border-t border-white/5" id="testimonials">
      <div className="container mx-auto px-6 lg:px-20">

        <div className="mb-12 text-center">
          <h2 className="font-inria text-purple-500 tracking-tighter uppercase" data-aos="fade-down">
            06. TESTIMONIALS
          </h2>
          <h4 className="font-paprika text-3xl text-white mt-2" data-aos="fade-down" data-aos-delay="100">
            What People Say
          </h4>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Swiper
            direction={"vertical"}
            pagination={{ clickable: true }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1.5}
            modules={[Pagination, Autoplay]}
            className="h-[550px] md:h-[400px]" // Increased height to prevent clipping
          >
            {testimonialsItems.map((item, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center transition-all duration-500">
                {/* We use the 'swiper-slide-active' class provided by Swiper 
                  to handle the scale and blur via CSS in your globals.css 
                  OR we can use the 'render function' approach below:
                */}
                {({ isActive }) => (
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 rounded-3xl border border-white/10 p-8 md:p-10 transition-all duration-700
                      ${isActive
                        ? "bg-slate-900 shadow-2xl opacity-100 scale-100 border-purple-500/50"
                        : "bg-slate-900/40 opacity-30 scale-90 blur-[2px]"
                      }`}
                  >
                    <div className="relative flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="relative h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border-2 border-purple-500"
                      />
                    </div>

                    <div className="text-center md:text-left">
                      <FaQuoteLeft className="text-purple-500/40 text-2xl mb-4 mx-auto md:mx-0" />
                      <p className="text-gray-300 italic leading-relaxed font-poppins">
                        {item.review}
                      </p>
                      <div className="mt-4">
                        <h6 className="text-white font-bold">{item.name}</h6>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;