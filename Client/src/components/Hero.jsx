// src/components/Hero/Hero.js
import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = ({ onLearnMore }) => {
  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      data-aos="fade-up"
      className="pt-16 min-h-screen flex items-center"
    >
      <div className="w-full">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
          
          <div className="bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-700 flex items-center justify-center p-8 lg:p-12 rounded-br-[80px] shadow-lg">
            <div className="text-center lg:text-left max-w-lg">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                Empower Your Business With Technology
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-200 mb-8 leading-relaxed">
                Innovative Software Solutions & IT Consulting
              </h2>
              <button
                onClick={handleLearnMore}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-transform transform hover:scale-105 duration-200 inline-flex items-center focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Learn More
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          
          <div className="bg-white flex items-center justify-center p-8 lg:p-12 rounded-tl-[80px] shadow-xl">
            <div className="max-w-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
