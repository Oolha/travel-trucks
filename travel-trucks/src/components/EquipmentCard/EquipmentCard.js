import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./EquipmentCard.module.css";
const EquipmentCard = ({ id, label, icon, onSelect, selected, className = "", }) => {
    return (_jsxs("div", { style: {
            border: selected ? "1px solid #e44848" : "1px solid #dadde1",
        }, className: `${css.item} ${selected ? css.selected : ""} ${className}`, onClick: () => onSelect(id), children: [icon, _jsx("span", { children: label })] }));
};
export default EquipmentCard;
