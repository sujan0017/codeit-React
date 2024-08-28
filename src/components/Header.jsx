import { Link, NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import logo from "../images/fbLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/auth/authSlicer";
import MiniHeader from "./MiniHeader";

function Header() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const isAuth = user ? true : false;

  const linkClass = ({ isActive }) => {
    return isActive ? "text-red-500" : "black-500";
  };

  function logOut (){
    dispatch(logOutUser());
  }

  return (
    <>
      {isAuth ? (
        <header className="shadow ">
          <MiniHeader />
          <div className=" flex justify-between items-center px-10 py-2">
            <div className="w-32">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className=" w-full bg-cover bg-center overflow-hidden my-auto"
                />
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <nav className="flex gap-5">
                {navMenu.map((menu) => {
                  return (
                    <NavLink
                      className={linkClass}
                      key={menu.id}
                      to={menu.route}
                    >
                      {menu.label}
                    </NavLink>
                  );
                })}
              </nav>
              <p>|</p>
              <button onClick={logOut} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
                LogOut
              </button>
            </div>
          </div>
        </header>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
