import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
  class App extends Component {
    state={
      likes:0,
      shares:0
    }
  inclikes=()=>{
      this.setState(
        {
          likes:this.state.likes+1
        }
      )
    }
    incshares=()=>{
      this.setState(
        {
          shares:this.state.shares+1
        }
      )
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">facebook</h1>
          </header>
          <p className="App-intro">
            likes:{this.state.likes}
            shares:{this.state.shares}
          </p>
        <div>
          <button onClick={this.inclikes}>LIKE</button>
          
          <button onClick={this.incshares}>SHARE</button>
          </div>
          </div>
      );
    }
  }

  
 

export default App;
