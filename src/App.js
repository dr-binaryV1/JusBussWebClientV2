import React, { Component } from 'react';
import './App.css';

import Header from './components/common/header';
import SignUp from './components/auth/signup';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <img className="left-rocket" src="left-rocket.png" />
        <img className="right-rocket" src="right-rocket.png" />
        <SignUp />
      </div>
    );
  }
}

export default App;
