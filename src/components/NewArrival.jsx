"use client";

export default function NewArrival() {
  const items = [
    {
      id: 1,
      title: "Brembo Racing Brakes",
      description: "Black and White version of the PS5 coming out on sale.",
      cta: "Shop Now",
      large: true,
    },
    {
      id: 2,
      title: "Valvetronic Exhaust Systems",
      description: "Featured woman collections that give you another vibe.",
      cta: "Shop Now",
      large: false,
    },
    {
      id: 3,
      title: "Window Tints",
      description: "Amazon wireless speakers.",
      cta: "Shop Now",
      large: false,
    },
    {
      id: 4,
      title: "Bodykits",
      description: "GUCCI INTENSE OUD EDP",
      cta: "Shop Now",
      large: false,
    },
  ];

  return (
    <section className="py-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-col gap-1 px-6 mb-6">
        {/* "Featured" */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-green-500"></div>
          <h3 className="text-green-500 text-lg font-semibold">Featured</h3>
        </div>

        {/* "New Arrival" */}
        <h2 className="text-3xl text-black font-bold mt-10 mb-10">New Arrival</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-6 px-6 max-w-[1800px] mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative bg-gradient-to-t from-black to-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-end ${
              item.id === 1
                ? "col-span-2 row-span-2 h-[625px]" // Larger grid item for "Brembo Racing Brakes"
                : item.id === 2
                ? "col-span-2 row-span-1 h-[300px]" // Spans across columns 3 and 4 for "Valvetronic Exhaust Systems"
                : item.id === 3
                ? "col-span-1 row-start-2 col-start-4 h-[300px]" // Positioned in the 4th column, 2nd row for "Window Tints"
                : "col-span-1 row-start-2 col-start-3 h-[300px]" // Positioned in the 3rd column, 2nd row for "Bodykits"
            }`}
          >
            {/* Text Background for Visibility */}
            <div className="bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 rounded-lg">
              {/* Title and Description */}
              <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-sm mb-4 text-gray-200">{item.description}</p>
              {/* Call-to-Action */}
              <a href="#" className="text-green-500 font-semibold hover:underline">
                {item.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
