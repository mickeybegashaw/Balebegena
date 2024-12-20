import { useNavigate } from "react-router-dom";
import { useState , useContext } from "react";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import { AuthContext } from "../context/userContext";
import { BiShow, BiHide } from "react-icons/bi"; // Added BiHide icon for toggling

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, logInError, setLogInError, loading, setLoading } =
  useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelLinkClick = () => {
    navigate("/user/register");
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handelLoginSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setLogInError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/user/api/logIn",
        {
          email: email,
          password: password,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLogInError(null);
        localStorage.setItem("user", JSON.stringify(response.data));
        setLoading(false);
        setUser(response.data);
      } else {
        setLoading(false);
        setLogInError(response.data);
      }
    } catch (error) {
      setLoading(false);
      setLogInError(error.response ? error.response.data : "An error occurred");
    }
  };

  return (
    <div className="bg-stone-400 flex flex-1 items-center flex-col min-w-full min-h-screen">
      <div className="bg-white p-3 text-center mt-5 rounded-lg flex flex-col items-center w-11/12 md:w-2/3">
        <h1 className="text-3xl md:text-4xl">Welcome Back</h1>
        <h1 className="text-2xl md:text-4xl">Login</h1>
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

        <form onSubmit={handelLoginSubmit} id="loginForm">
          <label className="text-xl">
            E-mail Address
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-xl">
            Password
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                minLength={4}
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
          {logInError&&<p className="text-red-600 text-xl m:text-2xl">{logInError}</p>} 

          <button
            disabled={loading}
            type="submit"
            className="w-full h-20 text-white text-2xl rounded-xl mt-5 bg-red-700 hover:bg-red-600"
          >
            {loading ? <FadeLoader color={"white"} size={5} /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
