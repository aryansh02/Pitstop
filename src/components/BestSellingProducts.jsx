"use client";

import React from "react";
import ProductCard from "./ProductCard";

export default function BestSellingProducts() {
  const products = [
    {
      id: 1,
      name: "Nismo Gtr Ztune Bodykit",
      price: 260,
      originalPrice: 360,
      rating: 4.5,
      reviews: 65,
      image: "/nismo.jpg",
    },
    {
      id: 2,
      name: "Garrett Turbo",
      price: 960,
      originalPrice: 1160,
      rating: 4.0,
      reviews: 65,
      image: "/garrett.jpg",
    },
    {
      id: 3,
      name: "Valvetronic Exhaust",
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: "/valvetronic.jpg",
    },
    {
      id: 4,
      name: "Carbon Fiber Splitters",
      price: 360,
      originalPrice: null,
      rating: 5.0,
      reviews: 65,
      image: "/splitters.jpg",
    },
  ];

  return (
    <section className="py-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-col gap-1 px-6 mb-6">
        {/* "This Month" */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-green-500"></div>
          <h3 className="text-green-500 text-lg font-semibold">This Month</h3>
        </div>

        {/* "Best Selling Products" with "View All" Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-black font-bold mt-10 mb-10">
            Best Selling Products
          </h2>
          <button className="bg-green-500 text-white font-bold px-6 py-2 rounded shadow-sm hover:shadow-lg transition-shadow mt-10 mb-10">
            View All
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-[1800px] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
