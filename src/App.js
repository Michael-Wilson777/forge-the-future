import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
       <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
