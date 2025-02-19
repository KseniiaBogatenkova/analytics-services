import React from "react";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-4">
      {/* Логотип и название */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <span className="text-2xl font-bold italic">Data In Sight</span>
      </div>

      {/* Меню */}
      <ul className="flex space-x-6 text-lg">
        <li className="hover:underline cursor-pointer">Product</li>
        <li className="hover:underline cursor-pointer">Solutions</li>
        <li className="hover:underline cursor-pointer">Resources</li>
        <li className="hover:underline cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;


