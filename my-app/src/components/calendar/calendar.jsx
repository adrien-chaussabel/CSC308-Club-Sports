import React from 'react';
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const styles = {
  marginTop: '50px',
  marginLeft: '230px',
  maxWidth: '900px',
};

const CalendarPage = () => (
  <div style={styles} className="Calendar1">
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, timeGridPlugin]}
      displayEventTime="true"
      header={{ right: 'dayGridMonth,timeGridWeek', left: 'today prev,next', center: 'title' }}
      events={[{
        title: 'MENS SOCCER-fundraiser on Dexter lawn',
        start: '2020-06-09T14:30:00',
        allDay: false,
        color: '#2D6041',
      },
      {
        title: 'WOMENS RUGBY', start: '2020-06-14T17:30:00', allDay: false, color: '#2D6041',
      },
      {
        title: 'DISTANCE', start: '2020-06-14T18:50:00', allDay: false, color: '#2D6041',
      }]}
    />
  </div>
);

export default CalendarPage;
