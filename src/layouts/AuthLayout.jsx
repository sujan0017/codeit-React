import { Navigate, Outlet } from "react-router-dom";

function AuthLayout({ user }) {
  return (
    <>
      { user ? <Outlet /> : <Navigate to={"/auth/login"} /> }
    </>
  );
}

export default AuthLayout;
