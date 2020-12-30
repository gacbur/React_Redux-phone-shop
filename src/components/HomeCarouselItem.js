import React from 'react'

import { Link } from 'react-router-dom'

const HomeCarouselItem = ({ item }) => {

    const { name, img, opinions } = item

    return (
        <Link className="home-carousel-item-link" to={`/product/${item.id}`}>
            <div className="home-carousel-item">
                <div className="home-carousel-img">
                    <img src={img[0]} alt={name} />
                </div>
                <div className="home-carousel-text">
                    <h6>{name}</h6>
                    <h6 style={{ textAlign: 'left' }}>reviews: ({opinions.length})</h6>
                </div>
            </div>
        </Link>
    )
}

export default HomeCarouselItem
