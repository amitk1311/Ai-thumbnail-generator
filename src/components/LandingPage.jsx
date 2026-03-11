import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import Preview from './sections/Preview';
import CTA from './sections/CTA';
import Footer from './layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Preview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
