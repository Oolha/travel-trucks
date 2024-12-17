import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import { useState } from "react";

const NavBar = ({}) => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default NavBar;
