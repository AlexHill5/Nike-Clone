import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {

        return (
            <div className="container">
<nav id="primary_nav_wrap" className="shopping">
<ul>
 
  <li><a href="#"> <h1> Shop Here </h1></a>
    <ul>
      <li className="dir"><a href="#">Men</a>
        <ul>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Accessories</a></li>

        </ul>
      </li>
            <li className="dir"><a href="#">Women</a>
        <ul>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </li>
            <li className="dir"><a href="#">Boys</a>
        <ul>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </li>
            <li className="dir"><a href="#">Girls</a>
        <ul>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Clothing</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </li>
    </ul>
  </li>

</ul>
</nav>
              <Link to="/" >  <img className="logo" src={require("./Nike-logo.png")}/> </Link>
                <img className="cart" src={require("./shopping-cart.png")}/>
            </div>
        );
    }
}

export default NavBar;