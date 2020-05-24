import React from 'react';
import './sports.css'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import App from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from './button.png';
import instagram from './instagram.png'
import web from './web.png'
import facebook from './facebook.png'
import ResultsPage from './results';
import FAQpage from './faq';
import FormsPage from './forms';
import SchedulePage from './schedule';
import ContactPage from './contact';


class Menu2 extends React.Component {
    render() {
        return <Router>
            <div className="menu2">
            
                <h1>SWIM CLUB</h1>
                <Link to="/faq">FAQ</Link>
                <Link to="/forms">FORMS</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/schedule">SCHEDULE</Link>
                <Link to="/results">RESULTS</Link>
            </div>
            <Switch>
                <Route exact path="/" component={SportsMain}/>
                <Route path="/results" component={ResultsPage}/> 
                <Route path="/schedule" component={SchedulePage}/> 
                <Route path="/contact" component={ContactPage}/> 
                <Route path="/forms" component={FormsPage}/> 
                <Route path="/faq" component={FAQpage}/>               
            </Switch>
        </Router>
    }

}

class SportsPage extends React.Component {
    render() {
        return <div>
            <SportsMain/>
            <SportsTitle/>
            <Follow/>
            <SportsInfoBottom/>
            <App />
        </div>
    }
}

class SportsInfo extends React.Component {
    render() {
        return <div className="sportsinfo">
            <h1>ABOUT SWIM CLUB</h1>
            <h2>Join one of the best collegiate swim clubs in the West Coast! Cal Poly Swim Club 
                has over 100 members and is constantly growing. We offer high quality professional 
                coaching that can reach swimmers of all ability. The goal of our team is to provide 
                every member an opportunity to improve their swimming skills and achieve success 
                at his or her level of ability, from beginner to international competitor. 
                Come by and check us out! We are a non profit club, that is run by its elected 
                Board of Directors which meets each month. All members are welcome at each meeting 
                and encouraged to be involved in team activities and fundraisers.
            </h2>
           
            <img src={web} alt='web.jpg'></img>
            <img src={instagram} alt='instagram.jpg'></img>
            <img src={facebook} alt='facebook.jpg'></img>
        </div>
    }
}

class SportsInfoBottom extends React.Component {
    render() {
        return <div className="sportsinfobottom">
            <h1>UCLA Feb 9th</h1>
            <a href="#results">see results</a>
            <h2>We brought 34 swimmers to UCLA last weekend and broke 3 swim club records!</h2>
            <h1>UCSD Jan 24th</h1>
            <a href="#results">see results</a>
            <h2>Swim Club brought 46 swimmers to UCSD on January 24th </h2>
        </div>
    }
}

class Follow extends React.Component {

    render() {return <div className="follow">
        <img src={logo} alt="button"></img>
        <button class="dropbtn"> FOLLOW
        </button>
        </div>
    }
}

class SportsTitle extends React.Component {
    render() {
        return <div className="sportstitle">
            <h3>CAL POLY SWIM CLUB</h3> 
            <SportsInfo/>
        </div>
    }
}

class SportsMain extends React.Component {
    render() {
        return <div>
            <Menu2/>
        </div>
    }
}
export default SportsPage;