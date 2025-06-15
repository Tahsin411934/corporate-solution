import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

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
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            {/* Profile Image */}
            <div className="md:w-1/3 relative h-80 md:h-auto">
              <Image
                src="/ceo.jpg" // Replace with your CEO's image
                alt="Mr. Rahman, Founder & CEO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            
            {/* Profile Content */}
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="uppercase tracking-wide text-sm text-[#005FA5] font-semibold mb-1">
                Founder & CEO
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0D1542] mb-2">
               Mr. Jahid Hossain
              </h3>
              <p className="text-gray-500 mb-6">
                13+ Years of Industry Experience
              </p>
              
              <div className="prose text-gray-600 mb-6">
                <p>
                  As the visionary founder of Corporate Solutions, Mr. Rahman brings over 
                  a decade of expertise in corporate advisory and financial consultancy. 
                  His leadership has guided hundreds of businesses through successful 
                  registrations, compliance processes, and strategic growth initiatives.
                </p>
                <p className="mt-4">
                  Certified in Corporate Law and Taxation, he specializes in creating 
                  tailored solutions for SMEs and multinational corporations alike.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-[#005FA5] hover:text-[#0D1542] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-[#005FA5] hover:text-[#0D1542] transition-colors"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:ceo@corporatesolution.com" 
                  className="text-[#005FA5] hover:text-[#0D1542] transition-colors"
                  aria-label="Email CEO"
                >
                  <FaEnvelope className="h-6 w-6" />
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
            className="inline-block px-8 py-3 bg-[#005FA5] text-white rounded-lg hover:bg-[#0D1542] transition-colors duration-300 font-medium"
          >
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;