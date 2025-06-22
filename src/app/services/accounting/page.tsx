import { Metadata } from 'next';
import { BiPhoneIncoming } from 'react-icons/bi';
import { TbMailBitcoin } from 'react-icons/tb';

export const metadata: Metadata = {
  title: "Professional Accounting & Advisory Services | Corporate Solution",
  description: "Comprehensive accounting, bookkeeping, and financial advisory services for businesses in Bangladesh. Optimize your financial operations.",
};

export default function AccountingAdvisoryPage() {
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
            <h1 className="text-xl md:text-4xl font-bold mb-4">Accounting & Advisory Services</h1>
            <p className="text-sm md:text-xl max-w-2xl mx-auto">
              Strategic financial management and expert advisory for business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Accounting Solutions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            {
              title: "Bookkeeping Services",
              description: "Accurate financial record maintenance",
              details: [
                "Daily transaction recording",
                "Accounts receivable/payable",
                "Bank reconciliation",
                "Monthly financial reports"
              ]
            },
            {
              title: "Financial Advisory",
              description: "Strategic guidance for financial decisions",
              details: [
                "Business valuation",
                "Investment analysis",
                "Cost reduction strategies",
                "Financial forecasting"
              ]
            },
            {
              title: "Payroll Management",
              description: "End-to-end salary processing",
              details: [
                "Salary calculation",
                "Tax deduction at source",
                "Bonus/allowance management",
                "Payslip generation"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Accounting Services FAQs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question Blocks */}
            {[
              {
                question: "What accounting software do you work with?",
                answer: "We're proficient in QuickBooks, Xero, Sage, and local solutions like Tally.ERP and WinBiz for Bangladesh-specific compliance."
              },
              {
                question: "How can outsourcing accounting save me money?",
                answer: "Eliminates full-time staff costs (saving 40-60%), reduces errors (avoiding penalty risks), and provides expert insights for better financial decisions."
              },
              {
                question: "What's included in your monthly accounting package?",
                answer: "Transaction recording, bank reconciliation, financial statements, expense reports, VAT calculations, and management reports - all customized to your needs."
              },
              {
                question: "Can you help with financial projections for investors?",
                answer: "Yes, we prepare professional 3-5 year financial projections with scenario analysis that investors and banks require for funding."
              },
              {
                question: "How do you ensure data security with remote accounting?",
                answer: "We use encrypted cloud storage, secure VPN access, two-factor authentication, and strict confidentiality agreements to protect your financial data."
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
      <div className="mt-12 mb-6 sm:mt-16 text-center bg-[#0D1542] p-6 sm:p-8 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Optimize Your Financial Operations</h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
          Let our accounting experts streamline your financial management
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