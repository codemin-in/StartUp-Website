
import React from "react";
import { Star } from "lucide-react";

const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Codemin IT Solutions helped us build a scalable web app. Their expertise in full-stack development ensured a smooth and secure system.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    review:
      "Outstanding service! The cloud migration project was handled seamlessly, saving costs and improving performance.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    review:
      "Great team! They provided excellent support for our enterprise software solution. Reliable and professional.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    data-aos="fade-up"
    className="py-20 bg-gradient-to-b from-gray-50 to-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hear from businesses who transformed with Codemin IT Solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {mockTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
                loading="lazy"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
