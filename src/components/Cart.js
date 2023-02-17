import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from './utils/cartSlice';
const Cart = () => {
   const cartItems = useSelector((store)=>store.cart.items);{/**it will rerender cartitems */}
    //const store = useSelector((store) => store);{/** everytime store changes my cart is changes it will rerender store */}
   const dispatch = useDispatch();
   
   
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  
  
    return (
    <div>
      <h1 className="p-2 font-bold">Cart Item -{cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()} >Clear Cart</button>
      <div className="flex">
        {cartItems.map(item => <FoodItem key ={item.id} {...item} />)} 

      </div>
    </div>
  )
}

export default Cart
