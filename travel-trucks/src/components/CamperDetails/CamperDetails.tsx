import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./CamperDetails.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/trucks/selectors";
import { fetchCampers } from "../../redux/trucks/operations";

const CamperDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  const camper = campers.find((camper) => camper.id === id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!camper) {
    return <p>Camper not found</p>;
  }

  const [country, city] = camper.location.split(", ");
  const { gallery } = camper;

  return (
    <div className={css.camperCard}>
      <div className={css.nameAndPrice}>
        <h3 className={css.name}>{camper.name}</h3>
      </div>
      <div className={css.ratingAndLocation}>
        <p>
          {camper.rating} ({camper.reviews.length} Reviews)
        </p>
        <p>
          {city}, {country}
        </p>
      </div>
      <p className={css.price}>€{camper.price}</p>
      <div className={css.gallery}>
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={camper.name}
            className={css.img}
          />
        ))}
      </div>
      <p className={css.descr}>{camper.description}</p>
    </div>
  );
};

export default CamperDetails;
