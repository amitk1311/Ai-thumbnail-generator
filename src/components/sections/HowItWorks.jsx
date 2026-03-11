import React from 'react';
import { Edit3, Sparkles, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit3,
      title: 'Enter your thumbnail idea',
      description: 'Describe your vision with a simple text prompt or upload a reference image to guide the AI.',
      number: '1',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Sparkles,
      title: 'AI generates a high-quality thumbnail',
      description: 'Our advanced AI processes your input and creates multiple stunning thumbnail options in seconds.',
      number: '2',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: Download,
      title: 'Download and use instantly',
      description: 'Choose your favorite thumbnail, make any final adjustments, and download it in high resolution.',
      number: '3',
      gradient: 'from-blue-600 to-teal-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Create professional thumbnails in three simple steps with our intuitive AI-powered platform
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 transform -translate-y-1/2"></div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="card-hover bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center relative">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.gradient} mb-6 mx-auto`}>
                    <StepIcon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} aria-hidden></div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">
              Average time from idea to thumbnail: <span className="text-white font-semibold">under 30 seconds</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
