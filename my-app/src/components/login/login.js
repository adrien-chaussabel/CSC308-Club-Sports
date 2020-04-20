import React from 'react';
import '../../app.css';
import {Link} from "react-router-dom";
//import axios from 'axios';


function validate(username, password) {
    const errors = [];
  
    if (username.length < 6) {
        errors.push("Username should be at least 5 characters long");
      }
    if (password.length < 6) {
      errors.push("Password should be at least 5 characters long");
    }
    return errors;
  }

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
              username: " ",
              password: " "
            }, 
            errors: []
          };
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handlePassChange = this.handlePassChange.bind(this);
          this.handleUserChange = this.handleUserChange.bind(this);
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

  handlePassChange(evt) {
    this.setState({
        password: evt.target.value,
    });
}

  handleUserChange(evt) {
    this.setState({
        username: evt.target.value,
    });
};

  handleSubmit(event) {
    event.preventDefault();
      const {username, password} =this.state;

      const errors = validate(username, password);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
      else{
          this.setState({username: "", password: ""});
          //this.setState({ errors: '' });
      }

      
    //   axios.post("http://localhost:5000/users", 
    //     {user: {username : username, password : password}})
        // .then(res =>{
        //     console.log(res);
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
  }

  render(){
    //const {user} = this.state;
    const { errors } = this.state;
    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit ={this.handleSubmit}>
                {errors.map(error => (
                <p key={error}>Error: {error}</p>))}
                <input 
                type="text"
                placeholder="Username"
                value={this.state.username}
                //onChange={e => this.setState({user: {...user, username: e.target.value }})} 
                onChange={evt => this.setState({ username: evt.target.value })}
                />
                <input 
                type="password"
                placeholder="Password"
                value={this.state.password}
                //onChange={e => this.setState({user: {...user, password: e.target.value }})} 
                onChange={evt => this.setState({ password: evt.target.value })}
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