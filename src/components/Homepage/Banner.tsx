'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const fullText = " Professional Experience";
  
  const images = [
   "/banner3.png",
    "/banner.gif",
    
    "/banner4.png"
  ];
  const slideInterval = 5000; // 5 seconds

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length]);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
        typingInterval = setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          deleteText();
        }, 3000);
      }
    };

    const deleteText = () => {
      if (currentIndex >= 0) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex--;
        typingInterval = setTimeout(deleteText, 50);
      } else {
        setIsTyping(true);
        setTimeout(typeText, 1000);
      }
    };

    typeText();

    return () => {
      clearTimeout(typingInterval);
    };
  }, []);

  // Manual slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[500px] bg-[#0c1a5e] overflow-hidden shadow-lg">
      {/* Background Images with sliding effect */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index 
              ? "opacity-100 z-0" 
              : "opacity-0 pointer-events-none z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Business Services Banner ${index + 1}`}
            fill
            priority={index === 0}
            quality={100}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content overlay */}
      <div className="relative z-[2] h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 text-white">
        
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug md:leading-tight mb-2 sm:mb-4 max-w-3xl">
          License & Registration, VAT & Taxation, Legal Services
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-4 sm:mb-6 text-gray-100">
          Expert consultation for all your business needs
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2 uppercase tracking-wider text-blue-200 min-h-[24px]">
         13 Years of {displayText}
          <span className={`inline-block w-1 h-5 sm:h-6 bg-blue-400 ml-1 align-middle ${isTyping ? 'opacity-100' : 'opacity-0'}`}></span>
        </p>
        <div className="flex flex-row gap-2 w-full sm:w-auto">
           <Link
          href="/contact"
          className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 bg-[#005FA5] hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-semibold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
          aria-label="Book your services now"
        >
          Book Your Services
        </Link>
          
          <a
            href="tel:+8801909221707"
            className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-lg text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-1 sm:gap-2"
            aria-label="Call us"
          >
            <FaPhone className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Call Us</span>
          </a>
          
          <a
            href="https://wa.me/8801909221707"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 rounded-lg text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-1 sm:gap-2"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-sm sm:text-base" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Slide indicators (dots) - Smaller on mobile */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-[2] flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-white sm:w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;