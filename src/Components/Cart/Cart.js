import React, { Component } from 'react';
import axios from 'axios'; 
import './Cart.css' 

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cart: [],
            cartitems: [],
            showiteminfo: false
        }
        this.checkout = this.checkout.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this)
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
        const items = axios.get('/cart')
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    cartitems: finalResult
                });
                console.log("CARTITEMS", this.state.cartitems)
            });
        
    }

    checkout(){
        var newCart = {sum: +this.state.cart.sum - +this.state.cart.sum}
        this.setState({
            cart: newCart,
            cartitems: [],
            showiteminfo: true
        })
        console.log("CHECKOUT", this.state)
        console.log( parseInt(this.state.cart.sum))
    }


    removeFromCart(id){
        const results = axios.delete(`/removeFromCart/${id}`)
        .then(() => {
            axios.get(`/cart`)
            .then(response => {
                this.setState({
                cartitems: response.data
            }) 
            axios.get(`/getsum`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    cart: finalResult[0]
                });
            });
        }
    )})
    }

 


render() {
        const items = this.state.cartitems.map((items, id) => {
            return (
                <li key={items.id} className="cart-list">
                    <span className="data"><img  className="thumbnail"src={items.shoeimg}/></span>
                    <span >Shoe</span >: <span className="data">{items.shoename}</span> | <span>Price</span>: <span className="data">${items.shoeprice}</span>
                    <button className="remove" onClick={() => this.removeFromCart(items.id)}> Remove </button>
                </li>
            
            )

        })



        return (
            <div className='detailed-container'>
                <div className="item-container">
                    <div className='items-header'><h1> ITEMS </h1></div>
                    <ul  hidden={this.state.showiteminfo}>
                    {items}
                    </ul>

                </div>
        
                <div className='cart-container'>
                    <div className="cartdetails"><h1> CART </h1></div>
                    <div className="cartdetails"><h1> SUBTOTAL = ${this.state.cart.sum} </h1></div>
                    <div className="cartdetails"><h1> TAX = ${parseInt(this.state.cart.sum) * (10/100)} </h1></div>
                    <div className="cartdetails"><h1> {`TOTAL = $${parseInt(this.state.cart.sum) * .08 + parseInt(this.state.cart.sum)}`} </h1></div>                    
                    <div className="cartdetails"><button className="checkout" onClick={this.checkout}> CHECKOUT HERE </button></div>
                </div>

            </div> 
        );
    }
}

export default Cart;