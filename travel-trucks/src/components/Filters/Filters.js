import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import EquipmentCard from "../EquipmentCard/EquipmentCard";
import css from "./Filters.module.css";
import { Icon } from "../Icon/Icon";
import { notification } from "antd";
const equipmentOptions = [
    { id: "AC", label: "AC" },
    { id: "automatic", label: "Automatic" },
    { id: "kitchen", label: "Kitchen" },
    { id: "TV", label: "TV" },
    { id: "bathroom", label: "Bathroom" },
];
const vehicleTypeOptions = [
    { id: "van", label: "Van" },
    { id: "fullyIntegrated", label: "Fully Integrated" },
    { id: "alcove", label: "Alcove" },
];
const Filters = ({ onSearch }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedVehicleType, setSelectedVehicleType] = useState("");
    const [location, setLocation] = useState("");
    const handleSelect = (id) => {
        setSelectedFilters((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
    };
    const handleVehicleTypeSelect = (id) => {
        setSelectedVehicleType((prev) => (prev === id ? "" : id));
    };
    const handleSearch = () => {
        const filters = {
            location,
            AC: selectedFilters.includes("AC"),
            transmission: selectedFilters.includes("automatic") ? "automatic" : "",
            kitchen: selectedFilters.includes("kitchen"),
            TV: selectedFilters.includes("TV"),
            bathroom: selectedFilters.includes("bathroom"),
            vehicleType: selectedVehicleType,
        };
        const hasFiltersApplied = location ||
            filters.AC ||
            filters.transmission ||
            filters.kitchen ||
            filters.TV ||
            filters.bathroom ||
            filters.vehicleType;
        if (!hasFiltersApplied) {
            notification.warning({
                message: "No Results Found",
                description: "Please adjust your filters and try again.",
                placement: "topRight",
            });
        }
        onSearch(filters);
        setSelectedFilters([]);
        setSelectedVehicleType("");
        setLocation("");
    };
    const iconColor = location ? "#101828" : "#6c717b";
    return (_jsxs("div", { children: [_jsx("p", { className: css.text, children: "Location" }), _jsxs("div", { className: css.inputContainer, children: [_jsx(Icon, { id: "map", className: css.inputIcon, size: 20, style: { fill: iconColor } }), _jsx("input", { type: "text", placeholder: "City", value: location, onChange: (e) => setLocation(e.target.value), className: css.inputLocation })] }), _jsx("p", { className: css.filters, children: "Filters" }), _jsx("h3", { className: css.title, children: "Vehicle equipment" }), _jsx(Icon, { id: "line", className: css.line }), _jsx("div", { className: css.equipments, children: equipmentOptions.map((option) => (_jsx(EquipmentCard, { id: option.id, label: _jsx("span", { className: css.optionLabel, children: option.label }), icon: _jsx(Icon, { id: option.id, size: 32 }), onSelect: handleSelect, selected: selectedFilters.includes(option.id) }, option.id))) }), _jsx("h3", { className: css.title, children: "Vehicle Type" }), _jsx(Icon, { id: "line", className: css.line }), _jsx("div", { className: css.equipments, children: vehicleTypeOptions.map((option) => (_jsx(EquipmentCard, { id: option.id, label: _jsx("span", { className: css.optionLabel, children: option.label }), icon: _jsx(Icon, { id: option.id, size: 32 }), onSelect: handleVehicleTypeSelect, selected: selectedVehicleType === option.id, className: option.id === "fullyIntegrated" ? css.noPadding : "" }, option.id))) }), _jsx("button", { onClick: handleSearch, className: css.btn, children: "Search" })] }));
};
export default Filters;
