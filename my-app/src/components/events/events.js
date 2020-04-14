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
            
                <h1>Events</h1>
                <ul>
                {events.map(events =>
                        <li key={events.id}>{events.sport} {events.description} {events.time} {events.location}</li>   
                    )}
                </ul>
            </div>
        );
    }
}

export default Events;