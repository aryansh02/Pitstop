"use client";

import React from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaCarBattery,
  FaCamera,
  FaHeadphones,
  FaArrowLeft,
  FaArrowRight,
  FaStopwatch,
} from "react-icons/fa";

export default function BrowseByCompany() {
  const companies = [
    { id: 1, name: "HKS", icon: <FaMobileAlt size={24} /> },
    { id: 2, name: "Brembo", icon: <FaDesktop size={24} /> },
    { id: 3, name: "Mishimoto", icon: <FaStopwatch size={24} /> },
    { id: 4, name: "Magna Flow", icon: <FaCamera size={24} /> },
    { id: 5, name: "Elbach", icon: <FaHeadphones size={24} /> },
    { id: 6, name: "Bilstein", icon: <FaCarBattery size={24} /> },
  ];

  return (
    <section className="py-8 bg-white">
  {/* Header Section */}
  <div className="flex flex-col gap-1 px-6 mb-6">
    {/* "Brands" */}
    <div className="flex items-center gap-2">
      <div className="w-2 h-8 bg-green-500"></div>
      <h3 className="text-green-500 text-lg font-semibold">Brands</h3>
    </div>

    {/* "Browse By Company" with Arrows */}
    <div className="flex justify-between items-center">
      <h2 className="text-3xl text-black font-bold mt-6 mb-6">
        Browse By Company
      </h2>
      <div className="flex items-center gap-4">
        <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
          <FaArrowLeft className="text-black" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
          <FaArrowRight className="text-black" />
        </button>
      </div>
    </div>
  </div>

  {/* Company Cards and Border */}
  <div className="px-6">
    {/* Company Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-[1800px] mx-auto">
      {companies.map((company) => (
        <div
          key={company.id}
          className="border rounded-xl w-64 h-64 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow mb-10"
        >
          {/* Icon */}
          <div className="text-green-500 mb-2">{company.icon}</div>
          {/* Company Name */}
          <h3 className="text-sm font-bold">{company.name}</h3>
        </div>
      ))}
    </div>

    {/* Border Below */}
    <div className="mt-8 border-b-2 border-gray-200 mx-6"></div>
  </div>
</section>

  );
}
