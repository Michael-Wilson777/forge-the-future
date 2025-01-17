import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ShopPage from "./pages/ShopPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
