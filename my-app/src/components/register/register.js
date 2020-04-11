import React from 'react';
import './register.css'; 


class Register extends React.Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      email: '',
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

addUser = _ => {
  const {user} = this.state;
  //console.log(user)
  fetch(`/users/add?firstname=${user.firstname}&lastname=${user.lastname}&email=${user.email}&username=${user.username}&password=${user.password}`)
  .then(response => response.json())
  .then(this.getUsers)
  .catch(err => console.error(err));

}
render(){
  const {user} = this.state;
  return (
      <div className="login-page">
          <div className="form">
              <input 
              type="text"
              placeholder="firstname" 
              onChange={e => this.setState({user: {...user, firstname: e.target.value }})} 
              />
              <input 
              type="text"
              placeholder="lastname" 
              onChange={e => this.setState({user: {...user, lastname: e.target.value }})} 
              />
              <input 
              type="text"
              placeholder="email" 
              onChange={e => this.setState({user: {...user, email: e.target.value }})} 
              />
              <input 
              type="text"
              placeholder="username"
              onChange={e => this.setState({user: {...user, username: e.target.value }})} 
              />
              <input 
              type="password"
              placeholder="password"
              onChange={e => this.setState({user: {...user, password: e.target.value }})} 
              />
              <button onClick={this.addUser}>Register</button>
              <p className="message">Already registered? <a href="/">Sign In</a></p>
          </div>
      </div>
  );
}
}

export default Register
