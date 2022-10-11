import routes from "./routes";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "./index.css";
import { FC } from "react";

const ApplicationRoutes = () => useRoutes(routes);

const App: FC = () => {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
};

export default App;
