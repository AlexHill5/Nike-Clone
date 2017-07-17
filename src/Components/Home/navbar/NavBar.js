import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="Container">
                <img className="menu" src={require("./menu.png")}/>
                <img className="logo" src={require("./Nike-logo.png")}/>
                <img className="cart" src={require("./shopping-cart.png")}/> 
            </div>
        );
    }
}

export default NavBar;