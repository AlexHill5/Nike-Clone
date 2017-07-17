import React, { Component } from 'react';
import "./MainShoes.css"

class MainShoes extends Component {
    render() {
        return (
            <div className="container">
                <div className="lebron-container">
                    <img className="lebron-ad" src={require("./lebron-ad.jpg")} />
                    <img className="lebron-shoe" src={require("./lebron-shoes.jpg")}/>
                </div>
                <div>
                <img className="jordan-trunner" src={require("./jordan-trunner.jpg")}/>
                </div>
                <div>
                    <img className="lebron-shoe" src={require("./kd-ad.jpg")}/>
                    <img className="kd-shoe" src={require("./kd-shoe.jpg")}/>
                </div>

            </div>
        );
    }
}

export default MainShoes;