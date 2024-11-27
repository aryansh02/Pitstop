import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  return (
    <div className="w-full h-[90px] bg-white flex items-center justify-between px-6 border-b border-gray-300 fixed top-[48px] left-0 z-10">
      {/* Logo */}
      <div className="px-10 font-bold text-2xl">PITSTOP</div>

      {/* Links */}
      <div className="flex flex-row gap-8">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#signup" className="hover:underline">Sign Up</a>
      </div>

      {/* Search and Icons */}
      <div className="flex flex-row items-center gap-6">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-4 py-2 pr-10 w-full border border-gray-300 rounded-md text-sm focus:outline-none"
          />
          <button className="absolute right-2 top-2.5 text-gray-500">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <button className="hover:text-gray-500">
          <i className="far fa-heart"></i>
        </button>
        <button className="hover:text-gray-500">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}
