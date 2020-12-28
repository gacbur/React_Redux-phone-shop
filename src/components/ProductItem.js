import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { allActions } from '../actions/cartActions'

const ProductItem = ({ item }) => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const [IsItemInCart, setIsItemInCart] = useState(false)

    useEffect(() => {

        const itemInCart = () => {
            if (cart.find(el => el.name === item.name)) {
                return true
            } else {
                return false
            }
        }

        let IsItemInCart = itemInCart()

        setIsItemInCart(IsItemInCart)

    }, [cart, item.name])

    return (
        <div className="product-item">
            <Link to={`/product/${item.id}`} >
                <div className="product-item-image">
                    <img src={item.img[0]} alt={item.name} />
                </div>

                <div className="product-item-text">
                    <h4>Product: {item.name}</h4>
                    <h5>Price: ${item.price}</h5>
                </div>
            </Link>
            <div className="product-item-btn-cnt">
                <button
                    disabled={IsItemInCart ? true : false}
                    onClick={() => dispatch(allActions.addToCart(item))}
                    className={`${IsItemInCart ? 'product-item-btn disabled' : 'product-item-btn'}`}
                >
                    {`${IsItemInCart ? 'Item in cart' : 'Add to cart'}`}</button>
            </div>
        </div>
    )
}

export default ProductItem
