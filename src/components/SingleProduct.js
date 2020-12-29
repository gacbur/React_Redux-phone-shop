import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { allActions } from '../actions/cartActions'

import { useForm } from '../hooks/useForm'
import { Validation } from '../Validation'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const opinionInitialValues = {
    username: '',
    rating: '',
    opinion: '',
}

const SingleProduct = (props) => {
    const {
        handleChangeValues,
        values,
        handleSubmitForm,
        formCorrect,
        errors
    } = useForm(opinionInitialValues, Validation)

    const { username, rating, opinion } = values
    const { usernameError, ratingError, opinionError } = errors

    const products = useSelector(state => state.products)

    const [routerState, setRouterState] = useState()

    const [imageIndex, setImageIndex] = useState(0)

    const [productIsInCart, setProductIsInCart] = useState(false)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        setRouterState(props.match.params.id)
    }, [props.match.params.id])

    const getProduct = (id) => {
        let tempProducts = [...products]
        const product = tempProducts.find(item => item.id === id)

        return product
    }

    const product = getProduct(parseInt(routerState))

    useEffect(() => {
        if (cart.find(item => item === product)) {
            setProductIsInCart(true)
        } else {
            setProductIsInCart(false)
        }
    }, [product, cart])

    const [commentAddedMessage, setCommentAddedMessage] = useState('')

    useEffect(() => {
        if (formCorrect) {
            dispatch(allActions.addOpinion(values, product.id))
            setCommentAddedMessage("Opinion Added!")
            setTimeout(() => setCommentAddedMessage(''), 3000)
        }
    }, [formCorrect])

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
            <>
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
                    <div className="product-opinion">
                        <div className="opinion-intro">
                            <h2>Add review</h2>
                        </div>
                        <form className="opinion-form">
                            <div className="opinion-form-control">
                                <label htmlFor="username">Username: </label>
                                <input
                                    onChange={handleChangeValues}
                                    value={username}
                                    type="text"
                                    name="username"
                                    id="username" />
                                <small className="opinion-error-msg">{usernameError ? usernameError : ''}</small>
                            </div>
                            <div className="opinion-form-control">
                                <label htmlFor="rating">Rating: </label>
                                <input
                                    onChange={handleChangeValues}
                                    value={rating}
                                    type="number"
                                    min="1"
                                    max="5"
                                    name="rating"
                                    id="rating" />
                                <small className="opinion-error-msg">{ratingError ? ratingError : ''}</small>
                            </div>
                            <div className="opinion-form-control">
                                <label htmlFor="opinion">Opinion: </label>
                                <textarea
                                    onChange={handleChangeValues}
                                    value={opinion}
                                    name="opinion"
                                    id="opinion" >
                                </textarea>
                                <small className="opinion-error-msg">{opinionError ? opinionError : ''}</small>
                            </div>
                            <button onClick={handleSubmitForm} className="opinion-add-btn">Submit</button>
                        </form>
                        <div className="opinions-cnt">
                            <h3>Comments (0)</h3>
                            <p className="opinion-added-msg">{commentAddedMessage}</p>
                            {product.opinions.map(item => (
                                <div className="opinion-item">
                                    <p><strong>Username: </strong>{item.username}</p>
                                    <p><strong>Rating: </strong>{item.rating}</p>
                                    <p><strong>Review: </strong>{item.opinion}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}


export default SingleProduct
