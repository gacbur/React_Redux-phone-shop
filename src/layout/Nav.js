import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { FaShoppingCart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {

    const cart = useSelector(state => state.cart)
    const [ItemsInCartNb, setItemsInCartNb] = useState(0)

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const cartItemsCounter = cart.reduce((counter, { amount }) => amount > 0 ? counter + amount : counter, 0)
        setItemsInCartNb(cartItemsCounter)
    }, [cart])

    return (
        <div className="nav">
            <div className="nav-logo">
                <NavLink to='/'>Smartphone store</NavLink>
            </div>
            <ul className={`nav-links ${showMenu ? 'show' : ''}`} >
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart <span className="cart-items-number"><FaShoppingCart />{ItemsInCartNb === 0 ? null : ItemsInCartNb}</span></NavLink>
                </li>
            </ul>
            <button className="nav-hamburger" onClick={() => setShowMenu(prevState => !prevState)}><GiHamburgerMenu className={`hamburger-icon ${showMenu ? 'active' : ''}`} /></button>
        </div>
    )
}

export default Nav
