import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);


  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <About/>
      <Features />
      <Services />
      
      
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
