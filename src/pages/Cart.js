import React from 'react'

import { useSelector } from 'react-redux'

import CartItem from '../components/CartItem'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <div className='cart-cnt'>
            <div className="cart">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Cart
