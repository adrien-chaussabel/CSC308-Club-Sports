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

const HockeyPage = () => (
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
      <h1>HOCKEY CLUB</h1>
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
    <h1>ABOUT HOCKEY CLUB</h1>
    <h2>
    Cal Poly Field Hockey competes as a member of the Western Collegiate Field Hockey Conference, 
    competing against UC Santa Barbara, UC Davis, Chico State, Santa Clara, Claremont, UC San Diego, 
    and USC. Cal Poly took the WCFHC Conference Title in 2004, 2005, 2006, and 2008 and took second place in 2007 
    and 2009. Cal Poly took first place at Cal Cup, an international field hockey tournament, in 2008 and 
    second place in 2009. In 2010, Cal Poly took the National title in Santa Barbara, finishing the season 
    with an undefeated record. The team continues to excel and enjoys playing field hockey whenever possible.
    </h2>
    <img src="web.jpg" alt="web icon" />
    <img src="instagram.jpg" alt="asdf" />
    <img src="facebook.jpg" alt="asdf" />
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
    <h3>CAL POLY HOCKEY CLUB</h3>
    <SportsInfo />
  </div>
);

export default HockeyPage;