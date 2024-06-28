"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="bg-grey-950" >
      
      < Navbar />
      < Hero />
      < Skills />
      < Services />
      < Projects />
      < Testimonials />
      < Contacts />
      < Footer />
      
    </div>
  );
}
