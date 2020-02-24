import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';

class DivTest extends React.Component{
    render() {
        return <div className="menu"> 
            <a class="active" href="#home">Login</a>
            <a href="#news">Forms</a>
            <a href="#contact">Sports</a>
            <a href="#about">Calendar</a>
            <a href="#home">Home</a>
            <h1> Club Sports Hub </h1>
        </div>; 
    }
}

class EventBox extends React.Component{
    //Class that is going to render each event.
    render() {
        return <div className="event">
            <h2>{this.props.date}</h2>
            <h1>{this.props.club}</h1>
            <h2>{this.props.location}</h2>
            <h2>{this.props.time}</h2>
            <h3>see details</h3>
        </div>
    }
}

class Together extends React.Component{
    //Combines my Event class and the DivTest Class.
    render(){
        return <div>
            <DivTest></DivTest>
            <EventBox 
              date="Feb 1st" 
              club="MENS SOCCER"
              location="UCLA"
              time="2:00p.m"></EventBox>
            <EventBox
               date="Feb 6th"
               club="DISTANCE CLUB"
               location="BBQ Fundraiser on Dexter Lawn"
               time="11:00a.m"></EventBox>
            <EventBox
               date="Feb 8th"
               club="WOMENS RUGBY"
               location="CalPoly"
               time="12:00p.m"></EventBox>
            <EventBox
              date="Feb 12th"
              club="SWIM CLUB"
              location="Stanford University"
              time="1:00p.m"></EventBox>
        </div>

    }
}
  
ReactDOM.render(<Together />, document.getElementById('root'));


/*
var element = React.createElement('h1', {className:'greeting'}, 'Hello word!');


ReactDOM.render(element, document.getElementById('root'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
