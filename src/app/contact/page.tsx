// app/contact/page.tsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 pt-16 min-h-screen">
      {/* Hero Section with Image Overlay */}
      <div className="relative bg-blue-900 text-white py-24 md:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('/images/office-building.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Corporate Solutions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Reach out to our expert team for personalized business solutions and professional support.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Card 1 - Phone */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaPhone className="text-blue-700 text-xl md:text-2xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Available 24/7 for urgent inquiries</p>
            <div className="space-y-1 md:space-y-2">
              <a 
                href="tel:01909221707" 
                className="block text-blue-700 text-sm md:text-base font-medium hover:underline"
              >
                01909 221707
              </a>
              <a 
                href="https://wa.me/8801909221707" 
                className="flex items-center justify-center gap-2 text-green-600 text-sm md:text-base font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Card 2 - Email */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaEnvelope className="text-blue-700 text-xl md:text-2xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">We respond within 24 hours</p>
            <a
              href="mailto:Corporatesolutionctg@gmail.com"
              className="text-blue-700 text-sm md:text-base font-medium hover:underline break-all"
            >
              Corporatesolutionctg@gmail.com
            </a>
          </div>

          {/* Contact Card 3 - Address */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-3 md:mb-4">
              <FaMapMarkerAlt className="text-blue-700 text-xl md:text-2xl" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Schedule an appointment for consultation</p>
            <address className="text-blue-700 text-sm md:text-base font-medium not-italic">
              2nd Floor, TSN Complex<br />
              89/90, Agrabad C/A<br />
              Chittagong, Bangladesh
            </address>
          </div>
        </div>
      </div>

      {/* Direct Contact CTA */}
      <div className="bg-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Prefer Direct Contact?</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg mb-6 md:mb-8">
              For immediate assistance, call us directly or message us on WhatsApp. Our team is ready to help with your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a 
                href="tel:01909221707" 
                className="bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-blue-800 transition duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaPhone /> Call Now
              </a>
              <a 
                href="https://wa.me/8801909221707" 
                className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-700 transition duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Our Office Hours</h2>
          <div className="max-w-md mx-auto bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <FaClock className="text-blue-700 text-xl md:text-2xl mr-2 md:mr-3" />
              <span className="text-base md:text-lg font-medium">Sunday - Thursday: 9AM - 6PM</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Closed on Fridays, Saturdays, and public holidays
            </p>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              <p className="text-xs md:text-sm text-gray-500">
                For urgent matters outside office hours, please call our emergency support line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6890555627646!2d91.8253143154463!3d22.338526847127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89b5e0e6a1f%3A0x9a5b3b3b3b3b3b3b!2sTSN%20Complex%2C%2089%2F90%2C%20Agrabad%20C%2FA%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
              title="Corporate Solutions Location"
            ></iframe>
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Our office is conveniently located in the heart of Agrabad Commercial Area, 
              with easy access to parking and public transportation.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}