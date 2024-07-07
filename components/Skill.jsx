import Image from "next/image";
import { skillsItems } from "@/data";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Html from "@/public/svg/code.png";


const Skills = () => {
  return (
    <section className="min-h-fit bg-gray-800" id="skills">
      <div className="px-5 py-14 md:container relative ">
        <h2 className="title text-purple-500" data-aos="fade-down">
          Skills
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          MY TOP SKILLS
        </h4>
        <br />

        <div className="flex flex-wrap ">
        <div className="flex flex-wrap flex-1 justify-center gap-4 w-8/12">
          {skillsItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex w-9/12 max-w-sm items-center gap-5 rounded-md border-2 border-purple-700 bg-gray-950 p-5 duration-200 hover:border-pink-500 sm:cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 400}
            >
              <div>
                <Image
                  src={item.logo}
                  alt={item.name}
                  className="w-10 duration-200 group-hover:scale-125"
                />
              </div>
              <div>
                <h6 className="text-gray-100">{item.name}</h6>
                <p className="italic text-gray-300">{item.description}</p>
                <div className="absolute right-3 top-3 text-xl text-purple-500">
                  <HiOutlineArrowUpRight size={25} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
              className="group flex-wrap max-w-sm sm:-ml-10 max-640:ml-14 max-640:mt-12 items-center gap-5 rounded-md border-4 border-black bg-purple-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer"
              data-aos="fade-left"
              data-aos-delay={1 * 400}
            >
              <div>
                <Image
                  src={Html}
                  alt={Html}
                  className="w-10 duration-200 group-hover:scale-125"
                />
              </div>
              <div className="relative ">
                <h3 className="text-gray-100">BackEnd</h3>
                <li className="italic text-gray-300">Data Structures</li>
                <li className="italic text-gray-300">C/C++</li>
                <li className="italic text-gray-300">Data Bases (SQL)</li>
                <li className="italic text-gray-300">Networking</li>
                <div className="absolute right-3 -top-1 text-xl  text-purple-500">
                  <HiOutlineArrowUpRight size={25} />
                </div>
              </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default Skills;
