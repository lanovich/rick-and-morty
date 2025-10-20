import { ROUTES } from "@/shared";
import { useAuth } from "@/shared/context";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={ROUTES.login} replace state={{ from: location.pathname }} />
    );
  }

  return children;
};
