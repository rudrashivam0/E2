import React from 'react'
import RestaurantCard from './ResturantCard'
import resList from '../utils/mock_data'

import { useState } from 'react'

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

    const [resturantList, setListResturant] = useState(resList);

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


    return (
        <div className="body-Cont">
            <div className="filter">
                {/* <input type="text" placeholder="Search food"></input>
                <button>Search</button> */}
                <button className='Top-reted-res' onClick={() => {

                    const currRes = resturantList.filter(
                        (res) => res.data.avgRating > 4 );

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
                    resturantList.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))
                }

            </div>
        </div>
    )
}


export default Body