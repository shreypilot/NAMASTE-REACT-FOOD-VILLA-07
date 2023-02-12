import { useState } from "react";
import Foodvilla from "./assets/Images/Foodvilla.jpg";
import {Link} from "react-router-dom";
import "./Header.css";

// Title component for display logo
const Title = () => (
  <Link to ="/">
    <img
      className="logo"
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

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to = "/">
              <li>Home</li>
          </Link>
          <Link to = "/About">
              <li>About</li>
          </Link>
          <Link to = "/Contact">
              <li>Contact</li>
          </Link>
          
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
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
