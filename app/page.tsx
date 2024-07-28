"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About"
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";
import Head from 'next/head';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="portfolio" >
      <Head>
        <link rel="icon" href="/img/butterfly.png" type="image/png" />
      </Head>
      < Navbar />
      < Hero />
      < About />
      < Skills />
      < Services />
      < Approach />
      < Projects />
      < Testimonials />
      < Contacts />
      < ContactForm />
      < Footer />
    </div>
  );
}
