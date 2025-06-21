import React, { useState } from "react";
import ProductAnalysisResult from '../components/ProductAnalysisResult';
import api from '../utils/axios'; // your configured Axios instance

const Analyze = () => {
  const [productName, setProductName] = useState('');
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const formData = new FormData();

      if (file) {
        formData.append('file', file);
      } else if (productName) {
        formData.append('productName', productName);
      } else {
        throw new Error('Please enter a product name or upload a file');
      }

      const res = await api.post('/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to analyze product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Analyze a Product</h2>
      <p className="mb-6 text-gray-600 max-w-xl mx-auto">
        Enter a product name or upload a CSV to analyze your product’s market viability, competition, and profitability.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="px-4 py-3 border rounded-lg"
        />

        <input
          type="file"
          accept=".csv, .xlsx"
          onChange={(e) => setFile(e.target.files[0])}
          className="px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          {loading ? 'Analyzing...' : 'Analyze Now'}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {result && (
        <div className="mt-8">
          <ProductAnalysisResult result={result} />
        </div>
      )}
    </div>
  );
};

export default Analyze;
