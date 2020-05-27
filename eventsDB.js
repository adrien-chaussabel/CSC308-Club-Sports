/* eslint-disable no-console */
// Code for the events Database, currently hosted on Shah's/Sam's local machine.
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const readRouter = express.Router();
const writeRouter = express.Router();
const updateRouter = express.Router();
const deleteRouter = express.Router();
const port = process.env.PORT || '8080';

app.use(bodyParser.json());
app.use('/viewevents', readRouter);
app.use('/postevents', writeRouter);
app.use('/updateevent', updateRouter);
app.use('/deleteevent', deleteRouter);

// Creating Connection to DataBase.
const mySqlConnection = mysql.createConnection(
  {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    multipleStatements: true,
  },
);

// Connecting the DataBase.
mySqlConnection.connect((err) => {
  if (err) {
    console.log('Error connecting to database.');
  } else {
    console.log('No Error in connecting to database');
  }
});

// Routers.
// Handling GET Request.
readRouter.get('/', (req, res) => {
  const sqlQuery = 'SELECT * from events';
  mySqlConnection.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log('Error in GET request to events database.');
      return;
    }
    res.send(rows);
  });
});

readRouter.get('/eventsColumn', (req, res) => {
  // GET request for events column.
  // Returns the 4 recent events.
  // Returns row in the case where number of events is less than 4.
  const sqlQuery = 'SELECT * from events';
  mySqlConnection.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log('Error in GET request to events database.');
      return;
    }
    if (rows.length < 4) {
      res.send(rows);
    }
    const returnArray = [];
    for (let i = rows.length - 5; i < rows.length; i += 1) {
      returnArray.push(rows[i]);
    }
    res.send(returnArray);
  });
});

// Handling POST Request.
writeRouter.post('/postEvent', (res, req) => {
  // POST request for new Event.
  const eventSport = req.body.sport;
  const eventDate = req.body.date;
  const eventTime = req.body.time;
  const eventLocation = req.body.location;
  const eventDescription = req.body.description;
  const sqlQuery = `INSERT INTO events (sport, date, time, location, description)
                      values ("${eventSport}", ${eventDate}, ${eventTime}, "${eventLocation}", 
                       "${eventDescription}");`;

  mySqlConnection.query(sqlQuery, (err) => {
    if (err) {
      console.log('Error in POST request to events database.');
      res.sendStatus(500);
      return;
    }
    console.log('POST request successfull.');
    res.sendStatus(201);
  });
});

updateRouter.post('/updateEvent', (res, req) => {
  // POST request for updating existing Event.
  const eventID = req.body.id;
  const eventSport = req.body.sport;
  const eventDate = req.body.date;
  const eventTime = req.body.time;
  const eventLocation = req.body.location;
  const eventDescription = req.body.description;
  const sqlQuery = `UPDATE events SET sport = "${eventSport}", date = ${eventDate}, 
                      time = ${eventTime}, location = "${eventLocation}",
                      description = "${eventDescription}" WHERE id = ${eventID};`;

  mySqlConnection.query(sqlQuery, (err) => {
    if (err) {
      console.log('Error in POST request to events database.');
      res.sendStatus(500);
      return;
    }
    console.log('POST request successfull.');
    res.sendStatus(201);
  });
});

// Handling DELETE request.
deleteRouter.delete('/deleteEvent', (res, req) => {
  // DELETE request that deletes events based on event id.
  const eventID = req.body.id;
  const sqlQuery = `DELETE FROM events WHERE id = ${eventID};`;

  mySqlConnection.query(sqlQuery, (err) => {
    if (err) {
      console.log('Error in processing DELETE request.');
      res.sendStatus(500);
      return;
    }

    console.log('DELTE request Successfull.');
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
