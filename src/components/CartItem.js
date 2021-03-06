import React from 'react'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { allActions } from '../actions/cartActions'

import { FaTrash } from 'react-icons/fa'

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.img[0]} alt="" />
            </div>
            <div className="cart-item-text">
                < Link to={`/product/${item.id}`
                } ><h4>{item.name}</h4></Link >
                <h5>Price: ${item.price}</h5>
                <button
                    onClick={() => dispatch(allActions.removeFromCart(item.id))}
                    className="cart-item-btn"
                >
                    <FaTrash /></button>
                <button onClick={() => dispatch(allActions.increaseAmount(item.id))} className="cart-item-btn-counter">+</button>
                {item.amount}
                <button
                    onClick={item.amount === 1 ?
                        () => dispatch(allActions.removeFromCart(item.id))
                        :
                        () => dispatch(allActions.decreaseAmount(item.id, item.amount))
                    } className="cart-item-btn-counter">-</button>
            </div>
        </div>
    )
}

export default CartItem
