export default function TopBar() {
  return (
    <div className="fixed w-full h-[48px] top-0 left-0 bg-black text-white text-sm px-6 flex justify-center items-center z-20">
      {/* Centered Content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
        <span>Summer Sale For All Cosmetic Mods And Free Delivery - OFF 50%!</span>
        <a href="#" className="underline hover:text-gray-300 whitespace-nowrap">
          Shop Now
        </a>
      </div>

      {/* Right-Aligned Content */}
      <div className="absolute right-20 flex items-center">
        <span>English</span>
        <span className="ml-1">▼</span>
      </div>
    </div>
  );
}
