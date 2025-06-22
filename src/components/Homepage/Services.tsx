import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
}

const Services = () => {
  const services: ServiceCard[] = [
    {
      title: "Tax & VAT Consultancy",
      subtitle: "Expert guidance on tax compliance and optimization",
      icon: "/icons/1.png",
      link: '/services/tax',
    },
    {
      title: "Trade License & Trademark",
      subtitle: "Complete business registration and protection services",
      icon: "/icons/2.jpg",
      link: '/services/license',
    },
    {
      title: "Export & Import License",
      subtitle: "Streamlined solutions for international trade",
      icon: "/icons/3.jpg",
      link: '/services/exportimportlicense',
    },
    {
      title: "Accounting Service",
      subtitle: "Professional financial record keeping",
      icon: "/icons/4.webp",
      link: '/services/accounting',
    },
    {
      title: "Company Audit",
      subtitle: "Comprehensive financial examination services",
      icon: "/icons/5.jpg",
      link: '/services/audit',
    },
    {
      title: "Company Registration",
      subtitle: "End-to-end business incorporation assistance",
      icon: "/icons/6.jpg",
      link: '/services/registration',
    },
    {
      title: "Company Profile",
      subtitle: "Professional business profile development",
      icon: "/icons/7.jpg",
      link: '/services/registration',
    },
    {
      title: "Loan Processing",
      subtitle: "Efficient business financing solutions",
      icon: "/icons/8.jpg",
      link: '/services/LoanProcessing',
    },
    {
      title: "Advisory Services",
      subtitle: "Strategic business consulting",
      icon: "/icons/9.webp",
      link: '/services/Advisory',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1542] mb-3 sm:mb-4">
            Professional Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive business solutions tailored to meet your specific needs and drive growth
          </p>
          <div className="w-20 h-1 bg-[#005FA5] mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                index === 8 ? "hidden lg:flex" : ""
              }`}
            >
              {/* Service Image */}
              <div className="relative w-full h-32 md:h-48 bg-gray-100">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-base md:text-xl font-bold text-[#0D1542] mb-1 sm:mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                  {service.subtitle}
                </p>
                
                {/* Button Group */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                   <a
                    href={`https://wa.me/8801909221707?text=Hello! I’m interested in your service: ${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0D1542] text-white rounded-lg hover:bg-[#1a2a7a] transition-colors duration-300 text-xs sm:text-sm font-medium text-center"
                    aria-label={`Book ${service.title} on WhatsApp`}
                  >
                    Book Now
                  </a>
                  <Link
                    href={`${service.link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#0D1542] text-[#0D1542] rounded-lg hover:bg-gray-50 transition-colors duration-300 text-xs sm:text-sm font-medium text-center"
                    aria-label={`See details about ${service.title}`}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-16 text-center bg-[#0D1542] rounded-lg p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to get started?</h3>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
            Contact us today for professional business solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <a
              href="tel:01909221707"
              className="flex items-center gap-2 bg-white text-[#0D1542] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              01909221707
            </a>
            <a
              href="mailto:Corporatesolutionctg@gmail.com"
              className="flex items-center gap-2 bg-white text-[#0D1542] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Corporatesolutionctg@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon Components
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export default Services;