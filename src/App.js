import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
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
        <Route path="education" element={<VideosPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
