import React, { Component } from 'react';
import './events.css';

class Events extends Component{
    constructor(){
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        fetch('/api/events')
            .then(res => res.json())
            .then(events => this.setState({events}, () => console.log('Events fetched...',
            events)));
    }

    render(){
        return (
            <div className='event'>
                <h1>Events</h1>
                <ul>
                    {this.state.events.map(events =>
                        <li key={events.id}>{events.sport} | {events.eventName}</li>    
                    )}
                </ul>
            </div>
        );
    }
}

export default Events;