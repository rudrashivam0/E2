import React from 'react'
import RestaurantCard from './ResturantCard'
import resList from '../utils/mock_data'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'

import useAllResturant from '../utils/useAllResturant'


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

    // console.log("functions ",useAllResturant);

    // TO MODIFY THE LIST WE USE A FUNCTION OR CALL BACK FUNCTION setListResturant TO UPDATE THE LIST 

    //?Below is the state variable and its initial value is the resturantList which is an array of object 
    // const [resturantList, setListResturant] = useState([]);

    const resturantList = useAllResturant();
    console.log("resturantList ", resturantList);

    const [filteredResturant, setFilteredResturant] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    //! here we use useEffect to update the filteredResturant when the resturantList changes
    useEffect(() => {
        setFilteredResturant(resturantList);
    }, [resturantList]);



    //? Bellow things also known as conditional rendering 
    // if (resturantList.length === 0) {
    //     return Shimmer();
    // }

    // console.log("body rendered ")


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like you are offline !! Please check your internet connection</h1>
    }


    return resturantList.length === 0 ? (<Shimmer />) : (
        <div className="body-Cont">

            <div className="flex ">

                {/* <input type="text" placeholder="Search food"></input>
                <button>Search</button> */}

                <div className='m-2 p-2 gap-4 flex'>

                    <input type='text' className='search-box border border-solid border-black rounded-md bg-white' placeholder='Search For Restaurant'
                        value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }} ></input>

                    {/* // onClick filter out card and update the UI */}

                    <button className='bg-green-200 px-4 py-1 rounded-md hover:bg-green-300 cursor-pointer' onClick={() => {
                        // Need to filter the data

                        const filteredRest = resturantList.filter((res) => {
                            //convert both of them into lower case pleade 
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        });
                        console.log(searchText);

                        // setListResturant(filteredRest);
                        setFilteredResturant(filteredRest);

                    }}>Search</button>

                </div>

                <div className='m-2 p-2 gap-4 flex'>
                    <button className='bg-green-200 px-4 py-1 rounded-md hover:bg-green-300 cursor-pointer' onClick={() => {

                        const currRes = resturantList.filter(
                            (res) => res.info.avgRating > 4.5);
                        setFilteredResturant(currRes);
                    }}


                    // onMouseOver={() => {

                    // }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>



            </div>

            <div className="mx-7 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-12 ">

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
                    filteredResturant.map((restaurant, index) => (
                        <Link className="res-link" to={"/resturants/" + restaurant.info.id} key={restaurant?.info?.id} > <RestaurantCard resData={restaurant} /></Link>

                    ))}

            </div>
        </div>
    )


}


export default Body



//? Never Create State Variable as useState out side the component 
//? Always create state Variable at top of the component 
//?never create inside if else or for loop or inside fuctions => create inconsistency in code 
//? State variable ment to be created inside fucntional component and at the top of componrnt 