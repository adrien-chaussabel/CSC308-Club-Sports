import React from 'react';
import './register.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  addUserServer() {
    // Method that adds users to the database using the backend server.
    const { history } = this.props;
    const { user } = this.state;

    const {
      firstName, lastName, email, username, password, type,
    } = user;
    console.log(`${firstName}, ${lastName}, ${email}, ${username}, ${password}, ${type}`);
    fetch('users/postUser', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        email,
        firstName,
        lastName,
        type,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          history.push('/login');
          alert(`User ${username} was registered`);
        } else {
          alert(`User ${username} could not be registered`);
        }
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const errors = validate(user.username, user.password,
      user.firstname, user.lastname, user.email);
    if (errors.length > 0) {
      this.setState({ errors });
    } else if (errors.length === 0) {
      this.setState({ errors: [] });
      this.addUserServer();
      /*
      this.setState({
        username: '', password: '', firstname: '', lastname: '', email: '',
      });
      */
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
              <p id="error" key={error}>
                Error:
                {' '}
                {error}
              </p>
            ))}
            <h5>First Name</h5>
            <input
              id="firstname"
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => this.setState({ user: { ...user, firstname: e.target.value } })}
            />
            <h5>Last Name</h5>
            <input
              id="lastname"
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => this.setState({ user: { ...user, lastname: e.target.value } })}
            />
            <h5>Email</h5>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => this.setState({ user: { ...user, email: e.target.value } })}
            />
            <h5>Username</h5>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => this.setState({ user: { ...user, username: e.target.value } })}
            />
            <h5>Password</h5>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => this.setState({ user: { ...user, password: e.target.value } })}
            />
            <h5>Select type of User: </h5>
            <label htmlFor="student" className="container">
              Student
              <input
                id="student"
                type="radio"
                value="student"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span className="checkmark" />
            </label>
            <label htmlFor="supporter" className="container">
              Supporter
              <input
                id="supporter"
                type="radio"
                value="supporter"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span className="checkmark" />
            </label>
            <label htmlFor="coach" className="container">
              Coach
              <input
                id="coach"
                type="radio"
                value="coach"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span className="checkmark" />
            </label>
            <label htmlFor="asi" className="container">
              ASI Employee
              <input
                id="asi"
                type="radio"
                value="asi employee"
                name="type"
                onChange={(e) => this.setState({ user: { ...user, type: e.target.value } })}
              />
              <span className="checkmark" />
            </label>
            <button type="submit">Register</button>
            <p className="message">
              Already registered?
              <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(Register);
