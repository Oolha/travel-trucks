import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import css from "./Home.module.css";
import { useState } from "react";

const Home = ({}) => {
  return (
    <div className={css.home}>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
