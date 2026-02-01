import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/home/Home";
import App from "../layout/App";
import ProductDetails from "../../features/catalog/ProductDetails";
import Contact from "../../features/contact/Contact";
import Catalog from "../../features/catalog/Catalog.tsx";
import About from "../../features/about/About.tsx";
import Basket from "../../features/basket/Basket.tsx";
import Checkout from "../../features/checkout/Checkout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/basket", element: <Basket /> },
         { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
