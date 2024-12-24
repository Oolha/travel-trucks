import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import OneCamper from "./pages/OneCamper/OneCamper";
import FavoritesPersistence from "./components/FavoritesPersistence/FavoritesPersistence";
const App = ({}) => {
    return (_jsxs(_Fragment, { children: [_jsx(FavoritesPersistence, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/catalog", element: _jsx(Catalog, {}) }), _jsx(Route, { path: "/catalog/:id", element: _jsx(OneCamper, {}) })] })] }));
};
export default App;
