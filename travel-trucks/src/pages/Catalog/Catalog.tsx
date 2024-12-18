import CampersList from "../../components/CampersList/CampersList";
import FavoritesPersistence from "../../components/FavoritesPersistence/FavoritesPersistence";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import css from "./Catalog.module.css";
import { useState } from "react";

interface FilterParams {
  location: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
}

const Catalog = ({}) => {
  const [filters, setFilters] = useState<FilterParams>({
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const handleSearch = (newFilters: FilterParams) => {
    setFilters(newFilters);
  };
  return (
    <div>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.mainBox}>
        <Filters onSearch={handleSearch} />
        <FavoritesPersistence />
        <CampersList filters={filters} />
      </div>
    </div>
  );
};

export default Catalog;
