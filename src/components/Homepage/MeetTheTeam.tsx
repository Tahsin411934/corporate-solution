import Image from "next/image";
import { 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaFacebookF,
  FaWhatsapp,
  FaGlobe
} from "react-icons/fa";

const MeetTheTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1542] mb-4">
            Meet Our Leadership
          </h2>
          <div className="w-24 h-1 bg-[#005FA5] mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Driving excellence and innovation in corporate solutions
          </p>
        </div>

        {/* CEO Profile */}
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Profile Image - Full width on mobile, fixed on desktop */}
            <div className="w-full md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="/ceo.jpg" // Replace with your CEO's image
                alt="Mr. Jahid Hossain, Founder & CEO"
                width={400}
                height={500}
                className="object-cover md:w-full md:h-full h-56 w-56 md:p-10 mx-auto"
                style={{ objectPosition: 'top' }}
                priority
              />
            </div>
            
            {/* Profile Content */}
            <div className="w-full md:w-2/3 p-6 md:p-10">
              <div className="uppercase tracking-wide text-sm text-[#005FA5] font-semibold mb-1">
                Founder & CEO
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0D1542] mb-2">
                Mr. Jahid Hossain
              </h3>
              <p className="text-gray-500 mb-6">
                13+ Years of Industry Experience
              </p>
              
              <div className="text-gray-600 mb-6 space-y-4">
                <p>
                  As the visionary founder of Corporate Solutions, Mr. Jahid Hossain brings over 
                  a decade of expertise in corporate advisory and financial consultancy. 
                  His leadership has guided hundreds of businesses through successful 
                  registrations, compliance processes, and strategic growth initiatives.
                </p>
                <p>
                  Certified in Corporate Law and Taxation, he specializes in creating 
                  tailored solutions for SMEs and multinational corporations alike.
                </p>
              </div>
              
              {/* Enhanced Social Links */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/in/example" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-[#005FA5] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com/example" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors"
                  aria-label="Twitter Profile"
                  title="Twitter"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>
                <a 
                  href="https://facebook.com/example" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4267B2] text-white hover:bg-[#365899] transition-colors"
                  aria-label="Facebook Profile"
                  title="Facebook"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] transition-colors"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
                <a 
                  href="mailto:ceo@corporatesolution.com" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D44638] text-white hover:bg-[#ba3a2e] transition-colors"
                  aria-label="Email CEO"
                  title="Email"
                >
                  <FaEnvelope className="h-4 w-4" />
                </a>
                <a 
                  href="https://yourcompanywebsite.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:flex hidden items-center justify-center w-10 h-10 rounded-full bg-[#0D1542] text-white hover:bg-[#005FA5] transition-colors"
                  aria-label="Website"
                  title="Website"
                >
                  <FaGlobe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to meet the rest of our expert team?
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-[#005FA5] text-white rounded-lg hover:bg-[#0D1542] transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
          >
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;