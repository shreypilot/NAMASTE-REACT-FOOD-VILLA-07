import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css"
const RestaurantMenu = () => {
     //how to read a dynamic URL params
    const {resId} = useParams();
    const [restaurant , setRestaurant] = useState(null);

    useEffect(() =>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=25.2520964&lng=86.9841546&menuId="+ resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);

    }
    

  return !restaurant ? (
  <Shimmer />
  ) : (
    <div className="menu">
        <div>
            <h1>Restaurant id: { resId }</h1>
            <h2>{restaurant?.name}</h2>
            <img src={ IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
               ))}
            </ul>   
        </div>
    </div>
  )
};

export default RestaurantMenu
