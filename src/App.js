import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import NavBar from './Components/Home/navbar/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        { router }
      </div>
    );
  }
}

export default App;
