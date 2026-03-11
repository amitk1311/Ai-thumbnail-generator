import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Limited Time: 50% OFF</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Start Creating
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              {" "}Thumbnails with AI
            </span>
            <br />
            Today
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who are already using AI to generate stunning thumbnails 
            that boost their views and engagement.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">Instant</div>
                <div className="text-sm text-gray-300">Generation</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4K</div>
                <div className="text-sm text-gray-300">Quality</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Available</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="group relative inline-flex items-center justify-center space-x-3 bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Generate Your First Thumbnail</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
