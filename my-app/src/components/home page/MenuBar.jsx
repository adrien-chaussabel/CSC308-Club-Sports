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
import CalendarPage from '../calendar/calendar';
import SportsPage from '../sports/SportsPage';
import BasketballPage from '../sports/Basketball';
import LaccrosePage from '../sports/Lacrosse';
import RugbyPage from '../sports/Rugby';
import HockeyPage from '../sports/Hockey';
import SoccerPage from '../sports/Soccer';
import UltimatePage from '../sports/Ultimate';
import VolleyballPage from '../sports/Volleyball';
import WaterPoloPage from '../sports/WaterPolo';
import WaterSkiPage from '../sports/Waterski';
import TriathlonPage from '../sports/Triathlon';
import TennisPage from '../sports/Tennis';
import SwimPage from '../sports/Swim';
import SurfPage from '../sports/Surf';
import SailingPage from '../sports/Sailing';
import FencingPage from '../sports/Fencing';
import DistancePage from '../sports/Distance';
import BowlingPage from '../sports/Bowling';
import CyclingPage from '../sports/Cycling';


const Menu = () => (
  <Router>
    <div className="menu">
      <img src="/CalPolyLogo.png'" alt="Cal Poly Logo" />
      <h1>CLUB SPORTS HUB</h1>
      <Link to="/login">LOGIN</Link>
      <Link to="/forms">FORMS</Link>
      <div className="dropdown">
        <button type="submit" className="dropbtn">
          SPORTS
          <i className="fa fa-caret-down" />
        </button>
        <div className="dropdown-content">
          <div className="row">
            <div className="column">
              <h3>MEN&apos;S</h3>
              <h4>__________</h4>
              <Link to={{ pathname: '/basketball', state: { name: 'basketball', gender: 'male' } }}>BASKETBALL</Link>
              <Link to={{ pathname: '/lacrosse', state: { name: 'lacrosse', gender: 'male' } }}>LACROSSE</Link>
              <Link to={{ pathname: '/hockey', state: { name: 'hockey', gender: 'male' } }}>HOCKEY</Link>
              <Link to={{ pathname: '/rugby', state: { name: 'rugby', gender: 'male' } }}>RUGBY</Link>
              <Link to={{ pathname: '/soccer', state: { name: 'soccer', gender: 'male' } }}>SOCCER</Link>
              <Link to={{ pathname: '/ultimate', state: { name: 'ultimate', gender: 'male' } }}>ULTIMATE</Link>
              <Link to={{ pathname: '/volleyball', state: { name: 'volleyball', gender: 'male' } }}>VOLLEYBALL</Link>
              <Link to={{ pathname: '/waterpolo', state: { name: 'waterpolo', gender: 'male' } }}>WATER POLO</Link>
            </div>
            <div className="column">
              <h3>WOMEN&apos;S </h3>
              <h4>__________</h4>
              <Link to={{ pathname: '/basketball', state: { name: 'basketball', gender: 'female' } }}>BASKETBALL</Link>
              <Link to={{ pathname: '/rugby', state: { name: 'rugby', gender: 'female' } }}>RUGBY</Link>
              <Link to={{ pathname: '/soccer', state: { name: 'soccer', gender: 'female' } }}>SOCCER</Link>
              <Link to={{ pathname: '/ultimate', state: { name: 'ultimate', gender: 'female' } }}>ULTIMATE</Link>
              <Link to={{ pathname: '/volleyball', state: { name: 'volleyball', gender: 'female' } }}>VOLLEYBALL</Link>
              <Link to={{ pathname: '/waterpolo', state: { name: 'soccer', gender: 'female' } }}>WATER POLO</Link>
            </div>
            <div className="column">
              <h3>COED</h3>
              <h4>__________</h4>
              <Link to={{ pathname: '/cycling', state: { name: 'cycling', gender: 'coed' } }}>CYCLING</Link>
              <Link to={{ pathname: '/bowling', state: { name: 'bowling', gender: 'coed' } }}>BOWLING</Link>
              <Link to={{ pathname: '/distance', state: { name: 'distance', gender: 'coed' } }}>DISTANCE</Link>
              <Link to={{ pathname: '/fencing', state: { name: 'fencing', gender: 'coed' } }}>FENCING</Link>
              <Link to={{ pathname: '/sailing', state: { name: 'sailing', gender: 'coed' } }}>SAILING</Link>
              <Link to={{ pathname: '/surf', state: { name: 'surf', gender: 'coed' } }}>SURF</Link>
              <Link to={{ pathname: '/swim', state: { name: 'swim', gender: 'coed' } }}>SWIM</Link>
              <Link to={{ pathname: '/tennis', state: { name: 'tennis', gender: 'coed' } }}>TENNIS</Link>
              <Link to={{ pathname: '/triathlon', state: { name: 'triathlon', gender: 'coed' } }}>TRIATHLON</Link>
              <Link to={{ pathname: '/waterski', state: { name: 'waterski', gender: 'coed' } }}>WATER SKI</Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="calendar">CALENDAR</Link>
      <Link to="/">HOME</Link>
    </div>
    ;

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/forms" component={FormsPage} />
      <Route exact path="/register" component={Register} />
      <Route path="/sports" component={SportsPage} />
      <Route path="/basketball" component={BasketballPage} />
      <Route path="/lacrosse" component={LaccrosePage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/rugby" component={RugbyPage} />
      <Route path="/hockey" component={HockeyPage} />
      <Route path="/soccer" component={SoccerPage} />
      <Route path="/ultimate" component={UltimatePage} />
      <Route path="/volleyball" component={VolleyballPage} />
      <Route path="/waterpolo" component={WaterPoloPage} />
      <Route path="/waterski" component={WaterSkiPage} />
      <Route path="/triathlon" component={TriathlonPage} />
      <Route path="/tennis" component={TennisPage} />
      <Route path="/swim" component={SwimPage} />
      <Route path="/surf" component={SurfPage} />
      <Route path="/sailing" component={SailingPage} />
      <Route path="/fencing" component={FencingPage} />
      <Route path="/distance" component={DistancePage} />
      <Route path="/bowling" component={BowlingPage} />
      <Route path="/cycling" component={CyclingPage} />
      <Route path="/login">
        <Login />
        ;
      </Route>
    </Switch>
  </Router>
);

export default Menu;
