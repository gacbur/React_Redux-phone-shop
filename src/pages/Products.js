import React from 'react'
import { useSelector } from 'react-redux'

import ProductItem from '../components/ProductItem'

const Products = () => {

    const products = useSelector(state => state.products)

    return (
        <div className="products-cnt">
            <div className="product">
                {products.map(item => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Products
