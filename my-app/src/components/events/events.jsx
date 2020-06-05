import React, { Component } from 'react';
import './events.css';

/* the events table holds team_name (foreign key), date, time, location, description of event
and a foreign key reference to the team id */
class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    fetch('events/eventsBox')
      .then((response) => response.json())
      .then((response) => this.setState({ events: response.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { events } = this.state;
    return (
      <div className="event">
        <div className="eventbox">
          <h1>UPCOMING EVENTS</h1>
        </div>
        <div className="eventbox2">
          <img src="/calendar.png" alt="test" />
        </div>
        <div className="eventbox3">
          { events.map((e) => (
            <h2 key={e.id}>
              { e.date }
              {' '}
              <h3>{e.team_name}</h3>
              {e.location}
              {' '}
              {e.time}
              {' '}
              <a href="#details">see details</a>
              <h5>___________________________________________</h5>
            </h2>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
