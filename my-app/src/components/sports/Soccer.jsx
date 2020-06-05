import React from 'react';
import './sports.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import SportCarousel from './SportCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from './button.png';
import instagram from './instagram.png';
import web from './web.png';
import facebook from './facebook.png';

const SoccerPage = () => (
  <div>
    <SportsMenu />
    <SportsTitle />
    <Follow />
    <SportsInfoBottom />
    <SportCarousel />
  </div>
);

const SportsMenu = () => (
  <Router>
    <div className="menu2">
      <h1>SOCCER CLUB</h1>
      <Link to="/login">FAQ</Link>
      <Link to="/forms">FORMS</Link>
      <Link to="/login">CONTACT</Link>
      <Link to="/login">SCHEDULE</Link>
      <Link to="/login">RESULTS</Link>
    </div>

    <Switch>
      <Route path="/login" />
    </Switch>
  </Router>
);

const SportsInfo = () => (
  <div className="sportsinfo">
    <h1>ABOUT SOCCER CLUB</h1>
    <h2>
      The Cal Poly Soccer Club has grown into one of the top college club soccer
      programs in the Nation. The team recently finished 2nd in the California League
      and competing in the NCCS Championships in Phoenix, AZ. The program includes 2
      teams, and is comprised of over 50 student-athletes. Both teams compete in the
      West Coast Soccer Association against teams
      from Stanford, UC Santa Barbara, UC Santa Cruz, and USC.
    </h2>
    <img src={web} alt="web.jpg" />
    <img src={instagram} alt="instagram.jpg" />
    <img src={facebook} alt="facebook.jpg" />
  </div>
);

const SportsInfoBottom = () => (
  <div className="sportsinfobottom">
    <h1>
      UCLA Feb 9th
    </h1>
    <a href="#results">see results</a>
    <h2>We brought 34 swimmers to UCLA last weekend and broke 3 swim club records!</h2>
    <h1>UCSD Jan 24th</h1>
    <a href="#results">see results</a>
    <h2>Swim Club brought 46 swimmers to UCSD on January 24th </h2>
  </div>
);

const Follow = () => (
  <div className="follow">
    <img src={logo} alt="button" />
    <button type="button" className="dropbtn">
      {' '}
      FOLLOW
    </button>
  </div>
);

const SportsTitle = () => (
  <div className="sportstitle">
    <h3>CAL POLY SOCCER CLUB</h3>
    <SportsInfo />
  </div>
);

export default SoccerPage;
