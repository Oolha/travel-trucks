import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { selectCampers, selectError, selectIsLoading, } from "../../redux/trucks/selectors";
import { fetchCampers } from "../../redux/trucks/operations";
import css from "./Reviews.module.css";
import { Icon } from "../Icon/Icon";
const Reviews = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        if (campers.length === 0) {
            dispatch(fetchCampers());
        }
    }, [dispatch, campers.length]);
    const camper = campers.find((camper) => camper.id === id);
    if (isLoading) {
        return _jsx("p", { children: "Loading..." });
    }
    if (error) {
        return _jsxs("p", { children: ["Error: ", error] });
    }
    if (!camper) {
        return _jsx("p", { children: "Camper not found" });
    }
    return (_jsx("div", { className: css.reviewsContainer, children: camper.reviews.map((review, index) => (_jsxs("div", { className: css.reviewCard, children: [_jsxs("div", { className: css.box, children: [_jsx("div", { className: css.avatar, children: review.reviewer_name[0].toUpperCase() }), _jsxs("div", { className: css.reviewContent, children: [_jsx("h4", { className: css.reviewerName, children: review.reviewer_name }), _jsx("div", { className: css.stars, children: Array.from({ length: 5 }).map((_, i) => (_jsx("span", { className: i < review.reviewer_rating
                                            ? css.starFilled
                                            : css.starEmpty, children: _jsx(Icon, { id: i < review.reviewer_rating ? "star" : "emptyStar", size: 16 }) }, i))) })] })] }), _jsx("p", { className: css.comment, children: review.comment })] }, index))) }));
};
export default Reviews;
