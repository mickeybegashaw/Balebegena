import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { AuthContext } from "../context/userContext.jsx";
import axios from "axios";
import { FadeLoader } from "react-spinners";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { user, setUser, setRegisterError, registerError, loading, setLoading } =
    useContext(AuthContext);

  const handelLinkClick = () => {
    navigate("/user/login");
  };

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handelRegisterSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setRegisterError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/user/api/register`,
        {
          firstName: firstName,
          lastName: lastName,
          password: passWord,
          email: email,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setRegisterError(null);
        localStorage.setItem("user", JSON.stringify(response.data));
        setLoading(false);
        setUser(response.data);
      } else {
        setLoading(false);
        setRegisterError(response.data);
      }
    } catch (error) {
      setLoading(false);
      setRegisterError(error.response ? error.response.data : "An error occurred");
    }
  };

  return (
    <div className="bg-stone-400 flex flex-1 items-center flex-col min-w-full min-h-screen">
      <div className="bg-white p-3 text-center mt-5 rounded-lg flex flex-col items-center w-11/12 md:w-2/3">
        <h1 className="text-3xl md:text-4xl">Register now</h1>
        <br />
        <p>
          You're on your way to connecting with other musicians and churches.
        </p>
        <br />
        <p>
          If you are already a member of Balebegena.com, please{" "}
          <span
            className="text-blue-700 cursor-pointer"
            onClick={handelLinkClick}
          >
            log in into your account.
          </span>
        </p>
        <br />
        <hr className="w-full mb-10 border-stone-500" />

        <form onSubmit={handelRegisterSubmit} id="registerForm">
          <label className="text-xl">
            E-mail Address
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-xl">
            Password
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={passWord}
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

          <label className="text-xl">
            First Name
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              type="text"
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="text-xl">
            Last Name
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              type="text"
              className="mt-2 p-2 w-full border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
         {registerError&&<p className="text-red-600 text-xl m:text-2xl">{registerError}</p>} 
          <button
            disabled={loading}
            type="submit"
            className="w-full h-20 text-white text-2xl rounded-xl mt-5 bg-red-700 hover:bg-red-600"
          >
            {loading ? <FadeLoader color={"white"} size={5} /> : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
