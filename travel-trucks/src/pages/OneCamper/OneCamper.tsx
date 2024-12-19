import Header from "../../components/Header/Header";
import style from "./OneCamper.module.css";
import { useState } from "react";
import css from "./OneCamper.module.css";

const OneCamper = ({}) => {
  return (
    <div>
      <div className={css.header}>
        <Header />
      </div>
    </div>
  );
};

export default OneCamper;
