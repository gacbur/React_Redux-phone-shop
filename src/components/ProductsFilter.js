import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { allActions } from '../actions/cartActions'

import { BiUpArrow } from 'react-icons/bi'

const ProductsFilter = () => {

    const sortingValues = useSelector(state => state.sortingValues)
    const products = useSelector(state => state.products)

    const [filtersShow, setShowFilters] = useState(true)

    const dispatch = useDispatch()

    const {
        name,
        price,
        free_shipping,
        os,
        case_included,
        by_price } = sortingValues

    const handleChangeSortingValues = (e) => {
        const target = e.target
        const name = e.target.name
        const value = target.type === 'checkbox' ?
            target.checked
            :
            target.value

        dispatch(allActions.changeSortedValues(name, value))
    }

    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }

    let osItems = getUnique(products, 'os')
    osItems = ['all', ...osItems]
    osItems = osItems.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ))

    useEffect(() => {

        const {
            name,
            price,
            case_included,
            free_shipping,
            os,
        } = sortingValues

        const fitlerProducts = () => {

            let tempProducts = [...products]

            tempProducts = tempProducts.filter(item => {
                if (name === '') {
                    return item
                }
                return item.name.toLowerCase().includes(name.toLowerCase())
            })

            tempProducts = tempProducts.filter(item => item.price >= price)

            if (case_included) {
                tempProducts = tempProducts.filter(item => item.case_included === true)
            }

            if (free_shipping) {
                tempProducts = tempProducts.filter(item => item.free_shipping === true)
            }

            if (os !== 'all') {
                tempProducts = tempProducts.filter(item => item.os === os)
            }

            tempProducts = tempProducts.sort((a, b) => {
                if (by_price === 'all') return tempProducts
                if (by_price === 'low to high') return a.price > b.price ? 1 : -1
                if (by_price === 'high to low') return a.price < b.price ? 1 : -1
                return tempProducts
            })

            dispatch(allActions.setSortedProducts(tempProducts))
        }
        fitlerProducts()

    }, [name, sortingValues, products, case_included, free_shipping, os, by_price, dispatch])

    return (
        <div className="products-filter-cnt">
            <form className="filter-form">
                <button type="button" onClick={() => setShowFilters(prevState => !prevState)}
                    className="products-filter-toggle">{filtersShow ? 'Hide' : 'Show'} filters <BiUpArrow className={`show-filters-arrow ${filtersShow ? 'active' : ''}`} /> </button>
                <div className={`filters ${filtersShow ? 'active' : ''}`}>
                    <div className="filter-form-el search-form">
                        <label htmlFor="name">Search by Products name </label>
                        <input
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChangeSortingValues}
                        />
                    </div>
                    <div className="filter-form-el">
                        <label htmlFor="price">Price from ($) </label>
                        <input
                            type="number"
                            name="price"
                            min="0"
                            id="price"
                            value={price}
                            onChange={handleChangeSortingValues}></input>
                    </div>
                    <div className="filter-form-el">
                        <label htmlFor="case_included">With Case </label>
                        <input
                            value={case_included}
                            type="checkbox"
                            name="case_included"
                            id="case_included"
                            onChange={handleChangeSortingValues}
                        />
                    </div>
                    <div className="filter-form-el">
                        <label htmlFor="free_shipping">Free Shipping </label>
                        <input
                            value={free_shipping}
                            type="checkbox"
                            name="free_shipping"
                            id="free_shipping"
                            onChange={handleChangeSortingValues}
                        />
                    </div>
                    <div className="filter-form-el">
                        <label htmlFor="os">Operating System </label>
                        <select
                            value={os}
                            name="os"
                            id="os"
                            onChange={handleChangeSortingValues}
                        >
                            {osItems}
                        </select>
                    </div>
                    <div className="filter-form-el">
                        <label htmlFor="by_price">Sort by Price </label>
                        <select
                            value={by_price}
                            name="by_price"
                            id="by_price"
                            onChange={handleChangeSortingValues}
                        >
                            <option value='all'>all</option>
                            <option value='low to high'>low to high</option>
                            <option value='high to low'>high to low</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductsFilter
