import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/auth/authSlicer";
import { Link, NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import { BiCart, BiLogOut } from "react-icons/bi";
import navMenu from "../constants/navMenu";
import logo from "../images/fbLogo.png";
import MiniHeader from "./MiniHeader";
import CartDropDown from "./CartDropdown";

function Header() {
  const [showCart, setShowCart] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isAuth = user ? true : false;

  const linkClass = ({ isActive }) => {
    return isActive ? "text-red-500" : "black-500";
  };

  function logOut() {
    dispatch(logOutUser());

    localStorage.removeItem("authToken");
  }

  return (
    <>
      {isAuth ? (
        <header className="shadow ">
          <MiniHeader />
          <div className=" flex justify-between items-center px-10 py-2">
            <div className="w-32">
              <Link to={HOME_ROUTE}>
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
              <div className="flex justify-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowCart(!showCart);
                    }}
                    className=" p-1 rounded-md  bg-slate-100 hover:bg-slate-200 "
                  >
                    <BiCart className="text-3xl text-orange-500" />
                  </button>
                  <div
                    className={`${
                      showCart ? "block" : "hidden"
                    } absolute top-14 right-5 `}
                  >
                    <CartDropDown />
                  </div>
                </div>

                <button
                  onClick={logOut}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex justify-center items-center gap-2"
                >
                  LogOut <BiLogOut />
                </button>
              </div>
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
