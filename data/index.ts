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
import web from "@/public/img/web.jpg";
import mobile from "@/public/img/mobile.jpg";
import game from "@/public/img/game0.jpg";
import Avatar1 from "@/public/img/avatar1.png";
import Avatar2 from "@/public/img/avatar2.png";
import Avatar3 from "@/public/img/avatar3.png";
import Avatar4 from "@/public/img/avatar4.png";
import Ux from "@/public/svg/ui ux design.png";
import Tailwind from "@/public/img/tailwind.png";
import version from "@/public/img/version.png";
import Bootstrap from "@/public/img/bootstrap.png";
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
  {
    name: "Bootstrap",
    description:"Responsive development of mobile-first websites",
    logo: Bootstrap,
  },
  {
    name: "TailwindCss",
    description:"Utility first-class framework for rapid custom UI",
    logo: Tailwind,
  },
  {
    name: "Version control(Git)",
    description:"Tracking and Managing changes to software code",
    logo: version,
  },
];

export const servicesItems = [
  {
    title: "Web Development",
    description:
    "As a web developer, I design and build responsive, user-friendly websites and applications. Using technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js, I create engaging digital experiences. I focus on clean code, performance optimization, and seamless functionality to deliver impactful solutions.",
    logo: web,
  },
  {
    title: "Mobile Development",
    description:
    "As a mobile developer, I create intuitive and efficient mobile applications for Android and iOS platforms. Using tools like Swift, Kotlin, and Flutter, I design, code, and test apps to ensure a seamless user experience. My focus is on performance, user-centric design, and delivering high-quality, scalable solutions.",
    logo: mobile,
  },
  {
    title: "Game Development",
    description:
    "As a game developer, I design and build engaging, interactive games using engines like Unity and Unreal. I create compelling storylines, realistic graphics, and seamless gameplay. My work involves coding, testing, and iterating to ensure a fun and immersive experience for players across various platforms.",
    logo: game,
  },
];

export const testimonialsItems = [
  {
    name: "Tony",
    review:
    "Working with AkemMensah has been an absolute pleasure. Their expertise as a software developer is unparalleled. They delivered a high-quality, efficient solution tailored to our needs, and their professionalism and dedication were evident throughout the project. I highly recommend them for any software development needs.",
    image: Avatar1,
  },
  {
    name: "John Doe",
    review:
    "Working with Akem has been a game-changer for our project. Their expertise as a software developer is evident in the seamless, efficient solutions they deliver. Their ability to understand our needs and translate them into functional, user-friendly applications is remarkable. We highly recommend their services.",
    image: Avatar2,
  },
  {
    name: "Roddin",
    review:
    "Akem's expertise as a software developer is exceptional. They delivered seamless, efficient solutions tailored to our needs. Their ability to translate our requirements into functional, user-friendly applications was impressive. We highly recommend their services for any project.",
    image: Avatar3,
  },
  {
    name: "Jane",
    review:
    "Adane has been instrumental in transforming our project. Their expertise and dedication as a software developer ensured the delivery of efficient, user-friendly applications. We highly value their ability to understand our needs and deliver exceptional results.",
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


