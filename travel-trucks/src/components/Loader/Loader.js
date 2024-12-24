import { jsx as _jsx } from "react/jsx-runtime";
import css from "./Loader.module.css";
const Loader = () => {
    return (_jsx("div", { className: css.loaderContainer, children: _jsx("div", { className: css.loader }) }));
};
export default Loader;
