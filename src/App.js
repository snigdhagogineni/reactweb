import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import config from './config';
import FacebookIcon from './FacebookIcon';

const defaultFetchOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      userLoggedIn: false,
      errorMessage: '',
      userId: null
    }
    this.logUserIn = this.logUserIn.bind(this);
  }

  parseLogInResponse({user = {}}) {
    if (user.success) {
      this.setState({
        userLoggedIn: true,
        userId: user.id
      });
    } else {
      this.setState({
        errorMessage: 'Sorry that wasnt correct'
      })
    }
  }

  logUserIn(username, password) {
    const fetchOptions = Object.assign({}, defaultFetchOptions);
    fetchOptions.body = JSON.stringify({
      username: username ,
      password: password
      
      
    });
    return fetch(config.USER_URL, fetchOptions)
      .then(results => results.json())
      .then(response => this.parseLogInResponse(response));
  }







    render() {
      return (
        <div className="App-page">
          <header className="App-page-header">
          <center><FacebookIcon /></center>
           <center>  <h1 className="App-page-title">facebook</h1></center>
          </header>
          
        <div>
         {
           this.state.userLoggedIn ?
            (<p>username<LoggedIn userId={this.state.userId}/></p>) :
             (<LoggedOut errorMessage={this.state.errorMessage} logUserIn={this.logUserIn}/>)
         }
          </div>
          </div>
      );
    }
  }

export default App;








