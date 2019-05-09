import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class LoginAndSignup extends Component {

  constructor() {
    super();
    this.state = {
      showSignup: false,
      showLogin: true
    }
    this.toggleLoginAndSignup = this.toggleLoginAndSignup.bind(this)
  }

  toggleLoginAndSignup = (event) => {
    if (event.target.id === "login-button") {
      this.setState({
        ['showSignup']: false,
        ['showLogin']: true
      })
    }
    else {
      this.setState({
        ['showLogin']: false,
        ['showSignup']: true
      })
    }
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button type="button" id="login-button" onClick={this.toggleLoginAndSignup} className="btn btn-info ">LOGIN</button>
          <button type="button" onClick={this.toggleLoginAndSignup} className="btn btn-info">REGISTER</button>
        </div>
        {this.state.showLogin ?  <LoginForm /> : null }
        {this.state.showSignup ?  <RegisterForm /> : null }
      </div>
    )
  }
}

export default LoginAndSignup;