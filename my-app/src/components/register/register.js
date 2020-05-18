import React from 'react';
import './register.css';
import {Link} from "react-router-dom";

/*the users table holds first name, lastname, email, username, password, and type*/
class Register extends React.Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      type: ''
    }
}

componentDidMount(){
  this.getUsers();
}

getUsers = _ => {
  fetch('/users')
  .then(response => response.json())
  .then(response => this.setState({users: response.data}))
  .catch(err => console.error(err));
}

addUser = _ => {
  const {user} = this.state;
  //console.log(user)
  fetch(`/users/add?firstname=${user.firstname}
  &lastname=${user.lastname}
  &email=${user.email}
  &username=${user.username}
  &password=${user.password}
  &type=${user.type}`)
  .then(response => response.json())
  .then(this.getUsers)
  .catch(err => console.error(err));

  this.props.history.push(`/login`);
  alert("User " + user.username + " was registered");
}

addUserServer = _ => {
  //Method that adds users to the database using the backend server.
  const firstName = this.state.user.firstname;
  const lastName = this.state.user.lastname;
  const email = this.state.user.email;
  const userName = this.state.user.username;
  const password = this.state.user.password;
  const type = this.state.user.type;
  //console.log(`${firstName}, ${lastName}, ${email}, ${userName}, ${password}, ${type}`);
  fetch('http://localhost:3011/users/postUser', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "userName": userName,
      "password": password,
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "type": type
    })
  });
}

render(){
  const {user} = this.state;
  return (
      <div className="login-page">
          <div className="form">
              <input
              type="text"
              placeholder="First Name"
              onChange={e => this.setState({user: {...user, firstname: e.target.value }})}
              />
              <input
              type="text"
              placeholder="Last Name"
              onChange={e => this.setState({user: {...user, lastname: e.target.value }})}
              />
              <input
              type="text"
              placeholder="Email"
              onChange={e => this.setState({user: {...user, email: e.target.value }})}
              />
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
              <label class="container">Student
                <input type="radio"
                value="student"
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Supporter
                <input type="radio"
                value="supporter"
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">Coach
                <input type="radio"
                value="coach"
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">ASI Employee
                <input type="radio"
                value="asi employee"
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}></input>
                <span class="checkmark"></span>
              </label>
              <button onClick={this.addUserServer}>Register</button>
              <p className="message">Already registered? <Link to='/login'>Sign In</Link></p>
          </div>
      </div>
  );
}
}

export default Register
