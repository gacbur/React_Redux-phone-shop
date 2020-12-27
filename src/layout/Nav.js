import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { FaShoppingCart } from 'react-icons/fa'

const Nav = () => {

    const cart = useSelector(state => state.cart)
    const [ItemsInCartNb, setItemsInCartNb] = useState(0)

    useEffect(() => {
        const cartItemsCounter = cart.reduce((counter, { amount }) => amount > 0 ? counter + amount : counter, 0)
        setItemsInCartNb(cartItemsCounter)
    }, [cart])

    return (
        <div className="nav">
            <div className="nav-logo">
                <NavLink to='/'>Smartphone e-commerce</NavLink>
            </div>
            <ul >
                <li>
                    <NavLink to='/'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart <span className="cart-items-number"><FaShoppingCart />{ItemsInCartNb === 0 ? null : ItemsInCartNb}</span></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
