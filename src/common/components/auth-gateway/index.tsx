import { Navigate } from "react-router-dom";
import type { FCC } from "@interfaces/react/fc-with-children";

interface IAuthGateway {
  isOnlyGuest?: boolean;
}

const AuthGateway: FCC<IAuthGateway> = ({ children, isOnlyGuest = false }) => {
  if (isOnlyGuest) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default AuthGateway;
