import React, { useEffect, useState } from "react";

const useAllResturant = () => {

    const [allResturant, setallResturant] = useState([]);
    //? 

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.63270&lng=77.21980&carousel=true&third_party_vendor=1#");

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