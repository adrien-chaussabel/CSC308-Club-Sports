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

const RugbyPage = () => (
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
      <h1>RUGBY CLUB</h1>
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
    <h1>ABOUT RUGBY CLUB</h1>
    <h2>
      The Cal Poly Rugby team provides athletes with a competitive environment
      that requires physical conditioning and discipline. Membership numbers range from
      75 to 100 athletes each year. The Rugby team consistently finishes their
      competitive season as a Nationally-ranked top 10 team, bringing national
      and international attention to the University. Pre-season training
      runs September through December, giving the team a chance to develop
      student-athletes through a limited number of games and a comprehensive
      program of skills, strength, and conditioning. League season begins in
      January and runs until the end of May.
    </h2>
    <img src={web} alt="web.jpg" />
    <img src={instagram} alt="instagram.jp" />
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
    <h3>CAL POLY RUGBY CLUB</h3>
    <SportsInfo />
  </div>
);

export default RugbyPage;
