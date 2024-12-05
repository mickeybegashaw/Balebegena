import React from "react";

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
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-red-500">
                My Account
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-red-500">
                Sign In 
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700 hover:text-red-500">
                Join Now
              </a>
            </li>
           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
