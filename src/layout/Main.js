import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import SingleProduct from '../components/SingleProduct'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/products' exact component={Products} />
                <Route path='/product/:id' component={SingleProduct}></Route>
                <Route path='/cart' component={Cart} />
            </Switch>
        </div>
    )
}

export default Main
