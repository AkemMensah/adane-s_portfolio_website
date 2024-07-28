import Image from "next/image";
import ConactSVG from "../public/svg/contact.svg";
const Contact = () => {
  return (
    <section className="bg-gray-800 pb-8" id="contact">
      <div className="lg:container px-5 pt-14">
        <h2 className="title text-purple-500" data-aos="fade-down">
          Hire Me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          FOR YOUR PROJECTS
        </h4>
        <br />
        <div className="flex items-center flex-col max-1024:flex-col max-1024:gap-10 space-y-4 lg:flex-row">
          <Image
            src={ConactSVG}
            alt="Contact SVG"
            data-aos="fade-right"
            className="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
          />
          <div
            data-aos="fade-left"
            className="ml-4 border-2 border-purple-700 max-w-md
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <div className="w-full max-w-md bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-gray-300 mb-2">
                Contact details
              </h2>
              <address className="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
                <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                  Name: <br />
                  Email: <br />
                  Phone:
                </div>
                <div
                  id="contact-details"
                  className="space-y-2 text-purple-600 font-medium leading-loose"
                >
                  Akem Mensah <br />
                  akemmensah@gmail.com <br />
                  +233 8943700
                </div>
              </address>
            </div>

            <p className="leading-7 text-gray-300">
            I am eager to collaborate and share ideas on any project, leveraging my skills to contribute effectively. Let's work together to create innovative solutions and achieve remarkable results. I'm ready to make an impact.
            </p>
            <br />
            <a
              href="mailto:test@example.com"
              className="btn bg-purple-700 hover:bg-purple-500 text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
