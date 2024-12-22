import Header from "../../components/Header/Header";
import style from "./OneCamper.module.css";
import { useState } from "react";
import css from "./OneCamper.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import FeaturesAndReviews from "../../components/FeaturesAndReviews/FeaturesAndReviews";
import CampervanForm from "../../components/CampervanForm/CampervanForm";

const OneCamper = ({}) => {
  return (
    <div>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.camperDetails}>
        <CamperDetails />
        <div className={css.container}>
          <FeaturesAndReviews />
          <CampervanForm />
        </div>
      </div>
    </div>
  );
};

export default OneCamper;
