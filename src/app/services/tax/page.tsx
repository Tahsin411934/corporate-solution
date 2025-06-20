import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tax & VAT Consultancy Services | Corporate Solution",
  description: "Professional VAT registration, tax filing, and compliance services in Bangladesh. Expert guidance for businesses.",
};

export default function TaxVatConsultancyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className=" text-white ">
       <div className="relative   lg:h-auto  text-white py-24 md:py-32">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/banner3.png')] bg-cover bg-center "
          style={{
            backgroundImage: "url('/banner3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        ></div>
        <div className="absolute inset-0  "></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-xl md:text-4xl font-bold mb-4">Tax & VAT Consultancy</h1>
          <p className="text-sm md:text-xl max-w-2xl mx-auto">
            Expert guidance for VAT registration, tax filing, and compliance solutions tailored for your business
          </p>
        </div>
      </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Tax & VAT Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            {
              title: "VAT Registration",
              description: "Complete VAT registration with NBR including BIN acquisition",
              details: [
                "New business registration",
                "BIN certificate issuance",
                "Document preparation"
              ]
            },
            {
              title: "Tax Return Filing",
              description: "Accurate and timely submission of tax returns",
              details: [
                "Monthly/Yearly filing",
                "Tax calculation",
                "Document verification"
              ]
            },
            {
              title: "Compliance Advisory",
              description: "Ensure full compliance with tax regulations",
              details: [
                "NBR regulation updates",
                "Penalty avoidance",
                "Record keeping guidance"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Essential Tax & VAT Information</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question Blocks */}
            {[
              {
                question: "What documents are needed for VAT registration?",
                answer: "You'll need trade license, TIN certificate, bank statement, company memorandum (if applicable), owner's NID, and business address proof."
              },
              {
                question: "How many days does VAT registration take?",
                answer: "Typically 7-15 working days after submitting complete documents to NBR."
              },
              {
                question: "When are VAT returns due in Bangladesh?",
                answer: "Monthly VAT returns must be filed by the 15th day of the following month."
              },
              {
                question: "What are the penalties for late VAT filing?",
                answer: "10% additional tax or minimum 10,000 BDT, whichever is higher, plus potential business closure for repeated offenses."
              },
              {
                question: "Can I file VAT returns myself?",
                answer: "Yes, but most businesses use consultants to ensure accuracy and avoid penalties. We handle the entire process for you."
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
      <section className="py-16 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need Expert Tax Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our certified tax consultants are ready to help with your VAT and tax requirements
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="tel:01909221707" 
              className="bg-white text-blue-950 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
            >
              Call Now
            </a>
            <a 
              href="mailto:corporatesolutionctg@gmail.com" 
              className="border-2 border-white hover:bg-white hover:text-blue-950 px-6 py-3 rounded-lg font-semibold transition"
            >
              Email Us
            </a>
             <a 
              href="https://wa.me/8801909221707" 
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              
              WhatsApp Chat
            </a>
          </div>
        <div className='text-center mt-4 text-xl '>Phone: 01909221707</div>
        </div>
      </section>
    </main>
  );
}