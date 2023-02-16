import RestaurantCard from "./RestaurantCard";
import { useEffect, useState,useContext} from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import "../index.css"
import userContext from "./utils/userContext";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";


// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const {user,setUser} = useContext(userContext)
  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  },[]);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  const isOnLine =useOnline();

  if(!isOnLine){
    return <h1>🛑offline, please check your internet connection</h1>
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-700 text-white rounded-md"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange = {
          e => setUser({
            ...user,
            name: e.target.value
          })
        }/>
        <input value={user.email} onChange = {
          e => setUser({
            
            ...user,
            email: e.target.value
          })
        }/>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id}>
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} user={user} />{/*props driling*/}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;