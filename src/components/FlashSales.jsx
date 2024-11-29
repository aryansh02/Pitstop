"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



export default function FlashSales() {
  const products = [
    {
      id: 1,
      name: "Air Intake System",
      price: 120,
      originalPrice: 200,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "/air-intake.jpg",
    },
    {
      id: 2,
      name: "Exhaust Systems",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.0,
      reviews: 75,
      image: "/exhaust.jpg",
    },
    {
      id: 3,
      name: "Turbocharger",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5.0,
      reviews: 99,
      image: "/turbocharger.jpg",
    },
    {
      id: 4,
      name: "Performance Header",
      price: 375,
      originalPrice: 500,
      discount: 25,
      rating: 4.5,
      reviews: 99,
      image: "/header.jpg",
    },
  ];

  // Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval
  }, []);

  // Format time for display
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <section className="py-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-col gap-1 px-6 mb-6">
        {/* "Today's" */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-green-500"></div>
          <h3 className="text-green-500 text-lg font-semibold">Today&apos;s</h3>
        </div>

        {/* "Flash Sales" with Timer and Arrows */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl text-black font-bold mt-6 mb-6">Flash Sales</h2>
            {/* Dynamic Timer */}
            <div className="text-black font-bold text-3xl flex items-center gap-1 mt-6 mb-6">
              <span>{formatTime(timeLeft.days)}</span>
              <span className="text-red-500">:</span>
              <span>{formatTime(timeLeft.hours)}</span>
              <span className="text-red-500">:</span>
              <span>{formatTime(timeLeft.minutes)}</span>
              <span className="text-red-500">:</span>
              <span>{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-4 mt-6 mb-6">
            <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
              <FaArrowLeft className="text-black" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
              <FaArrowRight className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-[1800px] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Products Button */}
      <div className="mt-10 px-6">
        <div className="flex justify-center">
          <button className="bg-green-500 text-white font-bold px-6 py-3 rounded mt-10 mb-10 shadow-sm hover:shadow-lg transition-shadow">
            View All Products
          </button>
        </div>
        {/* Border below the button */}
       <div className="mt-10 border-b-2 border-gray-200 mx-6"></div>
      </div>

    </section>
  );
}
