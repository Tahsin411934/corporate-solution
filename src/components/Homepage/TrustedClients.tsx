"use client"
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const TrustedClients = () => {
  const clients = [
    { name: "ACI Limited", logo: "/clients/aci.png" },
    { name: "Beximco Pharmaceuticals", logo: "/clients/beximco.png" },
    { name: "Square Group", logo: "/clients/square.png" },
    // { name: "Cloundone", logo: "/clients/cloudone.jpg" },
    { name: "Walton Group", logo: "/clients/walton.jpg" },
    { name: "Bashundhara Group", logo: "/clients/bashundhara.jpg" },
    { name: "City Group", logo: "/clients/citygroup.jpg" },
    // { name: "Bookme", logo: "/clients/bookme.png" },
    { name: "Navana Group", logo: "/clients/navana.jpg" },
    { name: "MGH Group", logo: "/clients/mgh.jpg" },
    { name: "Partex Group", logo: "/clients/partex.jpg" },
    { name: "Nitol Niloy Group", logo: "/clients/nitol.png" },
    { name: "Ha-Meem Group", logo: "/clients/hameem.png" },
    { name: "Doreen Group", logo: "/clients/doreen.jpg" },
  ];

  const stats = [
    { value: "13+", label: "Years of Industry Experience", icon: "🏆" },
    { value: "5000+", label: "Enterprise Clients Served", icon: "🏢" },
    { value: "100%", label: "Client Satisfaction Rate", icon: "⭐" },
    { value: "24/7", label: "Dedicated Support", icon: "🛡️" },
  ];

  const testimonials = [
    
    {
      quote: "Exceptional service and support. Their team went above and beyond to deliver our project on time while exceeding our expectations.",
      name: "Fatima Ahmed",
      position: "Head of IT, Beximco Pharmaceuticals"
    },
   
    {
      quote: "Innovative solutions tailored to our specific needs. Their understanding of the local market is unparalleled in the industry.",
      name: "Nusrat Jahan",
      position: "Digital Transformation Lead, Bashundhara Group"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-scroll for client logos
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(scroll, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Trusted By Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with Bangladesh&apos;s most respected organizations to deliver exceptional results
            and innovative solutions
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Clients Marquee */}
        <div 
          ref={scrollContainerRef}
          className="relative overflow-hidden py-4"
        >
          <div className="flex items-center space-x-8 whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${index}-${client.name}`}
                className="group flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 w-48"
              >
                <div className="relative w-full h-16 mb-3">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain object-center transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 text-center transition-opacity duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

        {/* Professional Trust Badges */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">
            Our Commitment to Excellence
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative h-56 md:h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center ${
                    index === activeTestimonial 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="max-w-3xl mx-auto text-center px-4">
                    <div className="text-blue-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-8">
                      <div className="font-bold text-blue-700">{testimonial.name}</div>
                      <div className="text-sm text-blue-500 font-medium">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-125' 
                      : 'bg-blue-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;