import React from 'react';
import '../../app.css';
import {Link, withRouter} from "react-router-dom";

function validate(username, password) {
  const errors = [];

  if (username.length <= 1) {
    errors.push("Please enter a username");
  }
  if (password.length <= 1) {
    errors.push("Please enter a password");
  }
  return errors;
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              username: " ",
              password: " ", 

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

  buttonClickHandle(event) {
    const { users } = this.props;
    if (users.length > 0 && users.find(user => user.username === this.state.username)) {
      console.log("User exists. Go to the login page");
    } else {
    console.log("User doesn't exists. Show error message");
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const {username, password}= this.state;

    const errors = validate(username, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    else if (errors.length ===0) {
        this.setState({username: "", password: ""});
        this.setState({errors: []});
        this.props.history.push("/");
    }
  }

  render(){
    const { errors } = this.state;
    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit ={this.handleSubmit}>
                {errors.map(error => (
                <p key={error}>Error: {error}</p>))}
                <h5>Username</h5>
                <input 
                placeholder="Enter Username"
                //value={this.state.username}
                onChange = {this.handleUserChange}
                type="text"
                />
                <h5>Password</h5>
                <input 
                type="password"
                placeholder="Enter Password"
                //value={this.state.password}
                onChange = {this.handlePassChange}
                />
                <button onClick={this.buttonClickHandle}>Sign In</button>
                <p className="message">New User? <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
  }
}

export default withRouter(Login);