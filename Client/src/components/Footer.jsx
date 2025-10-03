import React from "react";
import {
  Code,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = ({ scrollToSection }) => {
  const quickLinks = ["Home", "About", "Services", "Contact"];
  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Migration",
    "IT Consulting",
    "Cybersecurity Services",
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold">Codemin IT</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for innovative software and IT solutions.
              We bring your ideas to life with technology and expertise.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      scrollToSection &&
                      scrollToSection(link.toLowerCase())
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-400">info@codemin-it.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-400">
                  123 Tech Avenue, Innovation City, TX 54321
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 select-none">
            © 2025 Codemin IT. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
