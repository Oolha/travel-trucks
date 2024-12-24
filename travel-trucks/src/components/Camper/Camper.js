import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addToFavorites, removeFromFavorites, } from "../../redux/favorites/slice";
import { Icon } from "../Icon/Icon";
import css from "./Camper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Camper = ({ camper }) => {
    const favorites = useSelector((state) => state.favorites);
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/catalog/${id}`);
    };
    const [country, city] = camper.location.split(", ");
    const isFavorite = favorites.some((fav) => fav.id === camper.id);
    const handleAddToFavorites = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites({ id: camper.id }));
        }
        else {
            dispatch(addToFavorites(camper));
        }
    };
    const dispatch = useDispatch();
    return (_jsxs("div", { className: css.camperItem, children: [_jsx("div", { className: css.imgBox, children: _jsx("img", { src: camper.gallery[0].thumb, alt: camper.name, className: css.img }) }), _jsxs("div", { className: css.infoContainer, children: [_jsxs("div", { className: css.contentWrapper, children: [_jsxs("div", { className: css.info, children: [_jsxs("div", { className: css.nameAndPrice, children: [_jsx("h3", { className: css.name, children: camper.name }), _jsxs("div", { className: css.priceBox, children: [_jsxs("p", { className: css.price, children: ["\u20AC", camper.price] }), _jsx("button", { onClick: handleAddToFavorites, className: `${css.btn} ${isFavorite ? css.btnFavorite : ""}`, children: _jsx(Icon, { id: isFavorite ? "redHeart" : "heart", className: css.icon }) })] })] }), _jsxs("div", { className: css.ratingAndLocation, children: [_jsx(Icon, { id: "star", size: 16, className: css.star }), _jsxs("p", { className: css.reviews, children: [camper.rating, "(", camper.reviews.length, " Reviews)"] }), _jsx(Icon, { id: "map", className: css.iconMap, size: 16 }), _jsxs("p", { children: [city, ", ", country] })] }), _jsx("p", { className: css.descr, children: camper.description })] }), _jsxs("div", { className: css.equipment, children: [camper.transmission === "automatic" && (_jsxs("div", { className: css.equipmentItem, children: [_jsx(Icon, { id: "automatic", className: css.equipmentIcon }), _jsx("span", { children: "Automatic" })] })), camper.engine === "petrol" && (_jsxs("div", { className: css.equipmentItem, children: [_jsx(Icon, { id: "petrol", className: css.equipmentIcon }), _jsx("span", { children: "Petrol" })] })), camper.kitchen && (_jsxs("div", { className: css.equipmentItem, children: [_jsx(Icon, { id: "kitchen", className: css.equipmentIcon }), _jsx("span", { children: "Kitchen" })] })), camper.bathroom && (_jsxs("div", { className: css.equipmentItem, children: [_jsx(Icon, { id: "bathroom", className: css.equipmentIcon }), _jsx("span", { children: "Bathroom" })] })), camper.TV && (_jsxs("div", { className: css.equipmentItem, children: [_jsx(Icon, { id: "TV", className: css.equipmentIcon }), _jsx("span", { children: "TV" })] })), camper.AC && (_jsxs("div", { className: css.equipmentItem, children: [_jsx(Icon, { id: "AC", className: css.equipmentIcon }), _jsx("span", { children: "AC" })] }))] })] }), _jsx("button", { className: css.showMore, onClick: () => {
                            handleClick(camper.id);
                        }, children: "Show more" })] })] }));
};
export default Camper;
