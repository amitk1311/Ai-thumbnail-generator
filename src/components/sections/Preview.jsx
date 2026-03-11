import React, { useState } from 'react';
import { ZoomIn, Download, Heart, Share2 } from 'lucide-react';

const Preview = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const thumbnails = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400&h=225&fit=crop',
      title: 'Tech Review Thumbnail',
      category: 'Technology'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1542751371-adc38148e657?w=400&h=225&fit=crop',
      title: 'Gaming Content',
      category: 'Gaming'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      title: 'Educational Video',
      category: 'Education'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=225&fit=crop',
      title: 'Travel Vlog',
      category: 'Travel'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=225&fit=crop',
      title: 'Food Channel',
      category: 'Food'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=225&fit=crop',
      title: 'Music Video',
      category: 'Music'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sample <span className="gradient-text">Thumbnails</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the variety of stunning thumbnails you can create with our AI generator
          </p>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thumbnails.map((thumbnail, index) => (
            <div
              key={thumbnail.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Glow Effect - behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 pointer-events-none" aria-hidden></div>
              {/* Thumbnail Container */}
              <div className="relative z-10 overflow-hidden rounded-xl bg-gray-800 border border-gray-700 transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={thumbnail.url}
                    alt={thumbnail.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-white font-semibold text-sm">{thumbnail.title}</h3>
                        <p className="text-gray-300 text-xs">{thumbnail.category}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                          <Download className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                          <Share2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zoom Indicator */}
                <div className={`absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                  {thumbnail.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="btn-secondary">
            View More Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default Preview;
