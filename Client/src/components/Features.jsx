
import React from "react";
import { Code, Server, ChevronRight } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: "Custom Software Development",
    description:
      "We design scalable, high-performance software tailored to your business needs.",
  },
  {
    id: 2,
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "IT Infrastructure",
    description:
      "Reliable IT setups, networks, and server solutions to keep your company running smoothly.",
  },
];

const Features = () => (
  <section
    id="features"
    data-aos="fade-up"
    className="py-20 bg-gradient-to-b from-gray-50 to-white"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
          Our Core Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          What makes Codemin IT your trusted technology partner
        </p>
      </div>

    
      <div className="grid md:grid-cols-2 gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {feature.description}
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center focus:outline-none">
              Read More
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
