import React from "react";
import myImage from "../assets/myimage.png"; // Импорт твоей картинки

const Home = () => {
  return (
    <div className="text-center text-white p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Analytics Services
      </h1>
      <p className="text-lg mb-6">
        We provide top-notch analytics solutions.
      </p>

      {/* Картинка */}
      <img
        src={myImage}
        alt="Analytics"
        className="w-1/2 mx-auto mb-6 rounded shadow-lg"
      />

      {/* Contact Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <a
          href="https://t.me/Data_In_Sight"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-lg hover:underline"
        >
          Chat with us on Telegram
        </a>
      </div>
    </div>
  );
};

export default Home;
