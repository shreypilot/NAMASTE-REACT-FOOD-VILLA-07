import { IMG_CDN_URL } from "../constants";
import {  useContext } from "react";

//import "../index.css"
import userContext from "./utils/userContext";


// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  //user, //props driling
}) => {
  const {user} = useContext(userContext);

  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwoString}</h4>
        {/*<h4>{user}</h4>props driling*/}
        <h5>{user.name} - {user.email}</h5>
      </span>
    </div>
  );
};

export default RestaurantCard;