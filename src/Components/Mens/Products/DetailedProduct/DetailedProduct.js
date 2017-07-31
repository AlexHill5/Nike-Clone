import React, { Component } from 'react';
import axios from 'axios'
import './Detailed.css'

class DetailedProduct extends Component {
    constructor(){
        super();
        this.state={
            shoe: {},
        }
          this.addToCart = this.addToCart.bind(this)
    }
      componentDidMount() {
        const results = axios.get(`/ShoeId/${this.props.match.params.id}`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    shoe: finalResult[0]
                });
                console.log(this.state)
            });
    }


    addToCart(){
        // Make a POST req to your server, passing in the data.
        let config = {
        shoeid: this.state.shoe.id,
        shoeName: this.state.shoe.shoename,
        shoeimg: this.state.shoe.img,
        shoeprice: this.state.shoe.price
        }
        axios.post('http://localhost:4000/addtocart', config)
        .then( (config) => config)
        .catch( (err) => err);
       
    }


    
    render() {
        return (
            
            <div className='detailed-container'>
                <img className='selected-shoe' src={this.state.shoe.img } />
                
                    
                <div className='name-size'>
                    <h1 className='shoename'>{this.state.shoe.shoename}</h1>
                    <h1 className="shoeprice"> ${this.state.shoe.price} </h1>
                    <button className='addcart' onClick={this.addToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div>

        );
    }
}

export default DetailedProduct;