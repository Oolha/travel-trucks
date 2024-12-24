import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from "../Icon/Icon";
import css from "./Logo.module.css";
const Logo = ({}) => {
    return (_jsx("div", { className: css.logoBox, children: _jsx(Icon, { id: "logo", className: css.logo }) }));
};
export default Logo;
