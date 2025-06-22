// app/about/page.tsx
import { FaUsers, FaChartLine, FaHandshake, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Corporate Solution",
  description: "Learn about Corporate Solution - our story, mission, vision, and core values. Trusted business consultancy in Bangladesh since 2010.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-12">
      {/* Professional Header with Button */}
      <div className="bg-white border-b border-gray-200 py-8 sm:py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-3 sm:mb-4">
              About Corporate Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Delivering exceptional business solutions with integrity, innovation, and excellence since 2010.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-blue-950 hover:bg-blue-800 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md transition duration-300 font-medium group text-sm sm:text-base"
            >
              Get in Touch
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-blue-600 mr-3 sm:mr-4"></div>
              <span className="text-blue-950 font-medium text-sm sm:text-base">OUR JOURNEY</span>
            </div>
            
            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
              Founded in 2010, Corporate Solutions began as a small consultancy firm in Chittagong with a vision to transform business operations through innovative solutions.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
              Today, we've grown into a trusted partner for over 500 businesses across Bangladesh, helping them navigate complex challenges and achieve sustainable growth.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">
              Our journey has been marked by relentless pursuit of excellence, adapting to changing market dynamics while maintaining our core values of integrity and client-first approach.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg">
                <p className="text-blue-800 font-bold text-lg sm:text-xl">12+</p>
                <p className="text-gray-600 text-xs sm:text-sm">Years Experience</p>
              </div>
              <div className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg">
                <p className="text-blue-800 font-bold text-lg sm:text-xl">500+</p>
                <p className="text-gray-600 text-xs sm:text-sm">Satisfied Clients</p>
              </div>
              <div className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg">
                <p className="text-blue-800 font-bold text-lg sm:text-xl">50+</p>
                <p className="text-gray-600 text-xs sm:text-sm">Industry Experts</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 w-full">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/aboutus.jpg" 
                alt="Corporate Solutions Team" 
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                <p className="text-xs sm:text-sm font-medium">Our dedicated team at Corporate Solution headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-blue-50 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <FaLightbulb className="text-blue-700 text-lg sm:text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl text-blue-950 font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                To be Bangladesh's most trusted business solutions provider, recognized for transforming challenges into opportunities through innovation and strategic thinking.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <FaChartLine className="text-blue-700 text-lg sm:text-xl" />
                </div>
                <h3 className="text-lg sm:text-xl text-blue-950 font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                To empower businesses with customized, data-driven solutions that drive growth, enhance efficiency, and create sustainable competitive advantages in dynamic markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-blue-600"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-950 font-bold mb-3 sm:mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            These principles guide every decision we make and every solution we deliver
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaHandshake className="text-blue-700 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg text-blue-950 font-bold mb-1 sm:mb-2">Integrity</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We maintain the highest ethical standards, ensuring transparency in all our dealings.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaUsers className="text-blue-700 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-1 sm:mb-2">Client Focus</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Your success is our priority. We listen, understand, and deliver beyond expectations.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaLightbulb className="text-blue-700 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-1 sm:mb-2">Innovation</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We embrace creative thinking to develop cutting-edge solutions for modern challenges.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-blue-600">
            <div className="bg-blue-100 w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaChartLine className="text-blue-700 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg text-blue-950 font-bold mb-1 sm:mb-2">Excellence</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We pursue perfection in every service, setting industry benchmarks for quality.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover how Corporate Solutions can help you achieve your business objectives with our tailored services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-900 px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-gray-100 transition duration-300 font-medium group text-sm sm:text-base"
            >
              Contact Us
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-white hover:text-blue-900 transition duration-300 font-medium group text-sm sm:text-base"
            >
              Our Services
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}