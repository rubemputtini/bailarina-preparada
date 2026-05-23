import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const ClubePage = lazy(() => import("../pages/clube/ClubePage"));
const ConsultoriaPage = lazy(() => import("../pages/ConsultoriaPage"));
const FormacaoPage = lazy(() => import("../pages/FormacaoPage"));
const WorkshopsPage = lazy(() => import("../pages/WorkshopsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "clube", element: <ClubePage /> },
      { path: "consultoria", element: <ConsultoriaPage /> },
      { path: "formacao", element: <FormacaoPage /> },
      { path: "workshops", element: <WorkshopsPage /> },
    ],
  },
]);
