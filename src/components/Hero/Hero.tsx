import { Link } from "react-router-dom";
import css from "./Hero.module.css";
import { useState } from "react";

const Hero = ({}) => {
  return (
    <div className={css.heroBox}>
      <div className={css.infoBox}>
        <h2 className={css.title}>Campers of your dreams</h2>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button type="button" className={css.btn}>
            View Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
