import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import css from "./Header.module.css";
const Header = ({}) => {
    return (_jsxs("div", { className: css.header, children: [_jsx(Logo, {}), _jsx(NavBar, {})] }));
};
export default Header;
