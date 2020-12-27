import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Cart from '../pages/Cart'
import Products from '../pages/Products'
import SingleProduct from '../components/SingleProduct'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/cart' component={Cart} />
                <Route path='/product/:id' component={SingleProduct}></Route>
            </Switch>
        </div>
    )
}

export default Main
