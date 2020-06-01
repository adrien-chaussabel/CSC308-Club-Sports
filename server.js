/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const userRoute = require('./routes/users');
const teamRoute = require('./routes/teams');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoute);
app.use('/teams', teamRoute);

const selectAllUsers = 'SELECT * FROM users';
const selectAllEvents = 'SELECT * FROM events';
const selectTopEvents = `SELECT id, team_name, DATE_FORMAT(date, "%M %d") as date, 
TIME_FORMAT(time, "%h:%i %p")as time, location, description 
FROM events
ORDER BY YEAR(date) ASC, MONTH(date) ASC, DAY(date) ASC
LIMIT 4;`;

app.use(express.static(path.join(__dirname, 'my-app/build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-app/build', 'index.html'));
});

/* connection with Google server */
const con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

con.connect((err) => {
  if (err) {
    return err;
  }
  return 'connected';
});

app.get('/', (req, res) => {
  res.send('hello from the server');
});

/* shows all events in events table */
app.get('/eventsBox', (req, res) => {
  con.query(selectTopEvents, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
});

/* shows all events in events table */
app.get('/events', (req, res) => {
  con.query(selectAllEvents, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
});

/* adds user to users table */
app.get('/users/add', (req, res) => {
  const {
    firstname, lastname, email, username, password, type,
  } = req.query;
  const body = {
    firstname, lastname, email, username, password, type,
  };
  const insertUser = 'INSERT INTO users SET ?';
  con.query(insertUser, body, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.sendStatus(200);
  });
});

app.post('/postEvent', (req, res) => {
  // POST request for new Event.
  const {
    // eslint-disable-next-line camelcase
    team_name, team_id, date, time, location, description,
  } = req.query;
  const body = {
    team_name, team_id, date, time, location, description,
  };
  const sqlQuery = 'INSERT INTO events SET ?';
  con.query(sqlQuery, body, (err) => {
    if (err) {
      return res.sendStatus(400);
    }
    return res.sendStatus(201);
  });
});

const port = 5000;

app.listen(process.env.PORT || port, () => console.log(`Server started on port ${port}`));
