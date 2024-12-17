import { addToFavorites } from "../../redux/favorites/slice";
import { Camper as CamperType } from "../../redux/types";
import { Icon } from "../Icon/Icon";
import css from "./Camper.module.css";
import { useDispatch } from "react-redux";

interface CamperProps {
  camper: CamperType;
}

const Camper = ({ camper }: CamperProps) => {
  const [country, city] = camper.location.split(", ");

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(camper));
  };
  const dispatch = useDispatch();
  return (
    <li className={css.camperItem}>
      <div className={css.imgBox}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={css.img}
        />
      </div>
      <div className={css.info}>
        <div className={css.nameAndPrice}>
          <h3 className={css.name}>{camper.name}</h3>

          <div className={css.priceBox}>
            <p className={css.price}>€{camper.price}</p>
            <button onClick={handleAddToFavorites} className={css.btn}>
              <Icon id="heart" className={css.icon} />
            </button>
          </div>
        </div>

        <div className={css.ratingAndLocation}>
          <p>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p>
            {city}, {country}
          </p>
        </div>
        <p className={css.descr}>{camper.description}</p>
      </div>
    </li>
  );
};

export default Camper;
