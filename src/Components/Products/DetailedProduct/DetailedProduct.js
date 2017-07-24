import React, { Component } from 'react';
import axios from 'axios'
import './Detailed.css'

class DetailedProduct extends Component {
    constructor(){
        super();
        this.state={
            shoe: {}
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
            shoeName: this.state.shoe.shoename,
            shoeImage: this.state.shoe.img,
            shoePrice: this.state.shoe.price
        }
        axios.post('/addtocart', config).then()
       
    }


    
    render() {
        return (
            <div className='detailed-container'>
                <img className='selected-shoe' src={this.state.shoe.img } />
                
                    
                <div className='name-size'>
                    <h1 className='shoename'>{this.state.shoe.shoename}</h1>
                    <h1 className="shoeprice"> ${this.state.shoe.price} </h1>
                    <div className='sizeSet1'>
                        <button className='button-test'> Size: 8 </button>
                        <button className='button-test'> Size: 9 </button>
                        <button className='button-test'> Size: 10 </button>
                    </div>
                    <div className='sizeSet2'>
                        <button className='button-test'> Size: 11 </button>
                        <button className='button-test'> Size: 12 </button>
                        <button className='button-test'> Size: 13 </button>
                    </div>
                    <button className='addcart' onClick={this.addToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        );
    }
}

export default DetailedProduct;