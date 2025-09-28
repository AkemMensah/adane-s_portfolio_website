// "use client";
import Image from "next/image";
import { servicesItems } from "@/data";

const Services = () => {
  return (
    <section id="services">
      <div className=" w-full px-5 py-14 bg-slate-900">
        <h2 className="title text-purple-800" data-aos="fade-down">
          Services
        </h2>
        <h4 className="subtitle text-gray-50" data-aos="fade-down">
          WHAT I DO
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group ">
          {servicesItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[14rem] max-920:min-w-[20rem] max-1024:min-w-[20rem] duration-300 cursor-pointer border-2 border-black rounded-xl text-center bg-gray-600 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={index * 500}
            >
              <Image src={item.logo} alt={item.title} className="mx-auto" />
              <h6 className="my-3 text-gray-50" data-aos="fade-down">{item.title}</h6>
              <p className="leading-7 text-gray-200" >{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
