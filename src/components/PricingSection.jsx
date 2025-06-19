import React from "react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100 text-center rounded-[2.5rem] shadow-2xl">
      <h3 className="font-sans text-3xl font-bold mb-12 text-gray-800">Pricing Plans</h3>
      
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto px-4">
        {/* Free Plan */}
        <div className="bg-white shadow p-6 rounded-2xl w-full md:w-1/3 flex flex-col justify-between text-center shadow-2xl">
          <div>
            <h4 className="text-xl font-bold mb-2 text-blue-600">Free</h4>
            <p className="text-gray-600 mb-2">Basic access to core tools</p>
            <p className="text-2xl font-bold mb-6">$0/month</p>

            <ul className="text-gray-700 text-sm space-y-3 mb-6 text-left list-disc list-inside min-h-[250px]">
              <li>Limited API Requests (100 validations/month)</li>
              <li>Basic Product Data Checks</li>
              <li>Single Validation Method (URL or SKU)</li>
              <li>Manual CSV Uploads (&lt;1MB)</li>
              <li>Basic Error Reports</li>
              <li>Public API Access (rate limits)</li>
            </ul>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-auto">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white shadow-lg p-6 rounded-2xl w-full md:w-1/3 flex flex-col justify-between text-center border-2 border-blue-600 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold mb-2 text-purple-700">Pro</h4>
            <p className="text-gray-600 mb-2">Full access + smart suggestions</p>
            <p className="text-2xl font-bold mb-6">$29/month</p>

            <ul className="text-gray-700 text-sm space-y-3 mb-6 text-left list-disc list-inside min-h-[250px]">
              <li>Unlimited API Requests</li>
              <li>AI-Powered Validation</li>
              <li>Multi-Source Validation (URL, SKU, barcode)</li>
              <li>Bulk CSV/Excel Processing</li>
              <li>Detailed Analytics Dashboard</li>
              <li>Custom Rules Engine</li>
              <li>Priority Support & SLA</li>
            </ul>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-auto">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
