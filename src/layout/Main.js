import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Cart from '../pages/Cart'
import Products from '../pages/Products'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </div>
    )
}

export default Main
