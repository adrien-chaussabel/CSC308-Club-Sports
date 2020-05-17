import React from 'react';
import './calendar.css'; 
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';

let styles = {
    marginTop: '50px',
    marginLeft: '65px',
    maxWidth: '900px',
  };
  


class CalendarPage extends React.Component {
    render() {
        return <div style={styles} className = "Calendar1">
         <FullCalendar defaultView="dayGridMonth" 
         plugins={[ dayGridPlugin ,timeGridPlugin]} 
         displayEventTime = "true"
         header = { {right: 'dayGridMonth,timeGridWeek',left: 'today prev,next',center: 'title'} }
         events={[
            { title: 'MENS SOCCER-fundraiser on lawn',  start:  '2020-05-09T14:30:00' , 
            allDay: false , color  : '#2D6041'},
            { title: 'WOMENS RUGBY',  start:  '2020-05-14T17:30:00' , allDay: false,color  : '#2D6041'},
            { title: 'DISTANCE',  start:  '2020-05-14T18:50:00' , allDay: false, color  : '#2D6041'},
          ]}
         
         
         
         />
           
 
        </div>
    }

}





export default CalendarPage;