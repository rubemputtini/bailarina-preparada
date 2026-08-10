import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const ClubePage = lazy(() => import("../pages/clube/ClubePage"));
const ConsultoriaPage = lazy(() => import("../pages/consultoria/ConsultoriaPage"));
const FormacaoPage = lazy(() => import("../pages/formacao/FormacaoPage"));
const WorkshopsPage = lazy(() => import("../pages/workshops/WorkshopsPage"));
const AulasParticularesPage = lazy(() => import("../pages/aulas-particulares/AulasParticularesPage"));
const TreinamentosPage = lazy(() => import("../pages/treinamentos/TreinamentosPage"));
const TermosPage = lazy(() => import("../pages/legal/TermosPage"));
const PrivacidadePage = lazy(() => import("../pages/legal/PrivacidadePage"));

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
      { path: "aulas-particulares", element: <AulasParticularesPage /> },
      { path: "treinamentos", element: <TreinamentosPage /> },
      { path: "termos", element: <TermosPage /> },
      { path: "privacidade", element: <PrivacidadePage /> },
    ],
  },
]);
