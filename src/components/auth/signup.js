import React, { Component } from 'react';
import $ from 'jquery';

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
      <div className="form-inputs">
        <p className="form-header-text">Welcome to the Family!</p>
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
        <button
          id="signup-button"
          onMouseDown={() => $('#signup-button').css('box-shadow', 'none')}
          onMouseUp={() => $('#signup-button').css('box-shadow', '0 8px 5px rgba(0, 0, 0, 0.2)')}
          className="register-form-button">
          Sign Up
        </button>
      </div>
    )
  }
}

export default SignUp;
