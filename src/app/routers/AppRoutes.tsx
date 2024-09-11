import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyPortfolioPage } from "../pages/MyPortfolioPage";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Usando React Fragment para renderizar um texto simples */}
        <Route
          path="/"
          element={
            <MyPortfolioPage/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
