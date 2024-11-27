"use client";

import React, { useEffect, useState } from "react";

export default function CategoriesBanner() {
  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
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
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-48 px-6 flex justify-center mx-24 mt-24 mb-32">

      <div className="max-w-6xl mx-auto w-full px-6">
        {/* Header */}
        <h3 className="text-green-500 text-lg font-semibold mb-4">Categories</h3>
        <h2 className="text-4xl font-bold mb-6">Enhance Your Automotive Experience</h2>
        
        {/* Timer */}
        <div className="flex gap-4 justify-start items-center mb-8">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-full border-4 border-white w-24 h-24"
            >
              <div className="text-3xl font-bold">{formatTime(item.value)}</div>
              <div className="text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-green-500 text-black font-bold px-6 py-3 rounded shadow-sm hover:shadow-lg transition-shadow">
          Buy Now!
        </button>
      </div>
    </section>
  );
}
