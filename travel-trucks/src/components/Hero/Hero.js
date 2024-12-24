import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import css from "./Hero.module.css";
const Hero = ({}) => {
    return (_jsx("div", { className: css.heroBox, children: _jsxs("div", { className: css.infoBox, children: [_jsx("h2", { className: css.title, children: "Campers of your dreams" }), _jsx("p", { className: css.text, children: "You can find everything you want in our catalog" }), _jsx(Link, { to: "/catalog", children: _jsx("button", { type: "button", className: css.btn, children: "View Now" }) })] }) }));
};
export default Hero;
