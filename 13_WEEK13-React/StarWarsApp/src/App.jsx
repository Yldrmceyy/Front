import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      return (
      <BrowserRouter>
        <Routes>
          {/* Anasayfa */}
          <Route path="/" element={<HomePage />} />

          {/* Yıldız gemisi detay sayfası */}
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      );
    </>
  );
}

export default App;
