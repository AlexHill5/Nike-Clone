import React, { Component } from 'react';
import axios from 'axios'
import './detail.css'

class DetailedProduct extends Component {
    constructor(){
        super();
        this.state={
            clothing: {},
        }
          this.addToCart = this.addToCart.bind(this)
    }
      componentDidMount() {
        const results = axios.get(`/Clothingid/${this.props.match.params.id}`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    clothing: finalResult[0]
                });
                console.log(this.state)
            });
    }


    addToCart(){
        // Make a POST req to your server, passing in the data.
        let config = {
        shoeid: this.state.clothing.id,
        shoeName: this.state.clothing.shoename,
        shoeimg: this.state.clothing.img,
        shoeprice: this.state.clothing.price
        }
        axios.post('http://localhost:4000/addtocart', config)
        .then( (config) => config)
        .catch( (err) => err);
       
    }


    
    render() {
        return (
            
            <div className='detailed-container'>
                <img className='selected-clothing' src={this.state.clothing.img } />
                
                    
                <div className='name-size'>
                    <h1 className='shoename'>{this.state.clothing.clothingname}</h1>
                    <h1 className="shoeprice"> ${this.state.clothing.price} </h1>
                    <button className='addcart' onClick={this.addToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div>

        );
    }
}

export default DetailedProduct;