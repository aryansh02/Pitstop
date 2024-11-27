"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* PITSTOP Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">PITSTOP</h3>
          <p className="text-gray-400">Subscribe</p>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>
          {/* Subscribe Form */}
          <form className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-sm text-white px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 px-4 py-2 hover:bg-gray-500 transition"
            >
              <span className="text-white">&gt;</span>
            </button>
          </form>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Support</h3>
          <p className="text-gray-400 text-sm">pitstop@gmail.com</p>
        </div>

        {/* Account Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Download App</h3>
          <p className="text-gray-400 text-sm">Save $3 with App New User Only</p>
          {/* QR Code and App Links */}
          <div className="flex items-center gap-4">
            <img
              src="/qrcode.png"
              alt="QR Code"
              className="w-16 h-16"
            />
            <div className="flex flex-col gap-2">
              <img
                src="/googleplay.png"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="/appstore.png"
                alt="App Store"
                className="w-32"
              />
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <p className="text-center text-gray-400 text-sm">
          &copy; Copyright PITSTOP 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
}
