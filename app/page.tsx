import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import AOSProvider from "@/components/AOSProvider";

export default function Home() {
  return (
    <AOSProvider>
      <Navbar />
      <main className="portfolio flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Approach />
        <Projects />
        <Testimonials />
        
        {/* Grouping Contact elements for better flow */}
        <section id="contact" className="bg-slate-50 dark:bg-slate-900/50">
          <Contacts />
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </AOSProvider>
  );
}