"use client";
import React from "react";
import Image from "next/image";
import Me from "@/public/img/Me.png";
import { FaGithub, FaLinkedin, FaDiscord, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AkemMensah/", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/AkemMensah", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://twitter.com/", label: "X (Twitter)" },
    { icon: FaDiscord, href: "https://discord.gg/", label: "Discord" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="p-1 bg-purple-600 rounded-lg">
                <Image src={Me} width={32} height={32} alt="Logo" className="rounded" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">
                Akem<span className="text-purple-500">Mensah</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting high-performance web experiences with precision and creativity. Let&apos;s build the future together.
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h2 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h2>
            <ul className="text-gray-500 space-y-4 text-sm">
              <li><a href="https://nextjs.org/" className="hover:text-purple-500 transition-colors">Next.js 14</a></li>
              <li><a href="https://tailwindcss.com/" className="hover:text-purple-500 transition-colors">Tailwind CSS</a></li>
              <li><a href="https://swiperjs.com/" className="hover:text-purple-500 transition-colors">Swiper Js</a></li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h2 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h2>
            <ul className="text-gray-500 space-y-4 text-sm">
              <li><a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-purple-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Hire Me</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h2 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h2>
            <ul className="text-gray-500 space-y-4 text-sm">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-300">AkemMensah Portfolio</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-500 transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;