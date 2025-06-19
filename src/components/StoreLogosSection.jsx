import React from "react";
import amazonLogo from "../assets/amazon.png";
import ebayLogo from "../assets/ebay.png";
import etsyLogo from "../assets/etsy.png";
import shopifyLogo from "../assets/shopify.png";
import jumiaLogo from "../assets/jumia.png";

const stores = [
  { name: "Amazon", logo: amazonLogo },
  { name: "eBay", logo: ebayLogo },
  { name: "Etsy", logo: etsyLogo },
  { name: "Shopify", logo: shopifyLogo },
  { name: "Jumia", logo: jumiaLogo },
];

const StoreLogosSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-12 font-sans">
        Sell With Confidence On Top Platforms
      </h3>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 max-w-6xl mx-auto">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center w-48 h-48"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoreLogosSection;
