import React, { Component } from 'react'
import './login.css'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }
  }

  render() {
    return (
      <div class="login-page">
        <div class="form">
            <form class="login-form" noValidate onSubmit={this.onSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              <button type='submit'>register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </div>
    )
  }
}

export default Login
