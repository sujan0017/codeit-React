import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/authActions";
import { AUTH_ROUTE, LOGIN_ROUTE } from "../constants/routes";
import { FiEye, FiEyeOff } from "react-icons/fi";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState, watch } = useForm();

  const { errors } = formState;

  const password = watch("password");

  const { loading, error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(registerUser(data));
  }

  useEffect(() => {
    if (user) {
      toast.success("User registered successfully.", { autoClose: 2500 });
    }
    if (error) {
      toast.error(error, { autoClose: 2500 });
    }
  }, [error, user]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submitForm)}
      className=" bg-white shadow-md rounded-md w-full flex flex-col justify-center items-center p-5 gap-4 lg:col-span-2 "
    >
      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="name">Name</label>
        <p className="text-red-500 text-xs">{errors.name?.message}</p>
        <input
          className="p-1 border rounded"
          type="email"
          {...register("name", {
            required: "Please enter your name",
          })}
        />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="email">Email</label>
        <p className="text-red-500 text-xs">{errors.email?.message}</p>
        <input
          className="p-1 border rounded"
          type="email"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
      </div>
      <div className="w-full flex flex-col gap-2    ">
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <p className="text-red-500 text-xs">{errors.password?.message}</p>
        <div className="w-full relative">
          <input
            className="p-1  border rounded w-full"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Please enter your password",
              pattern: {
                minLength: 8,
                message:
                  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-2 cursor-pointer"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2    ">
        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
        </div>
        <p className="text-red-500 text-xs">
          {errors.confirmPassword?.message}
        </p>
        <div className="w-full relative">
          <input
            className="p-1  border rounded w-full"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Your password does not match",
            })}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-5 top-2 cursor-pointer"
          >
            {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>
      </div>

      <div className="w-full">
        <button
          className="w-full bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 flex justify-center items-center gap-3 "
          type="submit"
        >
          Register {loading ? <Spinner /> : null}
        </button>
      </div>
      <div>
        <Link to={`/${AUTH_ROUTE}/${LOGIN_ROUTE}`}>
          <button className=" bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 ">
            Login
          </button>
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
}

export default RegisterForm;
