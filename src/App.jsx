import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StoreLogosSection from './components/StoreLogosSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analyze from './components/Analyze';

import Login from './pages/Login';
import Signup from './pages/Signup';

function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <HeroSection />
      <PricingSection />
      <ServicesSection />
      <StoreLogosSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/login" element={<Login />} />      
          <Route path="/signup" element={<Signup />} />    
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
