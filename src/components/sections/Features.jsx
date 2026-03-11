import React from 'react';
import { Brain, Zap, FolderOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Powered Generation',
      description: 'Generate thumbnails instantly using advanced AI models that understand your content and create visually stunning designs.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Smart Prompt Processing',
      description: 'Optimized prompts ensure consistent and high-quality thumbnails that match your brand and content style perfectly.',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: FolderOpen,
      title: 'Personal Dashboard',
      description: 'Save and manage all generated thumbnails in one place with easy organization and quick access to your favorites.',
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">AI Features</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the next generation of thumbnail creation with our cutting-edge AI technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
            <div
              key={index}
              className="card-hover bg-gray-800 border border-gray-700 rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} aria-hidden></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`}></div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Additional Features Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Fast Generation', value: '< 5s' },
            { label: 'High Resolution', value: '4K' },
            { label: 'Multiple Styles', value: '50+' },
            { label: 'API Access', value: 'Yes' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
