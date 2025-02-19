import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      {/* Логотип и название */}
      <div className="flex items-center space-x-2">
        <img src={logo} className="w-8 h-8" alt="Logo" />
        <span className="text-lg sm:text-xl font-semibold whitespace-nowrap">
          Data In Sight
        </span>
      </div>

      {/* Кнопка (бургер) для мобильного */}
      <button
        className="block lg:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Список меню */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex space-x-4 text-sm sm:text-base lg:space-x-6`}
      >
        <li>Product</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;

