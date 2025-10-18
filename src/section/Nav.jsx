import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white text-black font-semibold text-lg shadow-md relative">
      <div className="text-2xl font-bold">Tarang</div>

      <div
        className="lg:hidden cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>

      {/* Desktop Nav Links */}
      <ul className="lg:flex hidden items-center gap-6">
        <li className="hover:text-blue-500 cursor-pointer">BOOK</li>
        <li className="hover:text-blue-500 cursor-pointer">MANAGE</li>
        <li className="hover:text-blue-500 cursor-pointer">EXPERIENCE</li>
        <li className="hover:text-blue-500 cursor-pointer">LOYALTY</li>
        <li className="hover:text-blue-500 cursor-pointer">HELP</li>
      </ul>

      {/* Sign Up Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all hidden lg:block">
        SIGN UP
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-blue-500 cursor-pointer">BOOK</li>
          <li className="hover:text-blue-500 cursor-pointer">MANAGE</li>
          <li className="hover:text-blue-500 cursor-pointer">EXPERIENCE</li>
          <li className="hover:text-blue-500 cursor-pointer">LOYALTY</li>
          <li className="hover:text-blue-500 cursor-pointer">HELP</li>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
            SIGN UP
          </button>
        </ul>
      </div>
    </nav>
  );
}
