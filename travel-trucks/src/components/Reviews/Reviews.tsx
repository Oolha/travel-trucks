import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/trucks/selectors";
import { fetchCampers } from "../../redux/trucks/operations";
import css from "./Reviews.module.css";
import { Icon } from "../Icon/Icon";

const Reviews = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, campers.length]);

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

  return (
    <div className={css.reviewsContainer}>
      {camper.reviews.map((review, index) => (
        <div key={index} className={css.reviewCard}>
          <div className={css.box}>
            <div className={css.avatar}>
              {review.reviewer_name[0].toUpperCase()}
            </div>
            <div className={css.reviewContent}>
              <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
              <div className={css.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.reviewer_rating
                        ? css.starFilled
                        : css.starEmpty
                    }
                  >
                    <Icon
                      id={i < review.reviewer_rating ? "star" : "emptyStar"}
                      size={16}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
