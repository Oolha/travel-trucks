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
import Loader from "../Loader/Loader";

interface FilterParams {
  location: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
  vehicleType: string;
}

interface CampersListProps {
  filters: FilterParams;
}

const ITEMS_PER_PAGE = 4;

const CampersList: React.FC<CampersListProps> = ({ filters }) => {
  const dispatch = useAppDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [visibleCampers, setVisibleCampers] = useState<CamperType[]>([]);
  const [filteredCampers, setFilteredCampers] = useState<CamperType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    // Фільтруємо кемпери на основі обраних фільтрів
    const filtered = campers.filter((camper: CamperType) => {
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
      const matchesVehicleType = filters.vehicleType
        ? camper.form === filters.vehicleType
        : true;

      return (
        matchesLocation &&
        matchesAC &&
        matchesTransmission &&
        matchesKitchen &&
        matchesTV &&
        matchesBathroom &&
        matchesVehicleType
      );
    });

    setFilteredCampers(filtered);
    setCurrentPage(1); // Скидаємо сторінку при зміні фільтрів
  }, [campers, filters]);

  useEffect(() => {
    // Відображаємо кемпери по сторінках
    const startIndex = 0;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    setVisibleCampers(filteredCampers.slice(startIndex, endIndex));
  }, [filteredCampers, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const hasMoreCampers = visibleCampers.length < filteredCampers.length;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p className={css.error}>Error: {error}</p>}
      {!isLoading && !error && visibleCampers.length === 0 && (
        <p>No campers found.</p>
      )}
      <ul className={css.list}>
        {visibleCampers.map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      {hasMoreCampers && (
        <div className={css.loadMoreBox}>
          <button className={css.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CampersList;
