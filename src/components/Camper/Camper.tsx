import { useState } from "react";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { Camper as CamperType } from "../../redux/types";
import { Icon } from "../Icon/Icon";
import css from "./Camper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface CamperProps {
  camper: CamperType;
}

const Camper = ({ camper }: CamperProps) => {
  const favorites = useSelector((state: any) => state.favorites);
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/catalog/${id}`);
  };
  const [country, city] = camper.location.split(", ");

  const isFavorite = favorites.some((fav: CamperType) => fav.id === camper.id);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id: camper.id }));
    } else {
      dispatch(addToFavorites(camper));
    }
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
                  <Icon
                    id={isFavorite ? "redHeart" : "heart"}
                    className={css.icon}
                  />
                </button>
              </div>
            </div>

            <div className={css.ratingAndLocation}>
              <Icon id="star" size={16} className={css.star} />
              <p className={css.reviews}>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
              <Icon id="map" className={css.iconMap} size={16} />
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
        <button
          className={css.showMore}
          onClick={() => {
            handleClick(camper.id);
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Camper;
