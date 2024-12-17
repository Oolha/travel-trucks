import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  fetchCampers,
  fetchFilteredCampers,
} from "../../redux/trucks/operations";
import css from "./Filters.module.css";
const Filters = () => {
  const dispatch = useAppDispatch();

  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [AC, setAC] = useState(false);
  const [kitchen, setKitchen] = useState(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "AC") setAC(checked);
    if (name === "kitchen") setKitchen(checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filterParams = { location, form, AC, kitchen };
    dispatch(fetchFilteredCampers(filterParams));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <p className={css.text}>Location</p>
      <input
        type="text"
        placeholder="Kyiv, Ukraine"
        value={location}
        onChange={handleLocationChange}
        className={css.inputLocation}
      />
      <p className={css.filters}>Filters</p>
      <h3 className={css.title}> Vehicle equipment</h3>
      <select value={form} onChange={handleFormChange}>
        <option value="">Select Body Type</option>
        <option value="alcove">Alcove</option>
        <option value="integrated">Fully Integrated</option>
        <option value="van">Van</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="AC"
          checked={AC}
          onChange={handleCheckboxChange}
        />
        Air Conditioning
      </label>
      <label>
        <input
          type="checkbox"
          name="kitchen"
          checked={kitchen}
          onChange={handleCheckboxChange}
        />
        Kitchen
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Filters;
