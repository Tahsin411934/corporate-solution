'use client'
import Link from "next/link";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer for new businesses?",
      answer: "We provide comprehensive services including company registration, trade license acquisition, tax registration, accounting setup, and business advisory services to help new businesses establish themselves properly."
    },
    {
      question: "How long does the company registration process take?",
      answer: "The timeframe varies depending on the business type and jurisdiction, but typically ranges from 3-7 working days for complete registration with all necessary documents in place."
    },
    {
      question: "What are your fees for VAT registration services?",
      answer: "Our VAT registration fees depend on your business turnover and complexity. We offer transparent pricing with no hidden costs. Please contact us for a customized quote based on your specific requirements."
    },
    {
      question: "Do you provide ongoing compliance support after registration?",
      answer: "Yes, we offer monthly accounting, VAT filing, annual audit, and renewal services to ensure your business remains compliant with all regulatory requirements throughout its operation."
    },
    {
      question: "Can you help with international business expansion?",
      answer: "Absolutely. We assist with export/import licensing, foreign company registration, cross-border tax planning, and other services to support your international business operations."
    },
    {
      question: "What documents do I need to start the process?",
      answer: "Requirements vary by service, but typically include copies of passports/IDs, proof of address, business plan, and relevant professional qualifications. We'll provide a complete checklist during our initial consultation."
    }
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1542] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our corporate services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-300 ${activeIndex === index ? 'bg-[#0D1542] text-white' : 'bg-gray-50 hover:bg-gray-100 text-[#0D1542]'}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`px-6 py-4 bg-white ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-[#0D1542] mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is ready to provide personalized answers and guidance for your specific business needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#0D1542] text-white rounded-lg hover:bg-[#1a2a7a] transition-colors duration-300 font-medium"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;