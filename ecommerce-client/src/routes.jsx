import Shop from "./pages/Shop";
import Home from "./pages/home";
import MainPage from "./components/main-page";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
    children: [
      { path: "home", element: <MainPage /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
