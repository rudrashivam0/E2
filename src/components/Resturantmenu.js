import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';

import useResturantMenu from '../utils/useResturantMenu'
import ResCategories from "./ResCategories"




export const Resturantmenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    // const [resInfo, setResInfo] = useState(null);

    //? ResId extract from the useParem hook given by react 
    //? useParems give us OBject with resId 

    const { resId } = useParams();
    // console.log(parems)


    // useEffect(() => {
    //     fetchMenu();
    // }, []);



    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId);

    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    //     console.log(resInfo);
    // }

    const resInfo = useResturantMenu(resId);;



    //? Very IMportant BCZ we have to check if the data is null or not first 
    if (resInfo === null) {
        return (
            <Shimmer />
        )
    }


    const { name, cuisines, costForTwoMessage,
    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

    // console.log(itemCards);

    // console.log(itemCards[0].card.info.name);
    // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    //?filter out recomended items categories 
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    // console.log("Cate", categories);

    return (

        <div className='text-center '>
            <h1 className='font-bold my-10 text-2xl'>
                {name}
            </h1>
            <h3 className='font-bold text-lg'>
                {cuisines.join(" || ")}
            </h3>

            {
                // This is called controlled componrnt means its controlled the child components 
                categories.map((c, index) => {
                    return <ResCategories key={c?.card?.card?.categoryId} data={c?.card?.card}
                        showItems = {index === showIndex ? true : false}
                        setShowIndex={() => 
                            setShowIndex(showIndex === index ? null : index)
                        } />
                })
            }



        </div>
    )
}

export default Resturantmenu; 