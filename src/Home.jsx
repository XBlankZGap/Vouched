import { useState } from "react";

export default function HomePage() {
  const [product, setProduct] = useState("");
  const [insights, setInsights] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate fetching product insights
    setInsights({
      name: product,
      demand: "High",
      competition: "Medium",
      trend: "Rising"
    });
  };
  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Validate Your Product Ideas</h1>
      </header>

      <section className="mb-8">
        {/* Product Input Form */}
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter product name or URL"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="flex-grow border rounded px-4 py-2"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 rounded hover:bg-blue-700">
            Analyze
          </button>
        </form>
      </section>

      <section>
        {/* Product Insights */}
        <div className="bg-gray-50 p-6 rounded shadow min-h-[200px]">
          {insights ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">Results for: {insights.name}</h2>
              <ul className="list-disc pl-5">
                <li><strong>Demand:</strong> {insights.demand}</li>
                <li><strong>Competition:</strong> {insights.competition}</li>
                <li><strong>Trend:</strong> {insights.trend}</li>
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 italic">Product insights will appear here...</p>
          )}
        </div>
      </section>

      <section className="mt-12">
        {/* Charts placeholder */}
        <div className="bg-white p-6 rounded shadow min-h-[300px]">
          <p className="text-gray-400 italic">Trend and comparison charts will be here</p>
        </div>
      </section>
    </div>
  );
}
