import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authActions";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 2500 });
    }
  }, [error]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submitForm)}
      className=" bg-white shadow-md rounded-md w-full flex flex-col justify-center items-center p-5 gap-4 lg:col-span-2 "
    >
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
          <span
            className=" text-blue-500 rounded-full ml-4 hover:text-red-500 hover:bg-white hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            OO
          </span>
        </div>
        <p className="text-red-500 text-xs">{errors.password?.message}</p>
        <input
          className="p-1  border rounded"
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
      </div>
      <div className="w-full">
        <button
          className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 flex justify-center items-center gap-3 "
          type="submit"
        >
          Login {loading ? <Spinner /> : null}
        </button>
      </div>
      <p className="text-blue-500">Forgot password?</p>
      <div>
        <Link to="/auth/register">
          {" "}
          <button className=" bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700">
            Create new account
          </button>
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
}

export default LoginForm;
