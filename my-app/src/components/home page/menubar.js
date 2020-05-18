/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable max-classes-per-file */
import React from 'react';
import '../../app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Register from '../register/register';
import Login from '../login/login';
import Events from './events';
import FormsPage from '../forms/forms';
import SportsPage from '../sports/sports';
import Gallery from './carouselHome';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Events />
        <Title />
        <Info />
        <Gallery />
      </div>
    );
  }
}


/* TODO: add link to sports page on menu bar */
class Menu extends React.Component {
  render() {
    return (
      <Router>
        <div className="menu">
          <img src="/CalPolyLogo.png" alt="Cal Poly Logo" />
          <h1>CLUB SPORTS HUB</h1>
          <Link to="/login">LOGIN</Link>
          <Link to="/forms">FORMS</Link>
          <SportsDropDown />
          <Link to="calendar">CALENDAR</Link>
          <Link to="/">HOME</Link>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/forms" component={FormsPage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

class SportsDropDown extends React.Component {
  render() {
    return (
      <Router>
        <div className="dropdown">
          <button className="dropbtn">
            SPORTS
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>MEN&apos;S</h3>
                <h4>__________</h4>
                <b href="#">BASKETBALL</b>
                <b href="#">LACROSSE</b>
                <b href="#">HOCKEY</b>
                <b href="#">RUGBY</b>
                <b href="#">SOCCER</b>
                <b href="#">ULTIMATE</b>
                <b href="#">VOLLEYBALL</b>
                <b href="#">WATER POLO</b>
              </div>
              <div className="column">
                <h3>WOMEN&apos;S </h3>
                <h4>__________</h4>
                <b href="#">BASKETBALL</b>
                <b href="#">RUGBY</b>
                <b href="#">SOCCER</b>
                <b href="#">ULTIMATE</b>
                <b href="#">VOLLEYBALL</b>
                <b href="#">WATER POLO</b>
              </div>
              <div className="column">
                <h3>COED</h3>
                <h4>__________</h4>
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
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/sports" component={SportsPage} />
        </Switch>
      </Router>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h3>CAL POLY CLUB SPORTS</h3>
      </div>
    );
  }
}

/* class PlaceHolderImage extends React.Component {
  render() {
    return (
      <div className="placeholderImage">
        <img src="/PlaceHolderImage.jpg" alt="Placeholder" />
      </div>
    );
  }
} */

class Info extends React.Component {
  // TODO: Make text wrap instead of having breaks
  render() {
    return (
      <div className="info">
        <div id="rectangle" />
        <h1>TEAM OF THE WEEK</h1>
        <h2>
          WOMEN&apos;S
          {' '}
          <br />
          RUGBY
        </h2>
        <h3>
          Follow them and
          <br />
          come to their home
          <br />
          game on Saturday
          <br />
          February 8th!
        </h3>
        <img src="/PlaceHolderImage.jpg" alt="Team of the week" />
        <a href="https://instagram.com">
          <img src="/instagram.png" className="instagramIcon" alt="Instagram" />
        </a>
      </div>
    );
  }
}

export default Menu;
