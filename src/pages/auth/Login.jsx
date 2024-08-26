import LoginForm from "../../components/LoginForm";
import myLogo from "../../images/fbLogo.png";

function Login() {
  return (
    <div className="w-full bg-slate-100 h-lvh px-52 py-5 grid lg:grid-cols-5 items-center justify-center ">
      <div className=" w-full flex flex-col items-start p-5 gap-4 lg:col-span-3">
        <div className="w-[350px]">
          <img src={myLogo} alt="Logo image" className="w-full" />
        </div>
        <p className="text-2xl text-left font-semibold">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
