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
    Link,
} from "react-router-dom";


class Menu extends React.Component {
    render() {;
        
        return <Router>
            <div className="menu">
                <img src='/CalPolyLogo.png' alt='Cal Poly Logo' />
                <h1>CLUB SPORTS HUB</h1>
                <Link to="/login">LOGIN</Link>
                <Link to="/forms">FORMS</Link>
                <div class="dropdown">
                <button class="dropbtn">Sports
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <div class="header">
                
                    </div>
                    <div class="row">
                    <div class="column">
                        <h3>MEN'S</h3>
                        <h4>___________</h4>
                        <b href="#">BASKETBALL</b>
                        <b href="#">LACROSSE</b>
                        <b href="#">HOCKEY</b>
                        <b href="#">RUGBY</b>
                        <b href="#">SOCCER</b>
                        <b href="#">ULTIMATE</b>
                        <b href="#">VOLLEYBALL</b>
                        <b href="#">WATER POLO</b>
                    </div>
                    <div class="column">
                        <h3>WOMEN'S </h3>
                        <h4>___________</h4>
                        <b href="#">BASKETBALL</b>
                        <b href="#">RUGBY</b>
                        <b href="#">SOCCER</b>
                        <b href="#">ULTIMATE</b>
                        <b href="#">VOLLEYBALL</b>
                        <b href="#">WATER POLO</b>
                    </div>
                    <div class="column">
                        <h3>COED</h3>
                        <h4>___________</h4>
                        <b href="#">CYCLING</b>
                        <b href="#">BOWLING</b>
                        <b href="#">DISTANCE</b>
                        <b href="#">FENCING</b>
                        <b href="#">SAILING</b>
                        <b href="#">SURF</b>
                        <b href="#">SWIM</b>
                        <b href="#">TENNIS</b>
                        <b href="#">TRIATHLON</b>
                        <b href="#">WATER SKI</b>
                    </div>
                    <h5>___________________________________________________</h5>
                    </div>
                </div>
                </div>
                <Link to="calendar">CALENDAR</Link>
                <Link to="/">HOME</Link>
            </div>;

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/forms" component={FormsPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route path="/login">
                    <Login />;
                </Route>
            </Switch>
        </Router>
    }
}


class EventBox extends React.Component{
    //Class that is going to render each event.
    render() {
        return <div className="event">
            <div class="eventbox">
              <h1>UPCOMING EVENT</h1>
            </div>
            <div class="eventbox2">
            <img src='/calendar.png' alt='test'/>
            </div>
            <div class="eventbox3">
              <h2>Feb 1st</h2>
              <h3>MEN'S SOCCER</h3>
              <h2>at UCLA 2:00pm</h2>
              <a href="#details">see details</a>
              <h5>______________________________________________</h5>
              <h2>Feb 6th</h2>
              <h3>DISTANCE CLUB</h3>
              <h2>BBQ Fundraiser on Dexter Lawn
                11:00am - 1:30pm
              </h2>
              <a href="#details">see details</a>
              <h5>______________________________________________</h5>
              <h2>Feb 8th</h2>
              <h3>WOMEN'S RUGBY</h3>
              <h2>at Cal Poly 12:00pm</h2>
              <h3>SWIM CLUB</h3>
              <h2>at Stanford University 1:00pm</h2>
              <a href="#details">see details</a>
              <h5>______________________________________________</h5>
            </div>
        
        </div>
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

class PlaceHolderImage extends React.Component {
    render() {
        return <div className="placeholderImage">
            <img src='/PlaceHolderImage.jpg' alt='Placeholder'></img>
        </div>;
    }
}

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

class Info extends React.Component {
    // TODO: Make text wrap instead of having breaks
    render() {
        return <div className="info">
            <div id="rectangle" ></div>
            <h1>TEAM OF THE WEEK</h1>
            <h2>WOMEN'S <br />RUGBY</h2>
            <h3>Follow them and <br />
                come to their home <br />
                game on Saturday <br />
                February 8th!</h3>
            <img src='/PlaceHolderImage.jpg' alt='Team of the week'></img>
            <a href="https://instagram.com">
                <img src='/instagram.png' className='instagramIcon' alt='Instagram'></img>
            </a>
        </div>
    }
}

class HomePage extends React.Component {
    render() {
        return <div>
            
            <EventBox />
            <Title />
            <PlaceHolderImage />
            <Info />
        </div>;
    }
}

class FormsPage extends React.Component {
    render() {
        return <div className="forms">
            <ResourceTitle />
            <h3>Club Sports strives to make running your club as streamlined as possible. This page is an <br />
                exellent resource for all the information and forms you need. If you have any additional <br />
                questions, please contact the Club Sports Advisor.</h3>
            <div id="greenform1" ></div>
            <h2>PARTICIPANT FORMS</h2>
            <label>Participant Release Form (PDF)</label><br />
            <label>Risk and Release Form (PDF)</label><br />
            <label>Medical Insurance Form (PDF)</label>
            <div id="greenform2" ></div>
            <h2>HOME EVENT FORMS</h2>
            <label>Facility Request Form (DOC)</label><br />
            <label>Equipment Agreement (DOC)</label>
            <div id="greenform3" ></div>
            <h2>AWAY EVENT FORMS</h2>
            <label>Club Sport Travel Roster (PDF)</label><br />
            <label>Reimbursement Request (DOC)</label>
        </div>
    }
}

class RegisterPage extends React.Component {
    render() {
        return <div>
            <Register />
        </div>;
    }
}



ReactDOM.render(<Menu />, document.getElementById('root'));

serviceWorker.unregister();
