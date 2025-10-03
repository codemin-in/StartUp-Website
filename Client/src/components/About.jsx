
import { Check } from "lucide-react";

const aboutPoints = [
"We provide quality work at fair rates.",

"Our experts specialize in web, apps, and digital solutions.",

"We design exactly what your business needs.",

"We deliver projects as promised.",

"We offer reliable maintenance and quick help.",

"We use future-ready tools to grow your business."
];

const About = () => (
  <section id="about" data-aos="fade-up" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-snug">
            Why Choose Codemin IT?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
         As a growing startup, Codemin IT Solutions is passionate about delivering reliable software and IT services to help your business thrive.
          </p>
          <ul className="space-y-4">
            {aboutPoints.map((point, idx) => (
              <li key={idx} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="About Codemin IT"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
