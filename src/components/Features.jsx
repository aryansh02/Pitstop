"use client";

import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <FaTruck className="text-white text-3xl" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <FaHeadphones className="text-white text-3xl" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-white text-3xl" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
            {/* Description */}
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
