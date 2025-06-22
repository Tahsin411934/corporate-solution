// app/about/page.tsx
import { FaUsers, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Professional Header */}
      <div className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">About Corporate Solutions</h1>
            <p className="text-lg text-gray-600">
              Delivering exceptional business solutions with integrity, innovation, and excellence since 2010.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Corporate Solutions began as a small consultancy firm in Chittagong with a vision to transform business operations through innovative solutions.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we&apos;ve grown into a trusted partner for over 500 businesses across Bangladesh, helping them navigate complex challenges and achieve sustainable growth.
            </p>
            <p className="text-gray-700">
              Our journey has been marked by relentless pursuit of excellence, adapting to changing market dynamics while maintaining our core values of integrity and client-first approach.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-80 md:h-96 rounded-lg overflow-hidden relative">
              <Image 
                src="/aboutus.jpg" 
                alt="Corporate Solutions Team" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaLightbulb className="text-blue-700 text-xl" />
                </div>
                <h3 className="text-xl text-blue-950 font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be Bangladesh&apos;s most trusted business solutions provider, recognized for transforming challenges into opportunities through innovation and strategic thinking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-blue-700 text-xl" />
                </div>
                <h3 className="text-xl text-blue-950 font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To empower businesses with customized, data-driven solutions that drive growth, enhance efficiency, and create sustainable competitive advantages in dynamic markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide every decision we make and every solution we deliver
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaHandshake className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-lg text-blue-950 font-bold mb-2">Integrity</h3>
            <p className="text-gray-600 text-sm">
              We maintain the highest ethical standards, ensuring transparency in all our dealings.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaUsers className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-2">Client Focus</h3>
            <p className="text-gray-600 text-sm">
              Your success is our priority. We listen, understand, and deliver beyond expectations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaLightbulb className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-blue-950 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              We embrace creative thinking to develop cutting-edge solutions for modern challenges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaChartLine className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-lg text-blue-950 font-bold mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              We pursue perfection in every service, setting industry benchmarks for quality.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover how Corporate Solutions can help you achieve your business objectives with our tailored services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300 font-medium"
            >
              Contact Us
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition duration-300 font-medium"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}