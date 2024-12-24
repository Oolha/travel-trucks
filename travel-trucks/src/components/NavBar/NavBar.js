import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
const NavBar = ({}) => {
    return (_jsxs("nav", { className: css.nav, children: [_jsx(NavLink, { to: "/", className: ({ isActive }) => (isActive ? css.activeLink : css.navLink), children: "Home" }), _jsx(NavLink, { to: "/catalog", className: ({ isActive }) => isActive && window.location.pathname === "/catalog"
                    ? css.activeLink
                    : css.navLink, children: "Catalog" })] }));
};
export default NavBar;
