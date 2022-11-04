import routes from "./routes";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "./index.css";
import { FC } from "react";
import ModalProvider from "./common/modals/provider";

const ApplicationRoutes = () => useRoutes(routes);

const App: FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ApplicationRoutes />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
