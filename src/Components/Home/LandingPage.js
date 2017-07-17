import React, { Component } from 'react';
import NavBar from "./navbar/NavBar.js"
import MainShoes from './main-shoes/MainShoes'



class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar> </NavBar>
                <MainShoes> </MainShoes>
            </div>
        );
    }
}

export default LandingPage;