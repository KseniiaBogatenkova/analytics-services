import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Секция "About us" */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold">About us</h2>
        <p className="text-lg mt-2 text-gray-300">
          We provide cutting-edge analytics solutions for businesses.
        </p>
      </div>

      {/* Контейнер для графиков */}
      <div className="flex justify-center space-x-8">
        <img
          src="/graph1.png"
          alt="Graph 1"
          className="w-1/3 rounded-lg shadow-lg"
        />
        <img
          src="/graph2.png"
          alt="Graph 2"
          className="w-1/3 rounded-lg shadow-lg"
        />
      </div>

      {/* Секция "Contact Us" */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="text-lg mt-2 text-gray-300">
          Get in touch to learn more about our solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
