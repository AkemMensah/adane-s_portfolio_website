import {
  HiHome,
  HiMiniCubeTransparent,
  HiMiniCog,
  HiMiniNewspaper,
  HiMiniUserCircle,
} from "react-icons/hi2";

import ProjectImg1 from "@/public/img/bastian-riccardi-BQ9usyzHx_w-unsplash.jpg";
import ProjectImg2 from "@/public/img/abillion-F0e3AdcwVbM-unsplash.jpg";
import ProjectImg3 from "@/public/img/payment_app.jpg";
import Questions from "@/public/svg/Questions-amico.svg";
import Progress from "@/public/svg/Product iteration-amico.svg";
import Launch from "@/public/svg/Market launch-amico.svg";
import Logo1 from "@/public/img/logo1.png";
import Logo2 from "@/public/img/logo2.png";
import Logo3 from "@/public/img/logo3.png";
import Avatar1 from "@/public/img/avatar1.png";
import Avatar2 from "@/public/img/avatar2.png";
import Avatar3 from "@/public/img/avatar3.png";
import Avatar4 from "@/public/img/avatar4.png";
import Ux from "@/public/svg/ui ux design.png";
import React from "@/public/svg/react.svg";
import Django from "@/public/svg/django.svg";
import Html from "@/public/svg/code.png";
import Python from "@/public/svg/python.svg";
import Js from "@/public/svg/java-script.svg";
import { AiFillMedicineBox } from "react-icons/ai";

export const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: HiHome,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: HiMiniCubeTransparent,
  },
  {
    name: "Services",
    href: "#services",
    icon: HiMiniCog,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: HiMiniNewspaper,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: HiMiniUserCircle,
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projectsItems = [
  {
    title: "E-commerce Website",
    image: ProjectImg1,
  },
  {
    title: "Restaurant App",
    image: ProjectImg2,
  },
  {
    title: "Morden Payment App",
    image: ProjectImg3,
  },
];

export const skillsItems = [
  {
    name: "JavaScript",
    description:"Great website interactivity with JS",
    logo: Js,
  },
  {
    name: "React/Nextjs",
    description:"FrontEnd expert with React & NextJs",
    logo: React,
  },
  {
    name: "Python",
    description:"Elegant architecture in python",
    logo: Python,
  },
  {
    name: "Django",
    description:"Ardent developer with Django",
    logo: Django,
  },
  {
    name: "UX/UI",
    description:"Seemless interface designs",
    logo: Ux,
  },
  
  {
    name: "HTML/CSS",
    description:"Semantic Html with flawless designs",
    logo: Html,
  },
];

export const servicesItems = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: Logo1,
  },
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: Logo2,
  },
  {
    title: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    logo: Logo3,
  },
];

export const testimonialsItems = [
  {
    name: "Tony",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar1,
  },
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar2,
  },
  {
    name: "Roddin",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar3,
  },
  {
    name: "Jane",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Avatar4,
  },
];

export const approachItems = [
  {title:"Planning & Strategy",
    des:"We'll collaborate to map out your website's goals, target audience,\
            and key functionalities. We'll discuss things like site structure\
          navigation, and content requirements.",
    image: Questions,
  },
  {
    title:"Development & Progress Update",
    des:"Once we agree on the plan, I cue my lofi playlist and dive into\
          coding. From initial sketches to polished code, I keep you updated\
          every step of the way.",
    image: Progress,
  },
  {
    title:"Deployment & Launch",
    des:"This is where the magic happens! Based on the approved design,\
          I'll translate everything into functional code, building your website\
          from the ground up.",
    image:Launch,
  }
]
