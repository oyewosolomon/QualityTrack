import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight, Activity, BarChart2, Cog, X } from 'lucide-react';

const ProductDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      title: "Real-time Defect Detection",
      description: "Watch our AI system detect and classify manufacturing defects with 99.9% accuracy in real-time.",
      icon: Activity,
      videoUrl: "https://www.youtube.com/embed/MtSojiNQH_4?autoplay=1",
      features: [
        "Millisecond detection speed",
        "Multi-point inspection",
        "Automatic classification"
      ]
    },
    {
      title: "Waste Reduction Analytics",
      description: "See how our analytics dashboard helps manufacturers cut waste by up to 40%.",
      icon: BarChart2,
      videoUrl: "https://www.youtube.com/embed/MtSojiNQH_4?autoplay=1",
      features: [
        "Real-time monitoring",
        "Predictive maintenance",
        "Resource optimization"
      ]
    },
    {
      title: "ERP Integration Demo",
      description: "Experience seamless integration with your existing ERP systems for end-to-end quality control.",
      icon: Cog,
      videoUrl: "https://www.youtube.com/embed/MtSojiNQH_4?autoplay=1",
      features: [
        "Automated data sync",
        "Custom workflows",
        "Real-time reporting"
      ]
    }
  ];

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            See QualityTrack in Action
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch how our AI-powered quality control system revolutionizes manufacturing precision
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {demos.map((demo, index) => (
            <Card 
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                activeDemo === index 
                  ? 'border-blue-500 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => {
                setActiveDemo(index);
                setIsPlaying(false);
              }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  activeDemo === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
                }`}>
                  <demo.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{demo.description}</p>
                  <ul className="space-y-2">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden bg-white">
          <div className="relative aspect-video bg-gray-100">
            {isPlaying ? (
              <>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={demos[activeDemo].videoUrl}
                  title={demos[activeDemo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button 
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </>
            ) : (
              <>
                <img 
                  src="/images/move.jpg"
                  alt="Product demo visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button 
                    className="gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 rounded-full"
                    onClick={handlePlayClick}
                  >
                    <Play className="w-6 h-6" />
                    <span className="text-lg">Watch Demo</span>
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              {demos[activeDemo].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {demos[activeDemo].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Schedule Live Demo
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                Download Specs
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more?</p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
            View All Features <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;