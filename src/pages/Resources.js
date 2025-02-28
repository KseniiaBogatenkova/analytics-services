import React from "react";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();

  return (
    <div className="text-left p-6">
      <h1 className="text-3xl font-bold mb-4">{t("resources_title")}</h1>

      <ul className="text-lg space-y-3">
        <li>{t("resources_product_overview")}</li>
        <li>{t("resources_webinars")}</li>
      </ul>
    </div>
  );
};

export default Resources;
