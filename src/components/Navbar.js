import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
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

      {/* Правая часть: бургер-меню, основное меню, переключатель языка */}
      <div className="flex items-center space-x-4">
        {/* Бургер-кнопка для мобильных */}
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

        {/* Переключатель языка (уменьшенный кружок) */}
        <button
          onClick={toggleLanguage}
          className="w-6 h-6 bg-white text-black font-bold rounded-full flex items-center justify-center text-xs"
        >
          {i18n.language === "ru" ? "EN" : "RU"}
        </button>
      </div>

      {/* Мобильное меню (открывается при нажатии бургер-кнопки) */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-lg p-4 flex flex-col space-y-4 sm:hidden">
          <li><Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>{t("home")}</Link></li>
          <li><Link to="/product" className="hover:underline" onClick={() => setMenuOpen(false)}>{t("product")}</Link></li>
          <li><Link to="/solutions" className="hover:underline" onClick={() => setMenuOpen(false)}>{t("solutions")}</Link></li>
          <li><Link to="/resources" className="hover:underline" onClick={() => setMenuOpen(false)}>{t("resources")}</Link></li>
          <li><Link to="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>{t("about")}</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
