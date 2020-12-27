import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProductsFilter from '../components/ProductsFilter'
import ProductItem from '../components/ProductItem'

import { allActions } from '../actions/cartActions'

const Products = () => {

    const products = useSelector(state => state.products)
    const sortedProducts = useSelector(state => state.sortedProducts)

    const dispatch = useDispatch()

    useEffect(() => {
        const getSortedProducts = () => {
            const productsItems = [...products]
            dispatch(allActions.getSortedProducts(productsItems))
        }
        getSortedProducts()
    }, [products, dispatch])

    return (
        <>
            <ProductsFilter />
            <div className="products-cnt">
                <div className="product">
                    {sortedProducts.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products
