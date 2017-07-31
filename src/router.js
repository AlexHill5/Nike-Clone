import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home/LandingPage';
import MenShoes from './Components/Mens/Products/MenShoes'
import MensClothing from './Components/Mens/Clothing/MensClothing'
import DetailedProduct from './Components/Mens/Products/DetailedProduct/DetailedProduct'
import ClothingDetail from './Components/Mens/Clothing/ClothingDetail'
import Cart from './Components/Cart/Cart'


export default (
    <Switch>
        <Route component={ Home } path='/' exact/>
        <Route component={ MenShoes } path='/MenShoes'/>
        <Route component={ DetailedProduct} path='/MShoes/:id'/>
        <Route component={ ClothingDetail } path='/MClothing/:id'/>
        <Route component={ Cart } path='/Cart'/>
        <Route component={ MensClothing } path='/MenClothing'/>
    </Switch>
)