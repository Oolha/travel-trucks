import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import css from "./Home.module.css";
const Home = ({}) => {
    return (_jsxs("div", { className: css.home, children: [_jsx(Header, {}), _jsx(Hero, {})] }));
};
export default Home;
