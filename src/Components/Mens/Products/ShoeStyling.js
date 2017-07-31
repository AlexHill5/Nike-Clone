import React, { Component } from 'react';
import './shoes.css'
import {Link } from 'react-router-dom'
class ShoeStyling extends Component {
    render() {
        return (
          
               <div className="shoes">
               <Link to={`MShoes/${this.props.id}`}>  <img  className="shoeImg"src={this.props.image}/></Link>
                <div className="shoe-price-container">
                <h1 className='shoe-name'>{this.props.name} </h1>
                <p className='price'>${this.props.price}</p>
                </div>
              </div> 
         
        );
    }
}

export default ShoeStyling;