import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="text-left p-6">
      <h1 className="text-3xl font-bold mb-4">{t("about_title")}</h1>
      <p className="text-lg mb-4">{t("about_description")}</p>
      <p className="text-lg mb-4">{t("about_approach")}</p>
      <p className="text-lg mb-4">{t("about_differentiation")}</p>
      <p className="text-lg mb-4">{t("about_invite")}</p>
    </div>
  );
};

export default About;
