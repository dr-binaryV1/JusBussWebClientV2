import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
      <div className="form-inputs">
        <p className="form-header-text">Welcome Back!</p>
        {this.renderInput(
          "email",
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

        <br/>
        <button className="register-form-button">Sign In</button>
      </div>
    )
  }
}

export default SignIn;
