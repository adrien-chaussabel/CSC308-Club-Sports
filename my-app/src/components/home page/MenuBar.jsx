import React from 'react';
import '../../app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';

import HomePage from './HomePage';
import FormsPage from '../forms/forms';
import NewEvent from '../events/newEvent';
import SportsDropDown from './SportsDropDown';
import CalendarPage from '../calendar/calendar';
import SportsPage from '../sports/SportsPage';
/* TODO: add link to sports page on menu bar */


const Menu = () => (
<Router>
  <div className="menu">
    <img src='/CalPolyLogo.png' alt='Cal Poly Logo' />
    <h1>CLUB SPORTS HUB</h1>
    <Link to="/login">LOGIN</Link>
    <Link to="/forms">FORMS</Link>
    <div class="dropdown">
  <button class="dropbtn">SPORTS
      <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
  <div class="row">
  <div class="column">
    <h3>MEN'S</h3>
    <h4>__________</h4>
    <Link to={{pathname:"/sports", state: { name: 'basketball',gender: 'male'}}}>BASKETBALL</Link>
    <Link to="/sports">LACROSSE</Link>
    <Link to="/sports">HOCKEY</Link>
    <Link to="/sports">RUGBY</Link>
    <Link to="/sports">SOCCER</Link>
    <Link to="/sports">ULTIMATE</Link>
    <Link to="/sports">VOLLEYBALL</Link>
    <Link to="/sports">WATER POLO</Link>
  </div>
  <div class="column">
    <h3>WOMEN'S </h3>
    <h4>__________</h4>
    <Link to="/sports">BASKETBALL</Link>
    <Link to="/sports">RUGBY</Link>
    <Link to="/sports">SOCCER</Link>
    <Link to="/sports">ULTIMATE</Link>
    <Link to="/sports">VOLLEYBALL</Link>
    <Link to="/sports">WATER POLO</Link>
  </div>
  <div class="column">
    <h3>COED</h3>
    <h4>__________</h4>
    <Link to="/sports">CYCLING</Link>
    <Link to="/sports">BOWLING</Link>
    <Link to="/sports">DISTANCE</Link>
    <Link to="/sports">FENCING</Link>
    <Link to="/sports">SAILING</Link>
    <Link to="/sports">SURF</Link>
    <Link to="/sports">SWIM</Link>
    <Link to="/sports">TENNIS</Link>
    <Link to="/sports">TRIATHLON</Link>
    <Link to="/sports">WATER SKI</Link>
  </div>
  </div>
  </div>
  </div>
    <Link to="calendar">CALENDAR</Link>
    <Link to="/">HOME</Link>
  </div>;

  <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/forms" component={FormsPage} />
      <Route exact path="/register" component={Register} />
      <Route path="/sports" component={SportsPage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/login">
          <Login />;
      </Route>
  </Switch>
</Router>
);

export default Menu;
