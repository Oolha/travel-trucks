import css from "./CampersList.module.css";
import { useEffect } from "react";
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectPage,
} from "../../redux/trucks/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { fetchFilteredCampers } from "../../redux/trucks/operations";
import Camper from "../Camper/Camper";
import Loader from "../Loader/Loader";
import { resetCampers, incrementPage } from "../../redux/trucks/slice";

interface FilterParams {
  location: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
  form: string;
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
  const currentPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(
      fetchFilteredCampers({ ...filters, page: 1, limit: ITEMS_PER_PAGE })
    );
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(incrementPage()); // Збільшуємо сторінку в Redux
    dispatch(
      fetchFilteredCampers({
        ...filters,
        page: nextPage,
        limit: ITEMS_PER_PAGE,
      })
    );
  };

  return (
    <div>
      {isLoading && campers.length === 0 && <Loader />}
      {error && <p className={css.error}>Error: {error}</p>}
      {!isLoading && !error && campers.length === 0 && (
        <p className={css.noResults}>
          No campers match your selected filters. Try adjusting the filters.
        </p>
      )}
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      {campers.length >= ITEMS_PER_PAGE && !isLoading && (
        <div className={css.loadMoreBox}>
          <button className={css.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
      {isLoading && campers.length > 0 && (
        <div className={css.loadMoreBox}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default CampersList;
