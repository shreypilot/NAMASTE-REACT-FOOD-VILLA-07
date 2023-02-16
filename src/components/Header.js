import { useState , useContext } from "react";
import Foodvilla from "./assets/Images/Foodvilla.jpg";
import {Link} from "react-router-dom";
import "../index.css"
import useOnline from "./utils/useOnline";
import userContext from "./utils/userContext";
// Title component for display logo
const Title = () => (
  <Link to ="/">
    <img
      className="h-28 w-28 px-2"
      src={Foodvilla}
      alt="foodvilla logo"
      title="Food villa"
    />
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const isOnline = useOnline();
  const {user} = useContext(userContext);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <Link to = "/">
              <li className="px-2">Home</li>
          </Link>
          <Link to = "/About">
              <li>About</li>
          </Link>
          <Link to = "/Contact">
              <li>Contact</li>
          </Link>
          <li>
            
            <i className="fa-solid fa-cart-shopping">Cart</i>
          </li>
          <Link to="/instamart">
          <li>
            instamart
            
          </li>
          </Link>
          
          <h1>{isOnline ? "✅" : "🔴"}</h1>
          <span><h1 className="p-10 font-bold text-red-900">{user.name}</h1></span>
          
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
