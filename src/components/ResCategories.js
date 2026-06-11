import React, { useContext } from 'react'
import ItemList from './ItemList';
import { useState } from 'react';
import { motion } from "framer-motion";
import UserContext from '../utils/UserContext';

const ResCategories = ({ data, showItems, setShowIndex }) => {

    const { loggedInUser } = useContext(UserContext);
    // console.log(data);
    // const [showItems,setShowItems] =  useState(false);

    const handleClick = () => {
        console.log("clicked");
        // if(showItems === false){
        //     setShowItems(true);
        // }
        // else{ 
        //     setShowItems(false);
        // }
        // setShowItems(!showItems);
        setShowIndex();
    }
    // console.log(data);
    return (
        <div className='cursor-pointer '>
            {/* Header  */}
            <div className='w-6/12 bg-gray-200 shadow-lg p-2 mx-auto my-3 border border-gray-400 rounded-md'>

                <div className='flex justify-between' onClick={handleClick}>
                    <span className='font-bold text-lg '>{data?.title} ({data?.itemCards.length})
                        <span className='taxt-xs '>
                            {loggedInUser}
                        </span>
                    </span>

                    <span>⬇️</span>

                </div>


                <motion.div
                    initial={false}
                    animate={{
                        height: showItems ? "400px" : 0,
                    }}
                    className="overflow-y-auto"
                >
                    <ItemList items={data?.itemCards} />
                </motion.div>

            </div>



            {/* Body  */}
        </div>
    )
}

export default ResCategories