import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Chart from "./component/Chart/Chart";
import Carousel from "./component/Carousel/Carousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/chart",
        element: <Chart></Chart>,
      },
      {
        path: "/",
        element: <Carousel></Carousel>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
