import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Linkedin, Twitter, Youtube, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'Solutions',
      href: '/#solutions',
      dropdownItems: [
        { title: 'AI Detection', href: '/#ai-detection' },
        { title: 'Waste Analytics', href: '/#waste-analytics' },
        { title: 'ERP Integration', href: '/#erp-integration' },
        { title: 'Custom Solutions', href: '/#custom-solutions' }
      ]
    },
    {
      title: 'Industries',
      href: '/#industries',
      dropdownItems: [
        { title: 'Automotive', href: '/#automotive' },
        { title: 'Electronics', href: '/#electronics' },
        { title: 'Manufacturing', href: '/#manufacturing' }
      ]
    },
    {
      title: 'Resources',
      href: '/#resources',
      dropdownItems: [
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Blog', href: '/blog' },
        { title: 'Whitepapers', href: '/whitepapers' },
        { title: 'Webinars', href: '/webinars' }
      ]
    },
    { title: 'About Us', href: '/#about-us' },
    { title: 'Contact', href: '/#contact' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href='/' className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                QualityTrack
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className={`flex items-center space-x-1 py-2 ${
                      isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {item.dropdownItems && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdownItems.map((dropItem, idx) => (
                        <a
                          key={idx}
                          href={dropItem.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {dropItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Request Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <a
                  href={item.href}
                  className="w-full text-left px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                >
                  {item.title}
                </a>
                {item.dropdownItems && (
                  <div className="pl-6 space-y-2">
                    {item.dropdownItems.map((dropItem, idx) => (
                      <a
                        key={idx}
                        href={dropItem.href}
                        className="block px-3 py-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                      >
                        {dropItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 mt-4">
              Request Demo
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;