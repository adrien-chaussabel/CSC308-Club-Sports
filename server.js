/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAllUsers = 'SELECT * FROM users';
const selectTeamNames = 'SELECT name FROM team';
const selectAllEvents = 'SELECT * FROM events';
const selectTopEvents = `SELECT id, team_name, DATE_FORMAT(date, "%M %d") as date, 
TIME_FORMAT(time, "%h:%i %p")as time, location, description 
FROM events
ORDER BY YEAR(date) ASC, MONTH(date) ASC, DAY(date) ASC
LIMIT 4;`;

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

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from the server');
});

/* shows all users in users table */
app.get('/users', (req, res) => {
  con.query(selectAllUsers, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
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
    return res.send('successfully added user');
  });
});

/* adds event to events table */
app.get('/events/add', (req, res) => {
  const {
    teamName, date, time, location, description,
  } = req.query;
  const body = {
    teamName, date, time, location, description,
  };
  const insertEvent = 'INSERT INTO events SET ?';
  con.query(insertEvent, body, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.send('successfully added event');
  });
});

/* selects team names */
app.get('/teams', (req, res) => {
  con.query(selectTeamNames, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
