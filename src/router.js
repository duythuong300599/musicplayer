import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import Home from "./component/Home/Home";
import Page404 from "./component/Page404/Page404";
import PlaylistDetail from "./component/PlaylistDetail/PlaylistDetail";
import ZingChart from "./component/ZingChart/ZingChart";

function Router() {
  const dataAlbum = JSON.parse(localStorage.getItem("Album"));

  const link = useSelector((state) => state.selectAlbum.link) || dataAlbum.link;
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
      path: link,
      element: <PlaylistDetail />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    // {
    //   path: "*",
    //   element: <Navigate to="/404" replace />,
    // },
  ]);
}

export default Router;
