import Shop from "./pages/shop";
import Home from "./pages/home";
import MainPage from "./components/main-page";
import { Navigate } from "react-router-dom";
import  ProductDetail  from "./pages/productDetail";

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
      { path: "shop", element: <Shop />  },
      {path: "shop/:id", element: <ProductDetail />},
      { path: "category/:category", element: <Shop /> },
      {path: "category/:category/:id", element: <ProductDetail />},
    ],
  },
];

export default routes;
