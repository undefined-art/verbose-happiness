import React from "react";
import ROUTES from "@constants/routes";
import buildRoutes from "@helpers/build-routes";
import { RouteObject } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home"));

const routes = buildRoutes([
  {
    path: ROUTES.HOME.URL,
    element: <Home />,
    isPrivate: false,
  },
]);

export default routes as RouteObject[];
