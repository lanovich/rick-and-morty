import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout";
import { ROUTES } from "@/shared";
import { PrivateRoute } from "./PrivateRoute";
import { MainPage, CategoryPage, ElementPage, LoginPage } from "@/pages";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route
          path=":categoryName"
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        />

        <Route
          path=":categoryName/:elementId"
          element={
            <PrivateRoute>
              <ElementPage />
            </PrivateRoute>
          }
        />

        <Route path={ROUTES.login} element={<LoginPage />} />

        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
