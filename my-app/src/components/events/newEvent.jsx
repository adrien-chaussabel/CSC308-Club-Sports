/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import './newEvent.css';
import { Link } from 'react-router-dom';

/* the events table holds team name, date, time, location, description */
class NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      event: {
        team_name: '',
        date: '',
        time: '',
        location: '',
        description: '',
      },
      selectedTeam: '',
    };
  }

  componentDidMount() {
    this.getEvents();
    this.getTeams();
  }

  getEvents() {
    fetch('/events')
      .then((response) => response.json())
      .then((response) => this.setState({ users: response.data }))
      .catch((err) => console.error(err));
  }

  getTeams() {
    fetch('/teams')
      .then((response) => response.json())
      .then((response) => this.setState({ users: response.data }))
      .catch((err) => console.error(err));
  }

  addEvent() {
    const { event } = this.state;
    fetch(`/events/add?team_name=${event.team_name}
    &date= ${event.date}
    &time=${event.time}
    &location=${event.location}
    &description=${event.description}`)
      .then((response) => response.json())
      .then(this.getUsers)
      .catch((err) => console.error(err));
  }

  render() {
    const { event } = this.state;
    return (
      <div className="event-page">
        <div className="form">
          <select
            value=""
            onChange={(e) => this.setState({ selectedTeam: e.target.value })}
          >
            <option value={event.team_name}>
              {event.team_name}
            </option>
            <option value="Swim">Swim</option>
            <option value="Triathlon">Triathlon</option>
            <option value="Tennis">Tennis</option>
            <option value="Women's Rugby">Women&apos;s Rugby</option>
          </select>
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => this.setState({ event: { ...event, date: e.target.value } })}
          />
          <input
            type="time"
            placeholder="Time"
            onChange={(e) => this.setState({ event: { ...event, time: e.target.value } })}
          />
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => this.setState({ event: { ...event, location: e.target.value } })}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => this.setState({ event: { ...event, description: e.target.value } })}
          />
          <button
            type="submit"
            onClick={this.addEvent}
          >
            Add Event
          </button>
          <p className="message">
            {' '}
            <Link to="/">Cancel</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default NewEvent;
