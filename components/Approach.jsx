// "use client";
import Image from "next/image";
import { approachItems } from "@/data";
// import Plan from "../public/svg/agile method-amico.svg";

const Approach = () => {
  return (
    <section id="services">
      <div className=" px-5 py-14 bg-gray-700">
        <h2 className="title text-purple-800" data-aos="fade-down">
          My <span>Approach</span>
        </h2>
        
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {approachItems.map((item, index) => (
            
            <div
              key={index}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-purple-500 rounded-xl text-center bg-slate-900 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={index * 500}
            >
            <div className="w-full flex justify-center mb-8">
              <Image src={item.image} alt="approach" className="w-44 duration-200 group-hover:scale-125" />
              </div>
              <h5 className="subtitle text-purple-800" data-aos="fade-right" >
                    {item.title}
              </h5>
              <p className="leading-7 text-gray-500">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
