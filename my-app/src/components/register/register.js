/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */
/* eslint-disable quote-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React from 'react';
import './register.css';
// import {Link} from "react-router-dom";
import { Link, withRouter } from 'react-router-dom';

function validate(username, password, first, last, email) {
  const errors = [];

  if (username.length <= 0) {
    errors.push('Please enter a username');
  }
  if (password.length <= 4) {
    errors.push('Password should be at least 5 characters long');
  }
  if (first.length <= 0) {
    errors.push('Please enter your first name');
  }
  if (last.length <= 0) {
    errors.push('Please enter your last name');
  }
  if (email.length <= 0) {
    errors.push('Please enter an email');
  }
  return errors;
}

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        type: '',
      },
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('/users')
      .then((response) => response.json())
      .then((response) => this.setState({ users: response.data }))
      .catch((err) => console.error(err));
  }

  addUserServer() {
    // Method that adds users to the database using the backend server.
    const firstName = this.state.user.firstname;
    const lastName = this.state.user.lastname;
    const email = this.state.user.email;
    const userName = this.state.user.username;
    const password = this.state.user.password;
    const type = this.state.user.type;
    // console.log(`${firstName}, ${lastName}, ${email}, ${userName}, ${password}, ${type}`);
    fetch('http://localhost:5000/users/postUser', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'userName': userName,
        'password': password,
        'email': email,
        'firstName': firstName,
        'lastName': lastName,
        'type': type,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          this.props.history.push('/login');
          alert(`User ${userName} was registered`);
        } else {
          alert(`User ${userName} could not be registered`);
        }
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;

    const errors = validate(user.username, user.password, user.firstname, user.lastname,
      user.email);
    if (errors.length > 0) {
      this.setState({ errors });
    } else if (errors.length === 0) {
      this.addUserServer();
      this.setState({
        username: '', password: '', firstname: '', lastname: '', email: '',
      });
      this.setState({ errors: [] });
    }
  }

  render() {
    const { user } = this.state;
    const { errors } = this.state;
    return (
      <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            {errors.map((error) => (
              <p key={error}>
                Error:
                {' '}
                {error}
              </p>
            ))}
            <h5>First Name</h5>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => this.setState({ user: { ...user, firstname: e.target.value } })}
            />
            <h5>Last Name</h5>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => this.setState({ user: { ...user, lastname: e.target.value } })}
            />
            <h5>Email</h5>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => this.setState({ user: { ...user, email: e.target.value } })}
            />
            <h5>Username</h5>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => this.setState({ user: { ...user, username: e.target.value } })}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => this.setState({ user: { ...user, password: e.target.value } })}
            />
            <h5>Select type of User: </h5>
            <label class="container">
              Student
              <input
                type="radio"
                value="student"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span class="checkmark" />
            </label>
            <label class="container">
              Supporter
              <input
                type="radio"
                value="supporter"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span class="checkmark" />
            </label>
            <label class="container">
              Coach
              <input
                type="radio"
                value="coach"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span class="checkmark" />
            </label>
            <label class="container">
              ASI Employee
              <input
                type="radio"
                value="asi employee"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span class="checkmark" />
            </label>
            <button type="submit">Register</button>
            <p className="message">
              Already registered?
              {' '}
              <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
