import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css"
import useRestaurant from "./utils/useRestaurant";
import { addItem,removeItem} from "./utils/cartSlice";
import { useDispatch } from "react-redux";


    const RestaurantMenu = () => {
     //how to read a dynamic URL params
    const {resId} = useParams();
    
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    
    const addFoodItem = (item) =>{
      dispatch(addItem(item)); //{payLoad :  "Grapes"}
    }
    const handleRemoveItem = () =>{
      dispatch(addItem("Grapes")); //{payLoad :  "Grapes"}
    }

  return !restaurant ? (
  <Shimmer />
  ) : (
    <div className="flex">
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
                    <li key={item.id}>{item.name} - <button className="p-2 m-5 bg-green-300" onClick={() => addFoodItem(item)}>Add Items</button>
                    </li>
               ))}
            </ul>   
        </div>
    </div>
  )
};

export default RestaurantMenu
