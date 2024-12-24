import { jsx as _jsx } from "react/jsx-runtime";
import Icons from "../../../public/svg/sprite.svg";
export const Icon = ({ id, className, size, style }) => {
    return (_jsx("svg", { className: className, height: size, width: size, style: style, children: _jsx("use", { href: Icons + "#" + id }) }));
};
