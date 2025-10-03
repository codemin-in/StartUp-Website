
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What industries do you serve?",
    answer:
      "We serve startups, SMBs, and enterprises across industries such as finance, healthcare, retail, logistics, and technology.",
  },
  {
    id: 2,
    question: "What technologies do you use?",
    answer:
      "Our stack includes JavaScript/React/Node.js, Java, Python, AWS, Azure, Kubernetes, Docker, and more.",
  },
  {
    id: 3,
    question: "Do you offer post-project support?",
    answer:
      "Yes, we provide ongoing maintenance and support packages to keep solutions up-to-date and optimized.",
  },
  {
    id: 4,
    question: "How do you manage projects?",
    answer:
      "We follow an Agile methodology with transparent communication, sprint-based updates, and collaborative tools like Jira, Trello, and Slack.",
  },
  {
    id: 5,
    question: "Can you help with cloud migration?",
    answer:
      "Absolutely! We specialize in lifting businesses to the cloud with AWS, Azure, or GCP while reducing downtime risks.",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" data-aos="fade-up" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our software and IT services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
              >
                
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-header-${faq.id}`}
                >
                  <span
                    className={`text-lg font-medium text-gray-900 transition-colors duration-300 ${isOpen ? "text-blue-600" : ""
                      }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? "text-blue-600" : "text-gray-400"
                      }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

               
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-header-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 pt-4 pb-8 overflow-hidden bg-gray-50"
                    >
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </motion.div>

                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
