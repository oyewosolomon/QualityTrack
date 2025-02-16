import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, BarChart2, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Activity, value: "99.9%", label: "Defect Detection" },
    { icon: BarChart2, value: "40%", label: "Waste Reduction" },
    { icon: Zap, value: "100%", label: "ERP Integration" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative container mx-auto px-6 py-24">
        <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white pb-2">
            Revolutionizing Quality Control with AI-Powered Precision
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-blue-100 text-center">
            At QualityTrack Solutions, we deliver cutting-edge manufacturing quality control systems powered by computer vision and artificial intelligence.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center space-x-4">
                  <stat.icon className="w-8 h-8 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-3xl font-bold text-blue-200">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;