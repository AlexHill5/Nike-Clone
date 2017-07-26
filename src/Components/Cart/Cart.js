import React, { Component } from 'react';
import axios from 'axios';
import './Cart.css' 

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cart: [],
            salesTax: null
        }
    }

        componentDidMount() {
        const results = axios.get(`/getsum`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    cart: finalResult[0]
                });
                console.log("CART", this.state)
            });
    }

 


    render() {


        return (
            <div className='detailed-container'>
        
                <div className='cart-container'>
                    <div className="cartdetails"><h1> CART </h1></div>
                    <div className="cartdetails"><h1> SUBTOTAL = ${this.state.cart.sum} </h1></div>
                    <div className="cartdetails"><h1> TAX = ${parseInt(this.state.cart.sum) * (10/100)} </h1></div>
                    <div className="cartdetails"><h1> {`TOTAL = $ ${parseInt(this.state.cart.sum) * (10 / 100) + parseInt(this.state.cart.sum)}`} </h1></div>
                    <div className="cartdetails"><button className="checkout"> CHECKOUT HERE </button></div>
                </div>

            </div>
        );
    }
}

export default Cart;