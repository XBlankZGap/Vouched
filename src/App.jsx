import React from 'react';
import { Button } from "@/components/ui/button";
import './App.css';

// Sections and Components
import Home from "./Home.jsx";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans p-4">
      <Header />
      <main className="mt-16">
        <HeroSection />
        <PricingSection />
        <ServicesSection />
        <Home /> {/* This will render your Home component */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
