import React from "react";

const Product = () => {
  return (
    <div className="text-white p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>Data Analytics:</strong> data exploration, insights discovery,
          and visualization creation
        </li>
        <li>
          <strong>A/B Testing:</strong> experiment design, results analysis, and recommendations
        </li>
        <li>
          <strong>SQL & Databases:</strong> query optimization, database management, and working
          with big data
        </li>
        <li>
          <strong>Python & Machine Learning:</strong> automation, data analysis, and forecasting
        </li>
        <li>
          <strong>Consulting & Training:</strong> business analytics guidance and foundational
          training
        </li>
      </ul>
    </div>
  );
};

export default Product;
