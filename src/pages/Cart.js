import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import CartItem from '../components/CartItem'

import { allActions } from '../actions/cartActions'

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const total = useSelector(state => state.total)
    const amount = useSelector(state => state.amount)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allActions.getTotals())
    }, [cart, dispatch])

    return (
        <>
            {
                cart.length > 0 ?
                    < div className='cart-cnt' >
                        <div className="cart">
                            {cart.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="cart-total">
                            <h3>Total Price: <strong>${total}</strong></h3>
                            <h4>Number of Items: <strong>{amount}</strong></h4>
                        </div>
                        <div className="cart-manage">
                            <button
                                onClick={() => dispatch(allActions.resetCart())} className="cart-manage-btn reset"
                            >
                                Reset Cart
                                </button>
                            <button className="cart-manage-btn accept">Continue</button>
                        </div>
                    </div >
                    : <h2 style={{ textAlign: 'center', marginTop: '4em' }}>No items in the cart yet!</h2>
            }
        </>
    )
}

export default Cart
