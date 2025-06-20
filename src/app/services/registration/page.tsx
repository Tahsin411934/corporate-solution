import { Metadata } from 'next';
import { BiPhoneIncoming } from 'react-icons/bi';
import { TbMailBitcoin } from 'react-icons/tb';

export const metadata: Metadata = {
  title: "Company Registration & Profile Services | Corporate Solution",
  description: "Professional company registration, documentation, and profile creation services in Bangladesh. Start your business with expert guidance.",
};

export default function CompanyRegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white">
        <div className="relative lg:h-auto text-white py-24 md:py-32">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-[url('/banner3.png')] bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0"></div>
          
          <div className="container mx-auto px-4 top-6 text-center relative z-10">
            <h1 className="text-xl md:text-4xl font-bold mb-4">Company Registration & Profile Services</h1>
            <p className="text-sm md:text-xl max-w-2xl mx-auto">
              Comprehensive business setup solutions from registration to professional company profiling
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Company Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            {
              title: "Company Registration",
              description: "Complete legal registration for your business entity",
              details: [
                "Private Limited Company registration",
                "Trade License acquisition",
                "RJSC documentation",
                "TIN & BIN registration"
              ]
            },
            {
              title: "Company Profile Design",
              description: "Professional profiles that impress clients and investors",
              details: [
                "Custom design & branding",
                "Company history & vision",
                "Service/product showcase",
                "Management team presentation"
              ]
            },
            {
              title: "Compliance Package",
              description: "Ongoing support for legal and regulatory requirements",
              details: [
                "Annual return filing",
                "Shareholder documentation",
                "AGM minutes preparation",
                "Regulatory updates"
              ]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Questions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Company Registration FAQs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question Blocks */}
            {[
              {
                question: "What types of companies can be registered in Bangladesh?",
                answer: "Private Limited, Public Limited, Partnership, One Person Company (OPC), and Branch/Liaison offices of foreign companies."
              },
              {
                question: "What documents are required for company registration?",
                answer: "NID of directors, passport photos, proposed company name, memorandum & articles, registered office address proof, and capital details."
              },
              {
                question: "How long does the registration process take?",
                answer: "Typically 7-15 working days after submitting all documents to RJSC, depending on company type and document verification."
              },
              {
                question: "Why is a professional company profile important?",
                answer: "It creates strong first impressions, builds credibility, helps secure funding/tenders, and communicates your value proposition effectively."
              },
              {
                question: "What information should a company profile include?",
                answer: "Company overview, mission/vision, management team, products/services, achievements, client portfolio, certifications, and contact information."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-950 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-12 mb-6 sm:mt-16 text-center bg-[#0D1542] rounded-lg p-6 sm:p-8 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Start Your Business Journey Today</h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
          Let us handle your company registration and profiling needs professionally
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <a
            href="tel:01909221707"
            className="flex items-center gap-2 bg-white text-[#0D1542] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            <BiPhoneIncoming className="h-4 w-4 sm:h-5 sm:w-5" />
            01909221707
          </a>
          <a
            href="mailto:Corporatesolutionctg@gmail.com"
            className="flex items-center gap-2 bg-white text-[#0D1542] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            <TbMailBitcoin className="h-4 w-4 sm:h-5 sm:w-5" />
            Corporatesolutionctg@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}