import { Icon } from "../Icon/Icon";
import css from "./Features.module.css";
import { useState } from "react";
import { Camper as CamperProps } from "../../../src/redux/types";

interface FeaturesProps {
  camper: CamperProps;
}
const Features: React.FC<FeaturesProps> = ({ camper }) => {
  return (
    <div className={css.mainBox}>
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
        {camper.radio && (
          <div className={css.equipmentItem}>
            <Icon id="radio" className={css.equipmentIcon} />
            <span>Radio</span>
          </div>
        )}
        {camper.refrigerator && (
          <div className={css.equipmentItem}>
            <Icon id="refrigerator" className={css.equipmentIcon} />
            <span>Refrigerator</span>
          </div>
        )}
        {camper.microwave && (
          <div className={css.equipmentItem}>
            <Icon id="microwave" className={css.equipmentIcon} />
            <span>Microwave</span>
          </div>
        )}
        {camper.gas && (
          <div className={css.equipmentItem}>
            <Icon id="gas" className={css.equipmentIcon} />
            <span>Gas</span>
          </div>
        )}
        {camper.water && (
          <div className={css.equipmentItem}>
            <Icon id="water" className={css.equipmentIcon} />
            <span>Water</span>
          </div>
        )}
      </div>
      <div>
        <h3>Vehicle details</h3>
        <Icon id="bigLine" className={css.line} />
        <div className={css.features}>
          <div className={css.featuresBox}>
            <p>Form</p>
            <p>{camper.form}</p>
          </div>
          <div className={css.featuresBox}>
            <p>Length</p>
            <p>{camper.length}</p>
          </div>
          <div className={css.featuresBox}>
            <p>Width</p>
            <p>{camper.width}</p>
          </div>
          <div className={css.featuresBox}>
            <p>Height</p>
            <p>{camper.height}</p>
          </div>
          <div className={css.featuresBox}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </div>
          <div className={css.featuresBox}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
