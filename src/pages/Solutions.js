import React from "react";
import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <div className="text-left p-6">
      <h1 className="text-3xl font-bold mb-4">{t("solutions_title")}</h1>
      <p className="text-lg">{t("solutions_description")}</p>
    </div>
  );
};

export default Solutions;

