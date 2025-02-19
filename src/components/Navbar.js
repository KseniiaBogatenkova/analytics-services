import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      {/* Шапка (логотип + кнопка) */}
      <div className="flex items-center justify-between">
        {/* Логотип и название */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="text-xl sm:text-2xl font-semibold italic whitespace-nowrap">
            Data In Sight
          </span>
        </div>

        {/* Кнопка бургера: показывается только на маленьких экранах */}
        <button
          className="text-2xl sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Пункты меню */}
      <ul
        className={`
          mt-4 sm:mt-0 
          ${isOpen ? "block" : "hidden"} 
          sm:flex sm:space-x-6 text-lg
        `}
      >
        <li>
          <Link to="/" className="hover:underline block py-1 sm:py-0">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:underline block py-1 sm:py-0">
            Product
          </Link>
        </li>
        <li>
          <Link to="/solutions" className="hover:underline block py-1 sm:py-0">
            Solutions
          </Link>
        </li>
        <li>
          <Link to="/resources" className="hover:underline block py-1 sm:py-0">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline block py-1 sm:py-0">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
