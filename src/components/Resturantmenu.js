import React from 'react'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';

export const Resturantmenu = () => {

    const [resInfo, setResInfo] = useState(null);

    //? ResId extract from the useParem hook given by react 
    //? useParems give us OBject with resId 
    const { resId } = useParams();
    // console.log(parems)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        console.log(resInfo);
    }

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

    console.log(itemCards);

    console.log(itemCards[0].card.info.name);


    return (

        <div className='menu'>
            <h1>
                {name}
            </h1>
            <h3>
                {cuisines.join(" || ")}
            </h3>
            <h3>
                {costForTwoMessage}
            </h3>
            <h2>Menu</h2>

            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name} </li>
                <li>{itemCards[2].card.info.name}</li> */}

                {
                    itemCards.map((item) => {
                        return <li key={item.card.info.id}>
                            {item.card.info.name} - {"₹"} {item.card.info.price / 100}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Resturantmenu; 