import React from 'react';
import '../../app.css';
import { Link, withRouter } from 'react-router-dom';


function validate(username, password) {
  const errors = [];

  if (username.length < 6) {
    errors.push('Username should be at least 5 characters long');
  }
  if (password.length < 6) {
    errors.push('Password should be at least 5 characters long');
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

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('/user')
      .then((response) => response.json())
      .then((response) => this.setState({ users: response.data }))
      .catch((err) => console.error(err));
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
      this.setState({ username: '', password: '' });
      this.setState({ errors: [] });
      this.props.history.push('/');
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            {errors.map((error) => (
              <p key={error}>
                Error:
                {error}
              </p>
            ))}
            <input
              placeholder="Username"
              // value={this.state.username}
              // onChange={evt => this.setState({ username: evt.target.value })}
              onChange={this.handleUserChange}
              type="text"
            />
            <input
              type="password"
              placeholder="Password"
              // value={this.state.password}
              // onChange={evt => this.setState({ password: evt.target.value })}
              onChange={this.handlePassChange}
            />
            <button onClick={this.addUser} type="submit">Sign In</button>
            <p className="message">
              New User?
              <Link to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
