import { useState } from "react";
import EquipmentCard from "../EquipmentCard/EquipmentCard";
import css from "./Filters.module.css";
import { Icon } from "../Icon/Icon";
import { notification } from "antd";
import { fetchFilteredCampers } from "../../redux/trucks/operations";
import { useAppDispatch } from "../../redux/hooks";

interface FilterParams {
  location: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
  form: string;
}
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
interface FiltersProps {
  onSearch: (filters: FilterParams) => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSelect = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const handleVehicleTypeSelect = (id: string) => {
    setSelectedVehicleType((prev) => (prev === id ? "" : id));
  };
  const handleSearch = () => {
    const filters = {
      location: location.trim(),
      AC: selectedFilters.includes("AC"),
      transmission: selectedFilters.includes("automatic") ? "automatic" : "",
      kitchen: selectedFilters.includes("kitchen"),
      TV: selectedFilters.includes("TV"),
      bathroom: selectedFilters.includes("bathroom"),
      form: selectedVehicleType,
    };

    const hasFiltersApplied =
      filters.location ||
      filters.AC ||
      filters.transmission ||
      filters.kitchen ||
      filters.TV ||
      filters.bathroom ||
      filters.form;

    if (!hasFiltersApplied) {
      notification.warning({
        message: "No Filters Applied",
        description: "Please select at least one filter and try again.",
        placement: "topRight",
      });
      return;
    }

    onSearch(filters);
  };

  const iconColor = location ? "#101828" : "#6c717b";

  return (
    <div>
      <p className={css.text}>Location</p>
      <div className={css.inputContainer}>
        <Icon
          id="map"
          className={css.inputIcon}
          size={20}
          style={{ fill: iconColor }}
        />
        <input
          type="text"
          placeholder="City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={css.inputLocation}
        />
      </div>
      <p className={css.filters}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <Icon id="line" className={css.line} />
      <div className={css.equipments}>
        {equipmentOptions.map((option) => (
          <EquipmentCard
            key={option.id}
            id={option.id}
            label={<span className={css.optionLabel}>{option.label}</span>}
            icon={<Icon id={option.id} size={32} />}
            onSelect={handleSelect}
            selected={selectedFilters.includes(option.id)}
          />
        ))}
      </div>
      <h3 className={css.title}>Vehicle Type</h3>
      <Icon id="line" className={css.line} />
      <div className={css.equipments}>
        {vehicleTypeOptions.map((option) => (
          <EquipmentCard
            key={option.id}
            id={option.id}
            label={<span className={css.optionLabel}>{option.label}</span>}
            icon={<Icon id={option.id} size={32} />}
            onSelect={handleVehicleTypeSelect}
            selected={selectedVehicleType === option.id}
            className={option.id === "fullyIntegrated" ? css.noPadding : ""}
          />
        ))}
      </div>
      <button onClick={handleSearch} className={css.btn}>
        Search
      </button>
    </div>
  );
};

export default Filters;
