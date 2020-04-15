import React from 'react';
import './app.css';
// import Events from './components/events/events';
import EventBox from './components/home page/events_box';
import Register from './components/register/register';
import Login from './components/login/login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

class App extends React.Component {
    render() {
        return <Menu/>
    }
}


class Menu extends React.Component {
    render() {
        
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

export default App;