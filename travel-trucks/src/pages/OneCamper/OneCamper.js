import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../../components/Header/Header";
import css from "./OneCamper.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import FeaturesAndReviews from "../../components/FeaturesAndReviews/FeaturesAndReviews";
const OneCamper = ({}) => {
    return (_jsxs("div", { children: [_jsx("div", { className: css.header, children: _jsx(Header, {}) }), _jsxs("div", { className: css.camperDetails, children: [_jsx(CamperDetails, {}), _jsx(FeaturesAndReviews, {})] })] }));
};
export default OneCamper;
