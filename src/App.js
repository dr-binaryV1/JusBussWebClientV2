import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/common/header';
import SignUp from './components/auth/signup';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUp />
      </div>
    );
  }
}

export default App;
