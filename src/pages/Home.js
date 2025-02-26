import React from "react";
import { useTranslation } from "react-i18next";
import myImage from "../assets/myimage.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <p className="text-lg mb-6">{t("description")}</p>

      {/* Картинка */}
      <img
        src={myImage}
        alt="Analytics"
        className="w-1/2 mx-auto mb-6 rounded shadow-lg"
      />

      {/* Contact Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">{t("contactUs")}</h2>
        <a
          href="https://t.me/Data_In_Sight"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-lg hover:underline"
        >
          {t("chatWithUsOnTelegram")}
        </a>
      </div>
    </div>
  );
};

export default Home;
