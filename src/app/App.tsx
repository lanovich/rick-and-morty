import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { CategoryPage } from "@/pages/CategoryPage";
import { ElementPage } from "@/pages/ElementPage";
import { Layout } from "./layout";
import { MainPage } from "@/pages/MainPage";
import { ROUTES } from "@/shared";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path=":categoryName" element={<CategoryPage />} />
        <Route path=":categoryName/:elementId" element={<ElementPage />} />

        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
