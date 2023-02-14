import { FETCH_MENU_URL } from "../../constants";
import { useState , useEffect } from "react";

const useRestaurant = (resId) => {
    const [restaurant , setRestaurant] = useState(null);


    //Get data from Api
    useEffect(() =>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+ resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);

    }
    //return restraunt Data
    return restaurant;
};

export default useRestaurant
