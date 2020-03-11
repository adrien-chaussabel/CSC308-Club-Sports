import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';
import Events from './components/events/events';
import Register from './components/register/register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Menu extends React.Component{
    render() {
        return <Router>
            <div className="menu"> 
                <img src='/CalPolyLogo.png' alt='Cal Poly Logo'/>
                <h1>CLUB SPORTS HUB</h1>
                <Link to="/login">LOGIN</Link>
                <Link to="/forms">FORMS</Link>
                <a href="/.">SPORTS</a>
                <Link to="calendar">CALENDAR</Link>
                <Link to="/">HOME</Link>
            </div>; 
            
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                    <Login/>;
                </Route>
                <Route path="/forms">
                    <FormsPage/>;
                    //<RegisterPage/>;
                </Route>
            </Switch>
        </Router>
    }
}

class Title extends React.Component {
    render() {
      return <div className="title"> 
      <h3>CAL POLY CLUB SPORTS</h3> 
    </div> 
    }
}

class ResourceTitle extends React.Component {
    render() {
      return <div className="title2"> 

      <h3>RESOURCES AND FORMS</h3>
    </div> 
    }
}

class PlaceHolderImage extends React.Component{
    render(){
        return <div className="placeholderImage">
            <img src='/PlaceHolderImage.jpg' alt= 'Placeholder'></img>
        </div>;
    }
}

class Login extends React.Component{
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
          return this.setState({ error: '*Username is required*'});
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
                <h3 data-test="error" style={{fontSize: '25px', color:'red', fontFamily: 'Arial, Helvetica, sans-serif'}} onClick={this.dismissError} >
                  {this.state.error}
                </h3>
              }
              <label classname= 'label'>Username</label><br/>
              <input type="text" style={{fontSize:'30px', borderColor:'black', borderWidth:1, backgroundColor: 'rgba(196, 196, 196, 0.9)'}} data-test="username" value={this.state.username} onChange={this.handleUserChange}/>
              <br/>
              <label>Password</label><br/>
              <input type="password" style={{fontSize:'30px', borderColor:'black', borderWidth:1, backgroundColor: 'rgba(196, 196, 196, 0.9)'}} data-test="password" value={this.state.password} onChange={this.handlePassChange}/>
              <br/><br/>
              <input type="submit" value="LOGIN" data-test="submit" />
              <br/><br/>
              <h6>New User</h6>
              <h6>Forgot Password</h6>

            </form>
          </div>
        );
      }
}

class Info extends React.Component{
    // TODO: Make text wrap instead of having breaks
    render(){
        return <div className="info"> 
            <div id="rectangle" ></div>
            <h1>TEAM OF THE WEEK</h1>
            <h2>WOMEN'S <br/>RUGBY</h2>
            <h3>Follow them and <br/>
                come to their home <br/>
                game on Saturday <br/>
                February 8th!</h3>
            <img src='/PlaceHolderImage.jpg' alt='Team of the week'></img>
            <a href="https://instagram.com">
            <img src='/instagram.png' className='instagramIcon' alt='Instagram'></img>
            </a>
        </div>
    }
}

class HomePage extends React.Component{
    render(){
        return <div>
            <Events/>
            <Title/>
            <PlaceHolderImage/>
            <Info/>
        </div>;
    }
}

class FormsPage extends React.Component{
    render(){
        return <div className="forms">
            <ResourceTitle/>
            <h3>Club Sports strives to make running your club as streamlined as possible. This page is an <br/>
                exellent resource for all the information and forms you need. If you have any additional <br/>
                questions, please contact the Club Sports Advisor.</h3>
            <div id="greenform1" ></div>
            <h2>PARTICIPANT FORMS</h2>
            <label>Participant Release Form (PDF)</label><br/>
            <label>Risk and Release Form (PDF)</label><br/>
            <label>Medical Insurance Form (PDF)</label>
            <div id="greenform2" ></div>
            <h2>HOME EVENT FORMS</h2>
            <label>Facility Request Form (DOC)</label><br/>
            <label>Equipment Agreement (DOC)</label>
            <div id="greenform3" ></div>
            <h2>AWAY EVENT FORMS</h2>
            <label>Club Sport Travel Roster (PDF)</label><br/>
            <label>Reimbursement Request (DOC)</label>
        </div>
    }
}

class RegisterPage extends React.Component{
    render(){
        return <div>
            <Register/>
        </div>;
    }
}
  
ReactDOM.render(<Menu/>, document.getElementById('root'));

serviceWorker.unregister();
