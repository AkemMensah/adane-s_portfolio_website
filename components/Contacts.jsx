"use client";
import Image from "next/image";
import ConactSVG from "@/public/svg/contact.svg";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="bg-slate-950 py-24 border-t border-white/5" id="contact">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-inria text-purple-500 tracking-tighter uppercase" data-aos="fade-down">
            07. CONNECT
          </h2>
          <h4 className="font-paprika text-3xl text-white mt-2" data-aos="fade-down" data-aos-delay="100">
            Let&apos;s Build Something Together
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">

          {/* Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="zoom-in">
            <Image
              src={ConactSVG}
              alt="Contact Illustration"
              className="w-full max-w-md xl:max-w-xl h-auto drop-shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
            />
          </div>

          {/* Contact Card */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 relative p-[1px] rounded-3xl rounded-br-[8rem] bg-gradient-to-br from-purple-600/50 to-transparent shadow-2xl"
          >
            <div className="bg-slate-900 rounded-3xl rounded-br-[8rem] p-8 md:p-12 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Contact Details
              </h3>

              {/* Contact Info List */}
              <div className="space-y-6 mb-8">
                {[
                  { icon: HiOutlineUser, label: "Name", value: "Emmanuel Adane (Akem)" },
                  { icon: HiOutlineMail, label: "Email", value: "akemmensah@gmail.com", href: "mailto:akemmensah@gmail.com" },
                  { icon: HiOutlinePhone, label: "Phone", value: "+233 50 894 3700", href: "tel:+233508943700" }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="p-3 bg-purple-600/10 rounded-xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-gray-200 hover:text-purple-400 transition-colors font-medium">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[1px] w-full bg-white/5 mb-8" />

              <p className="text-gray-400 leading-relaxed mb-10 font-poppins">
                I&apos;m currently available for freelance work or full-time positions. If you have a project that needs a sophisticated touch, or just want to say hi, my inbox is always open.
              </p>

              <a
                href="mailto:akemmensah@gmail.com"
                className="inline-block w-full md:w-auto text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-purple-600/20 active:scale-95"
              >
                Send Message
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;