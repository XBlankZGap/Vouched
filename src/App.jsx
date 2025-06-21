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
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext'; 

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
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
          <BackToTop />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
// This is the main App component that sets up the routing and provides the AuthContext.
// It includes the Header, Footer, and other sections of the website.
// The Home component renders the main sections of the landing page.
// The App component uses React Router to define routes for the home page, analyze page, login, signup, and dashboard.
// The ProtectedRoute component ensures that only authenticated users can access the dashboard.
// The AuthProvider wraps the entire application to provide authentication context to all components.
// This code sets up the main structure of the application, including routing and authentication context.
// It uses React Router for navigation and includes components for the header, footer, and various sections of the landing page.    