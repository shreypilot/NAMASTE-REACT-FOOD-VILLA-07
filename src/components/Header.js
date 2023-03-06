import { useState , useContext } from "react";
import Foodvilla from "./assets/Images/Foodvilla.jpg";
import {Link} from "react-router-dom";
//import "../index.css"
import useOnline from "./utils/useOnline";
import userContext from "./utils/userContext";
import { useSelector } from "react-redux";
// Title component for display logo
const Title = () => (
  <Link to ="/">
    <img
      data-testid = "logo"

      className="w-20"
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
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);




  return (
    <div className="flex justify-between h-20 bg-gray-500 shadow-lg">
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
          <Link to="/instamart">
          <li>
            instamart
          </li>
          </Link>
          <Link to="/cart">
            <li data-testid = "cart">Cart - {cartItems.length} items</li>
          </Link>
          
          
          <h1 data-testid = "online-status">{isOnline ? "✅" : "🔴"}</h1>
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
