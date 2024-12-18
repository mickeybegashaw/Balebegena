import { IoMdMenu } from "react-icons/io";
import SideBar from "./SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className="bg-red-700  h-16 cursor-pointer">
      <div className="text-neutral-50 font-bold flex justify-between mx-10 md:mx-24 items-center h-16">
        <Link to={"/"}>
          <h1 className="text-2xl md:text-3xl">ባለበገና</h1>
        </Link>

        <div className="hidden md:block">
          <span className="ml-14">My Account</span>
          <Link to={'/user/login'}>
          <span title="Sign in to My account" className="ml-14">Log in</span>
          </Link>

          <Link to={'/user/signup'}>
          <span title="Register Musician" className="ml-14 bg-red-500 hover:bg-red-800 rounded p-1">
            Join now
          </span>
          </Link>
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
