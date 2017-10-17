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
            <div
              onClick={() => {
                document.getElementById('signin-btn').classList.add('active');
                document.getElementById('signup-btn').classList.remove('active');
                this.setState({ currenlyViewing: 'signin' })}
              }
              id="signin-btn"
              className="form-header-button">
              Sign In
          </div>

            <div
              onClick={() => {
                document.getElementById('signup-btn').classList.add('active');
                document.getElementById('signin-btn').classList.remove('active');
                this.setState({ currenlyViewing: 'signup' })}
              }
              id="signup-btn"
              className="form-header-button active">
              Sign Up
            </div>
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
