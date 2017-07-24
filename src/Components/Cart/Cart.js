import React, { Component } from 'react';
import './Cart.css' 

class Cart extends Component {
    render() {
        return (
            <div className='detailed-container'>
        
                <div className='cart-container'>
                    <div className="cartdetails"><h1> "user" - CART </h1></div>
                    <div className="cartdetails"><h1> SUBTOTAL = $Cart Item total </h1></div>
                    <div className="cartdetails"><h1> TAX   =   $TOTAL WITH TAX </h1></div>
                    <div className="cartdetails"><h1> TOTAL-PRICE = $$$</h1></div>
                    <div className="cartdetails"><button> CHECKOUT HERE </button></div>
                </div>
                
            </div>
        );
    }
}

export default Cart;