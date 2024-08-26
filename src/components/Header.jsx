import { useState } from "react";
import { LOGO_URL } from "../utilis/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center shadow-lg mb-9 px-6 h-24" style={{ backgroundColor: '#E9BAC7' }}>
      <div className="logo-container flex items-center">
        <img className="w-32 h-auto" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6 text-lg font-semibold">
          <li className="px-2">
            Online Status: {onlineStatus ? "🟢" : "🛑"}
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">
              Contact Us
            </Link>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full hover:from-green-500 hover:to-teal-500 transition duration-300"
              onClick={() => {
                setBtnNameReact(btnNameReact === "login" ? "logOut" : "login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
