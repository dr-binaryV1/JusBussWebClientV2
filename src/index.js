import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/common/header';
import SignUp from './components/auth/signup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Header />
    <SignUp />
  </div>
, document.getElementById('root'));
registerServiceWorker();
