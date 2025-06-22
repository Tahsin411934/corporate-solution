import { Metadata } from 'next';
import { BiPhoneIncoming } from 'react-icons/bi';
import { TbMailBitcoin } from 'react-icons/tb';

export const metadata: Metadata = {
  title: "Professional Company Audit Services | Corporate Solution",
  description: "Comprehensive financial, compliance, and internal audit services for businesses in Bangladesh. Ensure transparency and regulatory compliance.",
};

export default function CompanyAuditPage() {
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
            <h1 className="text-xl md:text-4xl font-bold mb-4">Professional Audit Services</h1>
            <p className="text-sm md:text-xl max-w-2xl mx-auto">
              Ensuring financial integrity, compliance, and operational excellence for your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Audit Solutions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            {
              title: "Financial Audit",
              description: "Comprehensive examination of financial statements",
              details: [
                "Statutory compliance verification",
                "Balance sheet analysis",
                "Income statement review",
                "Cash flow evaluation"
              ]
            },
            {
              title: "Internal Audit",
              description: "Risk management and process improvement",
              details: [
                "Operational efficiency assessment",
                "Internal control evaluation",
                "Fraud risk detection",
                "Process optimization"
              ]
            },
            {
              title: "Tax Compliance Audit",
              description: "Ensure full adherence to tax regulations",
              details: [
                "NBR compliance verification",
                "VAT/Tax documentation review",
                "Penalty risk assessment",
                "Tax planning recommendations"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Audit Services FAQs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question Blocks */}
            {[
              {
                question: "Is audit mandatory for all companies in Bangladesh?",
                answer: "Yes, according to the Companies Act 1994, all registered companies must conduct annual audits, except some small proprietary businesses."
              },
              {
                question: "What documents are required for financial audit?",
                answer: "Bank statements, invoices, receipts, ledger books, financial statements, tax returns, and all supporting financial documents for the fiscal year."
              },
              {
                question: "How long does a typical company audit take?",
                answer: "Depends on company size: 2-4 weeks for SMEs, 4-8 weeks for medium enterprises, and 8-12 weeks for large corporations."
              },
              {
                question: "Can audit help in securing business loans?",
                answer: "Absolutely. Audited financial statements increase credibility with banks and financial institutions by 70-80% for loan approvals."
              },
              {
                question: "What's the difference between internal and statutory audit?",
                answer: "Internal audits are voluntary for process improvement, while statutory audits are legally required for financial reporting compliance."
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
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ensure Your Financial Compliance</h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
          Partner with our certified auditors for professional and reliable audit services
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