import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-20 px-6 bg-white" id='contact'>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-blue-900">Get Started</h2>
              <p className="text-lg text-gray-600">
                Ready to transform your quality control process? Contact us today to schedule a demo or speak with one of our experts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  +1 (800) 555-1234
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  info@qualitytracksolutions.com
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  123 Innovation Drive, Tech City, TX 75001
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input 
                  type="text" 
                  placeholder="Company" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
   