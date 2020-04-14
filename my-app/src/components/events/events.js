import React, { Component } from 'react';
import './events.css';

/* the events table holds sport, date, time, location, and description of event*/
class Events extends Component{
    constructor(){
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        this.getEvents();
      }
      
      getEvents = _ => {
        fetch('/events')
        .then(response => response.json())
        .then(response => this.setState({events: response.data}))
        .catch(err => console.error(err));
      }
    render(){
        const {events} = this.state;
        return (
            <div className='event'>
                <div className = "eventbox">
                    <h1>UPCOMING EVENTS</h1>
                </div>
                <div className = "eventbox2">
                    <img src='/calendar.png' alt='test'/>
                </div>
                <div className = "eventbox3">
                
                {events.map(events =>
                         <h2 key={events.id}>{events.date} <h3>{events.sport}</h3> 
                         {events.location} at {events.time} <a href="#details">see details</a> 
                         <h5>______________________________________________</h5></h2>
                    )}
                
                
                </div>
            </div>
        );
    }
}

export default Events;