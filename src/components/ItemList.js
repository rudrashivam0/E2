import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constant';


const ItemList = ({ items }) => {


    // console.log(items);
    return (
        <div >

            {items.map((item) => (
                <div key={item.card?.info?.id} className='p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between gap-4 '>
                    <div className='pt-4 ' >
                        <span className='pr-4'>
                            {item.card.info.name}
                        </span>
                        <span>
                            {"  "} ₹ {item.card.info.price / 100 ? item.card.info.price / 100 : item.card.info.defaultPrice
                                / 100}
                        </span>
                        <p className='text-xs'>
                            {item.card.info.description
                            }
                        </p>

                    </div >


                    <div className='relative'>

                        <button className='px-2 py-1 bg-gray-300 shadow-lg  rounded-lg absolute bottom-1 right-1 hover:bg-green-300 transition-all duration-300 cursor-pointer'>
                            Add +
                        </button>



                        <img className='max-w-[150px]  rounded-lg h-[130px] cover'
                            src={CDN_URL + item.card?.info?.imageId}
                            alt={item.card?.info?.name}
                        />


                    </div>

                </div>
            ))
            }



        </div >
    )
}

export default ItemList