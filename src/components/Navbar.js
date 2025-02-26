import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // Закрываем меню после выбора языка
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      {/* Логотип */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-xl sm:text-2xl font-semibold italic whitespace-nowrap">
          Data In Sight
        </span>
      </div>

      {/* Меню */}
      <ul className="hidden sm:flex space-x-6 text-lg">
        <li><Link to="/" className="hover:underline">{t("home")}</Link></li>
        <li><Link to="/product" className="hover:underline">{t("product")}</Link></li>
        <li><Link to="/solutions" className="hover:underline">{t("solutions")}</Link></li>
        <li><Link to="/resources" className="hover:underline">{t("resources")}</Link></li>
        <li><Link to="/about" className="hover:underline">{t("about")}</Link></li>
      </ul>

      {/* Кнопка выбора языка */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-white text-black px-3 py-1 rounded-md font-semibold"
        >
          Язык / Language
        </button>

        {/* Выпадающее меню */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black border border-gray-300 rounded-md shadow-lg">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Русский
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
