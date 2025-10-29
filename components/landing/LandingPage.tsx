import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import UseCases from './UseCases';
import Testimonials from './Testimonials';
import Footer from './Footer';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-white">
      <Navbar onGetStarted={onGetStarted} />
      <main>
        <Hero onGetStarted={onGetStarted} />
        <Features />
        <UseCases />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
