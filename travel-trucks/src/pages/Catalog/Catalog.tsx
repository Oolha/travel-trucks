import CampersList from "../../components/CampersList/CampersList";
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
  vehicleType: string;
}
const defaultFilters: FilterParams = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  vehicleType: "",
};

const Catalog = ({}) => {
  const [filters, setFilters] = useState<FilterParams>(defaultFilters);
  const [resetResults, setResetResults] = useState<boolean>(false);

  const handleSearch = (newFilters: FilterParams) => {
    setResetResults(true);
    setTimeout(() => {
      setFilters(newFilters);
      setResetResults(false);
    }, 0);
  };
  return (
    <div className={css.catalogBox}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.mainBox}>
        <Filters onSearch={handleSearch} />
        {!resetResults && <CampersList filters={filters} />}
      </div>
    </div>
  );
};

export default Catalog;
