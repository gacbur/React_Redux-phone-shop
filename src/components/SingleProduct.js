import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const SingleProduct = (props) => {

    const products = useSelector(state => state.products)

    const [routerState, setRouterState] = useState(props.match.params.id)

    const getRoom = (id) => {
        let tempProducts = [...products]
        console.log(tempProducts)
        const product = tempProducts.find(item => item.id === id)
        console.log(product)

        return product
    }

    const product = getRoom(parseInt(routerState))

    if (!product) {
        return (
            <div>
                <h1>nie znaleziono produktu</h1>
            </div >
        )
    }

    else {

        const { name, img, } = product


        return (
            <div className="single-room-cnt">
                <div className="single-room">
                    {product.name}
                </div>
            </div>
        )
    }

}


export default SingleProduct
