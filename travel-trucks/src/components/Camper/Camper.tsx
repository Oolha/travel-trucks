import { useState } from "react";
import { addToFavorites } from "../../redux/favorites/slice";
import { Camper as CamperType } from "../../redux/types";
import { Icon } from "../Icon/Icon";
import css from "./Camper.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface CamperProps {
  camper: CamperType;
}

const Camper = ({ camper }: CamperProps) => {
  const [country, city] = camper.location.split(", ");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(camper));
    setIsFavorite(true);
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
      <div className={css.infoContainer}>
        <div className={css.contentWrapper}>
          <div className={css.info}>
            <div className={css.nameAndPrice}>
              <h3 className={css.name}>{camper.name}</h3>

              <div className={css.priceBox}>
                <p className={css.price}>€{camper.price}</p>
                <button
                  onClick={handleAddToFavorites}
                  className={`${css.btn} ${isFavorite ? css.btnFavorite : ""}`}
                >
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
            {camper.transmission === "automatic" && (
              <div className={css.equipmentItem}>
                <Icon id="automatic" className={css.equipmentIcon} />
                <span>Automatic</span>
              </div>
            )}

            {camper.engine === "petrol" && (
              <div className={css.equipmentItem}>
                <Icon id="petrol" className={css.equipmentIcon} />
                <span>Petrol</span>
              </div>
            )}
            {camper.kitchen && (
              <div className={css.equipmentItem}>
                <Icon id="kitchen" className={css.equipmentIcon} />
                <span>Kitchen</span>
              </div>
            )}
            {camper.bathroom && (
              <div className={css.equipmentItem}>
                <Icon id="bathroom" className={css.equipmentIcon} />
                <span>Bathroom</span>
              </div>
            )}
            {camper.TV && (
              <div className={css.equipmentItem}>
                <Icon id="TV" className={css.equipmentIcon} />
                <span>TV</span>
              </div>
            )}
            {camper.AC && (
              <div className={css.equipmentItem}>
                <Icon id="AC" className={css.equipmentIcon} />
                <span>AC</span>
              </div>
            )}
          </div>
        </div>
        <Link to={`/catalog/${camper.id}`}>
          <button className={css.showMore}>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default Camper;
