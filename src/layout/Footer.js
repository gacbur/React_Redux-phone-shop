import React from 'react'

import { Link } from 'react-router-dom'

import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram
} from 'react-icons/ai'


const Footer = () => {
    return (
        <div className="footer-cnt">
            <div className="footer-left">
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
            </div>
            <div className="footer-right">
                <Link><AiFillFacebook /></Link>
                <Link><AiFillTwitterSquare /></Link>
                <Link><AiFillInstagram /></Link>
            </div>
        </div>
    )
}

export default Footer
