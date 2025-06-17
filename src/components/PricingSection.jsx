// src/components/PricingSection.jsx
import React from "react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100 text-center">
      <h3 className="text-3xl font-bold mb-8">Pricing Plans</h3>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-white shadow p-6 rounded-lg w-72">
          <h4 className="text-xl font-bold mb-4">Free</h4>
          <p className="text-gray-600 mb-4">Basic access to core tools</p>
          <p className="text-2xl font-bold mb-4">$0/month</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg w-72 border-2 border-blue-600">
          <h4 className="text-xl font-bold mb-4">Pro</h4>
          <p className="text-gray-600 mb-4">Full access + smart suggestions</p>
          <p className="text-2xl font-bold mb-4">$29/month</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
