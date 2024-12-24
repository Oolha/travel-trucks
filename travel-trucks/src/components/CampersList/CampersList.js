import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./CampersList.module.css";
import { useEffect, useState } from "react";
import { selectCampers, selectError, selectIsLoading, } from "../../redux/trucks/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { fetchCampers } from "../../redux/trucks/operations";
import Camper from "../Camper/Camper";
import Loader from "../Loader/Loader";
const ITEMS_PER_PAGE = 4;
const CampersList = ({ filters }) => {
    const dispatch = useAppDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [visibleCampers, setVisibleCampers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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
    useEffect(() => {
        const filteredCampers = campers.filter((camper) => {
            const matchesLocation = filters.location
                ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
                : true;
            const matchesAC = filters.AC ? camper.AC : true;
            const matchesTransmission = filters.transmission
                ? camper.transmission === filters.transmission
                : true;
            const matchesKitchen = filters.kitchen ? camper.kitchen : true;
            const matchesTV = filters.TV ? camper.TV : true;
            const matchesBathroom = filters.bathroom ? camper.bathroom : true;
            const matchesVehicleType = filters.vehicleType
                ? camper.form === filters.vehicleType
                : true;
            return (matchesLocation &&
                matchesAC &&
                matchesTransmission &&
                matchesKitchen &&
                matchesTV &&
                matchesBathroom &&
                matchesVehicleType);
        });
        setVisibleCampers(filteredCampers.slice(0, currentPage * ITEMS_PER_PAGE));
    }, [campers, filters, currentPage]);
    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    return (_jsxs("div", { children: [isLoading && _jsx(Loader, {}), error && _jsxs("p", { className: css.error, children: ["Error: ", error] }), !isLoading && !error && visibleCampers.length === 0 && (_jsx("p", { children: "No campers found." })), _jsx("ul", { className: css.list, children: visibleCampers.map((camper) => (_jsx("li", { children: _jsx(Camper, { camper: camper }) }, camper.id))) }), visibleCampers.length < campers.length && (_jsx("div", { className: css.loadMoreBox, children: _jsx("button", { className: css.loadMore, onClick: handleLoadMore, children: "Load more" }) }))] }));
};
export default CampersList;
