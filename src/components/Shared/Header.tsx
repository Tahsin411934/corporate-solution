"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaBars, FaTimes, FaChevronRight, FaChevronDown } from "react-icons/fa";

const CorporateHeader = () => {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  
  // Refs
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Constants
  const contactNumber = "01909221707";

  // Menu data
  const menuItems = {
    main: [
      { href: "/", label: "Home" },
      { 
        label: "Company", 
        submenu: [
          { href: "/about", label: "About Us" },
          { href: "/team", label: "Our Team" },
          { href: "/mission", label: "Mission & Vision" }
        ]
      },
      { 
        label: "Our Services", 
        submenu: [
          { href: "/services/tax", label: "Tax & VAT Consultancy" },
          { href: "/services/registration", label: "Company Registration" },
          { href: "/services/license", label: "Trade License & Trademark" },
          { href: "/services/exportimportlicense", label: "Export & Import License" },
          { href: "/services/audit", label: "Company Audit" },
          { href: "/services/accounting", label: "Accounting Services" },
          { href: "/services/LoanProcessing", label: "Loan Processing" },
          { href: "/services/Advisory ", label: "Advisory Services" },
        ]
      },
      { href: "/contact", label: "Contact Us" },
      { 
        label: "Client Area", 
        submenu: [
          { href: "/client/login", label: "Client Login" },
          { href: "/client/register", label: "Register" },
          { href: "/client/dashboard", label: "Dashboard" }
        ]
      }
    ]
  };

  // Close all menus
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMobileActiveDropdown(null);
    }
  };

  // Toggle desktop dropdown
  const toggleDesktopDropdown = (dropdownName: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdownName: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileActiveDropdown(mobileActiveDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setMobileActiveDropdown(null);
      }
      
      // Close desktop dropdowns if clicked outside
      if (!(event.target as HTMLElement).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to set dropdown ref
  const setDropdownRef = (dropdownName: string) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[dropdownName] = el;
  };

  return (
    <header className="bg-white fixed w-full z-20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeAllMenus}>
            <div className="w-10 h-10 relative mr-2">
              <Image
                src="/logo.png"
                alt="Corporate Solution Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="lg:text-2xl text-base font-bold italic text-[#00026E]">
              CORPORATE <span className="text-yellow-600">SOLUTION</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.main.map((item) => (
              <div key={item.label} className="relative dropdown-container">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#00026E] hover:text-blue-600 font-medium py-2 transition-colors"
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="text-[#00026E] hover:text-blue-600 font-medium py-2 flex items-center"
                      onClick={toggleDesktopDropdown(item.label)}
                    >
                      {item.label}
                      <FaChevronDown
                        className={`ml-1 text-xs transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute bg-white shadow-lg rounded-md mt-1 py-1 w-60 z-30"
                        ref={setDropdownRef(item.label)}
                      >
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-[#00026E] hover:bg-blue-50"
                            onClick={closeAllMenus}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href={`tel:${contactNumber}`}
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                onClick={closeAllMenus}
              >
                <FaPhone />
              </a>
              <Link
                href={`https://wa.me/+88${contactNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors relative"
                onClick={closeAllMenus}
              >
                <span className="absolute animate-ping opacity-75 inline-flex h-full w-full rounded-full bg-green-100"></span>
                <FaWhatsapp className="z-10" />
              </Link>
            </div>
            <div>
              <p className="text-sm text-gray-600">Call Anytime</p>
              <a
                href={`tel:${contactNumber}`}
                className="text-md font-semibold text-gray-800 hover:underline"
                onClick={closeAllMenus}
              >
                {contactNumber}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href={`tel:${contactNumber}`}
              className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
              onClick={closeAllMenus}
            >
              <FaPhone />
            </a>
            
            <button
              onClick={toggleMobileMenu}
              className="text-[#00026E] focus:outline-none mobile-menu-button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-10 bg-black/50"
          onClick={closeAllMenus}
        >
          <div
            className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl"
            ref={mobileMenuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full flex flex-col overflow-hidden">
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <Link href="/" onClick={closeAllMenus} className="flex items-center">
                  <div className="w-8 h-8 relative mr-2">
                    <Image
                      src="/logo.png"
                      alt="Corporate Solution Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                 <span className="lg:text-2xl text-base font-bold italic text-[#00026E]">
              CORPORATE <span className="text-yellow-600">SOLUTION</span>
            </span>
                </Link>
                <button
                  onClick={closeAllMenus}
                  className="text-[#00026E] p-2 focus:outline-none hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-2">
                  {menuItems.main.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                          onClick={closeAllMenus}
                        >
                          <span className="font-medium">{item.label}</span>
                          <FaChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <div className="flex flex-col">
                          <button
                            onClick={toggleMobileDropdown(item.label)}
                            className="flex items-center justify-between py-3 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group w-full text-left"
                          >
                            <span className="font-medium">{item.label}</span>
                            <FaChevronRight
                              className={`text-blue-400 transition-transform duration-200 ${
                                mobileActiveDropdown === item.label ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          
                          {mobileActiveDropdown === item.label && (
                            <div className="pl-4">
                              {item.submenu?.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="flex items-center justify-between py-2 px-4 text-[#00026E] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                                  onClick={closeAllMenus}
                                >
                                  <span>{subItem.label}</span>
                                  <FaChevronRight className="text-blue-400 opacity-70" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Contact Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <a
                    href={`tel:${contactNumber}`}
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <FaPhone className="text-xl" />
                  </a>
                  <Link
                    href={`https://wa.me/+88${contactNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors relative"
                    onClick={closeAllMenus}
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
                    onClick={closeAllMenus}
                  >
                    {contactNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default CorporateHeader;