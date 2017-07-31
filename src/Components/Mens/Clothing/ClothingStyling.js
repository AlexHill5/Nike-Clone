import React, { Component } from 'react';
import './clothing.css'
import {Link } from 'react-router-dom'
class ClothingStyling extends Component {
    render() {
        return (
          
               <div className="shoes">
               <Link to={`MClothing/${this.props.id}`}>  <img  className="clothingimg"src={this.props.image}/></Link>
                <div className="shoe-price">
                <h1 className='shoe-name'>{this.props.name} </h1>
                <p className='price'>${this.props.price}</p>
                </div>
              </div> 
         
        );
    }
}

export default ClothingStyling;