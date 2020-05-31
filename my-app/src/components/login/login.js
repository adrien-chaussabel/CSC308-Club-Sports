/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../../app.css';
import { Link, withRouter } from 'react-router-dom';

function validate(username, password) {
  const errors = [];

  if (username.length <= 1) {
    errors.push('Please enter a username');
  }
  if (password.length <= 1) {
    errors.push('Please enter a password');
  }
  return errors;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ' ',
      password: ' ',

      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  getUserServer() {
    const userName = this.state.username;
    const password = this.state.password;
    fetch(`http://localhost:5000/users/getUser/${userName}/${password}`)
      .then((response) => {
        if (response.status === 404) {
          alert('Failed to authenticate user');
        } else {
          this.setState({ username: '', password: '' });
          this.setState({ errors: [] });
          // eslint-disable-next-line react/prop-types
          this.props.history.push('/');
        }
      })
      .catch((err) => alert(err));
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
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    const errors = validate(username, password);
    if (errors.length > 0) {
      this.setState({ errors });
    } else if (errors.length === 0) {
      this.getUserServer();
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            {errors.map((error) => (
              <p key={error}>Error: {error}</p>))}
            <h5>Username</h5>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={this.handleUserChange}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={this.handlePassChange}
            />
            <button type="submit">Sign In</button>
            <p className="message">New User? <Link to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
