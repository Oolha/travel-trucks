import css from "./CampersList.module.css";
import { useEffect, useState } from "react";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/trucks/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { fetchCampers } from "../../redux/trucks/operations";
import Camper from "../Camper/Camper";
import { Camper as CamperType } from "../../redux/types";

interface FilterParams {
  location: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
}

interface CampersListProps {
  filters: FilterParams;
}
const CampersList: React.FC<CampersListProps> = ({ filters }) => {
  const dispatch = useAppDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCampers()).unwrap();
      } catch (error) {
        console.error("Failed to fetch campers", error);
      }
    };

    fetchData();
  }, [dispatch]);
  const filteredCampers = campers.filter((camper: CamperType) => {
    const matchesLocation = filters.location
      ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesAC = filters.AC ? camper.AC : true;
    const matchesTransmission = filters.transmission
      ? camper.transmission === filters.transmission
      : true;
    const matchesKitchen = filters.kitchen ? camper.kitchen : true;
    const matchesTV = filters.TV ? camper.TV : true;
    const matchesBathroom = filters.bathroom ? camper.bathroom : true;

    return (
      matchesLocation &&
      matchesAC &&
      matchesTransmission &&
      matchesKitchen &&
      matchesTV &&
      matchesBathroom
    );
  });

  return (
    <div>
      {isLoading && <p>Loading campers...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      {!isLoading && !error && filteredCampers.length === 0 && (
        <p>No campers found.</p>
      )}
      <ul className={css.list}>
        {filteredCampers.map((camper) => {
          return (
            <li key={camper.id}>
              <Camper camper={camper} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersList;
