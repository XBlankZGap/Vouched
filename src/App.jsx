import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StoreLogosSection from "./components/StoreLogosSection";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analyze from './components/Analyze';

function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PricingSection />
        <ServicesSection />
        <StoreLogosSection />
      </main>
      

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}


export default App;
