import { Navigate, useRoutes } from "react-router-dom";
import Home from "./component/Home/Home";
import Page404 from "./component/Page404/Page404";
import ZingChart from "./component/ZingChart/ZingChart";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/zing-chart",
      element: <ZingChart />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}

export default Router;
