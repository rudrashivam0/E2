import React, { useEffect, useState } from "react";

const useAllResturant = () => {

    const [allResturant, setallResturant] = useState([]);
    //? 

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page");

            const json = await data.json();

            const restaurantCard = json?.data?.cards?.find(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
            // console.log(restaurantCard);

            const restaurants =
                restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log(restaurants);
            setallResturant(restaurants);
        } catch (error) {
            console.log("API Error:", error);
        }
    };



    useEffect(() => {
        // console.log("this is useEffect")
        fetchData();
        // console.log(resturantList)
    }, [])


    return allResturant;

}

export default useAllResturant