import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import css from "./Header.module.css";
import { useState } from "react";

const Header = ({}) => {
  return (
    <div className={css.header}>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
