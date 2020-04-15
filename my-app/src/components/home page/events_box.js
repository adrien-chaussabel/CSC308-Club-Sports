import React from 'react';
import '../../app.css';

class EventBox extends React.Component{
    //Class that is going to render each event.
    render() {
        return <div className="event">
            <div class="eventbox">
              <h1>UPCOMING EVENT</h1>
            </div>
            <div class="eventbox2">
            <img src='/calendar.png' alt='test'/>
            </div>
            <div class="eventbox3">
              <h2>Feb 1st</h2>
              <h3>MEN'S SOCCER</h3>
              <h2>at UCLA 2:00pm</h2>
              <a href="#details">see details</a>
              <h5>______________________________________________</h5>
              <h2>Feb 6th</h2>
              <h3>DISTANCE CLUB</h3>
              <h2>BBQ Fundraiser on Dexter Lawn
                11:00am - 1:30pm
              </h2>
              <a href="#details">see details</a>
              <h5>______________________________________________</h5>
              <h2>Feb 8th</h2>
              <h3>WOMEN'S RUGBY</h3>
              <h2>at Cal Poly 12:00pm</h2>
              <h3>SWIM CLUB</h3>
              <h2>at Stanford University 1:00pm</h2>
              <a href="#details">see details</a>
              <h5>______________________________________________</h5>
            </div>
        
        </div>
    }
}

export default EventBox;