import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import css from "./Catalog.module.css";
import { useState } from "react";
const defaultFilters = {
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    vehicleType: "",
};
const Catalog = ({}) => {
    const [filters, setFilters] = useState(defaultFilters);
    const [resetResults, setResetResults] = useState(false);
    const handleSearch = (newFilters) => {
        setResetResults(true);
        setTimeout(() => {
            setFilters(newFilters);
            setResetResults(false);
        }, 0);
    };
    return (_jsxs("div", { className: css.catalogBox, children: [_jsx("div", { className: css.header, children: _jsx(Header, {}) }), _jsxs("div", { className: css.mainBox, children: [_jsx(Filters, { onSearch: handleSearch }), !resetResults && _jsx(CampersList, { filters: filters })] })] }));
};
export default Catalog;
