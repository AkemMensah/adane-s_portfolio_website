import Image from "next/image";
import { skillsItems } from "@/data";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Html from "@/public/svg/code.png";
import backend from "@/public/img/backend.png";

const Skills = () => {
  return (
    <section className="min-h-fit bg-gray-800" id="skills">
      {/*   relative md:container bg-red-950  */}
      <div className=" flex flex-col px-8 py-14 w-full ">
        <h2 className="title text-purple-500" data-aos="fade-down">
          Skills & Competencies
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          MY TOP SKILLS
        </h4>
        <br />

        <div className="flex flex-wrap justify-center  w-full gap-4">
          <div className="flex flex-wrap flex-1 justify-center gap-4 w-2/5">
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
            className="group flex-wrap max-w-44 sm:-ml-10 max-640:ml-14 max-640:mt-12 items-center gap-5 rounded-md border-4 border-black bg-purple-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer"
            data-aos="fade-left"
            data-aos-delay={1 * 400}
          >
            {/* <div className="absolute right-2 top-0 text-xl  text-purple-500">
                  <HiOutlineArrowUpRight size={25} />
                </div> */}
            <div className="flex items-center justify-center">
              <Image
                src={backend}
                alt="symbol"
                className="w-16 duration-200 group-hover:scale-125"
                sizes={25}/>

              </div>
              <div className="list">
                <h3 className="text-gray-100 text-center">More Skills</h3>
                <li className="italic text-gray-300">React Native</li>
                <li className="italic text-gray-300">ExpressJs</li>
                <li className="italic text-gray-300">NodeJs</li>
                <li className="italic text-gray-300">TypeScript</li>
                <li className="italic text-gray-300">JQuery</li>
                <li className="italic text-gray-300">Figma(UX/UI design)</li>
                <li className="italic text-gray-300">Data Bases (SQL,NoSql), <br/>MySql,MongoDB, PostgreSQL, etc.</li>
                <li className="italic text-gray-300">Unit Testing</li>
                <li className="italic text-gray-300">Docker & Kuberante</li>

                <li className="italic text-gray-300">C/C++</li>
                <li className="italic text-gray-300">Networking</li>
                <li className="italic text-gray-300">Puppet</li>
                <li className="italic text-gray-300">Computer Networking</li>
                <li className="italic text-gray-300">...etc.</li>

              </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default Skills;
