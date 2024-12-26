import { IoMdMenu } from "react-icons/io";
import SideBar from "./SideBar";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handelLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-red-700 w-screen h-16 md:h-20  cursor-pointer  ">
      <div className="text-neutral-50  font-bold flex justify-between mx-10 md:mx-24 items-center h-16">
        <Link to={"/"}>
          <h1 className="text-2xl md:text-3xl">ባለበገና</h1>
        </Link>

        <div className="hidden md:block">
          {user && (
            <div className="flex items-end gap-2 flex-col">
              <p className="text-base font-extralight"> {user.email}</p>
              <div>
                <Link to={"/musician-post"}>
                  <span className="ml-14 ">Post Musician</span>
                </Link>
                <span className="ml-14 ">My Account</span>
                <span className="ml-14 " onClick={handelLogOut}>
                  Log out
                </span>
              </div>
            </div>
          )}

          {!user && (
            <>
              <Link to={"/user/login"}>
                <span
                  title="Log in to My account"
                  className="ml-14"
                >
                  Log in
                </span>
              </Link>

              <Link to={"/user/register"}>
                <span
                  title="Register Musician"
                  className="ml-14 bg-red-500 hover:bg-red-800 rounded p-1"
                >
                  Register
                </span>
              </Link>
            </>
          )}
        </div>
        <span
          onClick={toggleSidebar}
          className="md:hidden"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle Menu"
        >
          <IoMdMenu color="white" size={"25pt"} />
        </span>
        {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
      </div>
    </header>
  );
};

export default Header;
