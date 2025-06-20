import React from "react";

const Analyze = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Analyze a Product</h2>
      <p className="mb-6 text-gray-600 max-w-xl mx-auto">
        Enter a product name or upload a CSV to analyze your product’s market viability, competition, and profitability.
      </p>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter product name"
          className="px-4 py-3 border rounded-lg"
        />
        <input
          type="file"
          accept=".csv, .xlsx"
          className="px-4 py-2 border rounded-lg"
        />
        <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Analyze Now
        </button>
      </form>
    </div>
  );
};

export default Analyze;
