export default function Sidebar() {
  const menuItems = [
    "Aesthetic Mods",
    "Performance Mods",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
    "Item",
  ];

  return (
    <div className="p-4 flex flex-col gap-4 bg-white h-full">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center text-lg hover:underline cursor-pointer pl-2 pt-4" // Adjusted padding-left
        >
          <span>
            {item}
            {index < 2 && <span className="text-gray-400 pl-1">&gt;</span>} {/* Arrow directly next to text */}
          </span>
        </div>
      ))}
    </div>
  );
}
