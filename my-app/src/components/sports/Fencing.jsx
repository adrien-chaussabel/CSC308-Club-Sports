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

const FencingPage = () => (
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
      <h1>FENCING CLUB</h1>
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
    <h1>ABOUT FENCING CLUB</h1>
    <h2>
      En garde! The Fencing Club offers both men and women members the opportunity
      to learn the art of modern swordplay. The club provides instruction
      in the three different fencing weapons: foil, epee, and sabre.
      Competitive club members compete year round.
      The Cal Poly Fencing Team has been one of the top competitors in
      collegiate and USFA tournaments in California.
      In addition to competitive pursuits, the Cal Poly
      Fencing Team is dedicated to introducing new people of all ages
      to our sport and teaching them what it means to be a fencer.
    </h2>
    <img src={web} alt="web.jpg" />
    <img src={instagram} alt="instagram.jpg" />
    <img src={facebook} alt="facebook.jp" />
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
    <h3>CAL POLY FENCING CLUB</h3>
    <SportsInfo />
  </div>
);

export default FencingPage;
