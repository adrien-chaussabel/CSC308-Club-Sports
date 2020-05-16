import React from 'react';
import './newEvent.css'; 
import {Link} from "react-router-dom";

/* the events table holds team name, date, time, location, description */
class NewEvent extends React.Component {
  state = {
    event: {
      team_name: '',
      date: '',
      time: '',
      location: '',
      description: ''
    }
}

componentDidMount(){
  this.getEvents();
}

getEvents = _ => {
  fetch('/events')
  .then(response => response.json())
  .then(response => this.setState({users: response.data}))
  .catch(err => console.error(err));
}

addEvent = _ => {
  const {event} = this.state;
  fetch(`/events/add?team_name=${event.team_name}
  &date=${event.date}
  &time=${event.time}
  &location=${event.location}
  &description=${event.description}`)
  .then(response => response.json())
  .then(this.getUsers)
  .catch(err => console.error(err));

  this.props.history.push(`/`);
  alert("Event " + event.description + " was added");
}

render(){
    const {event} = this.state;
    return (
        <div className="event-page">
            <h6> New Event</h6>
            <div className="form">
                <input 
                type="text"
                placeholder="Team" 
                onChange={e => this.setState({event: {...event, team_name: e.target.value }})} 
                />
                <input 
                type="date"
                placeholder="Date" 
                onChange={e => this.setState({event: {...event, date: e.target.value }})} 
                />
                <input 
                type="time"
                placeholder="Time" 
                onChange={e => this.setState({event: {...event, time: e.target.value }})} 
                />
                <input 
                type="text"
                placeholder="Location"
                onChange={e => this.setState({event: {...event, location: e.target.value }})} 
                />
                <input 
                type="text"
                placeholder="Description"
                onChange={e => this.setState({event: {...event, description: e.target.value }})} 
                />
        
                <button onClick={this.addEvent}>Add Event</button>
                <p className="message"> <Link to='/'>Cancel</Link></p>
            </div>
        </div>
    );
  }
  }
  
  export default NewEvent