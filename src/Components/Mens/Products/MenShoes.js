import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import ShoeStyling from './ShoeStyling'
import './shoes.css'

class MenShoes extends Component {
    constructor() {
        super();

        this.state = {
            shoes: [],
        }

      
    }
    componentDidMount() {
        const results = axios.get(`/MenShoes`)
            .then(res => res.data)
            .then((finalResult) => {
                this.setState({
                    shoes: finalResult
                });
                console.log(this.state)
            });
    }


    render(){

            const MenShoes = this.state.shoes
            .map((shoes, i) => {
                return <ShoeStyling 
                            image = {shoes.img}
                            name = {shoes.shoename}
                            price = {shoes.price}
                            id = {shoes.id}
                            key={shoes.id}
                            />                
            }) 
            return ( 
                <div>
                    <h1 className='shoes-header'> MEN'S SHOES </h1>
                <div className = "main">
                     { MenShoes } 
                </div>
                </div>
            );
        }
    }

    export default MenShoes;