"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaBars, FaTimes, FaChevronRight, FaChevronDown } from "react-icons/fa";

const CorporateHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Static contact number
  const contactNumber = "01909221707";

  return (
    <header className="bg-white fixed w-full z-20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 relative mr-2">
              <Image
                src="/logo.png" // Replace with your logo path
                alt="Corporate Solution Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="lg:text-2xl text-base font-bold italic text-[#00026E] ">CORPORATE <span className="text-yellow-600">SOLUTION</span> </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-[#00026E] hover:text-blue-600 font-medium py-2 transition-colors">
              Home
            </Link>
            
            <div className="group relative">
              <button className="text-[#00026E] hover:text-blue-600 font-medium py-2 flex items-center">
                Company
                <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-1 w-48 z-30">
                <Link href="/about" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  About Us
                </Link>
                <Link href="/team" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Our Team
                </Link>
                <Link href="/mission" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Mission & Vision
                </Link>
              </div>
            </div>
            
            <div className="group relative">
              <button 
                className="text-[#00026E] hover:text-blue-600 font-medium py-2 flex items-center"
                onClick={toggleServices}
              >
                Our Services
                <FaChevronDown className={`ml-1 text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute ${isServicesOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-md mt-1 py-1 w-56 z-30`}>
                <Link href="/services/tax" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Tax & VAT Consultancy
                </Link>
                <Link href="/services/registration" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Company Registration
                </Link>
                <Link href="/services/license" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Trade License
                </Link>
                <Link href="/services/audit" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Company Audit
                </Link>
                <Link href="/services/accounting" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Accounting Services
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="text-[#00026E] hover:text-blue-600 font-medium py-2 transition-colors">
              Contact Us
            </Link>
            
            <div className="group relative">
              <button className="text-[#00026E] hover:text-blue-600 font-medium py-2 flex items-center">
                Client Area
                <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-1 w-48 right-0 z-30">
                <Link href="/client/login" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Client Login
                </Link>
                <Link href="/client/register" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Register
                </Link>
                <Link href="/client/dashboard" className="block px-4 py-2 text-[#00026E] hover:bg-blue-50">
                  Dashboard
                </Link>
              </div>
            </div>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a 
                href={`tel:${contactNumber}`} 
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
              >
                <FaPhone />
              </a>
              <Link
                href={`https://wa.me/+88${contactNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors relative"
              >
                <span className="absolute animate-ping opacity-75 inline-flex h-full w-full rounded-full bg-green-100"></span>
                <FaWhatsapp className="z-10" />
              </Link>
            </div>
            <div>
              <p className="text-sm text-gray-600">Call Anytime</p>
              <a href={`tel:${contactNumber}`} className="text-md font-semibold text-gray-800 hover:underline">
                {contactNumber}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button and Icons */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a 
                href={`tel:${contactNumber}`} 
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
              >
                <FaPhone />
              </a>
              <Link
                href={`https://wa.me/+88${contactNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors"
              >
                <FaWhatsapp />
              </Link>
            </div>
            
            <button 
              onClick={toggleMobileMenu}
              className="text-[#00026E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMobileMenu}
        ></div>
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full flex flex-col overflow-hidden">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Link href="/" onClick={closeMobileMenu} className="flex items-center">
                <div className="w-8 h-8 relative mr-2">
                  <Image
                    src="/logo.png" // Replace with your logo path
                    alt="Corporate Solution Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold italic">CORPORATE SOLUTION</span>
              </Link>
              <button 
                onClick={closeMobileMenu}
                className="text-[#00026E] p-2 focus:outline-none hover:bg-gray-100 rounded-full"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-2">
                <li>
                  <Link
                    href="/"
                    className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                    onClick={closeMobileMenu}
                  >
                    <span className="font-medium">Home</span>
                    <FaChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                
                <li>
                  <div className="flex flex-col ">
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                    >
                      <span className="font-medium">Our Services</span>
                      <FaChevronRight className={`text-blue-400 transition-transform duration-200 ${isServicesOpen ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="pl-4">
                        <Link
                          href="/services/tax"
                          className="flex items-center justify-between py-2 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                          onClick={closeMobileMenu}
                        >
                          <span>Tax & VAT Consultancy</span>
                          <FaChevronRight className="text-blue-400 opacity-70" />
                        </Link>
                        <Link
                          href="/services/registration"
                          className="flex items-center justify-between py-2 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                          onClick={closeMobileMenu}
                        >
                          <span>Company Registration</span>
                          <FaChevronRight className="text-blue-400 opacity-70" />
                        </Link>
                        <Link
                          href="/services/license"
                          className="flex items-center justify-between py-2 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                          onClick={closeMobileMenu}
                        >
                          <span>Trade License</span>
                          <FaChevronRight className="text-blue-400 opacity-70" />
                        </Link>
                        <Link
                          href="/services/audit"
                          className="flex items-center justify-between py-2 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                          onClick={closeMobileMenu}
                        >
                          <span>Company Audit</span>
                          <FaChevronRight className="text-blue-400 opacity-70" />
                        </Link>
                      </div>
                    )}
                  </div>
                </li>
                
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                    onClick={closeMobileMenu}
                  >
                    <span className="font-medium">Contact Us</span>
                    <FaChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                    onClick={closeMobileMenu}
                  >
                    <span className="font-medium">About Us</span>
                    <FaChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/login"
                    className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                    onClick={closeMobileMenu}
                  >
                    <span className="font-medium">Client Login</span>
                    <FaChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Contact Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
              <div className="flex items-center space-x-4 mb-4">
                <a 
                  href={`tel:${contactNumber}`} 
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                >
                  <FaPhone className="text-xl" />
                </a>
                <Link
                  href={`https://wa.me/${contactNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors relative"
                >
                  <span className="absolute animate-ping opacity-75 inline-flex h-full w-full rounded-full bg-green-400"></span>
                  <FaWhatsapp className="text-xl z-10" />
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-600">Call Anytime</p>
                <a 
                  href={`tel:${contactNumber}`} 
                  className="text-md font-semibold text-gray-800 hover:underline"
                >
                  {contactNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CorporateHeader;