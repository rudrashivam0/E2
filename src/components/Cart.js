import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const cartItem = useSelector((store) => store.Cart.items);
    console.log(cartItem);


    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className='text-center mt-10 pt-4'>
            <div className=' w-[30%] m-auto flex  justify-between pb-2'>
                <h1 className='text-2xl font-bold'>Cart Page</h1>
                <button className='bg-black text-white p-2 rounded-lg hover:bg-gray-700 cursor-pointer'
                    onClick={handleClearCart} >
                    Clear Cart
                </button>

            </div>

            {cartItem.length === 0 && (
                <h1 className='bg-gray-200 w-fit m-auto px-4 py-1 border-0 rounded-md text-xl mt-5'>Cart is Empty Please Add Some Items</h1>
            )}
            <div className='w-[50%] m-auto bg-gray-200  rounded-md border-0'>

                <CartItems items={cartItem} />
            </div>
        </div>
    )
}

export default Cart