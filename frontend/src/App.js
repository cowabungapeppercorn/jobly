import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import Nav from './Nav'
import { BrowserRouter } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentToken: null
    }
    this.setCurrentToken = this.setCurrentToken.bind(this)
  }

  componentDidMount() {
    if (window.localStorage._token) {
      this.setState({ currentToken: window.localStorage._token});
    }
  }

  setCurrentToken(token) {
    if (token) {
      window.localStorage.setItem('_token', token);
      this.setState({ currentToken: token });
    } else {
      window.localStorage.removeItem('_token');
      this.setState({ currentToken: null });
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav currentToken={this.state.currentToken} />
          <div className="container mt-3">
            <Routes setToken={this.setCurrentToken} currentToken={this.state.currentToken} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
