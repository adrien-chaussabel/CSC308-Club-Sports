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
import CalendarPage from '../calendar/calendar';
import FormsPage from '../forms/forms';
import FAQPage from './faq';
// need to finish connecting

const SportsPage = () => (
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

      <h1>SWIM CLUB</h1>
      <Link to="/faq">FAQ</Link>
      <Link to="/forms">FORMS</Link>
      <Link to="/forms">CONTACT</Link>
      <Link to="/calendar">SCHEDULE</Link>
      <Link to="/forms">RESULTS</Link>
    </div>
    <Switch>
      <Route exact path="/" component={SportsPage} />
      <Route exact path="/calendar" component={CalendarPage} />
      <Route exact path="/forms" component={FormsPage} />
      <Route eaxct path="/faq" component={FAQPage} />
    </Switch>
  </Router>
);

class SportsInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ' ',
      gender: ' ',
      email: ' ',
      facebook: ' ',
      instagram: ' ',
      website: ' ',
      about: ' ',
      sports: [],
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    // const {name} = props.location.state
    // console.log(name)
    const name = this.state.gender;
    const { gender } = this.state;
    fetch(`http://localhost:5000/teams/${name}/${gender}`)
      .then((response) => response.json())
      .then((response) => this.setState({ sports: response.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { sports } = this.state;
    return (
      <div className="sportsinfo">
        { sports.map(() => (
          <h1>name</h1>
        ))}
        <h2>
          Join one of the best collegiate swim clubs in the West Coast! Cal Poly Swim Club
          has over 100 members and is constantly growing. We offer high quality professional
          coaching that can reach swimmers of all ability. The goal of our team is to provide
          every member an opportunity to improve their swimming skills and achieve success
          at his or her level of ability, from beginner to international competitor.
          Come by and check us out! We are a non profit club, that is run by its elected
          Board of Directors which meets each month. All members are welcome at each meeting
          and encouraged to be involved in team activities and fundraisers.
        </h2>
        <img src="/web.png" alt="web icon" />
        <img src="/instagram.png" alt="instagram" />
        <img src="/facebook.png" alt="facebook" />
      </div>
    );
  }
}


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
    <img src="/button.png" alt="button" />
    <button type="button" className="dropbtn">
      {' '}
      FOLLOW
    </button>
  </div>
);

const SportsTitle = () => (
  <div className="sportstitle">
    <h3>CAL POLY SWIM CLUB</h3>
    <SportsInfo />
  </div>
);

export default SportsPage;
