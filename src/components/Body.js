import React from 'react'
import RestaurantCard from './ResturantCard'
import resList from '../utils/mock_data'
import Shimmer from './Shimmer'

import { useState, useEffect } from 'react'


//! state variable  -> super power variable 



//? belo is the normal js variable 
// let resturantList = [
//     {
//         data: {
//             id: '121603',
//             name: 'Kannur Food Point',
//             cloudinaryImageId: '2/182/710fc88ed8d937f16c134abda356429d_o2_featured_v2.jpg',
//             cuisines: ['Kerala', 'Chinese'],
//             costForTwo: 30000,
//             costForTwoString: '₹300 FOR TWO',
//             deliveryTime: 24,
//             avgRating: '3.9',

//         }
//     },
//     {
//         data: {
//             id: '121602',
//             name: 'Dominos',
//             cloudinaryImageId: '2/182/710fc88ed8d937f16c134abda356429d_o2_featured_v2.jpg',
//             cuisines: ['Kerala', 'Chinese'],
//             costForTwo: 30000,
//             costForTwoString: '₹300 FOR TWO',
//             deliveryTime: 24,
//             avgRating: '4.5',

//         }
//     },
//     {
//         data: {
//             id: '121605',
//             name: 'BK',
//             cloudinaryImageId: '2/182/710fc88ed8d937f16c134abda356429d_o2_featured_v2.jpg',
//             cuisines: ['Kerala', 'Chinese'],
//             costForTwo: 30000,
//             costForTwoString: '₹300 FOR TWO',
//             deliveryTime: 24,
//             avgRating: '4.1',

//         }
//     }, 
// ];

const Body = () => {

    // TO MODIFY THE LIST WE USE A FUNCTION OR CALL BACK FUNCTION setListResturant TO UPDATE THE LIST 

    //?Below is the state variable and its initial value is the resturantList which is an array of object 
    const [resturantList, setListResturant] = useState([]);

    const [searchText, setSearchText] = useState([]);

    // const [resturantList, setListResturant] = useState([
    //     {
    //         data: {
    //             id: '121603',
    //             name: 'Kannur Food Point',
    //             cloudinaryImageId: '2/182/710fc88ed8d937f16c134abda356429d_o2_featured_v2.jpg',
    //             cuisines: ['Kerala', 'Chinese'],
    //             costForTwo: 30000,
    //             costForTwoString: '₹300 FOR TWO',
    //             deliveryTime: 24,
    //             avgRating: '3.9',

    //         }
    //     },
    //     {
    //         data: {
    //             id: '121602',
    //             name: 'Dominos',
    //             cloudinaryImageId: '2/182/710fc88ed8d937f16c134abda356429d_o2_featured_v2.jpg',
    //             cuisines: ['Keralal', 'Chinese'],
    //             costForTwo: 30000,
    //             costForTwoString: '₹300 FOR TWO',
    //             deliveryTime: 24,
    //             avgRating: '4.5',

    //         }
    //     },
    //     {
    //         data: {
    //             id: '121605',
    //             name: 'BK',
    //             cloudinaryImageId: '2/182/710fc88ed8d937f16c134abda356429d_o2_featured_v2.jpg',
    //             cuisines: ['Kerala', 'Chinese'],
    //             costForTwo: 30000,
    //             costForTwoString: '₹300 FOR TWO',
    //             deliveryTime: 24,
    //             avgRating: '4.1',

    //         }
    //     },
    // ]);

    //! REact hook 
    //! useEffect() -> a normat js function which is called after render of the components



    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=25.3264867&lng=82.9864435&carousel=true&third_party_vendor=1");

    //     const json = await data.json();
    //     console.log(json);
    //     const restaurantCard = json?.data?.cards?.find(
    //         (card) =>
    //             card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     );

    //     setListResturant(
    //         restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     );
    // }



    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1");

            const json = await data.json();

            const restaurantCard = json?.data?.cards?.find(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            const restaurants =
                restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setListResturant(restaurants);
            // console.log(restaurants);
        } catch (error) {
            console.log("API Error:", error);
        }
    };



    const useHook = useEffect(() => {
        // console.log("this is useEffect")
        fetchData();
        console.log(resturantList)
    }, [])


    //? Bellow things also known as conditional rendering 
    // if (resturantList.length === 0) {
    //     return Shimmer();
    // }

    console.log("body rendered ")


    return resturantList.length === 0 ? (<Shimmer />) : (
        <div className="body-Cont">

            <div className="filter">

                {/* <input type="text" placeholder="Search food"></input>
                <button>Search</button> */}

                <div className='serch-cont'>

                    <input type='text' className='search-box' placeholder='Search For Restaurant'
                        value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }} ></input>

                    {/* // onClick filter out card and update the UI */}

                    <button className='btn-2' onClick={() => {
                        // Need to filter the data

                        const filteredRest = resturantList.filter((res) => {
                            res.data.name.includes(searchText)
                        });
                        console.log(searchText);


                        setListResturant(filteredRest);

                    }}>Search</button>

                </div>

                <button className='Top-reted-res' onClick={() => {

                    const currRes = resturantList.filter(
                        (res) => res.info.avgRating > 4.5);

                    setListResturant(currRes);

                }}


                // onMouseOver={() => {

                // }}
                >
                    Top Rated Restaurants
                </button>


            </div>

            <div className="res-Cont">

                {/* //? Restaurant card */}
                {/* <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                <RestaurantCard resData={resList[8]} />
                <RestaurantCard resData={resList[9]} />
                <RestaurantCard resData={resList[10]} />
                <RestaurantCard resData={resList[11]} /> */}


                {
                    resturantList.map((restaurant, index) => (<RestaurantCard key={restaurant?.info?.id ?? index} resData={restaurant} />))
                }

            </div>
        </div>
    )


}


export default Body