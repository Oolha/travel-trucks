import CampersList from "../../components/CampersList/CampersList";
import Header from "../../components/Header/Header";
import css from "./Catalog.module.css";
import { useState } from "react";

const Catalog = ({}) => {
  return (
    <div>
      <div className={css.header}>
        <Header />
        <CampersList />
      </div>
    </div>
  );
};

export default Catalog;
