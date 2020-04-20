import React from 'react';
import '../../app.css';
import {Link} from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
    state = {
      user: {
        username: '',
        password: ''
      }
    }

  componentDidMount(){
    this.getUsers();
  }
  
  getUsers = _ => {
    fetch('/user')
    .then(response => response.json())
    .then(response => this.setState({users: response.data}))
    .catch(err => console.error(err));
  }

  handleSubmit(event) {
      const {username, password} =this.state;
    
      axios.post("http://localhost:5000/users", 
        {user: {username : username, password : password}})
        .then(res =>{
            console.log(res);
        })
        .catch(error=>{
            console.log(error);
        })
    event.preventDefault();
  }

  render(){
    const {user} = this.state;
    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit ={this.handleSubmit}>
                <input 
                type="text"
                placeholder="Username"
                onChange={e => this.setState({user: {...user, username: e.target.value }})} 
                />
                <input 
                type="password"
                placeholder="Password"
                onChange={e => this.setState({user: {...user, password: e.target.value }})} 
                />
                <button onClick={this.addUser}>Sign In</button>
                <p className="message">New User? <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
  }
}

export default Login;