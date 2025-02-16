import React from 'react';

import { Menu, X, ChevronDown, Linkedin, Twitter, Youtube, Phone, Mail } from 'lucide-react';


const Footer = () => {
  const footerLinks = {
    'Quick Links': ['About Us', 'Solutions', 'Industries', 'Resources', 'Contact'],
    'Solutions': ['AI Detection', 'Waste Analytics', 'ERP Integration', 'Custom Solutions'],
    'Resources': ['Case Studies', 'Blog', 'Whitepapers', 'Webinars'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };
  return (
    
      <footer className="bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact information */}
          <div className="border-t border-blue-800 pt-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold mb-4">Contact Us</h3>
                <div className="flex items-center gap-3 text-blue-100">
                  <Phone className="w-5 h-5" />
                  +1 (800) 555-1234
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <Mail className="w-5 h-5" />
                  info@qualitytracksolutions.com
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { Icon: Linkedin, label: 'LinkedIn' },
                    { Icon: Twitter, label: 'Twitter' },
                    { Icon: Youtube, label: 'YouTube' }
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; {new Date().getFullYear()} QualityTrack Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};


export default Footer;