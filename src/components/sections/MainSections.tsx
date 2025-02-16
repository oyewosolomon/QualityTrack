import React, { useState } from 'react';
import { Shield, Cog, Database, Settings, Car, Cpu, ChevronRight, BarChart } from 'lucide-react';

const MainSections = () => {
  const [activeTab, setActiveTab] = useState('about');

  const solutions = [
    {
      icon: Shield,
      title: "AI-Powered Defect Detection",
      description: "Real-time analysis identifying defects such as cracks, misalignments, and surface imperfections with unmatched precision."
    },
    {
      icon: BarChart,
      title: "Waste Reduction Analytics",
      description: "Pinpoint inefficiencies in your production line to reduce material waste and optimize resource usage."
    },
    {
      icon: Database,
      title: "ERP Integration",
      description: "Seamless integration with major ERP platforms, ensuring smooth data flow and enabling better decision-making."
    },
    {
      icon: Settings,
      title: "Customizable Solutions",
      description: "Tailored solutions designed to meet your specific manufacturing needs and requirements."
    }
  ];

  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "From engine components to body panels, ensure every part meets the highest quality standards.",
      stats: "99% defect reduction"
    },
    {
      icon: Cpu,
      title: "Electronics",
      description: "Detect microscopic defects in circuit boards, semiconductors, and electronic components.",
      stats: "40% waste reduction"
    }
  ];

  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl" id='about-us'>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-blue-900">Who We Are</h2>
              <p className="text-lg text-gray-600">
                QualityTrack Solutions is a leader in AI-driven quality control systems, 
                dedicated to helping manufacturers achieve unparalleled precision and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "99.9%", label: "Accuracy Rate" },
                  { value: "40%", label: "Waste Reduction" },
                  { value: "24/7", label: "Monitoring" },
                  { value: "100%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                    <div className="text-sm text-blue-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-900 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
                <img 
                  src="/images/manufacturing.jpg"
                  alt="Manufacturing process"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-gray-50" id='solution'>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                id='solution'
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <solution.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
                <button className="mt-4 text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn more <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-blue-900/90 transition-all duration-300 group-hover:bg-blue-900/95" />
                <div className="relative p-8 text-white">
                  <industry.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-blue-100 mb-4">{industry.description}</p>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm inline-block">
                    <span className="font-bold">{industry.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;