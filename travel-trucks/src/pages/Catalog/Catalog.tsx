import CampersList from "../../components/CampersList/CampersList";
import FavoritesPersistence from "../../components/FavoritesPersistence/FavoritesPersistence";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import css from "./Catalog.module.css";
import { useState } from "react";

const Catalog = ({}) => {
  return (
    <div>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.mainBox}>
        <Filters />
        <FavoritesPersistence />
        <CampersList />
      </div>
    </div>
  );
};

export default Catalog;
