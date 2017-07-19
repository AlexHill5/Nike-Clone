import React, { Component } from 'react';
import './shoes.css'
import {Link } from 'react-router-dom'
class ShoeStyling extends Component {
    render() {
        return (
          
               <Link to={`localhost:3000/MShoes/detailed/${this.props.id}`}> <div className="shoes">
                <img  className="shoeImg"src={this.props.image}/>
                <p>{this.props.name} </p>
                <p>${this.props.price}</p>
              </div> </Link>
         
        );
    }
}

export default ShoeStyling;