import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold italic whitespace-nowrap">
          Data In Sight
        </span>
      </div>

      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:underline">
            Product
          </Link>
        </li>
        <li>
          <Link to="/solutions" className="hover:underline">
            Solutions
          </Link>
        </li>
        <li>
          <Link to="/resources" className="hover:underline">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
