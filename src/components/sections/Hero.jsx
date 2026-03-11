import React from 'react';
import { Play, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const mockThumbnails = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=169&fit=crop',
    'https://images.unsplash.com/photo-1579546929518-9e396f3a803d?w=300&h=169&fit=crop',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=169&fit=crop',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=169&fit=crop'
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-purple-400 font-medium">
                <Sparkles className="w-5 h-5" />
                <span>Powered by Advanced AI</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Generate Stunning
                <span className="gradient-text"> YouTube Thumbnails</span>
                <br />
                with AI
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Create eye-catching thumbnails in seconds using AI powered generation. 
                Perfect for YouTubers, creators and marketers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Generate Thumbnail</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>View Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-gray-400 text-sm">Thumbnails Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">99%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">AI Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Mockup */}
          <div className="relative">
            <div className="animate-float">
              {/* Main Preview Card */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">AI Generated Thumbnails</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Featured Thumbnail */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=338&fit=crop"
                    alt="Featured ThumbnailAI"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" aria-hidden></div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {mockThumbnails.map((thumbnail, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <img 
                        src={thumbnail}
                        alt={`ThumbnailAI ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                    Generate More
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                Instant Results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
