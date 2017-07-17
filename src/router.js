import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Home from './Components/Home/LandingPage';
// import About from "./Components/About/About";

export default (
    <Switch>
        <Route component={ Home } path='/' exact/>
        {/*<Route component={ MenShoes } path='/Men-Shoes'/>
        <Route component={ WomenShoes } path='/Women-Shoes'/>
        <Route component={ About } path='/about'/>*/}
    </Switch>
)