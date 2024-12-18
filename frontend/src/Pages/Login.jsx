import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi"; // Added BiHide icon for toggling

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handelLinkClick = () => {
    navigate("/user/register");
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="bg-stone-400 flex flex-1 items-center flex-col min-w-full min-h-screen">
      <div className="bg-white p-3 text-center mt-5 rounded-lg flex flex-col items-center w-11/12 md:w-2/3">
        <h1 className="text-3xl md:text-4xl">Welcome Back</h1>
        <br />
      
        <p>
          If you are not a member of Balebegena.com, please{" "}
          <span
            className="text-blue-700 cursor-pointer"
            onClick={handelLinkClick}
          >
            Register Here.
          </span>
        </p>
        <br />
        <hr className="w-full mb-10 border-stone-500" />

        <form>
          <label className="text-xl">
            E-mail Address
            <input
              type="text"
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="text-xl">
            Password
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="mt-3 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <BiHide size={24} /> : <BiShow size={24} />}
              </button>
            </div>
          </label>
          <button className="w-full h-20 text-white text-2xl rounded-xl mt-5 bg-red-700 hover:bg-red-600">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
