import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      <Header />

     
      <main className="flex-grow mt-16 p-4">
        <HeroSection />
        <PricingSection />
        <ServicesSection />
      </main>

      
      <Footer />
    </div>
  );
}


export default App;
