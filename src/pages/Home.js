import React from "react";

const Home = () => {
  return (
    <div className="text-center text-white">
      <h1 className="text-3xl font-bold">Welcome to Analytics Services</h1>
      <p className="text-lg mt-2">We provide top-notch analytics solutions.</p>

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
