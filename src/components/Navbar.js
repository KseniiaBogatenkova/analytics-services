import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Управляет открытием выпадающего списка языков
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Управляет показом бургер-меню (на мобильных)
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // Закрыть список языков при выборе
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center relative">
      {/* Левая часть: логотип и название */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
        <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
          Data In Sight
        </span>
      </div>

      {/* Правая часть: кнопка бургера, меню, кнопка языка */}
      <div className="flex items-center space-x-4">
        {/* Бургер-кнопка для маленьких экранов */}
        <button
          className="text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Основное меню (Desktop) */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:underline">{t("home")}</Link></li>
          <li><Link to="/product" className="hover:underline">{t("product")}</Link></li>
          <li><Link to="/solutions" className="hover:underline">{t("solutions")}</Link></li>
          <li><Link to="/resources" className="hover:underline">{t("resources")}</Link></li>
          <li><Link to="/about" className="hover:underline">{t("about")}</Link></li>
        </ul>

        {/* Кнопка выбора языка (видна всегда) */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-white text-black px-3 py-1 rounded font-medium text-sm"
          >
            Язык / Language
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white text-black border border-gray-300 rounded-md shadow-lg z-50">
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-sm"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-sm"
              >
                Русский
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Мобильное меню (открывается при нажатии бургер-кнопки) */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-lg p-4 flex flex-col space-y-4 sm:hidden">
          <li>
            <Link
              to="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {t("product")}
            </Link>
          </li>
          <li>
            <Link
              to="/solutions"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {t("solutions")}
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {t("resources")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {t("about")}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

