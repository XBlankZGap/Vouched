import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';



function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      <Header />

     
      <main className="flex-grow">

        <HeroSection />
        <PricingSection />
        <ServicesSection />
      </main>
<BackToTop />
      
      <Footer />
    </div>
  );
}


export default App;
