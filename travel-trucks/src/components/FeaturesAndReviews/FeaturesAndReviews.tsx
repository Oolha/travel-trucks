import clsx from "clsx";
import css from "./FeaturesAndReviews.module.css";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/trucks/selectors";
import { Icon } from "../Icon/Icon";
import CampervanForm from "../CampervanForm/CampervanForm";

const FeaturesAndReviews = ({}) => {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const camper = campers.find((camper) => camper.id === id);
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );
  if (!camper) {
    return <p>Camper not found</p>;
  }
  return (
    <div>
      <div className={css.tabs}>
        <button
          className={clsx(css.tab, { [css.active]: activeTab === "features" })}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={clsx(css.tab, { [css.active]: activeTab === "reviews" })}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
        <div className={css.icon}></div>
      </div>
      <div className={css.container}>
        <div className={css.content}>
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews />}
        </div>
        <CampervanForm />
      </div>
    </div>
  );
};

export default FeaturesAndReviews;
