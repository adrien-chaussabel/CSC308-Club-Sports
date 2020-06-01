import React from 'react';
import '../../app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SportsPage from '../sports/sports';

const SportsDropDown = () => (
  <Router>
    <div className="dropdown">
      <button type="button" className="dropbtn">
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

export default SportsDropDown;
