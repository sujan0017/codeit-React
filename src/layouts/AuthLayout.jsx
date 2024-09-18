import { Navigate, Outlet } from "react-router-dom";
import { AUTH_ROUTE, LOGIN_ROUTE } from "../constants/routes";

// eslint-disable-next-line react/prop-types
function AuthLayout({ user }) {
  return (
    <>
      { user ? <Outlet /> : <Navigate to={`${AUTH_ROUTE}/${LOGIN_ROUTE}`} /> }
    </>
  );
}

export default AuthLayout;
