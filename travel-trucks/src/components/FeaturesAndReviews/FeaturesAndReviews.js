import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import css from "./FeaturesAndReviews.module.css";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/trucks/selectors";
import CampervanForm from "../CampervanForm/CampervanForm";
const FeaturesAndReviews = ({}) => {
    const { id } = useParams();
    const campers = useSelector(selectCampers);
    const camper = campers.find((camper) => camper.id === id);
    const [activeTab, setActiveTab] = useState("features");
    if (!camper) {
        return _jsx("p", { children: "Camper not found" });
    }
    return (_jsxs("div", { children: [_jsxs("div", { className: css.tabs, children: [_jsx("button", { className: clsx(css.tab, { [css.active]: activeTab === "features" }), onClick: () => setActiveTab("features"), children: "Features" }), _jsx("button", { className: clsx(css.tab, { [css.active]: activeTab === "reviews" }), onClick: () => setActiveTab("reviews"), children: "Reviews" }), _jsx("div", { className: css.icon })] }), _jsxs("div", { className: css.container, children: [_jsxs("div", { className: css.content, children: [activeTab === "features" && _jsx(Features, { camper: camper }), activeTab === "reviews" && _jsx(Reviews, {})] }), _jsx(CampervanForm, {})] })] }));
};
export default FeaturesAndReviews;
