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

const TennisPage = () => (
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
      <h1>TENNIS CLUB</h1>
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
    <h1>ABOUT TENNIS CLUB</h1>
    <h2>
      The Cal Poly Club Tennis Team is a co-ed, student-run team under the USTA Tennis
      on Campus program. Our goal is to give tennis players more opportunities for competitive
      play against other universities. We have tryouts in the beginning of the school year, practice
      3-4 times per week, and travel to tournaments once or twice a month. Tennis on Campus uses
      the World Team Tennis format, which involves one set of men singles and doubles, women
      singles and doubles, and mixed doubles. Our team competes towards a
      National Championship in April,
      so we play almost all year.
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
    <h3>CAL POLY TENNIS CLUB</h3>
    <SportsInfo />
  </div>
);

export default TennisPage;
