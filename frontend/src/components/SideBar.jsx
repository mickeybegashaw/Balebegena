import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/userContext";

const SideBar = ({ onClose }) => {
  const { user, setUser } = useContext(AuthContext);
  const handelLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="bg-black bg-opacity-50 flex-1" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="w-64 bg-white h-full shadow-lg p-5">
        <button className="mb-4 text-red-500 font-bold" onClick={onClose}>
          X
        </button>
        <nav>
          <ul>
            {!user && (
              <div>
                {" "}
                <Link to={"/user/login"}>
                  <li className="mb-4" onClick={onClose}>
                    <span className="text-gray-700 hover:text-red-500">
                      Log In
                    </span>
                  </li>
                </Link>
                <Link to={"/user/register"}>
                  <li className="mb-4" onClick={onClose}>
                    <span className="text-gray-700 hover:text-red-500">
                      Register Now
                    </span>
                  </li>
                </Link>{" "}
              </div>
            )}
            {user && (
              <div>
                <Link to={"/musician-post"}>
                  <li className="mb-4" onClick={onClose}>
                    <span className="text-gray-700 hover:text-red-500">
                      Post Musician
                    </span>
                  </li>
                </Link>
                <Link>
                  <li className="mb-4" onClick={onClose}>
                    <span className="text-gray-700 hover:text-red-500">
                      My Account
                    </span>
                  </li>
                </Link>

                <li className="mb-4">
                  <p className="text-gray-700 hover:text-red-500">
                    {user.email}
                  </p>
                  <br />
                  <span
                    onClick={handelLogOut}
                    className="text-gray-700 hover:text-red-500"
                  >
                    Log out
                  </span>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
