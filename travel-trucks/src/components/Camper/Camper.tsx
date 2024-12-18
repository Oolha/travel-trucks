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
    <div className={css.camperItem}>
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
      <div className={css.equipment}>
        {camper.AC && (
          <div className={css.equipmentItem}>
            <Icon id="ac" className={css.equipmentIcon} />
            <span>Air Conditioning</span>
          </div>
        )}
        {camper.transmission === "automatic" && (
          <div className={css.equipmentItem}>
            <Icon id="transmission" className={css.equipmentIcon} />
            <span>Automatic Transmission</span>
          </div>
        )}
        {camper.kitchen && (
          <div className={css.equipmentItem}>
            <Icon id="kitchen" className={css.equipmentIcon} />
            <span>Kitchen</span>
          </div>
        )}
        {camper.TV && (
          <div className={css.equipmentItem}>
            <Icon id="tv" className={css.equipmentIcon} />
            <span>TV</span>
          </div>
        )}
        {camper.bathroom && (
          <div className={css.equipmentItem}>
            <Icon id="bathroom" className={css.equipmentIcon} />
            <span>Bathroom</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Camper;
