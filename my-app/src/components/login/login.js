import React from 'react';
import '../../app.css';
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: '*Username is required*' });
        }

        if (!this.state.password) {
            return this.setState({ error: '*Password is required*' });
        }

        return this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" style={{ fontSize: '25px', color: 'red', fontFamily: 'Arial, Helvetica, sans-serif' }} onClick={this.dismissError} >
                            {this.state.error}
                        </h3>
                    }
                    <label classname='label'>Username</label><br />
                    <input type="text" style={{ fontSize: '30px', borderColor: 'black', borderWidth: 1, backgroundColor: 'rgba(196, 196, 196, 0.9)' }} data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                    <br />
                    <label>Password</label><br />
                    <input type="password" style={{ fontSize: '30px', borderColor: 'black', borderWidth: 1, backgroundColor: 'rgba(196, 196, 196, 0.9)' }} data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                    <br /><br />
                    <input type="submit" value="LOGIN" data-test="submit" />
                    <br /><br />
                        <Link to='/register'>New User</Link>
                    <h6>Forgot Password</h6>

                </form>
            </div>
        );
    }
}

export default Login;