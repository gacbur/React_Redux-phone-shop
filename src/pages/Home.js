import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { allActions } from '../actions/cartActions'

import HomeTitle from '../components/HomeTitle'
import HomeCarouselItem from '../components/HomeCarouselItem'

import Carousel from 'react-elastic-carousel';


const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    let featuredProducts = useSelector(state => state.featuredProducts)

    useEffect(() => {

        const tempProducts = [...products]

        let featuredProducts = []

        do {
            let randomIndex = Math.floor(Math.random() * tempProducts.length)
            tempProducts.slice(tempProducts[randomIndex], tempProducts[randomIndex])
            featuredProducts.push(tempProducts[randomIndex])

            featuredProducts = [...new Set(featuredProducts)]
        } while (featuredProducts.length < 4)


        dispatch(allActions.getFeaturedProducts(featuredProducts))

    }, [products, dispatch])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
    ]

    return (
        <div className="home-cnt">
            <HomeTitle />
            <div className="home">
                <div className="home-carousel">
                    <h2>Featured Products</h2>
                    <Carousel breakPoints={breakPoints}>
                        {featuredProducts.map((item, index) => (
                            <HomeCarouselItem key={index} item={item} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Home
