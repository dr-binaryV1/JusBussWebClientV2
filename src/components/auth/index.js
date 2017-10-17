import React, { Component } from 'react';

import SignUp from './signup';
import SignIn from './signin';

class Auth extends Component {
  state = {
    currenlyViewing: 'signup'
  }

  render() {
    return (
      <div className="register-login-background">
        <div className="register-login-header">
          <p className="header-p-text">Your Guide to Everywhere Jamaican</p>
          <img className="register-login-image" src="map-folded.png" alt="monitor" />
        </div>
        <div className="register-login-form">
          <div className="register-login-header-buttons">
            <div onClick={() => this.setState({ currenlyViewing: 'signin' })} className="form-header-button">Sign In</div>
            <div onClick={() => this.setState({ currenlyViewing: 'signup' })} className="form-header-button active">Sign Up</div>
          </div>

          {this.state.currenlyViewing === 'signin'
          ?
          <SignIn />
          :
          <SignUp />
          }

        </div>
      </div>
    )
  }
}

export default Auth;
