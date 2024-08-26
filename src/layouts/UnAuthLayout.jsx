import { Navigate, Outlet } from "react-router-dom";

function UnAuthLayout({ user }) {
  return (
    <>
      {user ? <Navigate to={"/"} /> : <Outlet />}
    </>
  );
}

export default UnAuthLayout;
