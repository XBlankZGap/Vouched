// src/components/ServicesSection.jsx
import React from "react";

const ServicesSection = () => {
  const services = [
    "Market demand analysis",
    "Competitor review insights",
    "Profitability calculator",
    "Product improvement suggestion",
  ];

  return (
    <section id="services" className="py-20 text-center">
      <h3 className="text-3xl font-bold mb-8">What We Offer</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded shadow">
            <p className="text-lg text-gray-700">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
