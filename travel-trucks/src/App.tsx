import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import OneCamper from "./pages/OneCamper/OneCamper";

const App: React.FC = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<OneCamper />} />
    </Routes>
  );
};

export default App;
