import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { allActions } from '../actions/cartActions'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const SingleProduct = (props) => {

    const products = useSelector(state => state.products)

    const [routerState, setRouterState] = useState()

    const [imageIndex, setImageIndex] = useState(0)

    const [productIsInCart, setProductIsInCart] = useState(false)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        setRouterState(props.match.params.id)
    }, [props.match.params.id])



    const getRoom = (id) => {
        let tempProducts = [...products]
        const product = tempProducts.find(item => item.id === id)

        return product
    }

    const product = getRoom(parseInt(routerState))

    useEffect(() => {
        if (cart.find(item => item === product)) {
            setProductIsInCart(true)
        } else {
            setProductIsInCart(false)
        }
    }, [product, cart])

    if (!product) {
        return (
            <div>
                <h1>nie znaleziono produktu</h1>
            </div >
        )
    }

    else {

        const {
            name,
            description,
            os,
            ram,
            memory,
            price,
            case_included,
            free_shipping,
            img
        } = product

        const handleSwitchImage = (button, index) => {

            if (button === 'choose') {
                setImageIndex(index)
            }

            if (button === 'prev') {
                setImageIndex(prevState => prevState - 1)
                if (imageIndex < 1) {
                    setImageIndex(img.length - 1)
                }
            }
            if (button === 'next') {
                setImageIndex(prevState => prevState + 1)
                if (imageIndex > 1) {
                    setImageIndex(0)
                }
            }
        }

        return (
            <div className="single-product-cnt">
                <div className="single-product">
                    <div className="single-product-img-cnt">
                        <div className="single-product-img">
                            <img src={img[imageIndex]} alt={name} />
                        </div>
                        <div className="single-product-img-btns">
                            <button
                                onClick={() => handleSwitchImage('prev')}
                                className="single-product-next-img"><AiOutlineArrowLeft /></button>
                            {img.map((item, index) => {
                                return (
                                    <div className="single-product-btn">
                                        <img onClick={() => handleSwitchImage('choose', index)} src={item} alt="btn"></img>
                                    </div>
                                )

                            })}
                            <button
                                onClick={() => handleSwitchImage('next')}
                                className="single-product-next-img"><AiOutlineArrowRight /></button>
                        </div>
                    </div>
                    <div className="single-product-description">
                        <h2 className="single-product-text-control">{name}</h2>
                        <p className="single-product-text-control">{description}</p>
                        <p className="single-product-text-control"><strong>Operating system: </strong>{os}</p>
                        <p className="single-product-text-control"><strong>Device memory: </strong>{memory}</p>
                        <p className="single-product-text-control"><strong>RAM memory: </strong>{ram}</p>
                        <p className="single-product-text-control"><strong>case included: </strong>{case_included ? 'Case is included' : 'Case is not included'}</p>
                        <p className="single-product-text-control"><strong>free shipping: </strong>{free_shipping ? 'We provide free shipping for this product!' : 'We do not provide free shipping for this product'}</p>
                        <p className="single-product-text-control"><strong>Price: </strong>${price}</p>
                        <button
                            disabled={productIsInCart ? true : false}
                            onClick={() => dispatch(allActions.addToCart(product))}
                            className={`single-product-add-cart ${productIsInCart && 'disabled'}`}
                        >{`${productIsInCart ? 'Item in cart' : 'Add to cart'}`}</button>
                    </div>
                </div>
            </div>
        )
    }

}


export default SingleProduct
