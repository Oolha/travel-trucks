import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./CamperDetails.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { selectCampers, selectError, selectIsLoading, } from "../../redux/trucks/selectors";
import { fetchCampers } from "../../redux/trucks/operations";
import { Icon } from "../Icon/Icon";
import Loader from "../Loader/Loader";
const CamperDetails = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchCampers()).unwrap();
            }
            catch (error) {
                console.error("Failed to fetch campers", error);
            }
        };
        fetchData();
    }, [dispatch]);
    const camper = campers.find((camper) => camper.id === id);
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (error) {
        return _jsxs("p", { children: ["Error: ", error] });
    }
    if (!camper) {
        return _jsx("p", { children: "Camper not found" });
    }
    const [country, city] = camper.location.split(", ");
    const { gallery } = camper;
    return (_jsxs("div", { className: css.camperCard, children: [_jsx("div", { className: css.nameAndPrice, children: _jsx("h3", { className: css.name, children: camper.name }) }), _jsxs("div", { className: css.ratingAndLocation, children: [_jsx(Icon, { id: "star", size: 16, className: css.star }), _jsxs("p", { className: css.rating, children: [camper.rating, " (", camper.reviews.length, " Reviews)"] }), _jsx(Icon, { id: "map", className: css.iconMap, size: 16 }), _jsxs("p", { children: [city, ", ", country] })] }), _jsxs("p", { className: css.price, children: ["\u20AC", camper.price] }), _jsx("div", { className: css.gallery, children: gallery.map((image, index) => (_jsx("img", { src: image.thumb, alt: camper.name, className: css.img }, index))) }), _jsx("p", { className: css.descr, children: camper.description })] }));
};
export default CamperDetails;
