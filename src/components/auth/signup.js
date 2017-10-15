import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: ''
  }

  renderInput(type, id, placeholder, val, onchange) {
    return(
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={val}
        onChange={onchange}
      />
    )
  }

  render() {
    return (
      <div className="register-login-background">
        <div className="register-login-header">
          <p className="header-p-text">Your Guide to Everywhere Jamaican</p>
          <img className="register-login-image" src="shadow-monitor.png" />
        </div>
        <div className="register-login-form">
          <div className="register-login-header-buttons">
            <div className="login-header-button">Log In</div>
            <div className="register-header-button">Sign Up</div>
          </div>
          <div className="register-inputs">
            <p className="register-header-text">Welcome to the Family!</p>
            {this.renderInput(
              "text",
              "username",
              "Username",
              this.state.username,
              e => this.setState({ username: e.target.value }))
            }

            {this.renderInput(
              "text",
              "firstname",
              "First Name",
              this.state.firstname,
              e => this.setState({ firstname: e.target.value }))
            }

            {this.renderInput(
              "text",
              "lastname",
              "Last Name",
              this.state.lastname,
              e => this.setState({ lastname: e.target.value }))
            }

            {this.renderInput(
              "text",
              "email",
              "Email",
              this.state.email,
              e => this.setState({ email: e.target.value }))
            }

            {this.renderInput(
              "password",
              "password",
              "Password",
              this.state.password,
              e => this.setState({ password: e.target.value }))
            }

            {this.renderInput(
              "password",
              "confirm-password",
              "Confirm Password",
              this.state.confirm_password,
              e => this.setState({ confirm_password: e.target.value }))
            }
            <br/>
            <button className="register-form-button">Sign Up</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;
