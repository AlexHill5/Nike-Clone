import React, { Component } from 'react';
import axios from 'axios'
import './Detailed.css'

class DetailedProduct extends Component {
    constructor(){
        super();
        this.state={
            shoe: []
        }
    }
      componentDidMount() {
        const results = axios.get(`http://localhost:4000/MenShoes`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    shoe: finalResult
                });
                console.log(this.state)
            });
    }
    render() {
        return (
            <div className='detailed-container'>
                <div className='selected-shoe'>
                    IMAGE
                </div>
                <div className='name-size'>
                    <div className='test'>SHOE NAME HERE </div>
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
                    <button className='addcart'>
                        ADD TO CART
                    </button>
                </div>
            </div>
        );
    }
}

export default DetailedProduct;