import React from "react";
import image1 from "../assets/demand.jpg";
import image2 from "../assets/competitor.jpg";
import image3 from "../assets/profit.jpg";
import image4 from "../assets/suggestion.jpg";

const services = [
  {
    title: "Demand Analysis",
    description:
      "Discover how in-demand your product is with our intelligent insight engine. We scan global trends, customer buzz, and product databases to predict how well your idea will perform before you even launch. Take the guesswork out of product selection and move forward with confidence.",
    image: image1,
  },
  {
    title: "Competitor Insights",
    description:
      "Stay ahead of the competition with in-depth analytics. We monitor who else is selling your product, where they’re advertising, what keywords they use, and how they position their brand. Learn from their strengths, spot their weaknesses, and dominate your market niche.",
    image: image2,
  },
  {
    title: "Profit Calculator",
    description:
      "Instantly forecast your margins. Vouched breaks down your product’s entire cost pipeline from sourcing to shipping to platform fees and shows you your expected profit at a glance. Know exactly what’s worth selling, and skip what isn’t.",
    image: image3,
  },
  {
    title: "Product Optimization",
    description:
      "Make your product irresistible. Our AI analyzes titles, images, descriptions, and metadata, then recommends enhancements based on proven patterns from top sellers. Whether you’re launching or refining, we help you shine in the crowded eCommerce space.",
    image: image4,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4 rounded-[2.5rem] shadow-2xl">
      <h3 className="font-sans text-4xl font-bold text-center mb-16 text-gray-800">
        What We Offer
      </h3>

      {services.map((service, index) => (
        <div
          key={index}
          className={`w-[85%] min-h-[60vh] mx-auto my-12 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between px-10 py-12
          ${index % 2 === 1 ? "bg-white/50 backdrop-blur-md" : "bg-white/30 backdrop-blur-md"}`}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h4 className="text-3xl font-extrabold text-blue-700 mb-6">
              {service.title}
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl text-justify">
              {service.description}
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-[85%] h-auto rounded-xl shadow-xl object-cover border-4 border-blue-500 transition duration-300 ease-in-out hover:brightness-110 hover:shadow-2xl"
            />

          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
