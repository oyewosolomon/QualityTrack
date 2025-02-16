import React from 'react';
import { ArrowRight, BookOpen, Video, Download, Users } from 'lucide-react';

const CaseStudiesResources = () => {
  const caseStudies = [
    {
      title: "Automotive Manufacturer Reduces Defects by 99%",
      company: "Leading Automotive Manufacturer",
      results: ["99% defect reduction", "35% waste reduction", "24/7 monitoring"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Electronics Company Cuts Waste by 40%",
      company: "Global Electronics Manufacturer",
      results: ["40% waste reduction", "99.9% accuracy", "ROI in 6 months"],
      image: "/api/placeholder/400/300"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Blog",
      description: "Stay updated on the latest trends in AI and quality control"
    },
    {
      icon: Download,
      title: "Whitepapers",
      description: "Download in-depth guides on optimizing manufacturing processes"
    },
    {
      icon: Video,
      title: "Webinars",
      description: "Join our experts for live sessions on implementing AI"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{study.company}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{study.title}</h3>
                  <div className="space-y-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <resource.icon className="w-8 h-8 mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-blue-100 mb-4">{resource.description}</p>
                <button className="flex items-center gap-1 text-blue-300 group-hover:gap-2 transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesResources;