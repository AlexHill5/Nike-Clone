import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home/LandingPage';
import MenShoes from './Components/Products/MenShoes'
import DetailedProduct from './Components/Products/DetailedProduct/DetailedProduct'


export default (
    <Switch>
        <Route component={ Home } path='/' exact/>
        <Route component={ MenShoes } path='/MenShoes'/>
        <Route component={ DetailedProduct} path='/MShoes/:id'/>
        {/*<Route component={ WomenShoes } path='/Women-Shoes'/>
        <Route component={ About } path='/about'/>*/}
    </Switch>
)