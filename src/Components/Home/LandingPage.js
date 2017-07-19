import React, { Component } from 'react';
import NavBar from "./navbar/NavBar.js";
import TopShoes from './Top-Body-Content/Top-Shoes';
import MiddleContent from './Middle-Body-Content/MiddleContent'



class LandingPage extends Component {
    render() {
        return (
            <div>
                <TopShoes> </TopShoes>
                <MiddleContent> </MiddleContent>
            </div>
        );
    }
}

export default LandingPage;