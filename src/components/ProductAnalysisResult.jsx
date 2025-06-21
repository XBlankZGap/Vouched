import React from 'react';

const ProductAnalysisResult = ({ result }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 my-4">
      <h2 className="text-xl font-bold mb-2 text-green-700">Analysis Result</h2>
      <div className="space-y-2">
        <p><strong>Product:</strong> {result.productName}</p>
        <p><strong>Score:</strong> {result.score}</p>
        <p><strong>Insights:</strong> {result.insights}</p>
      </div>
    </div>
  );
};

export default ProductAnalysisResult;
