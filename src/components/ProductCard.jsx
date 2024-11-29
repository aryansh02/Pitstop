"use client";

import { FaHeart, FaEye } from "react-icons/fa";
import Image from 'next/image';


export default function ProductCard({ product }) {
  return (
    <div className="product-card relative border rounded-lg shadow-sm">
      {/* Discount Label */}
      {product.discount && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          -{product.discount}%
        </div>
      )}
      {/* Icons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button className="p-1 bg-white rounded-full shadow">
          <FaHeart className="text-black" />
        </button>
        <button className="p-1 bg-white rounded-full shadow">
          <FaEye className="text-black" />
        </button>
      </div>
      {/* Image */}
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      {/* Add to Cart */}
      <button className="bg-black text-white text-sm py-2 w-full">
        Add to Cart
      </button>
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-sm">{product.name}</h3>
        <p className="text-green-500 font-bold text-sm">${product.price}</p>
        {product.originalPrice && (
          <p className="line-through text-gray-500 text-xs">
            ${product.originalPrice}
          </p>
        )}
        {/* Star Ratings */}
        <div className="flex items-center text-yellow-500 text-sm mt-2">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
        </div>
        {/* Color Options */}
        {product.colors && (
          <div className="flex gap-2 mt-3">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
