import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout";
import { ROUTES } from "@/shared";
import { PrivateRoute } from "./PrivateRoute";
import { lazy } from "react";
const MainPage = lazy(() => import("@/pages/MainPage/MainPage"));
const EpisodesPage = lazy(() => import("@/pages/EpsiodesPage/EpsiodesPage"));
const LocationsPage = lazy(() => import("@/pages/LocationsPage/LocationsPage"));
const CharactersPage = lazy(
  () => import("@/pages/CharactersPage/CharactersPage")
);
const ElementPage = lazy(() => import("@/pages/ElementPage/ElementPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route
          path={ROUTES.episodes}
          element={
            <PrivateRoute>
              <EpisodesPage />
            </PrivateRoute>
          }
        />

        <Route
          path={ROUTES.locations}
          element={
            <PrivateRoute>
              <LocationsPage />
            </PrivateRoute>
          }
        />

        <Route
          path={ROUTES.characters}
          element={
            <PrivateRoute>
              <CharactersPage />
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
