import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='education' element={<EducationPage />} />
      </Routes>
    </>
  );
}

export default App;
