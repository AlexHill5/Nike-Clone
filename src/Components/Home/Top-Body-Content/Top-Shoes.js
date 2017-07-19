import React, { Component } from 'react';
import "./MainShoes.css"

class MainShoes extends Component {
    render() {
        return (
            <div className="ad-container">
                     <h1> GEAR UP FOR SPORT </h1>
                <div className='women-container'> 
                    <img className="women-ad" src={require("./women-ad.jpg")} />
                    <button className="women-button"> BUY WOMEN SHOES HERE </button>
                </div>
                
                {/*<div className="kd-container">
                    <img className="kd-shoe" src={require("./kd-shoe.jpg")}/>
                    <img className="kd-ad" src={require("./kd-ad.jpg")}/>
                </div>
                <div className="jordan-container">
                     <img className="jordan-trunner" src={require("./jordan-trunner.jpg")}/>
                </div>*/}

            </div>
        );
    }
}

export default MainShoes;