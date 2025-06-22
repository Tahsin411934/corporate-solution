import { Metadata } from 'next';
import { BiPhoneIncoming } from 'react-icons/bi';
import { TbMailBitcoin } from 'react-icons/tb';

export const metadata: Metadata = {
  title: "Business Advisory Services | Corporate Solution",
  description: "Professional business consulting and advisory services in Bangladesh. Strategic guidance for growth, compliance, and operational excellence.",
};

export default function AdvisoryServicesPage() {
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
            <h1 className="text-xl md:text-4xl font-bold mb-4">Business Advisory Services</h1>
            <p className="text-sm md:text-xl max-w-2xl mx-auto">
              Strategic consulting to optimize your business operations and growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Advisory Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            {
              title: "Business Strategy Consulting",
              description: "Comprehensive planning for sustainable growth",
              details: [
                "Market entry strategy",
                "Business model optimization",
                "Competitive analysis",
                "Growth roadmap development"
              ]
            },
            {
              title: "Regulatory Compliance",
              description: "Ensuring full compliance with business regulations",
              details: [
                "Legal compliance audit",
                "Regulatory change management",
                "Policy framework development",
                "Corporate governance advisory"
              ]
            },
            {
              title: "Operational Excellence",
              description: "Streamlining your business operations",
              details: [
                "Process optimization",
                "Cost reduction strategies",
                "Supply chain management",
                "Performance benchmarking"
              ]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6  shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className='text-gray-700'>{detail}</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Advisory FAQs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question Blocks */}
            {[
              {
                question: "When should a business consider advisory services?",
                answer: "During startup phase, when facing operational challenges, planning expansion, or when regulatory changes affect your business model."
              },
              {
                question: "What's the typical engagement process?",
                answer: "Initial assessment → problem identification → solution design → implementation support → follow-up evaluation."
              },
              {
                question: "How do you measure the impact of advisory services?",
                answer: "Through KPIs like cost savings, revenue growth, process efficiency gains, and compliance improvement metrics."
              },
              {
                question: "Can you help with international business expansion?",
                answer: "Yes, we provide cross-border market analysis, regulatory guidance, and partnership development support."
              },
              {
                question: "What industries do you specialize in?",
                answer: "Manufacturing, trading, IT, healthcare, logistics, and professional services across various sectors."
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Transform Your Business Strategy</h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
          Get expert advisory services tailored to your business needs
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