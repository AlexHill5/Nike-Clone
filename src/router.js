import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home/LandingPage';
import MenShoes from './Components/Products/MenShoes'
import DetailedProduct from './Components/Products/DetailedProduct/DetailedProduct'
import Cart from './Components/Cart/Cart'


export default (
    <Switch>
        <Route component={ Home } path='/' exact/>
        <Route component={ MenShoes } path='/MenShoes'/>
        <Route component={ DetailedProduct} path='/MShoes/:id'/>
        <Route component={ Cart } path='/Cart'/>
        {/*<Route component={ WomenShoes } path='/Women-Shoes'/>*/}
    </Switch>
)