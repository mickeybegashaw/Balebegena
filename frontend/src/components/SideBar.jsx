import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className="bg-black bg-opacity-50 flex-1" 
        onClick={onClose}>
      </div>

      {/* Sidebar */}
      <div className="w-64 bg-white h-full shadow-lg p-5">
        <button 
          className="mb-4 text-red-500 font-bold"
          onClick={onClose}>
          X
        </button>
        <nav>
          <ul>
            <Link>
             <li className="mb-4" onClick={onClose}>
              <span className="text-gray-700 hover:text-red-500">
                My Account
              </span>
            </li> 
            </Link>
           
           <Link to={'/user/login'}>
           <li className="mb-4" onClick={onClose}>
              <span  className="text-gray-700 hover:text-red-500">
                Log In 
              </span>
            </li>
           </Link>
            
            <Link to={'/user/register'}>
            <li className="mb-4" onClick={onClose}>
              <span className="text-gray-700 hover:text-red-500">
                Register Now
              </span>
            </li>
            </Link>
            
           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
