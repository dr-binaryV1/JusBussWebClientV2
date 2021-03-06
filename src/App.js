import React, { Component } from 'react';
import './App.css';

import Header from './components/common/header';
import Auth from './components/auth';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <img className="left-rocket" src="left-rocket.png" alt="rocket-logo" />
        <img className="right-rocket" src="right-rocket.png" alt="rocket-logo" />
        <Auth />
      </div>
    );
  }
}

export default App;
