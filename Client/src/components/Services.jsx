
import React from "react";
import {
  Laptop,
  Code,
  Cloud,
  Settings,
  ShieldCheck,
  Users,
  Award,
  Clock,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Laptop className="w-6 h-6 text-blue-600" />,
    title: "Web Development",
    description: "Modern, responsive websites and platforms built for performance.",
  },
  {
    id: 2,
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: "Mobile App Development",
    description: "iOS and Android apps to engage your customers on the go.",
  },
  {
    id: 3,
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: "Software Development",
    description: "Seamless transfer of legacy systems into cloud infrastructure.",
  },
  {
    id: 4,
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    title: "IT Consulting",
    description: "Expert advice to streamline your business with modern IT solutions.",
  },
  {
    id: 5,
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "AI & ML Soultion",
    description: "Robust protection against cyber threats with end-to-end monitoring.",
  },
  {
    id: 6,
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Custom Business Applications",
    description: "Hire dedicated developers and IT professionals from our talent pool.",
  },
  {
    id: 7,
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "UI/UX Design",
    description: "Engaging digital experiences that delight users and enhance usability.",
  },
  {
    id: 8,
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Chatbot & Customer Support Automation",
    description: "Round-the-clock IT support for smooth and uninterrupted operations.",
  },

 
];

const Services = () => (
  <section id="services" data-aos="fade-up" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Full spectrum of IT and software development solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 group cursor-pointer"
          >
            <div className="mb-4 group-hover:text-blue-700 transition-colors text-blue-600">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center focus:outline-none">
              Read More
              <ChevronDown className="ml-1 w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
