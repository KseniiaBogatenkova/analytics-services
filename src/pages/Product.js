import React from "react";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="ttext-left p-6">
      <h1 className="text-3xl font-bold">{t("products_title")}</h1>
      <ul className="mt-4 space-y-2 text-lg">
        <li>{t("products_analytics")}</li>
        <li>{t("products_ab_testing")}</li>
        <li>{t("products_sql")}</li>
        <li>{t("products_ml")}</li>
        <li>{t("products_consulting")}</li>
      </ul>
    </div>
  );
};

export default Product;
