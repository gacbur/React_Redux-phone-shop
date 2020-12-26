import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa'

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-logo">
                <NavLink to='/'>Smartphone Shop</NavLink>
            </div>
            <ul >
                <li>
                    <NavLink to='/'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart <FaShoppingCart /></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
