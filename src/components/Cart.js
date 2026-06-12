import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {

    const cardItem = useSelector((store) => store.Cart.items);
    console.log(cardItem);

    return (
        <div className='text-center mt-10 pt-4'>
            <h1 className='text-2xl font-bold'>Cart Page</h1>
            <div>
                
            </div>
        </div>
    )
}

export default Cart