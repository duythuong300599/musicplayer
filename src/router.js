import { useRoutes } from "react-router-dom";
import ZingChart from "./component/ZingChart/ZingChart";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <ZingChart />,
    },
    // {
    //   path: "*",
    //   element: <Navigate to="/404" replace />,
    // },
  ]);
}

export default Router;
