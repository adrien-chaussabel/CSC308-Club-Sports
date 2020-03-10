/*
import React from 'react';
import axios from 'axios';
import './login.css';

class Login extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          users: []
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
       
      }

  handleNameChange(e) {
    this.setState({fullname: e.target.value})
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
/*
  componentDidMount() {
    axios.get(`http://localhost:5000`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  } 
 
  onSubmit(e) {
      e.preventDefault();
      const user = {
        username: this.state.username,
        fullname: this.state.fullname,
        password: this.state.password
      }
      
      axios.post('http://localhost:5000', user)
      .then(res => {
          const user = res.data;
          this.setState({ user });
        })         
    
  }  
  render() {
    return (
    <div className='login-page'>
       <form onSubmit={this.onSubmit} method="user" className="right">
        <label>
        <span>name:</span>
        <input type="text" name="fullname" onChange={this.handleNameChange}/>
        </label>
        <label>
        <span>username:</span>
        <input type="text" name="username" onChange={this.handleUsernameChange}/>
        </label>
        <label>
        <span>password:</span>
        <input type="text" name="password" onChange={this.handlePasswordChange}/>
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
  }
}
export default Login;

*/

import React, { Component } from 'react'
import './login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      full_name: '',
      username: '',
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
    
        const newUser = {
          full_name: this.state.full_name,
          email: this.state.email,
          password: this.state.password
        }
    }

    render(){
        return <div className="login-page">
            <form actions='/adduser' method="get">
                <label for="fullname">Enter Name</label>
                <input type="text" name = "fullname"/>
                <label for="username"> User Name </label>
                <input type="text" name = "username"/>
                <label for="password"> Password </label>
                <input type="text" name = "password"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    }

  /*render() {
    return (
      <div class="login-page">
        <div class="form" method="post">
            <form class="login-form" noValidate onSubmit={this.onSubmit}>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={this.state.full_name}
                  onChange={this.onChange}
                />
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
              <button type='submit' onSubmit="post">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </div>
    )
  }
}*/

}
export default Login
