import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import ClothingStyling from './ClothingStyling'
import './clothing.css'

class MenClothing extends Component {
    constructor() {
        super();

        this.state = {
            clothing: [],
        }

      
    }
    componentDidMount() {
        const results = axios.get(`/menclothing`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    clothing: finalResult
                });
                console.log(this.state)
            });
    }


    render(){

            const MenClothing = this.state.clothing
            .map((clothing, i) => {
                return <ClothingStyling 
                            name = {clothing.clothingname}
                            image = {clothing.img}
                            price = {clothing.price}
                            id = {clothing.id}
                            key={clothing.id}
                            />                
            }) 
            return ( 
                <div>
                    <h1 className='shoes-header'> MEN'S CLOTHING </h1>
                <div className = "main">
                     { MenClothing } 
                </div>
                </div>
            );
        }
    }

    export default MenClothing;