"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ExploreProducts() {
  const products = [
    // First row products
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: 100,
      originalPrice: 120,
      rating: 3.5,
      reviews: 35,
      image: "/dogfood.jpg",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: 360,
      originalPrice: 400,
      rating: 4.5,
      reviews: 95,
      image: "/dslr.jpg",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      originalPrice: 800,
      rating: 5.0,
      reviews: 325,
      image: "/laptop.jpg",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: 500,
      originalPrice: 600,
      rating: 4.0,
      reviews: 145,
      image: "/curology.jpg",
    },

    // Second row products
    {
      id: 5,
      name: "Kids Electric Car",
      price: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviews: 65,
      image: "/electriccar.jpg",
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      originalPrice: 1260,
      rating: 5.0,
      reviews: 35,
      image: "/soccercleats.jpg",
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      originalPrice: 700,
      rating: 4.5,
      reviews: 55,
      image: "/gamepad.jpg",
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: 660,
      originalPrice: 760,
      rating: 4.5,
      reviews: 55,
      image: "/jacket.jpg",
    },
  ];

  return (
    <section className="py-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-col gap-1 px-6 mb-6">
        {/* "Our Products" */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-green-500"></div>
          <h3 className="text-green-500 text-lg font-semibold">Our Products</h3>
        </div>

        {/* "Explore Our Products" with Arrows */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-black font-bold mt-10 mb-10">
            Explore Our Products
          </h2>
          <div className="flex items-center gap-4 mt-10 mb-10">
            <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
              <FaArrowLeft className="text-black" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
              <FaArrowRight className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grids */}
      <div className="px-6 max-w-[1800px] mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 mb-20">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 mb-20">
          {products.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-10">
          <div className="flex justify-center">
            <button className="bg-green-500 text-white font-bold px-6 py-3 rounded shadow-sm hover:shadow-lg transition-shadow">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
