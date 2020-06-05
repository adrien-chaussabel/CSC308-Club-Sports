/* eslint-disable no-console */
import React from 'react';
import '../../app.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import props from 'prop-types';


function validate(username, password) {
  const errors = [];
  if (username.length <= 1) {
    errors.push('Please enter a username');
  }
  if (password.length < 6) {
    errors.push('Please enter a password');
  }
  return errors;
}

class Login extends React.Component {
  constructor() {
    super();
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
    const {foo} = props.location.state
    console.log(foo) 
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
              <p id="error" key={error}>
                Error:
                {' '}
                {error}
              </p>
            ))}
            <input
              id="username"
              placeholder="Username"
              onChange={this.handleUserChange}
              type="text"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handlePassChange}
            />
            <button
              type="submit"
              onClick={this.addUser}
            >
              Sign In
            </button>
            <p className="message">
              New User?
              <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(Login);
